import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("declares board nets in source trace routing order", () => {
  const source: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_second",
      name: "SECOND",
      member_source_group_ids: [],
    },
    {
      type: "source_net",
      source_net_id: "source_net_first",
      name: "FIRST",
      member_source_group_ids: [],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_first",
      connected_source_port_ids: [],
      connected_source_net_ids: ["source_net_first"],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_second",
      connected_source_port_ids: [],
      connected_source_net_ids: ["source_net_second"],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
  ]

  const generated = convertCircuitJsonToTscircuit(source, {
    componentName: "OrderedBoard",
  })

  expect(generated.indexOf('<net name={"FIRST"}')).toBeLessThan(
    generated.indexOf('<net name={"SECOND"}'),
  )
})
