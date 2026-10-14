import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves component CAD models from both PCB layers", async () => {
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
      cad_component_id: "cad_component_top",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 2, y: 3, z: 0.8 },
      rotation: { x: 0, y: 0, z: 20 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_step_url: "https://example.com/top.step",
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_bottom",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 2, y: 3, z: -0.8 },
      rotation: { x: 0, y: 180, z: 20 },
      layer: "bottom",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_step_url: "https://example.com/bottom.step",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "MultipleLayerCadModelsBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponents = renderedCircuitJson.filter(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(renderedCadComponents).toHaveLength(2)
  expect(
    renderedCadComponents.map((cadComponent) => cadComponent.model_step_url),
  ).toEqual(["https://example.com/top.step", "https://example.com/bottom.step"])
  expect(
    renderedCadComponents.map((cadComponent) => cadComponent.position),
  ).toEqual([
    { x: 2, y: 3, z: 0.8 },
    { x: 2, y: 3, z: -0.8 },
  ])
})
