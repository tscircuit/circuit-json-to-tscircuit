import { expect, test } from "bun:test"
import * as jscad from "@jscad/modeling"
import type { CadComponent, CircuitJson } from "circuit-json"
import { executeJscadOperations, type JscadOperation } from "jscad-planner"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const executeJscadPlan = (jscadOperation: JscadOperation) => {
  // @ts-expect-error @jscad/modeling overloads differ from the planner adapter.
  return executeJscadOperations(jscad, jscadOperation)
}

const getModelJscadOrThrow = (cadComponent: CadComponent): JscadOperation => {
  if (cadComponent.model_jscad === undefined) {
    throw new Error("Expected a JSCAD CAD component")
  }
  return cadComponent.model_jscad
}

test("preserves each grouped JSCAD body's fitted size", async () => {
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
      center: { x: 0, y: 0 },
      width: 12,
      height: 6,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: true,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_1",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: {
        type: "colorize",
        color: [1, 0, 0],
        shape: { type: "cuboid", size: [2, 2, 2] },
      },
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
      size: { x: 6, y: 6, z: 6 },
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_2",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 10, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: {
        type: "colorize",
        color: [0, 0, 1],
        shape: { type: "cuboid", size: [2, 2, 2] },
      },
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
      size: { x: 2, y: 2, z: 2 },
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "GroupedJscadFitBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponents = renderedCircuitJson.filter(
    (element): element is CadComponent => element.type === "cad_component",
  )
  const renderedCadComponent = renderedCadComponents[0]
  const geometry = executeJscadPlan(getModelJscadOrThrow(renderedCadComponent))
  const boundingBox: number[][] =
    jscad.measurements.measureBoundingBox(geometry)

  expect(renderedCadComponents).toHaveLength(1)
  expect(renderedCadComponent.size).toEqual({ x: 14, y: 6, z: 6 })
  expect(boundingBox).toEqual([
    [-3, -3, -3],
    [11, 3, 3],
  ])
})
