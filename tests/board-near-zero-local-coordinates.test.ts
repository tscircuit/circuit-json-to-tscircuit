import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("normalizes floating point noise in component-local coordinates", () => {
  const source: CircuitJson = [
    {
      type: "source_component",
      source_component_id: "source_component_fiducial",
      ftype: "simple_chip",
      name: "FID1",
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 60, y: 50 },
      width: 100,
      height: 80,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_fiducial",
      source_component_id: "source_component_fiducial",
      center: { x: 96.3168, y: 51.663599999999995 },
      width: 3,
      height: 3,
      layer: "bottom",
      rotation: 180,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_fiducial",
      pcb_component_id: "pcb_component_fiducial",
      x: 96.3168,
      y: 51.663599999999995,
      layer: "bottom",
      shape: "circle",
      radius: 0.5,
      port_hints: ["1"],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_offset",
      pcb_component_id: "pcb_component_fiducial",
      x: 97.56680004,
      y: 51.663599999999995,
      layer: "bottom",
      shape: "circle",
      radius: 0.5,
      port_hints: ["2"],
    },
  ]

  const generated = convertCircuitJsonToTscircuit(source, {
    componentName: "FiducialBoard",
  })

  expect(generated).toContain('pcbX="0mm" pcbY="0mm"')
  expect(generated).toContain('pcbX="-1.25000004mm" pcbY="0mm"')
  expect(generated).not.toMatch(/[+-]?\d+(?:\.\d+)?e-\d+mm/u)
})
