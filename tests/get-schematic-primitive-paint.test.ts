import { expect, test } from "bun:test"
import type { AnyCircuitElement, SchematicPath } from "circuit-json"
import { getSchematicPrimitivePaint } from "../lib/generate-board-schematic-tsx/get-schematic-primitive-paint"

type SchematicLine = Extract<AnyCircuitElement, { type: "schematic_line" }>
type SchematicRect = Extract<AnyCircuitElement, { type: "schematic_rect" }>

type EquivalentPaintPair = {
  fillColor: string
  strokeColor: string
}

const createComponentPath = ({
  fillColor,
  strokeColor,
}: EquivalentPaintPair): SchematicPath => ({
  type: "schematic_path",
  schematic_path_id: "component_foreground",
  schematic_component_id: "component_1",
  points: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ],
  stroke_width: 0.02,
  stroke_color: strokeColor,
  fill_color: fillColor,
  is_filled: true,
  is_dashed: false,
})

const createComponentLine = (color: string): SchematicLine => ({
  type: "schematic_line",
  schematic_line_id: "component_line",
  schematic_component_id: "component_1",
  x1: 0,
  y1: 0,
  x2: 1,
  y2: 0,
  stroke_width: 0.02,
  color,
  is_dashed: false,
})

const createComponentRect = (color: string): SchematicRect => ({
  type: "schematic_rect",
  schematic_rect_id: "component_rect",
  schematic_component_id: "component_1",
  center: { x: 0, y: 0 },
  width: 1,
  height: 1,
  rotation: 0,
  stroke_width: 0.02,
  color,
  fill_color: "#ffffc2",
  is_filled: true,
  is_dashed: false,
})

test("equivalent CSS colors remain component foreground fills", () => {
  const equivalentPaintPairs: EquivalentPaintPair[] = [
    { fillColor: "#840000", strokeColor: "rgb(132, 0, 0)" },
    { fillColor: "rgb(132 0 0)", strokeColor: "#840000" },
    { fillColor: "#000", strokeColor: "#000000" },
  ]

  for (const paintPair of equivalentPaintPairs) {
    expect(
      getSchematicPrimitivePaint(createComponentPath(paintPair)),
    ).toMatchObject({
      strokeColor: "#840000",
      fillColor: "#840000",
    })
  }
})

test("transparent CSS fills remain transparent", () => {
  const transparentFillColors = ["none", "transparent", "rgb(0 0 0 / 0)"]

  for (const fillColor of transparentFillColors) {
    expect(
      getSchematicPrimitivePaint(
        createComponentPath({ fillColor, strokeColor: "#840000" }),
      ),
    ).toMatchObject({
      strokeColor: "#840000",
      fillColor,
    })
  }
})

test("transparent component strokes remain transparent", () => {
  const transparentStrokeColors = ["none", "transparent", "rgb(0 0 0 / 0)"]

  for (const strokeColor of transparentStrokeColors) {
    expect(
      getSchematicPrimitivePaint(
        createComponentPath({ fillColor: "#ffffc2", strokeColor }),
      ),
    ).toMatchObject({ strokeColor })
    expect(
      getSchematicPrimitivePaint(createComponentRect(strokeColor)),
    ).toMatchObject({ color: strokeColor })
    expect(
      getSchematicPrimitivePaint(createComponentLine(strokeColor)),
    ).toMatchObject({ color: strokeColor })
  }
})
