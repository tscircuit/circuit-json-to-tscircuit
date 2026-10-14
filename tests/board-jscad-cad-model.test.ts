import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson, PcbComponent } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves a component-owned JSCAD CAD model", async () => {
  const jscadPlan = {
    type: "extrudeLinear",
    options: { height: 2 },
    shape: {
      type: "fromPointsGeom2",
      points: [
        [-1, -0.5],
        [1, -0.5],
        [1, 0.5],
        [-1, 0.5],
      ],
    },
  }
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
      layer: "top",
      rotation: 20,
      obstructs_within_bounds: true,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_1",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 2, y: 3, z: 0.8 },
      rotation: { x: 0, y: 0, z: 35 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: jscadPlan,
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
      show_as_translucent_model: true,
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "JscadBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )
  const renderedPcbComponent = renderedCircuitJson.find(
    (element): element is PcbComponent => element.type === "pcb_component",
  )

  expect(generatedTsx).toContain('<chip name="U1"')
  expect(generatedTsx).toContain("cadModel={{ jscad:")
  expect(generatedTsx).not.toContain("<cadmodel jscad=")
  expect(generatedTsx).not.toContain("ImportedCadModel")
  expect(renderedCadComponent).toMatchObject({
    pcb_component_id: renderedPcbComponent?.pcb_component_id,
    source_component_id: renderedPcbComponent?.source_component_id,
    position: { x: 2, y: 3, z: 0.8 },
    rotation: { x: 0, y: 0, z: 35 },
    model_jscad: expect.any(Object),
    show_as_translucent_model: true,
  })
})
