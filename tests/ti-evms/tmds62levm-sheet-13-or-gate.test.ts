import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { generateBoardSchematicElements } from "lib/generate-board-schematic-tsx"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const loadFixture = async (): Promise<CircuitJson> => {
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

test("TMDS62LEVM sheet 13 renders U57 with a native powered OR gate", async () => {
  const sourceCircuitJson = await loadFixture()
  const schematicElements = generateBoardSchematicElements(sourceCircuitJson)
  const generatedTscircuit = `export default () => (
    <board>
      <symbol>${schematicElements.join("\n")}</symbol>
    </board>
  )`
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedComparisonCircuitJson = [
    ...renderedCircuitJson,
    ...sourceCircuitJson.filter((element) => element.type === "schematic_port"),
  ]
  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToSchematicSvg(sourceCircuitJson, {
        width: 900,
        height: 700,
      }),
      convertCircuitJsonToSchematicSvg(renderedComparisonCircuitJson, {
        width: 900,
        height: 700,
      }),
    ],
    {
      gap: 24,
      normalizeSize: false,
      rootAttributes: {
        "aria-label":
          "TMDS62LEVM sheet 13: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )

  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path)
})
