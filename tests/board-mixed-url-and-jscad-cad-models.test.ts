import { expect, test } from "bun:test"
import * as jscad from "@jscad/modeling"
import type { CadComponent, CircuitJson, PcbComponent } from "circuit-json"
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

test("preserves URL and JSCAD bodies owned by the same component", async () => {
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
      name: "J1",
      ftype: "simple_chip",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      center: { x: 4, y: 5 },
      width: 4,
      height: 3,
      layer: "top",
      rotation: 30,
      obstructs_within_bounds: true,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_step",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 4, y: 5, z: 0.8 },
      rotation: { x: 0, y: 0, z: 30 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_step_url: "https://example.com/housing.step",
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_position: { x: 0, y: 0, z: 0 },
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_jscad",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 4, y: 5, z: 0.8 },
      rotation: { x: 0, y: 0, z: 30 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_jscad: { type: "cuboid", size: [2, 4, 6] },
      model_unit_to_mm_scale_factor: 2,
      model_board_normal_direction: "x+",
      model_origin_position: { x: 1, y: 0, z: 0 },
      show_as_translucent_model: true,
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "MixedCadModelsBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponents = renderedCircuitJson.filter(
    (element): element is CadComponent => element.type === "cad_component",
  )
  const renderedPcbComponent = renderedCircuitJson.find(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  const renderedStepModel = renderedCadComponents.find(
    (cadComponent) => cadComponent.model_step_url !== undefined,
  )
  const renderedJscadModel = renderedCadComponents.find(
    (cadComponent) => cadComponent.model_jscad !== undefined,
  )
  if (!renderedJscadModel) throw new Error("Expected a rendered JSCAD model")

  const jscadGeometry = executeJscadPlan(
    getModelJscadOrThrow(renderedJscadModel),
  )
  const jscadBoundingBox: number[][] =
    jscad.measurements.measureBoundingBox(jscadGeometry)

  expect(generatedTsx).toContain("<cadmodel modelUrl=")
  expect(generatedTsx).not.toContain("<cadmodel jscad=")
  expect(generatedTsx).toContain("cadModel={{ jscad:")
  expect(renderedCadComponents).toHaveLength(2)
  expect(
    renderedCadComponents.every(
      (cadComponent) =>
        cadComponent.pcb_component_id ===
          renderedPcbComponent?.pcb_component_id &&
        cadComponent.source_component_id ===
          renderedPcbComponent?.source_component_id,
    ),
  ).toBe(true)
  expect(renderedStepModel).toMatchObject({
    position: { x: 4, y: 5, z: 0.8 },
    rotation: { x: 0, y: 0, z: 30 },
    model_step_url: "https://example.com/housing.step",
    show_as_translucent_model: false,
  })
  expect(renderedJscadModel).toMatchObject({
    position: { x: 4, y: 5, z: 0.8 },
    rotation: { x: 0, y: 0, z: 30 },
    model_unit_to_mm_scale_factor: 2,
    model_board_normal_direction: "x+",
    model_origin_position: { x: 1, y: 0, z: 0 },
    show_as_translucent_model: true,
  })
  expect(jscadBoundingBox).toEqual([
    [-1, -2, -3],
    [1, 2, 3],
  ])
})
