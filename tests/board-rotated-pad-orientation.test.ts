import { expect, test } from "bun:test"
import type { CircuitJson, PcbSmtPad } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

type RotatedRectPcbSmtPad = Extract<PcbSmtPad, { shape: "rotated_rect" }>

test("preserves rotated pad geometry on top and bottom components", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 10, y: 20 },
      width: 30,
      height: 30,
      thickness: 1.6,
      material: "fr4",
      num_layers: 2,
    },
    {
      type: "source_component",
      source_component_id: "source_component_top",
      ftype: "simple_chip",
      name: "U1",
    },
    {
      type: "source_component",
      source_component_id: "source_component_bottom",
      ftype: "simple_chip",
      name: "U2",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_top",
      source_component_id: "source_component_top",
      center: { x: 15, y: 25 },
      width: 4,
      height: 4,
      layer: "top",
      rotation: 90,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_bottom",
      source_component_id: "source_component_bottom",
      center: { x: 5, y: 15 },
      width: 4,
      height: 4,
      layer: "bottom",
      rotation: 270,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_top",
      pcb_component_id: "pcb_component_top",
      x: 15,
      y: 27,
      width: 2,
      height: 1,
      shape: "rotated_rect",
      ccw_rotation: 90,
      layer: "top",
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_bottom",
      pcb_component_id: "pcb_component_bottom",
      x: 5,
      y: 17,
      width: 2,
      height: 1,
      shape: "rotated_rect",
      ccw_rotation: 180,
      layer: "bottom",
    },
  ]

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "RotatedPads",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedPads = renderedCircuitJson
    .filter(
      (element): element is RotatedRectPcbSmtPad =>
        element.type === "pcb_smtpad" && element.shape === "rotated_rect",
    )
    .sort((first, second) => first.x - second.x)

  expect(
    renderedPads.map(({ ccw_rotation, height, layer, width, x, y }) => ({
      ccw_rotation,
      height,
      layer,
      width,
      x,
      y,
    })),
  ).toEqual([
    {
      ccw_rotation: 180,
      height: 1,
      layer: "bottom",
      width: 2,
      x: 5,
      y: 17,
    },
    {
      ccw_rotation: 90,
      height: 1,
      layer: "top",
      width: 2,
      x: 15,
      y: 27,
    },
  ])
})
