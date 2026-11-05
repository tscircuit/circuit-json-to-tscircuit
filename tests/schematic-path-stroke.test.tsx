import { expect, test } from "bun:test"
import type { AnyCircuitElement, SchematicPath } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { convertCircuitJsonToTscircuit } from "../lib"

test.each([
  { stroke_color: "green", stroke_width: 0.25, is_filled: true },
  { stroke_color: "#123456", stroke_width: 0.12, is_filled: false },
  { stroke_color: "black", stroke_width: 0, is_filled: true },
])("preserves path stroke %s through generated TSX", async (style) => {
  const path: SchematicPath = {
    type: "schematic_path",
    schematic_path_id: "path",
    points: [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 0, y: 2 },
      { x: 0, y: 0 },
    ],
    fill_color: "red",
    is_dashed: false,
    ...style,
  }
  const code = convertCircuitJsonToTscircuit([path], {
    componentName: "StyledPath",
  })
  const output = (await runTscircuitCode(`${code}
    circuit.add(<board width="20mm" height="20mm"><StyledPath /></board>)
  `)) as AnyCircuitElement[]
  const paths = output.filter((element) => element.type === "schematic_path")
  expect(paths.length).toBeGreaterThan(0)
  for (const result of paths) {
    expect(result).toMatchObject({ ...style, fill_color: "red" })
  }
})

test.each([undefined, null])(
  "omits an unspecified stroke width (%s)",
  (stroke_width) => {
    const code = convertCircuitJsonToTscircuit(
      [
        {
          type: "schematic_path",
          schematic_path_id: "path",
          points: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
          ],
          fill_color: "blue",
          is_dashed: false,
          stroke_width,
        },
      ],
      { componentName: "DefaultStroke" },
    )
    expect(code).toContain('strokeColor="blue"')
    expect(code).not.toContain("strokeWidth=")
  },
)
