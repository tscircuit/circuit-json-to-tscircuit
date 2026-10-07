import { expect, test } from "bun:test"
import type { AnyCircuitElement, CadComponent } from "circuit-json"
import { getCadModelProp } from "lib/board-converter/get-cad-model-prop"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const pcbBoard = {
  type: "pcb_board" as const,
  pcb_board_id: "pcb_board_imported",
  center: { x: 0, y: 0 },
  width: 20,
  height: 12,
  thickness: 1.6,
  material: "fr4" as const,
  num_layers: 2,
}

const pcbComponent = {
  type: "pcb_component" as const,
  pcb_component_id: "pcb_component_1",
  source_component_id: "source_component_1",
  center: { x: 2, y: 3 },
  width: 2,
  height: 2,
  layer: "top" as const,
  rotation: 0,
  obstructs_within_bounds: true,
}

const importedCadComponent: CadComponent = {
  type: "cad_component",
  cad_component_id: "cad_component_1",
  pcb_component_id: pcbComponent.pcb_component_id,
  source_component_id: pcbComponent.source_component_id,
  position: { x: 3, y: 4, z: 1.8 },
  rotation: { x: 10, y: 20, z: 30 },
  layer: "top",
  model_step_url: "/models/imported.step",
  model_origin_alignment: "unknown",
}

const circuitJson: AnyCircuitElement[] = [
  pcbBoard,
  {
    type: "source_component",
    source_component_id: pcbComponent.source_component_id,
    ftype: "simple_chip",
    name: "U1",
  },
  pcbComponent,
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_1",
    pcb_component_id: pcbComponent.pcb_component_id,
    shape: "rect",
    x: pcbComponent.center.x,
    y: pcbComponent.center.y,
    width: 2,
    height: 2,
    layer: "top",
    port_hints: ["1"],
  },
  importedCadComponent,
]

test("board conversion preserves the native origin of imported CAD models", async () => {
  expect(
    getCadModelProp({ circuitJson, pcbBoard, pcbComponent }),
  ).toMatchInlineSnapshot(
    `"cadModel={<cadmodel modelUrl=\"/models/imported.step\" positionOffset={{ x: 1, y: 1, z: 1 }} rotationOffset={{ x: 10, y: 20, z: 30 }} modelOriginPosition={{ x: 0, y: 0, z: 0 }} />}"`,
  )

  const generatedTsx = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as AnyCircuitElement[]
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(renderedCadComponent).toMatchObject({
    model_origin_position: { x: 0, y: 0, z: 0 },
    position: importedCadComponent.position,
    rotation: importedCadComponent.rotation,
  })
})
