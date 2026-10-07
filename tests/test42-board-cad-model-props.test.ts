import { expect, test } from "bun:test"
import type {
  AnyCircuitElement,
  CadComponent,
  PcbBoard,
  PcbComponent,
} from "circuit-json"
import { getCadModelProp } from "lib/board-converter/get-cad-model-prop"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const pcbBoard: PcbBoard = {
  type: "pcb_board",
  pcb_board_id: "pcb_board_imported",
  center: { x: 10, y: 20 },
  width: 20,
  height: 12,
  thickness: 1.6,
  material: "fr4",
  num_layers: 2,
}

const topPcbComponent: PcbComponent = {
  type: "pcb_component",
  pcb_component_id: "pcb_component_top",
  source_component_id: "source_component_top",
  center: { x: 14, y: 23 },
  width: 2,
  height: 2,
  layer: "top",
  rotation: 90,
  obstructs_within_bounds: true,
}

const bottomPcbComponent: PcbComponent = {
  type: "pcb_component",
  pcb_component_id: "pcb_component_bottom",
  source_component_id: "source_component_bottom",
  center: { x: 6, y: 17 },
  width: 2,
  height: 2,
  layer: "bottom",
  rotation: 30,
  obstructs_within_bounds: true,
}

const topCadComponent: CadComponent = {
  type: "cad_component",
  cad_component_id: "cad_component_top",
  pcb_component_id: topPcbComponent.pcb_component_id,
  source_component_id: topPcbComponent.source_component_id,
  position: { x: 16, y: 24, z: 1.3 },
  rotation: { x: 10, y: 20, z: 140 },
  layer: "top",
  model_step_url: "/models/top.step",
  model_unit_to_mm_scale_factor: 1,
  model_board_normal_direction: "z+",
  model_origin_position: { x: 0, y: 0, z: 0 },
  model_object_fit: "contain_within_bounds",
  anchor_alignment: "center",
}

const bottomCadComponents: CadComponent[] = [
  {
    type: "cad_component",
    cad_component_id: "cad_component_bottom_1",
    pcb_component_id: bottomPcbComponent.pcb_component_id,
    source_component_id: bottomPcbComponent.source_component_id,
    position: { x: 5, y: 18, z: -1.8 },
    rotation: { x: 5, y: 190, z: 250 },
    layer: "bottom",
    model_glb_url: "/models/bottom.glb",
    model_origin_position: { x: 1, y: 2, z: 3 },
    model_object_fit: "contain_within_bounds",
    anchor_alignment: "center",
  },
  {
    type: "cad_component",
    cad_component_id: "cad_component_bottom_2",
    pcb_component_id: bottomPcbComponent.pcb_component_id,
    source_component_id: bottomPcbComponent.source_component_id,
    position: { x: 7, y: 16, z: -2.3 },
    rotation: { x: 15, y: 200, z: 260 },
    layer: "bottom",
    model_obj_url: "/models/bottom.obj",
    show_as_translucent_model: true,
    model_object_fit: "contain_within_bounds",
    anchor_alignment: "center",
  },
]

const circuitJson: AnyCircuitElement[] = [
  pcbBoard,
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
  topPcbComponent,
  bottomPcbComponent,
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_top",
    pcb_component_id: topPcbComponent.pcb_component_id,
    shape: "rect",
    x: 15,
    y: 23,
    width: 2,
    height: 2,
    layer: "top",
    port_hints: ["1"],
  },
  topCadComponent,
  ...bottomCadComponents,
]

test("board conversion attaches imported CAD models to their owning components", async () => {
  expect(
    getCadModelProp({
      circuitJson,
      pcbBoard,
      pcbComponent: topPcbComponent,
    }),
  ).toMatchInlineSnapshot(
    `"cadModel={<cadmodel modelUrl=\"/models/top.step\" positionOffset={{ x: 1, y: 1, z: 0.5 }} rotationOffset={{ x: 10, y: 20, z: 50 }} modelUnitToMmScale={1} modelBoardNormalDirection=\"z+\" modelOriginPosition={{ x: 0, y: 0, z: 0 }} />}"`,
  )
  expect(
    getCadModelProp({
      circuitJson,
      pcbBoard,
      pcbComponent: bottomPcbComponent,
    }),
  ).toMatchInlineSnapshot(
    `"cadModel={<cadassembly><cadmodel modelUrl=\"/models/bottom.glb\" positionOffset={{ x: 9, y: 21, z: -1 }} rotationOffset={{ x: 5, y: 10, z: -100 }} modelOriginPosition={{ x: 1, y: 2, z: 3 }} /><cadmodel modelUrl=\"/models/bottom.obj\" positionOffset={{ x: 11, y: 19, z: -1.4999999999999998 }} rotationOffset={{ x: 15, y: 20, z: -110 }} showAsTranslucentModel /></cadassembly>}"`,
  )

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ImportedBoard",
  })
  expect(generatedTscircuit.match(/cadModel=/gu)).toHaveLength(2)
  expect(generatedTscircuit).not.toContain("ImportedCadModel")

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedCadComponents = renderedCircuitJson.filter(
    (element): element is CadComponent => element.type === "cad_component",
  )

  expect(
    renderedCadComponents.map(({ position, rotation }) => ({
      position,
      rotation,
    })),
  ).toEqual([
    {
      position: topCadComponent.position,
      rotation: topCadComponent.rotation,
    },
    ...bottomCadComponents.map(({ position, rotation }) => ({
      position,
      rotation,
    })),
  ])
})
