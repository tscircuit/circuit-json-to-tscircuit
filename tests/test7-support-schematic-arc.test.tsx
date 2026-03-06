import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import type { AnyCircuitElement } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"

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
    x1: 2,
    schematic_line_id: "schematic_line_id_1",
    schematic_component_id: "schematic_component_id_1",
    y1: 0,
    x2: 4,
    y2: 0,
    stroke_width: 0.05,
    color: "black",
    is_dashed: false,
  },
  {
    type: "schematic_box",
    schematic_component_id: "schematic_component_id_1",
    x: 0,
    y: 3,
    width: 2,
    height: 2,
    is_dashed: true,
  },
  {
    type: "schematic_path",
    schematic_path_id: "schematic_path_id_1",
    points: [
      { x: 3, y: 3 },
      { x: 4, y: 4 },
    ],
    fill_color: "blue",
  },
  {
    type: "schematic_text",
    schematic_text_id: "schematic_text_id_1",
    text: "U1",
    position: { x: 0, y: -3 },
    anchor: "center",
    font_size: 0.2,
    color: "red",
    rotation: 45,
  },
  {
    type: "schematic_circle",
    center: { x: 3, y: -3 },
    schematic_circle_id: "schematic_circle_id_1",
    radius: 0.5,
    stroke_width: 0.05,
    color: "green",
    is_filled: true,
    is_dashed: true,
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
    center={{ x: 0, y: 0 }}
    radius={1}
    startAngleDegrees={0}
    endAngleDegrees={180}
    strokeWidth={0.05}
    color="black"
    isDashed={false}
    direction="counterclockwise"
  />
  <schematicline x1={2} y1={0} x2={4} y2={0} strokeWidth={0.05} color="black" isDashed={false}/>
  <schematicbox center={{ x: 0, y: 3 }} width={2} height={2} isDashed={true}/>
  <schematicpath points={[{"x":3,"y":3},{"x":4,"y":4}]} strokeColor="blue" fillColor="blue" isFilled={false}/>
  <schematictext text="U1" x={0} y={-3} anchorAlignment="center" fontSize={0.2} color="red" rotation={45} />
  <schematiccircle center={{ x: 3, y: -3 }} radius={0.5} strokeWidth={0.05} color="green" isFilled={true} isDashed={true} />
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
