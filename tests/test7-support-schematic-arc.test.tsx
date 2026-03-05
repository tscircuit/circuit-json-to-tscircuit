import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import type { AnyCircuitElement } from "circuit-json"

test("test7 comprehensive schematic symbol support", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "schematic_arc",
      center: { x: 0, y: 0 },
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
      x1: -1,
      schematic_line_id: "schematic_line_id_1",
      schematic_component_id: "schematic_component_id_1",

      y1: 0,
      x2: 1,
      y2: 0,
      stroke_width: 0.05,
      color: "black",
      is_dashed: false,
    },
    {
      type: "schematic_box",
      schematic_component_id: "schematic_component_id_1",
      x: 0,
      y: 0,
      width: 2,
      height: 2,
      is_dashed: true,
    },
    {
      type: "schematic_path",
      schematic_path_id: "schematic_path_id_1",
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
      ],
      fill_color: "blue",
    },
    {
      type: "schematic_text",
      schematic_text_id: "schematic_text_id_1",
      text: "U1",
      position: { x: 1, y: 1 },
      anchor: "center",
      font_size: 0.2,
      color: "red",
      rotation: 45,
    },
    {
      type: "schematic_circle",
      center: { x: 5, y: 5 },
      schematic_circle_id: "schematic_circle_id_1",
      radius: 0.5,
      stroke_width: 0.05,
      color: "green",
      is_filled: true,
      is_dashed: true,
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "U1",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
"import { type ChipProps } from "tscircuit"
export const U1 = (props: ChipProps) => (
  <chip
    symbol={<symbol>
  <schematicarc
    center={{ x: 0, y: 0 }}
    radius={1}
    startAngleDegrees={0}
    endAngleDegrees={180}
    strokeWidth={0.05}
    color="black"
    isDashed={false}
    direction="counterclockwise"
  />
  <schematicline x1={-1} y1={0} x2={1} y2={0} strokeWidth={0.05} color="black" isDashed={false}/>
  <schematicbox center={{ x: 0, y: 0 }} width={2} height={2} isDashed={true}/>
  <schematicpath points={[{"x":0,"y":0},{"x":1,"y":1}]} fillColor="blue"/>
  <schematictext text="U1" x={1} y={1} anchorAlignment="center" fontSize={0.2} color="red" />
  <schematiccircle center={{ x: 5, y: 5 }} radius={0.5} strokeWidth={0.05} color="green" />
</symbol>}
    {...props}
  />
)"
`)
})
