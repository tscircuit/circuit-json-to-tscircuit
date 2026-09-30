import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import {
  convertCircuitJsonToPcbSvg,
  convertCircuitJsonToSchematicSvg,
} from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

interface TiEvmRoundtripResult {
  generatedTscircuit: string
  pcbComparisonSvg: string
  schematicComparisonSvg: string
}

export async function createTiEvmRoundtrip({
  componentName,
  fixtureName,
}: {
  componentName: string
  fixtureName: string
}): Promise<TiEvmRoundtripResult> {
  const compressedFixture = await readFile(
    join(import.meta.dir, "ti-evms", `${fixtureName}.circuit.json.gz`),
  )
  const sourceCircuitJson = JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName,
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson

  const sourcePcbSvg = convertCircuitJsonToPcbSvg(sourceCircuitJson, {
    matchBoardAspectRatio: true,
  })
  const renderedPcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson, {
    matchBoardAspectRatio: true,
  })
  const sourceSchematicSvg = convertCircuitJsonToSchematicSvg(sourceCircuitJson)
  const renderedSchematicSvg =
    convertCircuitJsonToSchematicSvg(renderedCircuitJson)

  return {
    generatedTscircuit,
    pcbComparisonSvg: createComparisonSvg({
      fixtureName,
      kind: "PCB",
      renderedSvg: renderedPcbSvg,
      sourceSvg: sourcePcbSvg,
    }),
    schematicComparisonSvg: createComparisonSvg({
      fixtureName,
      kind: "schematic",
      renderedSvg: renderedSchematicSvg,
      sourceSvg: sourceSchematicSvg,
    }),
  }
}

function createComparisonSvg({
  fixtureName,
  kind,
  renderedSvg,
  sourceSvg,
}: {
  fixtureName: string
  kind: "PCB" | "schematic"
  renderedSvg: string
  sourceSvg: string
}): string {
  const comparisonSvg = stackSvgsHorizontally([sourceSvg, renderedSvg], {
    gap: 24,
    normalizeSize: true,
    targetSize: 800,
    rootAttributes: {
      "aria-label": `${fixtureName} ${kind}: source Circuit JSON on left, generated tscircuit render on right`,
      role: "img",
    },
  })

  return comparisonSvg.replace(/[\t ]+$/gm, "")
}
