import { expect, test } from "bun:test"
import type { AnyCircuitElement, CadComponent } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { convertCircuitJsonToTscircuit } from "../lib"

test("board conversion preserves grouped JSCAD CAD geometry", async () => {
  const circuitJson: AnyCircuitElement[] = [
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
      name: "R1",
      ftype: "simple_resistor",
      resistance: 1000,
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      center: { x: 2, y: 3 },
      width: 2,
      height: 1,
      layer: "top",
      rotation: 0,
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_1",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 4, y: 5, z: 1.8 },
      layer: "top",
      rotation: { x: 10, y: 20, z: 30 },
      model_jscad: { type: "cuboid", size: [2, 1, 0.5] },
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_alignment: "unknown",
    },
    {
      type: "cad_component",
      cad_component_id: "cad_component_2",
      pcb_component_id: "pcb_component_1",
      source_component_id: "source_component_1",
      position: { x: 2, y: 3, z: 0.8 },
      layer: "top",
      model_jscad: { type: "cuboid", size: [1, 0.5, 0.75] },
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_alignment: "unknown",
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "JscadBoard",
  })

  expect(generatedTscircuit).toContain('name="R1"')
  expect(generatedTscircuit).toContain('"type":"union"')
  expect(generatedTscircuit).not.toContain("<cadmodel")
  expect(generatedTscircuit).not.toContain("<cadassembly")
  expect(generatedTscircuit).toContain(
    'cadModel={{ jscad: {"type":"union","shapes"',
  )
  expect(generatedTscircuit).toContain('"type":"translate"')
  expect(generatedTscircuit).toContain('"type":"rotateX"')

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedCadComponents = renderedCircuitJson.filter(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(renderedCadComponents).toHaveLength(1)
  expect(renderedCadComponents[0]?.model_jscad).toMatchObject({
    type: "union",
  })
})
