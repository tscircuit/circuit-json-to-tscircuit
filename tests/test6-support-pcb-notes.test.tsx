import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test("test6 support pcb notes", () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "Test6Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from \"tscircuit\"\n    export const Test6Component = (props: ChipProps) => (\n      <chip\n        footprint={<footprint>\n            <pcbnotetext pcbX={1} pcbY={2} anchorAlignment=\"top_left\" font=\"tscircuit2024\" fontSize={1.5} text=\"Assembly\" color=\"#ff0000\" />\n    <pcbnoterect pcbX={0} pcbY={0} width={3.2} height={1.6} strokeWidth={0.2} isFilled={false} hasStroke={true} isStrokeDashed={true} color=\"#00ff00\" />\n    <pcbnotepath route={[{\"x\":-1,\"y\":-1},{\"x\":1,\"y\":-1},{\"x\":1,\"y\":1}]} strokeWidth={0.15} color=\"#0000ff\" />\n    <pcbnoteline x1={-0.5} y1={-0.5} x2={0.5} y2={0.5} strokeWidth={0.1} color=\"#123456\" isDashed={true} />\n    <pcbnotedimension from={{ x: -2, y: 0 }} to={{ x: 2, y: 0 }} font=\"tscircuit2024\" fontSize={1.2} arrowSize={0.25} text=\"4mm\" color=\"#654321\" />\n          </footprint>}\n        {...props}\n      />\n    )"
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
    type: "pcb_note_text",
    pcb_note_text_id: "pcb_note_text_0",
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: { x: 1, y: 2 },
    anchor_alignment: "top_left",
    font: "tscircuit2024",
    font_size: 1.5,
    text: "Assembly",
    color: "#ff0000",
  },
  {
    type: "pcb_note_rect",
    pcb_note_rect_id: "pcb_note_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    center: { x: 0, y: 0 },
    width: 3.2,
    height: 1.6,
    stroke_width: 0.2,
    is_filled: false,
    has_stroke: true,
    is_stroke_dashed: true,
    color: "#00ff00",
  },
  {
    type: "pcb_note_path",
    pcb_note_path_id: "pcb_note_path_0",
    pcb_component_id: "pcb_generic_component_0",
    route: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ],
    stroke_width: 0.15,
    color: "#0000ff",
  },
  {
    type: "pcb_note_line",
    pcb_note_line_id: "pcb_note_line_0",
    pcb_component_id: "pcb_generic_component_0",
    x1: -0.5,
    y1: -0.5,
    x2: 0.5,
    y2: 0.5,
    stroke_width: 0.1,
    color: "#123456",
    is_dashed: true,
  },
  {
    type: "pcb_note_dimension",
    pcb_note_dimension_id: "pcb_note_dimension_0",
    pcb_component_id: "pcb_generic_component_0",
    from: { x: -2, y: 0 },
    to: { x: 2, y: 0 },
    text: "4mm",
    font: "tscircuit2024",
    font_size: 1.2,
    arrow_size: 0.25,
    color: "#654321",
  },
]
