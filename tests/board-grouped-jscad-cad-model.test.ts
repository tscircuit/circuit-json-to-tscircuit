import { expect, test } from "bun:test"
import * as jscad from "@jscad/modeling"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCSGToThreeGeom } from "jscad-electronics/vanilla"
import { executeJscadOperations, type JscadOperation } from "jscad-planner"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

type ViewerVertexColorKey = string

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

const getViewerVertexColors = (cadComponent: CadComponent): number[][] => {
  const geometry = executeJscadPlan(getModelJscadOrThrow(cadComponent))
  const threeGeometry = convertCSGToThreeGeom(geometry)
  const colorAttribute = threeGeometry.getAttribute("color")
  const colors = new Map<ViewerVertexColorKey, number[]>()
  for (let vertexIndex = 0; vertexIndex < colorAttribute.count; vertexIndex++) {
    const color = [
      colorAttribute.getX(vertexIndex),
      colorAttribute.getY(vertexIndex),
      colorAttribute.getZ(vertexIndex),
    ]
    colors.set(color.join(","), color)
  }
  threeGeometry.dispose()
  return [...colors.values()]
}

test("preserves each body transform and color in a grouped JSCAD model", async () => {
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
      model_jscad: {
        type: "colorize",
        color: [1, 0, 0],
        shape: { type: "cuboid", size: [2, 2, 2] },
      },
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
      rotation: { x: 90, y: 90, z: 0 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: {
        type: "colorize",
        color: [0, 0, 1],
        shape: { type: "cuboid", size: [4, 2, 1] },
      },
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
  expect(renderedCadComponents).toHaveLength(2)
  expect(
    renderedCadComponents.map((cadComponent) => cadComponent.position),
  ).toEqual([
    { x: 10, y: 20, z: 0.8 },
    { x: 15, y: 20, z: 0.8 },
  ])
  expect(
    renderedCadComponents.map((cadComponent) => cadComponent.rotation),
  ).toEqual([
    { x: 0, y: 0, z: 0 },
    { x: 90, y: 90, z: 0 },
  ])
  expect(renderedCadComponents.map(getViewerVertexColors)).toEqual([
    [[1, 0, 0]],
    [[0, 0, 1]],
  ])
})
