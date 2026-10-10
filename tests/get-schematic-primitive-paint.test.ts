import { expect, test } from "bun:test"
import type { SchematicPath } from "circuit-json"
import { getSchematicPrimitivePaint } from "../lib/generate-board-schematic-tsx/get-schematic-primitive-paint"

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

test("equivalent CSS colors remain component foreground fills", () => {
  const equivalentPaintPairs: EquivalentPaintPair[] = [
    { fillColor: "#840000", strokeColor: "rgb(132, 0, 0)" },
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
