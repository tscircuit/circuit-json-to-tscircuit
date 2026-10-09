import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("reproduces bottom CAD model rotation drift", async () => {
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
      rotation: { x: 10, y: 200, z: 250 },
      layer: "bottom",
      anchor_alignment: "center",
      model_object_fit: "contain_within_bounds",
      model_step_url: "/models/bottom.step",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "BottomCadModel",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect({
    position: renderedCadComponent?.position,
    rotation: renderedCadComponent?.rotation,
  }).toMatchInlineSnapshot(`
    {
      "position": {
        "x": 2,
        "y": 3,
        "z": -0.8,
      },
      "rotation": {
        "x": 10,
        "y": 200,
        "z": 50,
      },
    }
  `)
})
