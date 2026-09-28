import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

// Regression for https://github.com/tscircuit/circuit-json-to-tscircuit/issues/65
test("silkscreen path keeps layer and stroke_width", () => {
  const circuitJson: any[] = [
    {
      type: "pcb_silkscreen_path",
      pcb_silkscreen_path_id: "sp0",
      pcb_component_id: "comp0",
      layer: "bottom",
      stroke_width: 0.25,
      route: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
      ],
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson)

  expect(tscircuit).toContain('layer="bottom"')
  expect(tscircuit).toContain("strokeWidth={0.25}")
  expect(tscircuit).toContain("<silkscreenpath")
})
