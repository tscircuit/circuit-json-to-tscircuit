import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { createComparisonSvg } from "tests/fixtures/create-ti-evm-roundtrip"
import { runTscircuitCode } from "tscircuit"

const Q2_SOURCE_COMPONENT_ID = "source_component_altium_459"
const Q2_SCHEMATIC_COMPONENT_ID = "schematic_component_altium_459"

const loadTmds62levmSheet13 = async (): Promise<CircuitJson> => {
  const compressedFixture = await readFile(
    join(
      import.meta.dir,
      "../fixtures/ti-evms/tmds62levm-sheet-13.circuit.json.gz",
    ),
  )
  return JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson
}

const getQ2FixtureElements = (sheetCircuitJson: CircuitJson): CircuitJson => {
  const q2SourcePortIds = new Set(
    sheetCircuitJson.flatMap((element) =>
      element.type === "source_port" &&
      element.source_component_id === Q2_SOURCE_COMPONENT_ID
        ? [element.source_port_id]
        : [],
    ),
  )
  return sheetCircuitJson.filter((element) => {
    if (element.type === "source_component") {
      return element.source_component_id === Q2_SOURCE_COMPONENT_ID
    }
    if (element.type === "source_port") {
      return q2SourcePortIds.has(element.source_port_id)
    }
    if (element.type === "source_trace") {
      return element.connected_source_port_ids.some((sourcePortId) =>
        q2SourcePortIds.has(sourcePortId),
      )
    }
    if (element.type === "schematic_component") {
      return element.schematic_component_id === Q2_SCHEMATIC_COMPONENT_ID
    }
    if (element.type === "schematic_port") {
      return element.schematic_component_id === Q2_SCHEMATIC_COMPONENT_ID
    }
    return element.type === "schematic_sheet"
  })
}

test("TMDS62LEVM Q2 keeps rigid standard symbol geometry", async () => {
  const q2CircuitJson = getQ2FixtureElements(await loadTmds62levmSheet13())
  const generatedTscircuit = convertCircuitJsonToTscircuit(q2CircuitJson, {
    componentName: "Tmds62levmSheet13Q2",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedCircle = renderedCircuitJson.find(
    (element) => element.type === "schematic_circle",
  )
  expect(renderedCircle?.radius).toBeCloseTo(0.29)

  const sourcePorts = q2CircuitJson.filter(
    (element) => element.type === "schematic_port",
  )
  const sourceComparisonCircuitJson = q2CircuitJson.filter(
    (element) => element.type !== "schematic_sheet",
  )
  const renderedComparisonCircuitJson = renderedCircuitJson.filter(
    (element) => element.type !== "schematic_sheet",
  )
  const comparisonSvg = createComparisonSvg({
    fixtureName: "TMDS62LEVM sheet 13 Q2",
    kind: "schematic",
    sourceSvg: convertCircuitJsonToSchematicSvg(sourceComparisonCircuitJson),
    renderedSvg: convertCircuitJsonToSchematicSvg([
      ...renderedComparisonCircuitJson,
      ...sourcePorts,
    ]),
  })
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path)
})
