import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { generateSymbolTsx } from "../lib/generate-symbol-tsx"

const render = async (children: string) =>
  (await runTscircuitCode(
    `export default () => <board width="30mm" height="30mm">${children}</board>`,
  )) as AnyCircuitElement[]

test.each([
  { widths: [2, 3] },
  { widths: [6, 2] },
  { widths: [1, 4, 8] },
  { widths: [3, 3] },
])("preserves columns under a spanning header: %s", async ({ widths }) => {
  const source = await render(`<schematictable cellPadding={0.2}>
    <schematicrow height={1}>
      <schematiccell text="Header" colSpan={${widths.length}} width={${Math.min(...widths)}} />
    </schematicrow>
    <schematicrow height={2}>
      ${widths.map((width, i) => `<schematiccell text="C${i}" width={${width}} />`).join("")}
    </schematicrow>
  </schematictable>`)
  const table = source.find((e) => e.type === "schematic_table")!
  expect(table.column_widths).toEqual([...widths])

  let current = source
  for (let round = 0; round < 2; round++) {
    const symbol = generateSymbolTsx(current)!
    current = await render(
      symbol.replace(/^<symbol>/, "").replace(/<\/symbol>$/, ""),
    )
    const result = current.find((e) => e.type === "schematic_table")!
    expect(result.column_widths).toEqual([...widths])
    expect(result.row_heights).toEqual(table.row_heights)
    const cellGeometry = (elements: AnyCircuitElement[]) =>
      elements
        .filter((e) => e.type === "schematic_table_cell")
        .map((e) => ({
          text: e.text,
          width: e.width,
          height: e.height,
          start_column_index: e.start_column_index,
          end_column_index: e.end_column_index,
        }))
    expect(cellGeometry(current)).toEqual(cellGeometry(source))
  }
})
