import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("schematic primitive positions and styles survive TSX conversion", async () => {
  const sourceCircuitJson: AnyCircuitElement[] = [
    {
      type: "schematic_box",
      schematic_component_id: "schematic_component_1",
      x: 1,
      y: 2,
      width: 4,
      height: 2,
      is_dashed: true,
    },
    {
      type: "schematic_path",
      schematic_path_id: "schematic_path_1",
      schematic_component_id: "schematic_component_1",
      points: [
        { x: -2, y: -1 },
        { x: 2, y: 1 },
      ],
      stroke_color: "purple",
      stroke_width: 0.12,
      fill_color: "yellow",
      is_filled: true,
      is_dashed: true,
      dash_length: 0.3,
      dash_gap: 0.15,
    },
    {
      type: "schematic_text",
      schematic_text_id: "schematic_text_1",
      schematic_component_id: "schematic_component_1",
      text: "positioned label",
      position: { x: 3, y: -2 },
      anchor: "bottom_right",
      font_size: 0.4,
      color: "blue",
      rotation: 90,
    },
    {
      type: "schematic_circle",
      schematic_circle_id: "schematic_circle_1",
      schematic_component_id: "schematic_component_1",
      center: { x: -3, y: 2 },
      radius: 0.8,
      stroke_width: 0.08,
      color: "red",
      is_filled: true,
      fill_color: "green",
      is_dashed: false,
    },
  ]
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "PrimitiveStyles",
  })

  expect(generatedTscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const PrimitiveStyles = (props: ChipProps) => (
      <chip
        symbol={<symbol>
      <schematicbox schX={3} schY={3} width={4} height={2} strokeStyle="dashed"/>
      <schematicpath points={[{"x":-2,"y":-1},{"x":2,"y":1}]} strokeColor="purple" fillColor="yellow" isFilled={true} strokeWidth={0.12} dashLength={0.3} dashGap={0.15}/>
      <schematictext text="positioned label" schX={3} schY={-2} anchor="bottom_right" fontSize={0.4} color="blue" schRotation={90} />
      <schematiccircle center={{ x: -3, y: 2 }} radius={0.8} strokeWidth={0.08} color="red" isFilled={true} fillColor="green" isDashed={false} />
    </symbol>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]

  expect(
    renderedCircuitJson.find((element) => element.type === "schematic_box"),
  ).toMatchObject({
    x: 1,
    y: 2,
    width: 4,
    height: 2,
    is_dashed: true,
  })
  expect(
    renderedCircuitJson.find((element) => element.type === "schematic_path"),
  ).toMatchObject({
    points: [
      { x: -2, y: -1 },
      { x: 2, y: 1 },
    ],
    stroke_color: "purple",
    stroke_width: 0.12,
    fill_color: "yellow",
    is_filled: true,
    is_dashed: true,
    dash_length: 0.3,
    dash_gap: 0.15,
  })
  expect(
    renderedCircuitJson.find((element) => element.type === "schematic_text"),
  ).toMatchObject({
    text: "positioned label",
    position: { x: 3, y: -2 },
    anchor: "bottom_right",
    font_size: 0.4,
    color: "blue",
    rotation: 90,
  })
  expect(
    renderedCircuitJson.find((element) => element.type === "schematic_circle"),
  ).toMatchObject({
    center: { x: -3, y: 2 },
    radius: 0.8,
    stroke_width: 0.08,
    color: "red",
    is_filled: true,
    fill_color: "green",
    is_dashed: false,
  })
})
