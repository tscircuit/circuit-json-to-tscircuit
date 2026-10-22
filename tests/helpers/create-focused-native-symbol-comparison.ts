import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { AnyCircuitElement, CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"
import { generateBoardSchematicElements } from "../../lib/generate-board-schematic-tsx"
import {
  getSchematicElementsInsideFocus,
  isSchematicElementInsideFocus,
  type SchematicFocusBounds,
} from "./get-schematic-elements-inside-focus"

const loadTiFixture = async (fixtureName: string): Promise<CircuitJson> => {
  const fixturePath = join(
    import.meta.dir,
    "../fixtures/ti-evms",
    `${fixtureName}.circuit.json.gz`,
  )
  return JSON.parse(
    gunzipSync(await readFile(fixturePath)).toString("utf8"),
  ) as CircuitJson
}

const getFocusedComponentElements = ({
  circuitJson,
  componentName,
}: {
  circuitJson: CircuitJson
  componentName: string
}): {
  elements: AnyCircuitElement[]
  bounds: SchematicFocusBounds
} => {
  const sourceComponent = circuitJson.find(
    (element) =>
      element.type === "source_component" &&
      element.name === componentName &&
      circuitJson.some(
        (candidate) =>
          candidate.type === "schematic_component" &&
          candidate.source_component_id === element.source_component_id,
      ),
  )
  if (sourceComponent?.type !== "source_component") {
    throw new Error(`Missing source component ${componentName}`)
  }

  const schematicComponent = circuitJson.find(
    (element) =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceComponent.source_component_id,
  )
  if (schematicComponent?.type !== "schematic_component") {
    throw new Error(`Missing schematic component ${componentName}`)
  }

  const bounds = {
    center: schematicComponent.center,
    size: schematicComponent.size,
  }
  const elements = circuitJson.filter((element) => {
    const ownedElement = element as {
      source_component_id?: string
      schematic_component_id?: string
    }
    const belongsToComponent =
      ownedElement.source_component_id ===
        sourceComponent.source_component_id ||
      ownedElement.schematic_component_id ===
        schematicComponent.schematic_component_id
    if (!belongsToComponent) return false
    if (element.type !== "schematic_text") return true
    return isSchematicElementInsideFocus({ element, bounds })
  })

  return {
    elements,
    bounds,
  }
}

export const createFocusedNativeSymbolComparison = async ({
  fixtureName,
  componentName,
  description,
}: {
  fixtureName: string
  componentName: string
  description: string
}): Promise<string> => {
  const sourceCircuitJson = await loadTiFixture(fixtureName)
  const schematicElements = generateBoardSchematicElements(sourceCircuitJson)
  const renderedCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board>
        <symbol>${schematicElements.join("\n")}</symbol>
      </board>
    )
  `)) as CircuitJson
  const sourceFocus = getFocusedComponentElements({
    circuitJson: sourceCircuitJson,
    componentName,
  })
  const renderedFocus = getSchematicElementsInsideFocus({
    circuitJson: renderedCircuitJson,
    bounds: sourceFocus.bounds,
  })

  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToSchematicSvg(sourceFocus.elements, {
        width: 480,
        height: 320,
      }),
      convertCircuitJsonToSchematicSvg(renderedFocus, {
        width: 480,
        height: 320,
      }),
    ],
    {
      gap: 24,
      normalizeSize: false,
      rootAttributes: {
        "aria-label": `${description}: source Circuit JSON on left, SVG-generated native symbol on right`,
        role: "img",
      },
    },
  )

  return comparisonSvg.replace(/[\t ]+$/gm, "")
}
