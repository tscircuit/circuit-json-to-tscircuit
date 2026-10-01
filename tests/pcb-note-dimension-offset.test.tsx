import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

test("preserves PCB note dimension offset direction", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "PcbNoteDimensionBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedDimension = renderedCircuitJson.find(
    (element) => element.type === "pcb_note_dimension",
  )
  expect(renderedDimension).toMatchObject({
    from: { x: -3, y: 0 },
    to: { x: 3, y: 0 },
    layer: "bottom",
    offset_distance: 0.25,
    offset_direction: { x: 1, y: -1 },
  })
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_note_path"),
  ).toHaveLength(0)

  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    {
      gap: 24,
      targetSize: 800,
      rootAttributes: {
        "aria-label":
          "PCB note dimension source on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path, "comparison")
})

const sourceCircuitJson: CircuitJson = [
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_0",
    center: { x: 0, y: 0 },
    width: 12,
    height: 10,
    thickness: 1.6,
    num_layers: 2,
    material: "fr4",
  },
  {
    type: "pcb_note_dimension",
    pcb_note_dimension_id: "pcb_note_dimension_0",
    layer: "bottom",
    from: { x: -3, y: 0 },
    to: { x: 3, y: 0 },
    text: "6 mm",
    font: "tscircuit2024",
    font_size: 0.8,
    color: "#facc15",
    arrow_size: 0.5,
    offset_distance: 0.25,
    offset_direction: { x: 1, y: -1 },
  },
]
