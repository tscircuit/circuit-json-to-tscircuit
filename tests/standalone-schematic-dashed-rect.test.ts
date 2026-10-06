import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves dashed rectangles on standalone schematic sheets", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "schematic_sheet",
      schematic_sheet_id: "main_sheet",
      name: "Main",
      sheet_index: 0,
      sheet_size: "a4",
    },
    {
      type: "schematic_rect",
      schematic_rect_id: "dashed_frame",
      schematic_sheet_id: "main_sheet",
      center: { x: 10, y: 10 },
      width: 4,
      height: 2,
      rotation: 0,
      stroke_width: 0.05,
      color: "#840000",
      is_filled: true,
      fill_color: "#ffffc2",
      is_dashed: true,
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "DashedSheet",
  })
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const dashedFrame = renderedCircuitJson.find(
    (element) => element.type === "schematic_path",
  )

  expect(generatedTscircuit).toContain("<schematicsheet")
  if (dashedFrame?.type !== "schematic_path") {
    throw new Error("Expected the dashed rectangle to render as a path")
  }
  expect(dashedFrame.is_dashed).toBe(true)
  expect(dashedFrame.dash_length).toBeCloseTo(0.15)
  expect(dashedFrame.dash_gap).toBeCloseTo(0.15)
})
