import { expect, test } from "bun:test"
import type { CircuitJson, PcbTrace } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves routed PCB trace geometry", async () => {
  const route: PcbTrace["route"] = [
    { route_type: "wire", x: -4, y: 1, width: 0.3, layer: "top" },
    { route_type: "wire", x: 4, y: 1, width: 0.3, layer: "top" },
  ]
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
      type: "pcb_trace",
      pcb_trace_id: "pcb_trace_0",
      route,
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "TraceBoard",
  })
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const trace = renderedCircuitJson.find(
    (element) => element.type === "pcb_trace",
  )

  expect(trace).toMatchObject({ route })
})
