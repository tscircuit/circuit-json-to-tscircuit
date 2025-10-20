import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test("test7 support courtyards", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "Test7Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test7Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="-1mm" pcbY="0mm" width="0.6mm" height="0.8mm" shape="rect" />
    <smtpad portHints={["2"]} pcbX="1mm" pcbY="0mm" width="0.6mm" height="0.8mm" shape="rect" />
    <courtyardrect pcbX="0mm" pcbY="0mm" width="3mm" height="2mm" layer="top" />
    <courtyardrect pcbX="0mm" pcbY="0mm" width="3.5mm" height="2.5mm" layer="bottom" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

const circuitJson = [
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
    width: 1,
    height: 1,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pad1",
    shape: "rect",
    x: -1,
    y: 0,
    width: 0.6,
    height: 0.8,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_port_id: "port1",
    port_hints: ["1"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pad2",
    shape: "rect",
    x: 1,
    y: 0,
    width: 0.6,
    height: 0.8,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_port_id: "port2",
    port_hints: ["2"],
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "courtyard1",
    center: { x: 0, y: 0 },
    width: 3,
    height: 2,
    layer: "top",
    stroke_width: 0.1,
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "courtyard2",
    center: { x: 0, y: 0 },
    width: 3.5,
    height: 2.5,
    layer: "bottom",
    stroke_width: 0.1,
    pcb_component_id: "pcb_generic_component_0",
  },
]
