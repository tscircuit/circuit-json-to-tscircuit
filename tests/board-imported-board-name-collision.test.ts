import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves standalone primitives when a component is named ImportedBoard", async () => {
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
      name: "ImportedBoard",
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
      type: "pcb_hole",
      pcb_hole_id: "pcb_hole_1",
      x: 5,
      y: 5,
      hole_shape: "circle",
      hole_diameter: 2,
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoardNameCollision",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson

  expect(generatedTsx).toContain('<chip name="ImportedBoard"')
  expect(generatedTsx).toContain('<chip name="ImportedBoard_2"')
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_smtpad"),
  ).toHaveLength(1)
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_hole"),
  ).toHaveLength(1)
  expect(
    renderedCircuitJson.filter((element) => element.type.endsWith("_error")),
  ).toHaveLength(0)
})
