import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("omits an unrouted singleton net from generated board TSX", () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_lmg_r15_3",
      name: "NetR15_3",
      member_source_group_ids: [],
    },
    {
      type: "source_component",
      source_component_id: "source_component_r15",
      ftype: "simple_chip",
      name: "R15",
    },
    {
      type: "source_port",
      source_port_id: "source_port_r15_3",
      source_component_id: "source_component_r15",
      name: "pin3",
      pin_number: 3,
      port_hints: ["3", "pin3"],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_lmg_r15_3",
      connected_source_port_ids: ["source_port_r15_3"],
      connected_source_net_ids: ["source_net_lmg_r15_3"],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_lmg",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_r15",
      source_component_id: "source_component_r15",
      center: { x: 0, y: 0 },
      width: 1,
      height: 1,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: true,
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_r15_3",
      source_port_id: "source_port_r15_3",
      pcb_component_id: "pcb_component_r15",
      x: 0,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_r15_3",
      pcb_component_id: "pcb_component_r15",
      pcb_port_id: "pcb_port_r15_3",
      port_hints: ["3"],
      x: 0,
      y: 0,
      layer: "top",
      shape: "rect",
      width: 1,
      height: 1,
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "LmgSingletonNet",
  })

  expect(generatedTsx).not.toContain("NetR15_3")
})
