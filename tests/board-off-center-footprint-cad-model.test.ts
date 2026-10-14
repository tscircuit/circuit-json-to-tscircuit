import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("places CAD models from the rendered physical footprint center", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 10, y: 20 },
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
      center: { x: 15, y: 25 },
      width: 6,
      height: 2,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_1",
      pcb_component_id: "pcb_component",
      x: 17,
      y: 25,
      width: 1,
      height: 1,
      shape: "rect",
      layer: "top",
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_2",
      pcb_component_id: "pcb_component",
      x: 19,
      y: 25,
      width: 1,
      height: 1,
      shape: "rect",
      layer: "top",
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component",
      pcb_component_id: "pcb_component",
      source_component_id: "source_component",
      position: { x: 15.5, y: 26, z: 0.8 },
      rotation: { x: 0, y: 0, z: 0 },
      layer: "top",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_step_url: "/models/connector.step",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "OffCenterFootprintCadModel",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(renderedCadComponent?.position).toEqual({ x: 15.5, y: 26, z: 0.8 })
})
