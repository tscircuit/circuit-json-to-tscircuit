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
  center: { x: 0, y: 0 },
  width: 20,
  height: 20,
  thickness: 1.6,
  material: "fr4",
  num_layers: 2,
}

const pcbComponent: PcbComponent = {
  type: "pcb_component",
  pcb_component_id: "pcb_component_1",
  source_component_id: "source_component_1",
  center: { x: 2, y: 3 },
  width: 2,
  height: 1,
  layer: "bottom",
  rotation: 180,
  obstructs_within_bounds: true,
}

const pad: PcbSmtPad = {
  type: "pcb_smtpad",
  pcb_smtpad_id: "pcb_smtpad_1",
  pcb_component_id: pcbComponent.pcb_component_id,
  shape: "rect",
  x: 2,
  y: 3,
  width: 1,
  height: 1,
  layer: "bottom",
  port_hints: ["1"],
}

const cadComponent: CadComponent = {
  type: "cad_component",
  cad_component_id: "cad_component_1",
  pcb_component_id: pcbComponent.pcb_component_id,
  source_component_id: pcbComponent.source_component_id,
  position: { x: 2, y: 3, z: -0.8 },
  rotation: { x: 0, y: 180, z: 180 },
  layer: "bottom",
  model_step_url: "/models/bottom.step",
}

const circuitJson: AnyCircuitElement[] = [
  pcbBoard,
  pcbComponent,
  pad,
  cadComponent,
]

test("CAD rotation uses the existing bottom-layer transform", () => {
  expect(
    getCadModelProp({ circuitJson, pcbBoard, pcbComponent }),
  ).toMatchInlineSnapshot(
    `"cadModel={<cadmodel modelUrl="/models/bottom.step" positionOffset={{ x: 0, y: 0, z: 0 }} rotationOffset={{ x: 0, y: 0, z: -180 }} />}"`,
  )
})
