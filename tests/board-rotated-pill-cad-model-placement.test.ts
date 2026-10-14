import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves CAD placement for rotated pill holes with rectangular pads", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 30,
      height: 20,
      thickness: 1.6,
      material: "fr4",
      num_layers: 2,
    },
    {
      type: "source_component",
      source_component_id: "source_component",
      ftype: "simple_chip",
      name: "J1",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component",
      source_component_id: "source_component",
      center: { x: 0, y: 0 },
      width: 6,
      height: 10,
      layer: "top",
      rotation: 270,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad",
      pcb_component_id: "pcb_component",
      x: 1.45,
      y: -1.15,
      width: 1.8,
      height: 2,
      shape: "rotated_rect",
      ccw_rotation: 90,
      layer: "top",
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "pcb_plated_hole",
      pcb_component_id: "pcb_component",
      x: 4.45,
      y: -2.225,
      shape: "rotated_pill_hole_with_rect_pad",
      hole_shape: "rotated_pill",
      pad_shape: "rect",
      layers: ["top", "bottom"],
      hole_width: 0.85,
      hole_height: 0.7,
      hole_ccw_rotation: 180,
      hole_offset_x: 0,
      hole_offset_y: 0,
      rect_pad_width: 1.05,
      rect_pad_height: 1.3,
      rect_ccw_rotation: 90,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component",
      pcb_component_id: "pcb_component",
      source_component_id: "source_component",
      position: { x: 10, y: 0, z: 0.8 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_step_url: "/models/connector.step",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "RotatedPillCadModel",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(renderedCadComponent?.position.x).toBeCloseTo(10, 10)
  expect(renderedCadComponent?.position.y).toBeCloseTo(0, 10)
  expect(renderedCadComponent?.position.z).toBeCloseTo(0.8, 10)
})
