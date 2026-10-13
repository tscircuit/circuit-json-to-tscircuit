import { expect, test } from "bun:test"
import * as jscad from "@jscad/modeling"
import type { CadComponent, CircuitJson } from "circuit-json"
import { executeJscadOperations, type JscadImplementation } from "jscad-planner"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves each body transform in a grouped JSCAD model", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_1",
      center: { x: 0, y: 0 },
      width: 30,
      height: 30,
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
      center: { x: 10, y: 20 },
      width: 7,
      height: 4,
      layer: "top",
      rotation: 30,
      obstructs_within_bounds: true,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_1",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 10, y: 20, z: 0.8 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: { type: "cuboid", size: [2, 2, 2] },
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_2",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 15, y: 20, z: 0.8 },
      rotation: { x: 0, y: 0, z: 90 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: { type: "cuboid", size: [4, 2, 2] },
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "GroupedJscadBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponents = renderedCircuitJson.filter(
    (element): element is CadComponent => element.type === "cad_component",
  )
  const modelJscad = renderedCadComponents[0]?.model_jscad
  const geometry = executeJscadOperations(
    jscad as unknown as JscadImplementation,
    modelJscad,
  )
  const boundingBox = jscad.measurements.measureBoundingBox(
    geometry,
  ) as number[][]

  expect(renderedCadComponents).toHaveLength(1)
  expect(modelJscad).toMatchObject({ type: "union" })
  expect(boundingBox).toEqual([
    [-1, -2, -1],
    [6, 2, 1],
  ])
})
