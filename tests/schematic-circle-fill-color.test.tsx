import { expect, test } from "bun:test"
import type { CircuitJson, SchematicCircle } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves schematic circle fill colors independently of stroke colors", async () => {
  const circles: SchematicCircle[] = ["#ffffff", "#ff0000", undefined].map(
    (fill_color, index) => ({
      type: "schematic_circle",
      schematic_circle_id: `circle_${index}`,
      center: { x: index * 3 - 3, y: 0 },
      radius: 1,
      stroke_width: 0.2,
      color: "#0000ff",
      is_filled: true,
      is_dashed: false,
      fill_color,
    }),
  )
  const tsx = convertCircuitJsonToTscircuit(circles, {
    componentName: "CircleFills",
  })
  const circuitJson = (await runTscircuitCode(`
${tsx}
export default () => <board><CircleFills name="U1" /></board>
  `)) as CircuitJson
  const renderedCircles = circuitJson.filter(
    (element) => element.type === "schematic_circle",
  )

  expect(renderedCircles).toHaveLength(circles.length)
  for (const circle of circles) {
    expect(
      renderedCircles.find((rendered) => rendered.center.x === circle.center.x),
    ).toMatchObject({
      center: circle.center,
      radius: circle.radius,
      stroke_width: circle.stroke_width,
      color: circle.color,
      is_filled: circle.is_filled,
      fill_color: circle.fill_color,
    })
  }
  await expect(
    convertCircuitJsonToSchematicSvg(circuitJson),
  ).toMatchSvgSnapshot(import.meta.path)
})
