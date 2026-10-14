import { expect, test } from "bun:test"
import type { CircuitJson, PcbTrace } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves routable pad hints on component footprints", async () => {
  const sourceCircuitJson: CircuitJson = [
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
      type: "source_component",
      source_component_id: "source_component_r1",
      ftype: "simple_resistor",
      name: "R1",
      resistance: 100,
    },
    {
      type: "source_port",
      source_port_id: "source_port_j1_1",
      source_component_id: "source_component_j1",
      name: "1",
      pin_number: 1,
      port_hints: ["1", "pin1"],
    },
    {
      type: "source_port",
      source_port_id: "source_port_r1_1",
      source_component_id: "source_component_r1",
      name: "1",
      pin_number: 1,
      port_hints: ["1", "pin1"],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_signal",
      connected_source_port_ids: ["source_port_j1_1", "source_port_r1_1"],
      connected_source_net_ids: ["source_net_signal"],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 20,
      height: 10,
      thickness: 1.6,
      material: "fr4",
      num_layers: 2,
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_j1",
      source_component_id: "source_component_j1",
      center: { x: -4, y: 0 },
      width: 2,
      height: 2,
      layer: "top",
      rotation: 90,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_r1",
      source_component_id: "source_component_r1",
      center: { x: 4, y: 0 },
      width: 2,
      height: 2,
      layer: "top",
      rotation: 270,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_j1_1",
      source_port_id: "source_port_j1_1",
      pcb_component_id: "pcb_component_j1",
      x: -4,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_r1_1",
      source_port_id: "source_port_r1_1",
      pcb_component_id: "pcb_component_r1",
      x: 4,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_j1_1",
      pcb_component_id: "pcb_component_j1",
      pcb_port_id: "pcb_port_j1_1",
      port_hints: ["1"],
      x: -4,
      y: 0,
      width: 2,
      height: 1,
      shape: "rotated_rect",
      ccw_rotation: 90,
      layer: "top",
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_r1_1",
      pcb_component_id: "pcb_component_r1",
      pcb_port_id: "pcb_port_r1_1",
      port_hints: ["1"],
      x: 4,
      y: 0,
      width: 2,
      height: 1,
      shape: "rotated_rect",
      ccw_rotation: 270,
      layer: "top",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "RoutedPads",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const pcbTrace = renderedCircuitJson.find(
    (element): element is PcbTrace => element.type === "pcb_trace",
  )

  expect(generatedTsx).toContain('portHints={["imported_pcb_port_1","1"]}')
  expect(generatedTsx).toContain('portHints={["imported_pcb_port_2","1"]}')
  expect(
    pcbTrace?.route.some(
      (point) =>
        "start_pcb_port_id" in point && point.start_pcb_port_id !== undefined,
    ),
  ).toBe(true)
  expect(
    pcbTrace?.route.some(
      (point) =>
        "end_pcb_port_id" in point && point.end_pcb_port_id !== undefined,
    ),
  ).toBe(true)
})
