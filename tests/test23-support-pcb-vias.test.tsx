import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves PCB via geometry and tenting", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_0",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_via",
      pcb_via_id: "pcb_via_0",
      x: 1,
      y: 2,
      outer_diameter: 1.2,
      hole_diameter: 0.6,
      layers: ["top", "bottom"],
      tented_on_top: true,
      tented_on_bottom: false,
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ViaBoard",
  })
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const via = renderedCircuitJson.find((element) => element.type === "pcb_via")

  expect(via).toMatchObject({
    x: 1,
    y: 2,
    outer_diameter: 1.2,
    hole_diameter: 0.6,
    layers: ["top", "bottom"],
    tented_on_top: true,
    tented_on_bottom: false,
  })
})
