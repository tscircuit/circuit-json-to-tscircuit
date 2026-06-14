import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import type { AnyCircuitElement } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"

const circuitJson: AnyCircuitElement[] = [
  {
    type: "schematic_arc",
    center: { x: -6, y: 4 },
    schematic_arc_id: "schematic_arc_id_1",
    radius: 1,
    schematic_component_id: "schematic_component_id_1",
    start_angle_degrees: 0,
    end_angle_degrees: 180,
    stroke_width: 0.05,
    color: "black",
    is_dashed: false,
    direction: "counterclockwise",
  },
  {
    type: "schematic_line",
    x1: 3,
    schematic_line_id: "schematic_line_id_1",
    schematic_component_id: "schematic_component_id_1",
    y1: 4,
    x2: 6,
    y2: 4,
    stroke_width: 0.05,
    color: "black",
    is_dashed: false,
  },
  {
    type: "schematic_box",
    schematic_component_id: "schematic_component_id_1",
    x: -6,
    y: -1,
    width: 2,
    height: 2,
    is_dashed: true,
  },
  {
    type: "schematic_rect",
    schematic_rect_id: "schematic_rect_id_1",
    schematic_component_id: "schematic_component_id_1",
    center: { x: 0, y: 4 },
    width: 2,
    height: 1,
    rotation: 30,
    stroke_width: 0.05,
    color: "purple",
    is_filled: true,
    fill_color: "yellow",
    is_dashed: true,
  },
  {
    type: "schematic_path",
    schematic_path_id: "schematic_path_id_1",
    points: [
      { x: 4, y: -2 },
      { x: 5, y: -1 },
    ],
    fill_color: "blue",
    is_dashed: false,
  },
  {
    type: "schematic_text",
    schematic_text_id: "schematic_text_id_1",
    text: "U1",
    position: { x: 0, y: 0 },
    anchor: "center",
    font_size: 0.2,
    color: "red",
    rotation: 45,
  },
  {
    type: "schematic_circle",
    center: { x: -2, y: 0 },
    schematic_circle_id: "schematic_circle_id_1",
    radius: 0.5,
    stroke_width: 0.05,
    color: "green",
    is_filled: true,
    is_dashed: true,
  },
  {
    type: "schematic_table",
    schematic_table_id: "schematic_table_1",
    anchor_position: { x: 2, y: -4 },
    column_widths: [2, 3],
    row_heights: [1, 1.5],
    cell_padding: 0.2,
    border_width: 0.1,
    anchor: "top_left",
  },
  {
    type: "schematic_table_cell",
    schematic_table_cell_id: "schematic_table_cell_1",
    schematic_table_id: "schematic_table_1",
    start_row_index: 0,
    end_row_index: 0,
    start_column_index: 0,
    end_column_index: 1,
    text: "Header",
    center: { x: 3.5, y: 0.5 },
    width: 5,
    height: 1,
    horizontal_align: "center",
    vertical_align: "middle",
    font_size: 0.18,
  },
  {
    type: "schematic_table_cell",
    schematic_table_cell_id: "schematic_table_cell_2",
    schematic_table_id: "schematic_table_1",
    start_row_index: 1,
    end_row_index: 1,
    start_column_index: 0,
    end_column_index: 0,
    text: "A2",
    center: { x: 2, y: -0.75 },
    width: 2,
    height: 1.5,
    horizontal_align: "left",
    vertical_align: "top",
  },
  {
    type: "schematic_table_cell",
    schematic_table_cell_id: "schematic_table_cell_3",
    schematic_table_id: "schematic_table_1",
    start_row_index: 1,
    end_row_index: 1,
    start_column_index: 1,
    end_column_index: 1,
    text: "B2",
    center: { x: 4.5, y: -0.75 },
    width: 3,
    height: 1.5,
    horizontal_align: "right",
    vertical_align: "bottom",
  },
]

test("test7 comprehensive schematic symbol support", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "U1",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
"import { type ChipProps } from "tscircuit"
export const U1 = (props: ChipProps) => (
  <chip
    symbol={<symbol>
  <schematicarc
    center={{ x: -6, y: 4 }}
    radius={1}
    startAngleDegrees={0}
    endAngleDegrees={180}
    strokeWidth={0.05}
    color="black"
    isDashed={false}
    direction="counterclockwise"
  />
  <schematicline x1={3} y1={4} x2={6} y2={4} strokeWidth={0.05} color="black" isDashed={false}/>
  <schematicbox center={{ x: -6, y: -1 }} width={2} height={2} isDashed={true}/>
  <schematicrect schX={0} schY={4} width={2} height={1} rotation={30} strokeWidth={0.05} color="purple" isFilled={true} fillColor="yellow" isDashed={true} />
  <schematicpath points={[{"x":4,"y":-2},{"x":5,"y":-1}]} strokeColor="blue" fillColor="blue" isFilled={false}/>
  <schematictext text="U1" x={0} y={0} anchorAlignment="center" fontSize={0.2} color="red" rotation={45} />
  <schematiccircle center={{ x: -2, y: 0 }} radius={0.5} strokeWidth={0.05} color="green" isFilled={true} isDashed={true} />
  <schematictable schX={2} schY={-4} cellPadding={0.2} borderWidth={0.1} anchor="top_left">
    <schematicrow height={1}>
        <schematiccell text="Header" horizontalAlign="center" verticalAlign="middle" fontSize={0.18} colSpan={2} width={2.5} />
      </schematicrow>
    <schematicrow height={1.5}>
        <schematiccell text="A2" horizontalAlign="left" verticalAlign="top" width={2} />
        <schematiccell text="B2" horizontalAlign="right" verticalAlign="bottom" width={3} />
      </schematicrow>
  </schematictable>
</symbol>}
    {...props}
  />
)"
`)
  const result = await runTscircuitCode(tscircuit)

  expect(Array.isArray(result)).toBe(true)
  expect(result).not.toHaveLength(0)
}, 15000)

test("test7 comprehensive schematic symbol support svg", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "U1",
  })

  const result = await runTscircuitCode(tscircuit)

  const schematicSvg = convertCircuitJsonToSchematicSvg(
    result as AnyCircuitElement[],
  )
  await expect(schematicSvg).toMatchSvgSnapshot(
    import.meta.path,
    "comprehensive-schematic-symbol",
  )
})
