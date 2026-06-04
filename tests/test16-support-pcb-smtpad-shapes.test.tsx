import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test16 support pcb smtpad shapes", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test16Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test16Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="1mm" pcbY="2mm" width="1.5mm" height="0.8mm" radius="0.4mm" shape="pill" />
    <smtpad portHints={["2"]} shape="polygon" points={[{"x":0,"y":0},{"x":1,"y":0},{"x":0.5,"y":1}]} />
    <smtpad portHints={["3"]} pcbX="-1mm" pcbY="-2mm" width="2mm" height="0.6mm" ccwRotation={45} shape="rotated_rect" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test16Component />
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
    type: "pcb_smtpad",
    pcb_smtpad_id: "pill_pad",
    pcb_component_id: "pcb_generic_component_0",
    shape: "pill",
    x: 1,
    y: 2,
    width: 1.5,
    height: 0.8,
    radius: 0.4,
    layer: "top",
    port_hints: ["1"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "polygon_pad",
    pcb_component_id: "pcb_generic_component_0",
    shape: "polygon",
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0.5, y: 1 },
    ],
    layer: "top",
    port_hints: ["2"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "rotated_rect_pad",
    pcb_component_id: "pcb_generic_component_0",
    shape: "rotated_rect",
    x: -1,
    y: -2,
    width: 2,
    height: 0.6,
    ccw_rotation: 45,
    layer: "top",
    port_hints: ["3"],
  },
]
