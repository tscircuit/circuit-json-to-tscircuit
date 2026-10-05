import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { gunzipSync } from "node:zlib"
import type { CircuitJson, SchematicNetLabel } from "circuit-json"
import { convertNetLabels } from "lib/generate-board-schematic-tsx/convert-net-labels"
import { runTscircuitCode } from "tscircuit"

const fixtureNames = [
  "drv8307evm",
  "lm251772evm-pd",
  "lm5155evm-fly",
  "lmg342x-bb-evm",
]

const sourceCircuitJson = fixtureNames.flatMap((fixtureName) =>
  JSON.parse(
    gunzipSync(
      readFileSync(
        new URL(
          `./fixtures/ti-evms/${fixtureName}.circuit.json.gz`,
          import.meta.url,
        ),
      ),
    ).toString(),
  ),
) as CircuitJson

const symbolicNetLabels = sourceCircuitJson.filter(
  (
    element,
  ): element is SchematicNetLabel & {
    symbol_name: string
  } => element.type === "schematic_net_label" && Boolean(element.symbol_name),
)
const representativeNetLabels = symbolicNetLabels.filter(
  (label, index, labels) =>
    labels.findIndex(
      (candidate) => candidate.symbol_name === label.symbol_name,
    ) === index,
)

test("TI power symbols connect their library port at the net label anchor", async () => {
  expect(
    representativeNetLabels.map((label) => label.symbol_name).sort(),
  ).toEqual([
    "ground_down",
    "ground_left",
    "ground_right",
    "ground_up",
    "vcc_down",
    "vcc_left",
    "vcc_right",
    "vcc_up",
  ])

  for (const label of representativeNetLabels) {
    const generatedElements = convertNetLabels([label])
    const renderedCircuitJson = await runTscircuitCode(
      `export default () => <board><symbol>${generatedElements.join("\n")}</symbol></board>`,
    )
    const renderedPoints = renderedCircuitJson.flatMap((element) =>
      element.type === "schematic_path" ? element.points : [],
    )
    const anchorPosition = label.anchor_position ?? label.center
    expect(
      renderedPoints.some(
        (point) =>
          Math.hypot(point.x - anchorPosition.x, point.y - anchorPosition.y) <
          0.000001,
      ),
    ).toBe(true)
  }
})
