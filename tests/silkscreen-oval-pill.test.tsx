import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

test("preserves silkscreen oval and pill outlines", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "SilkscreenShapesBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedPaths = renderedCircuitJson.filter(
    (element) => element.type === "pcb_silkscreen_path",
  )

  expect(renderedPaths).toHaveLength(2)
  expect(renderedPaths.map((path) => path.layer).sort()).toEqual([
    "bottom",
    "top",
  ])
  expect(renderedPaths.every((path) => path.route.length >= 33)).toBe(true)
  expect(renderedPaths.every((path) => path.stroke_width === 0.1)).toBe(true)

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
          "Silkscreen oval and pill source on left, generated tscircuit render on right",
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
    height: 8,
    thickness: 1.6,
    num_layers: 2,
    material: "fr4",
  },
  {
    type: "pcb_silkscreen_oval",
    pcb_silkscreen_oval_id: "pcb_silkscreen_oval_0",
    pcb_component_id: "pcb_component_0",
    center: { x: -2.5, y: 0 },
    radius_x: 1.5,
    radius_y: 0.75,
    ccw_rotation: 25,
    layer: "top",
  },
  {
    type: "pcb_silkscreen_pill",
    pcb_silkscreen_pill_id: "pcb_silkscreen_pill_0",
    pcb_component_id: "pcb_component_0",
    center: { x: 2.5, y: 0 },
    width: 3,
    height: 1.5,
    layer: "bottom",
  },
]
