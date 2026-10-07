import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("emits center CAD model origin alignment", () => {
  const sourceCadComponent: CadComponent = {
    type: "cad_component",
    cad_component_id: "cad_component_1",
    pcb_component_id: "pcb_component_1",
    source_component_id: "source_component_1",
    position: { x: 4, y: 3, z: 1.2 },
    rotation: { x: 10, y: 20, z: 30 },
    model_glb_url: "https://example.com/model.glb",
    model_origin_alignment: "center",
    model_object_fit: "contain_within_bounds",
    anchor_alignment: "center",
  }
  const circuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_1",
      center: { x: 0, y: 0 },
      width: 20,
      height: 10,
      num_layers: 2,
      thickness: 1.6,
      material: "fr4",
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
      center: { x: 4, y: 3 },
      width: 2,
      height: 1,
      layer: "top",
      rotation: 0,
      obstructs_within_bounds: true,
    },
    sourceCadComponent,
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "CenterOriginBoard",
  })
  expect(generatedTsx).toContain('modelOriginAlignment={"center"}')
  expect(generatedTsx).not.toContain("modelOriginPosition=")
})
