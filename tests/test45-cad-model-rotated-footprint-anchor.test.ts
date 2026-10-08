import { expect, test } from "bun:test"
import type {
  AnyCircuitElement,
  CadComponent,
  PcbBoard,
  PcbComponent,
  PcbSmtPad,
} from "circuit-json"
import { getCadModelProp } from "lib/board-converter/get-cad-model-prop"

const pcbBoard: PcbBoard = {
  type: "pcb_board",
  pcb_board_id: "pcb_board_1",
  center: { x: 69.6468, y: 84.6836 },
  width: 100,
  height: 80,
  thickness: 1.6,
  material: "fr4",
  num_layers: 2,
}

const pcbComponent: PcbComponent = {
  type: "pcb_component",
  pcb_component_id: "pcb_component_1",
  source_component_id: "source_component_1",
  center: { x: 75.43580036, y: 84.9595837 },
  width: 11.16640388,
  height: 6.68490408,
  layer: "top",
  rotation: 270,
  obstructs_within_bounds: false,
}

function createPad({
  height,
  id,
  width,
  x,
  y,
}: {
  height: number
  id: string
  width: number
  x: number
  y: number
}): PcbSmtPad {
  return {
    type: "pcb_smtpad",
    pcb_smtpad_id: id,
    pcb_component_id: pcbComponent.pcb_component_id,
    shape: "rotated_rect",
    x,
    y,
    width,
    height,
    ccw_rotation: 270,
    layer: "top",
    port_hints: [id],
  }
}

const pads: PcbSmtPad[] = [
  createPad({
    height: 4.45499998,
    id: "5-6-7-8",
    width: 4.4099988,
    x: 76.53330134,
    y: 84.9595837,
  }),
  ...[83.0545837, 84.3245837, 85.5945837, 86.8645837].map((y, padIndex) =>
    createPad({
      height: 0.92499942,
      id: String(4 - padIndex),
      width: 0.499999,
      x: 72.57079974,
      y,
    }),
  ),
]

const cadComponent: CadComponent = {
  type: "cad_component",
  cad_component_id: "cad_component_1",
  pcb_component_id: pcbComponent.pcb_component_id,
  source_component_id: pcbComponent.source_component_id,
  position: { x: 75.43580036, y: 84.9595837, z: 0.8 },
  rotation: { x: 0, y: 0, z: 270 },
  layer: "top",
  model_step_url: "/models/mosfet.step",
}

const circuitJson: AnyCircuitElement[] = [
  pcbBoard,
  pcbComponent,
  ...pads,
  cadComponent,
]

test("CAD offset uses absolute bounds for a rotated footprint", () => {
  expect(
    getCadModelProp({ circuitJson, pcbBoard, pcbComponent }),
  ).toMatchInlineSnapshot(
    `"cadModel={<cadmodel modelUrl="/models/mosfet.step" positionOffset={{ x: 0.001249680000000808, y: 0, z: 0 }} rotationOffset={{ x: 0, y: 0, z: 0 }} />}"`,
  )
})
