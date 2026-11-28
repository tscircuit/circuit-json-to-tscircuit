import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { getComponentUsingTemplate } from "../lib/get-component-using-template"
import { getBoardUsingTemplate } from "../lib/get-board-using-template"

test("keeps 3-pin and 4-pin simple_resonator components on the generic chip path so pin selectors stay intact", () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_component",
      source_component_id: "source_component_0",
      name: "Y1",
      ftype: "simple_resonator",
      frequency: 16_000_000,
      load_capacitance: 1.8e-11,
    },
    {
      type: "source_port",
      source_port_id: "source_port_0",
      source_component_id: "source_component_0",
      name: "pin1",
      pin_number: 1,
    },
    {
      type: "source_port",
      source_port_id: "source_port_1",
      source_component_id: "source_component_0",
      name: "pin2",
      pin_number: 2,
    },
    {
      type: "source_port",
      source_port_id: "source_port_2",
      source_component_id: "source_component_0",
      name: "pin3",
      pin_number: 3,
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_0",
      center: { x: 0, y: 0 },
      width: 20,
      height: 20,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_0",
      source_component_id: "source_component_0",
      center: { x: 0, y: 0 },
      layer: "top",
      rotation: 0,
      width: 3.2,
      height: 1.5,
      obstructs_within_bounds: false,
    },
    {
      type: "schematic_component",
      schematic_component_id: "schematic_component_0",
      source_component_id: "source_component_0",
      center: { x: 0, y: 0 },
      size: { width: 1, height: 1 },
      symbol_name: "crystal_horz",
    },
  ]

  const tsx = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Resonator3PinBoard",
  })
  expect(tsx).not.toContain("<resonator")
  expect(tsx).toContain("<chip")
})

test("rejects portless scaled schematic symbols from native board reconstruction", () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_component",
      source_component_id: "source_component_0",
      name: "R1",
      ftype: "simple_resistor",
      resistance: 1000,
    },
    {
      type: "source_port",
      source_port_id: "source_port_0",
      source_component_id: "source_component_0",
      name: "pin1",
      pin_number: 1,
    },
    {
      type: "source_port",
      source_port_id: "source_port_1",
      source_component_id: "source_component_0",
      name: "pin2",
      pin_number: 2,
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_0",
      center: { x: 0, y: 0 },
      width: 20,
      height: 20,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_0",
      source_component_id: "source_component_0",
      center: { x: 0, y: 0 },
      layer: "top",
      rotation: 0,
      width: 1.6,
      height: 0.8,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_0",
      pcb_component_id: "pcb_component_0",
      shape: "rect",
      layer: "top",
      x: -0.5,
      y: 0,
      width: 0.6,
      height: 0.6,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_1",
      pcb_component_id: "pcb_component_0",
      shape: "rect",
      layer: "top",
      x: 0.5,
      y: 0,
      width: 0.6,
      height: 0.6,
    },
    {
      type: "schematic_component",
      schematic_component_id: "schematic_component_0",
      source_component_id: "source_component_0",
      center: { x: 0, y: 0 },
      size: { width: 4.5, height: 2.0 },
      symbol_name: "boxresistor_horz",
    },
  ]

  const tsx = getBoardUsingTemplate({ circuitJson })
  expect(tsx).not.toContain("<resistor")
  expect(tsx).toContain("<chip")
})

test("omits unsupported raw footprinter_string when no PCB primitives are present", () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_component",
      source_component_id: "source_component_0",
      name: "R1",
      ftype: "simple_resistor",
      resistance: 1000,
    },
    {
      type: "source_port",
      source_port_id: "source_port_0",
      source_component_id: "source_component_0",
      name: "pin1",
      pin_number: 1,
    },
    {
      type: "source_port",
      source_port_id: "source_port_1",
      source_component_id: "source_component_0",
      name: "pin2",
      pin_number: 2,
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_0",
      source_component_id: "source_component_0",
      center: { x: 0, y: 0 },
      layer: "top",
      rotation: 0,
      width: 1,
      height: 1,
      obstructs_within_bounds: false,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_0",
      pcb_component_id: "pcb_component_0",
      source_component_id: "source_component_0",
      position: { x: 0, y: 0, z: 0 },
      footprinter_string: "not_a_real_footprinter_name",
    },
  ]

  const tsx = getComponentUsingTemplate({
    circuitJson,
    componentName: "R1UnsupportedFootprint",
  })
  expect(tsx).not.toContain('footprint="not_a_real_footprinter_name"')
})
