import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves standalone CAD when a component is named ImportedCadModel1", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_1",
      center: { x: 0, y: 0 },
      width: 20,
      height: 20,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "source_component",
      source_component_id: "source_component_1",
      name: "ImportedCadModel1",
      ftype: "simple_chip",
    },
    {
      type: "source_component",
      source_component_id: "source_component_cad",
      name: "StandaloneModel",
      ftype: "simple_chip",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      center: { x: 0, y: 0 },
      width: 2,
      height: 2,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: true,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_1",
      pcb_component_id: "pcb_component_1",
      shape: "rect",
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      layer: "top",
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_1",
      source_component_id: "source_component_cad",
      position: { x: 3, y: 2, z: 0.7 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_step_url: "/models/standalone.step",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedCadModelNameCollision",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent =>
      element.type === "cad_component" &&
      element.model_step_url?.includes("standalone.step") === true,
  )

  expect(generatedTsx).toContain('<chip name="ImportedCadModel1"')
  expect(generatedTsx).toContain('name={"ImportedCadModel1_2"}')
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_smtpad"),
  ).toHaveLength(1)
  expect(renderedCadComponent?.position).toEqual({ x: 3, y: 2, z: 0.7 })
  expect(
    renderedCircuitJson.filter((element) => element.type.endsWith("_error")),
  ).toHaveLength(0)
})
