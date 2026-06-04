import { expect, test } from "bun:test"
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
