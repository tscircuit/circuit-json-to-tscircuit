import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { generateBoardSchematicElements } from "lib/generate-board-schematic-tsx"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const loadFixture = async (): Promise<CircuitJson> => {
  const compressedFixture = await readFile(
    join(
      import.meta.dir,
      "../fixtures/ti-evms/tmds62levm-sheet-32-rj45.circuit.json.gz",
    ),
  )
  return JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson
}

test("TMDS62LEVM custom component body stays behind its details", async () => {
  const sourceCircuitJson = (await loadFixture()).filter(
    (element) => element.type !== "schematic_text",
  )
  const schematicElements = generateBoardSchematicElements(sourceCircuitJson)
  const generatedTscircuit = `export default () => (
    <board>
      <symbol>${schematicElements.join("\n")}</symbol>
    </board>
  )`
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  // Ports are not drawn, but reusing their bounds keeps both panels at one scale.
  const renderedComparisonCircuitJson = [
    ...renderedCircuitJson,
    ...sourceCircuitJson.filter((element) => element.type === "schematic_port"),
  ]
  const bodyIndex = renderedCircuitJson.findIndex(
    (element) =>
      element.type === "schematic_path" &&
      element.is_filled &&
      element.fill_color === "#ffffb0",
  )
  const terminalIndex = renderedCircuitJson.findIndex(
    (element) =>
      element.type === "schematic_circle" &&
      element.center.x === 10.085992540406135 &&
      element.center.y === 4.914784500621634,
  )

  expect(bodyIndex).toBeLessThan(terminalIndex)

  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToSchematicSvg(sourceCircuitJson, {
        width: 600,
        height: 1000,
      }),
      convertCircuitJsonToSchematicSvg(renderedComparisonCircuitJson, {
        width: 600,
        height: 1000,
      }),
    ],
    {
      gap: 24,
      normalizeSize: false,
      rootAttributes: {
        "aria-label":
          "TMDS62LEVM RJ45: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path)
})
