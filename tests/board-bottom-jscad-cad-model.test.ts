import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves a bottom-side JSCAD CAD model transform", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_1",
      center: { x: 0, y: 0 },
      width: 20,
      height: 20,
      thickness: 1.6,
      material: "fr4",
      num_layers: 2,
    },
    {
      type: "source_component",
      source_component_id: "source_component_1",
      name: "U1",
      ftype: "simple_chip",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      center: { x: 2, y: 3 },
      width: 2,
      height: 1,
      layer: "bottom",
      rotation: 30,
      obstructs_within_bounds: true,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_1",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 2, y: 3, z: -0.8 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "bottom",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: { type: "cuboid", size: [2, 1, 0.5] },
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "BottomJscadBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(renderedCadComponent).toMatchObject({
    position: { x: 2, y: 3, z: -0.8 },
    rotation: { x: 0, y: 0, z: 0 },
    model_jscad: expect.any(Object),
  })
})
