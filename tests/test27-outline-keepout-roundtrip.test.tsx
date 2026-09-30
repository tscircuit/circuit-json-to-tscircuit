import { expect, test } from "bun:test"
import type { AnyCircuitElement, PCBKeepout } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceCircuitJson: AnyCircuitElement[] = [
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_source",
    center: { x: 10, y: 20 },
    width: 20,
    height: 12,
    thickness: 1.6,
    material: "fr4",
    num_layers: 4,
  },
  {
    type: "pcb_keepout",
    pcb_keepout_id: "pcb_keepout_outline",
    shape: "outline",
    outline: [
      { x: 7, y: 17 },
      { x: 13, y: 17 },
      { x: 13, y: 23 },
      { x: 7, y: 23 },
      { x: 7, y: 17 },
    ],
    stroke_width: 0.8,
    layers: ["top", "inner1"],
    allow_traces: true,
    allow_placements: false,
    warning_only: true,
    description: "Imported outline keepout",
  },
]

test("preserves outline PCB keepouts", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedOutlineKeepout = renderedCircuitJson.find(
    (element): element is PCBKeepout =>
      element.type === "pcb_keepout" && element.shape === "outline",
  )

  expect(generatedTscircuit).toContain('<keepout shape="outline"')
  expect(renderedOutlineKeepout).toMatchObject({
    allow_placements: false,
    allow_traces: true,
    description: "Imported outline keepout",
    layers: ["top", "inner1"],
    outline: [
      { x: 7, y: 17 },
      { x: 13, y: 17 },
      { x: 13, y: 23 },
      { x: 7, y: 23 },
      { x: 7, y: 17 },
    ],
    shape: "outline",
    stroke_width: 0.8,
    warning_only: true,
  })

  const pcbComparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    { gap: 24, normalizeSize: true, targetSize: 600 },
  )
  await expect(pcbComparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})
