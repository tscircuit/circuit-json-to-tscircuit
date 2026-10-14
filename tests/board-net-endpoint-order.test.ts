import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("preserves source trace endpoint order in generated board nets", () => {
  const source: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_signal",
      name: "SIGNAL",
      member_source_group_ids: [],
    },
    {
      type: "source_component",
      source_component_id: "source_component_first",
      ftype: "simple_chip",
      name: "U1",
    },
    {
      type: "source_component",
      source_component_id: "source_component_second",
      ftype: "simple_chip",
      name: "U2",
    },
    {
      type: "source_port",
      source_port_id: "source_port_first",
      source_component_id: "source_component_first",
      name: "1",
      pin_number: 1,
      port_hints: ["1", "pin1"],
    },
    {
      type: "source_port",
      source_port_id: "source_port_second",
      source_component_id: "source_component_second",
      name: "1",
      pin_number: 1,
      port_hints: ["1", "pin1"],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_signal",
      connected_source_port_ids: ["source_port_second", "source_port_first"],
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
      pcb_component_id: "pcb_component_first",
      source_component_id: "source_component_first",
      center: { x: -2, y: 0 },
      width: 1,
      height: 1,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_second",
      source_component_id: "source_component_second",
      center: { x: 2, y: 0 },
      width: 1,
      height: 1,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_first",
      source_port_id: "source_port_first",
      pcb_component_id: "pcb_component_first",
      x: -2,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_second",
      source_port_id: "source_port_second",
      pcb_component_id: "pcb_component_second",
      x: 2,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_first",
      pcb_component_id: "pcb_component_first",
      pcb_port_id: "pcb_port_first",
      port_hints: ["1"],
      x: -2,
      y: 0,
      layer: "top",
      shape: "rect",
      width: 1,
      height: 1,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_second",
      pcb_component_id: "pcb_component_second",
      pcb_port_id: "pcb_port_second",
      port_hints: ["1"],
      x: 2,
      y: 0,
      layer: "top",
      shape: "rect",
      width: 1,
      height: 1,
    },
  ]

  const generated = convertCircuitJsonToTscircuit(source, {
    componentName: "OrderedBoard",
  })

  expect(generated).toContain(
    '<net name={"SIGNAL"} connectsTo={[".U2 > .imported_pcb_port_2",".U1 > .imported_pcb_port_1"]} />',
  )
  expect(generated).toContain(
    '<trace path={[".U2 > .imported_pcb_port_2",".U1 > .imported_pcb_port_1","net.SIGNAL"]} />',
  )
})
