import { expect, test } from "bun:test"
import { convertSymbolPrimitives } from "../lib/generate-board-schematic-tsx/convert-symbol-primitives"
import { compose, rotateDEG, scale, translate } from "transformation-matrix"
import { runTscircuitCode } from "tscircuit"

test("transforms symbol primitives with compiled circle styling", async () => {
  const elementStrings = convertSymbolPrimitives({
    symbol: {
      center: { x: 0, y: 0 },
      size: { width: 3, height: 4 },
      ports: [],
      primitives: [
        {
          type: "circle",
          x: 1,
          y: 2,
          radius: 2,
          fill: false,
          color: "primary",
        },
        { type: "box", x: 1, y: 2, width: 3, height: 4, anchor: "center" },
      ],
    },
    symbolToSchematicTransform: compose(
      translate(10, 20),
      rotateDEG(90),
      scale(2),
    ),
    reference: "",
    displayText: "",
  })
  const circuitJson = await runTscircuitCode(
    `export default () => <board><symbol>${elementStrings.join("\n")}</symbol></board>`,
  )
  const circle = circuitJson.find(
    (element) => element.type === "schematic_circle",
  )
  const rect = circuitJson.find((element) => element.type === "schematic_rect")
  if (circle?.type !== "schematic_circle" || rect?.type !== "schematic_rect")
    throw new Error("Missing transformed primitives")
  expect(circle.center.x).toBeCloseTo(6)
  expect(circle.center.y).toBeCloseTo(22)
  expect(circle.radius).toBeCloseTo(4)
  expect(circle.stroke_width).toBe(0.02)
  expect(rect.center.x).toBeCloseTo(6)
  expect(rect.center.y).toBeCloseTo(22)
  expect(rect.width).toBeCloseTo(6)
  expect(rect.height).toBeCloseTo(8)
  expect(rect.rotation).toBeCloseTo(90)
})
