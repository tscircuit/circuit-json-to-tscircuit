import { expect, test } from "bun:test"
import type { AnyCircuitElement, SchematicBox } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { generateSymbolTsx } from "../lib/generate-symbol-tsx"

test.each([
  { x: 5, y: 3, width: 4, height: 2, is_dashed: true },
  { x: -6, y: -1, width: 2, height: 2, is_dashed: false },
  { x: -2, y: -1, width: 4, height: 2, is_dashed: true },
  { x: -2, y: -1, width: 4, height: 2, is_dashed: false },
])("preserves schematic box geometry and line style %s", async (geometry) => {
  const box: SchematicBox = { type: "schematic_box", ...geometry }
  const symbol = generateSymbolTsx([box])!
  // Render the generated primitive without automatic chip symbol resizing.
  const primitives = symbol.replace(/^<symbol>/, "").replace(/<\/symbol>$/, "")
  const output = (await runTscircuitCode(
    `export default () => <board width="20mm" height="20mm">${primitives}</board>`,
  )) as AnyCircuitElement[]
  const boxes = output.filter((element) => element.type === "schematic_box")
  expect(boxes).toHaveLength(1)
  expect(boxes[0]).toMatchObject(geometry)
})
