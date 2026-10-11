import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves a JSCAD CAD model", async () => {
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
      type: "cad_component",
      cad_component_id: "cad_component_1",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 2, y: 3, z: -0.8 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "bottom",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: jscadPlan,
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "JscadCadModel",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(generatedTsx).toMatchInlineSnapshot(`
    "export const JscadCadModel = () => (
      <board width="20mm" height="20mm" thickness="1.6mm" layers={2} material="fr4">
        <chip name={"ImportedCadModel1"} pcbX={2} pcbY={3} pcbRotation="0deg" layer="bottom" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint />} cadModel={{ jscad: {"type":"extrudeLinear","options":{"height":2},"shape":{"type":"fromPointsGeom2","points":[[-1,-0.5],[1,-0.5],[1,0.5],[-1,0.5]]}}, positionOffset: { x: 0, y: 0, z: 0 }, rotationOffset: { x: 0, y: -180, z: 0 }, modelUnitToMmScale: 1, modelBoardNormalDirection: "z+", modelOriginPosition: { x: 0, y: 0, z: 0 } }} />
      </board>
    )
    export default JscadCadModel"
  `)
  expect({
    modelJscad: renderedCadComponent?.model_jscad,
    position: renderedCadComponent?.position,
    rotation: renderedCadComponent?.rotation,
  }).toEqual({
    modelJscad: jscadPlan,
    position: { x: 2, y: 3, z: -0.8 },
    rotation: { x: 0, y: 0, z: 0 },
  })
})
