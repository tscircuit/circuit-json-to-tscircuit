import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test("test4 support silkscreen", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test4Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test4Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="-0.32mm" pcbY="0mm" width="0.46mm" height="0.4mm" shape="rect" />
    <smtpad portHints={["2"]} pcbX="0.32mm" pcbY="0mm" width="0.46mm" height="0.4mm" shape="rect" />
    <silkscreenpath route={[{"x":-0.3,"y":0.15},{"x":0.3,"y":0.15}]} />
    <silkscreenpath route={[{"x":-0.3,"y":-0.15},{"x":-0.3,"y":0.15}]} />
    <silkscreenpath route={[{"x":0.3,"y":0.15},{"x":0.3,"y":-0.15}]} />
    <silkscreenpath route={[{"x":0.3,"y":-0.15},{"x":-0.3,"y":-0.15}]} />
    <silkscreentext pcbX={0} pcbY={0.68} anchorAlignment="center" fontSize={0.25} text="\${REFERENCE}" />
    <silkscreentext pcbX={0} pcbY={1.05} anchorAlignment="center" fontSize={1.27} text="REF**" />
    <silkscreentext pcbX={0} pcbY={-1.05} anchorAlignment="center" fontSize={1.27} text="R_0201_0603Metric" />
          </footprint>}
        {...props}
      />
    )"
  `)
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
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    size: {
      width: 0,
      height: 0,
    },
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    width: 1.1,
    height: 0.4,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    shape: "rect",
    x: -0.32,
    y: 0,
    width: 0.46,
    height: 0.4,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["1"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_1",
    shape: "rect",
    x: 0.32,
    y: 0,
    width: 0.46,
    height: 0.4,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["2"],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: -0.3,
        y: 0.15,
      },
      {
        x: 0.3,
        y: 0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_1",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: -0.3,
        y: -0.15,
      },
      {
        x: -0.3,
        y: 0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_2",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: 0.3,
        y: 0.15,
      },
      {
        x: 0.3,
        y: -0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_3",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: 0.3,
        y: -0.15,
      },
      {
        x: -0.3,
        y: -0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_silkscreen_text",
    layer: "top",
    font: "tscircuit2024",
    font_size: 0.25,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: 0,
      y: 0.68,
    },
    anchor_alignment: "center",
    text: "${REFERENCE}",
  },
  {
    type: "pcb_silkscreen_text",
    layer: "top",
    font: "tscircuit2024",
    font_size: 1.27,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: 0,
      y: 1.05,
    },
    anchor_alignment: "center",
    text: "REF**",
  },
  {
    type: "pcb_silkscreen_text",
    layer: "top",
    font: "tscircuit2024",
    font_size: 1.27,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: 0,
      y: -1.05,
    },
    anchor_alignment: "center",
    text: "R_0201_0603Metric",
  },
]
