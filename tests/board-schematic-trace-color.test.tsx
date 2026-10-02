import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves the compiled schematic wire color", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      num_layers: 2,
      thickness: 1.6,
      material: "fr4",
    },
    {
      type: "schematic_trace",
      schematic_trace_id: "wire",
      source_trace_id: "trace",
      edges: [{ from: { x: -1, y: 0 }, to: { x: 1, y: 0 } }],
      junctions: [],
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "WireColorBoard",
    }),
  )
  const path = renderedCircuitJson.find(
    (element) => element.type === "schematic_path",
  )

  expect(path).toMatchObject({ stroke_color: "#009600" })
})
