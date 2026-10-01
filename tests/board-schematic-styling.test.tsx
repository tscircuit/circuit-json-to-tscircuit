import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves imported schematic styling", async () => {
  const styledCircuitJson: CircuitJson = [
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
      type: "schematic_path",
      schematic_path_id: "styled_path",
      points: [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
      ],
      stroke_color: "#123456",
      stroke_width: 0.07,
      fill_color: "#abcdef",
      is_filled: true,
      is_dashed: false,
    },
    {
      type: "schematic_text",
      schematic_text_id: "styled_label",
      text: "source styling",
      position: { x: 7, y: 8 },
      anchor: "top_right",
      font_size: 0.31,
      color: "#654321",
      rotation: 25,
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(styledCircuitJson, {
      componentName: "StyledBoard",
    }),
  )
  const path = renderedCircuitJson.find(
    (element) => element.type === "schematic_path",
  )
  const text = renderedCircuitJson.find(
    (element) => element.type === "schematic_text",
  )
  if (path?.type !== "schematic_path" || text?.type !== "schematic_text") {
    throw new Error("Missing styled schematic primitives")
  }

  expect(path.points).toEqual([
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ])
  expect(path.stroke_color).toBe("#123456")
  expect(path.stroke_width).toBe(0.07)
  expect(path.fill_color).toBe("#abcdef")
  expect(text.position).toEqual({ x: 7, y: 8 })
  expect(text.color).toBe("#654321")
  expect(text.font_size).toBe(0.31)
  expect(text.rotation).toBe(25)
})
