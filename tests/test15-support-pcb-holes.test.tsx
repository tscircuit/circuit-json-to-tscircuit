import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test15 support pcb holes", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test15Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test15Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <hole pcbX="-3mm" pcbY="-2.5mm" diameter="0.8mm" />
    <hole pcbX="-1mm" pcbY="1.5mm" width="1.2mm" height="0.7mm" shape="rect" />
    <hole pcbX="0.2mm" pcbY="0.4mm" width="1.5mm" height="0.75mm" shape="oval" />
    <hole pcbX="1.4mm" pcbY="-1.3mm" width="1.7mm" height="0.8mm" shape="pill" />
    <hole pcbX="2.6mm" pcbY="2mm" width="1.8mm" height="0.9mm" shape="pill" pcbRotation="90deg" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test15Component />
  </board>,
)
  `)) as any[]

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

test("test15 pcb holes preserve solder mask props", async () => {
  const circuitJsonWithSolderMask: AnyCircuitElement[] = [
    {
      type: "pcb_hole",
      pcb_hole_id: "hole_circle",
      hole_shape: "circle",
      x: -3,
      y: -2.5,
      hole_diameter: 0.8,
      is_covered_with_solder_mask: true,
      soldermask_margin: 0.2,
    },
    {
      type: "pcb_hole",
      pcb_hole_id: "hole_rect",
      hole_shape: "rect",
      x: -1,
      y: 1.5,
      hole_width: 1.2,
      hole_height: 0.7,
      is_covered_with_solder_mask: true,
    },
    {
      type: "pcb_hole",
      pcb_hole_id: "hole_oval",
      hole_shape: "oval",
      x: 0.2,
      y: 0.4,
      hole_width: 1.5,
      hole_height: 0.75,
      soldermask_margin: 0.15,
    },
    {
      type: "pcb_hole",
      pcb_hole_id: "hole_rotated_pill",
      hole_shape: "rotated_pill",
      x: 2.6,
      y: 2,
      hole_width: 1.8,
      hole_height: 0.9,
      ccw_rotation: 90,
      is_covered_with_solder_mask: true,
      soldermask_margin: 0.1,
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJsonWithSolderMask, {
    componentName: "Test15SolderMaskComponent",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test15SolderMaskComponent = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <hole pcbX="-3mm" pcbY="-2.5mm" coveredWithSolderMask={true} solderMaskMargin="0.2mm" diameter="0.8mm" />
    <hole pcbX="-1mm" pcbY="1.5mm" coveredWithSolderMask={true} width="1.2mm" height="0.7mm" shape="rect" />
    <hole pcbX="0.2mm" pcbY="0.4mm" solderMaskMargin="0.15mm" width="1.5mm" height="0.75mm" shape="oval" />
    <hole pcbX="2.6mm" pcbY="2mm" coveredWithSolderMask={true} solderMaskMargin="0.1mm" width="1.8mm" height="0.9mm" shape="pill" pcbRotation="90deg" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const rebuiltCircuitJson = (await runTscircuitCode(
    tscircuit,
  )) as AnyCircuitElement[]

  const rebuiltHoles = rebuiltCircuitJson.filter(
    (elm) => elm.type === "pcb_hole",
  )
  expect(rebuiltHoles).toHaveLength(4)

  const holeAt = (x: number, y: number) =>
    rebuiltHoles.find((elm) => "x" in elm && elm.x === x && elm.y === y)

  expect(holeAt(-3, -2.5)).toMatchObject({
    is_covered_with_solder_mask: true,
    soldermask_margin: 0.2,
  })
  expect(holeAt(-1, 1.5)).toMatchObject({
    is_covered_with_solder_mask: true,
  })
  expect(holeAt(0.2, 0.4)).toMatchObject({
    soldermask_margin: 0.15,
  })
  expect(holeAt(2.6, 2)).toMatchObject({
    is_covered_with_solder_mask: true,
    soldermask_margin: 0.1,
  })
}, 10000)

const circuitJson: any = [
  {
    type: "source_component",
    source_component_id: "generic_0",
    supplier_part_numbers: {},
  },
  {
    type: "schematic_component",
    schematic_component_id: "schematic_generic_component_0",
    source_component_id: "generic_0",
    center: { x: 0, y: 0 },
    rotation: 0,
    size: { width: 0, height: 0 },
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 8,
    height: 8,
  },
  {
    type: "pcb_hole",
    pcb_hole_id: "hole_circle",
    pcb_component_id: "pcb_generic_component_0",
    hole_shape: "circle",
    x: -3,
    y: -2.5,
    hole_diameter: 0.8,
  },
  {
    type: "pcb_hole",
    pcb_hole_id: "hole_rect",
    pcb_component_id: "pcb_generic_component_0",
    hole_shape: "rect",
    x: -1,
    y: 1.5,
    hole_width: 1.2,
    hole_height: 0.7,
  },
  {
    type: "pcb_hole",
    pcb_hole_id: "hole_oval",
    pcb_component_id: "pcb_generic_component_0",
    hole_shape: "oval",
    x: 0.2,
    y: 0.4,
    hole_width: 1.5,
    hole_height: 0.75,
  },
  {
    type: "pcb_hole",
    pcb_hole_id: "hole_pill",
    pcb_component_id: "pcb_generic_component_0",
    hole_shape: "pill",
    x: 1.4,
    y: -1.3,
    hole_width: 1.7,
    hole_height: 0.8,
  },
  {
    type: "pcb_hole",
    pcb_hole_id: "hole_rotated_pill",
    pcb_component_id: "pcb_generic_component_0",
    hole_shape: "rotated_pill",
    x: 2.6,
    y: 2,
    hole_width: 1.8,
    hole_height: 0.9,
    ccw_rotation: 90,
  },
]
