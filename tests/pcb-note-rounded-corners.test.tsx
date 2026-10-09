import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

test("preserves rounded PCB note rectangles", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "RoundedPcbNoteBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedNoteRect = renderedCircuitJson.find(
    (element) => element.type === "pcb_note_rect",
  )

  expect(renderedNoteRect).toMatchObject({ corner_radius: 2 })

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
          "rounded PCB note source on left, generated tscircuit render on right",
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
    width: 16,
    height: 10,
    thickness: 1.6,
    num_layers: 2,
    material: "fr4",
  },
  {
    type: "pcb_note_rect",
    pcb_note_rect_id: "pcb_note_rect_rounded",
    center: { x: 0, y: 0 },
    width: 12,
    height: 7,
    layer: "top",
    stroke_width: 0.5,
    corner_radius: 2,
    is_filled: false,
    has_stroke: true,
    color: "#ff00ff",
  },
]
