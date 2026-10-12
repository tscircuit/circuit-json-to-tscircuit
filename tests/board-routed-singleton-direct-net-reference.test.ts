import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("keeps a singleton net referenced directly by a PCB trace", () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_signal",
      name: "SIGNAL",
      member_source_group_ids: [],
    },
    {
      type: "source_component",
      source_component_id: "source_component_j1",
      ftype: "simple_chip",
      name: "J1",
    },
    {
      type: "source_port",
      source_port_id: "source_port_j1_1",
      source_component_id: "source_component_j1",
      name: "pin1",
      pin_number: 1,
      port_hints: ["1", "pin1"],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_signal",
      connected_source_port_ids: ["source_port_j1_1"],
      connected_source_net_ids: ["source_net_signal"],
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
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_j1",
      source_component_id: "source_component_j1",
      center: { x: 0, y: 0 },
      width: 1,
      height: 1,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: true,
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_j1_1",
      source_port_id: "source_port_j1_1",
      pcb_component_id: "pcb_component_j1",
      x: 0,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_j1_1",
      pcb_component_id: "pcb_component_j1",
      pcb_port_id: "pcb_port_j1_1",
      port_hints: ["1"],
      x: 0,
      y: 0,
      layer: "top",
      shape: "rect",
      width: 1,
      height: 1,
    },
    {
      type: "pcb_trace",
      pcb_trace_id: "pcb_trace_signal",
      source_trace_id: "source_net_signal",
      route: [
        { route_type: "wire", x: 0, y: 0, width: 0.2, layer: "top" },
        { route_type: "wire", x: 2, y: 0, width: 0.2, layer: "top" },
      ],
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "RoutedSingletonNet",
  })

  expect(generatedTsx).toContain('name={"SIGNAL"}')
})
