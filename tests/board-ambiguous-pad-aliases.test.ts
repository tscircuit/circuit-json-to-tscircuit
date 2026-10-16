import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("keeps imported pads distinct when logical and physical aliases overlap", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      material: "fr4",
      num_layers: 2,
    },
    {
      type: "source_component",
      source_component_id: "source_component_memory",
      ftype: "simple_chip",
      name: "U1",
    },
    {
      type: "source_port",
      source_port_id: "source_port_address",
      source_component_id: "source_component_memory",
      name: "A1",
      pin_number: 1,
      port_hints: ["A1", "P7"],
    },
    {
      type: "source_port",
      source_port_id: "source_port_power",
      source_component_id: "source_component_memory",
      name: "VDDQ",
      pin_number: 2,
      port_hints: ["VDDQ", "A1"],
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_memory",
      source_component_id: "source_component_memory",
      center: { x: 0, y: 0 },
      width: 4,
      height: 4,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_address",
      source_port_id: "source_port_address",
      pcb_component_id: "pcb_component_memory",
      x: -1,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_power",
      source_port_id: "source_port_power",
      pcb_component_id: "pcb_component_memory",
      x: 1,
      y: 0,
      layers: ["top"],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_address",
      pcb_component_id: "pcb_component_memory",
      pcb_port_id: "pcb_port_address",
      port_hints: ["P7"],
      x: -1,
      y: 0,
      width: 1,
      height: 1,
      shape: "rect",
      layer: "top",
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_power",
      pcb_component_id: "pcb_component_memory",
      pcb_port_id: "pcb_port_power",
      port_hints: ["A1"],
      x: 1,
      y: 0,
      width: 1,
      height: 1,
      shape: "rect",
      layer: "top",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "MemoryBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson

  expect(
    renderedCircuitJson.filter(({ type }) => type === "pcb_port"),
  ).toHaveLength(2)
  expect(
    renderedCircuitJson.filter(
      ({ type }) => type === "source_ambiguous_port_reference",
    ),
  ).toHaveLength(0)
})
