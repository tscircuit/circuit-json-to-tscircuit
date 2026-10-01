import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("executes board table text containing quotes", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      num_layers: 2,
      thickness: 1.6,
      material: "fr4",
    },
    {
      type: "schematic_table",
      schematic_table_id: "table",
      anchor_position: { x: 0, y: 0 },
      column_widths: [2],
      row_heights: [1],
      cell_padding: 0.1,
      border_width: 0.05,
      anchor: "top_left",
    },
    {
      type: "schematic_table_cell",
      schematic_table_cell_id: "cell",
      schematic_table_id: "table",
      start_row_index: 0,
      end_row_index: 0,
      start_column_index: 0,
      end_column_index: 0,
      text: 'Size 1"',
      center: { x: 1, y: -0.5 },
      width: 2,
      height: 1,
      horizontal_align: "left",
      vertical_align: "middle",
    },
  ]
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "QuotedTable",
  })
  expect(generatedTscircuit).toContain('text={"Size 1\\""}')

  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  expect(
    renderedCircuitJson.some(
      (element) =>
        element.type === "schematic_table_cell" && element.text === 'Size 1"',
    ),
  ).toBe(true)
})
