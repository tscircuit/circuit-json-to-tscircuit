import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

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
    type: "source_component",
    source_component_id: "custom_chip",
    name: "U1",
    ftype: "simple_chip",
  },
  {
    type: "schematic_component",
    schematic_component_id: "custom_symbol",
    source_component_id: "custom_chip",
    center: { x: 0, y: 0 },
    size: { width: 2, height: 2 },
    is_box_with_pins: false,
  },
  {
    type: "schematic_rect",
    schematic_rect_id: "component_body",
    schematic_component_id: "custom_symbol",
    center: { x: 0, y: 0 },
    width: 2,
    height: 2,
    rotation: 0,
    stroke_width: 0.04,
    color: "#0000ff",
    fill_color: "#ffffff",
    is_filled: true,
    is_dashed: false,
  },
  {
    type: "schematic_path",
    schematic_path_id: "component_triangle",
    schematic_component_id: "custom_symbol",
    points: [
      { x: -0.5, y: -0.5 },
      { x: 0.6, y: 0 },
      { x: -0.5, y: 0.5 },
      { x: -0.5, y: -0.5 },
    ],
    stroke_width: 0.04,
    stroke_color: "#0000ff",
    fill_color: "#0000ff",
    is_filled: true,
    is_dashed: false,
  },
  {
    type: "schematic_circle",
    schematic_circle_id: "component_bubble",
    schematic_component_id: "custom_symbol",
    center: { x: 0.75, y: 0 },
    radius: 0.12,
    stroke_width: 0.04,
    color: "#0000ff",
    fill_color: "#ffffff",
    is_filled: true,
    is_dashed: false,
  },
  {
    type: "schematic_text",
    schematic_text_id: "component_art_text",
    schematic_component_id: "custom_symbol",
    text: "CUSTOM",
    position: { x: 0, y: 0.75 },
    anchor: "center",
    font_size: 0.15,
    color: "#000080",
    rotation: 0,
  },
  {
    type: "schematic_line",
    schematic_line_id: "library_symbol_line",
    schematic_symbol_id: "library_symbol",
    x1: -1.5,
    y1: -0.5,
    x2: -1.5,
    y2: 0.5,
    stroke_width: 0.08,
    color: "#00aa00",
    is_dashed: false,
  },
  {
    type: "schematic_text",
    schematic_text_id: "component_reference",
    schematic_component_id: "custom_symbol",
    text: "U1",
    position: { x: 0, y: 1.2 },
    anchor: "center",
    font_size: 0.15,
    color: "#006464",
    rotation: 0,
  },
  {
    type: "schematic_path",
    schematic_path_id: "standalone_blue_note",
    points: [
      { x: 2, y: -1 },
      { x: 2, y: 1 },
    ],
    stroke_width: 0.08,
    stroke_color: "#0000ff",
    is_filled: false,
    is_dashed: false,
  },
]

test("uses tscircuit colors for imported component artwork", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "CanonicalSymbolColors",
  })
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const componentBody = renderedCircuitJson.find(
    (element) =>
      element.type === "schematic_path" && element.fill_color === "#ffffc2",
  )
  const standaloneNote = renderedCircuitJson.find(
    (element) =>
      element.type === "schematic_path" && element.stroke_color === "#0000ff",
  )
  const librarySymbolLine = renderedCircuitJson.find(
    (element) => element.type === "schematic_line" && element.x1 === -1.5,
  )

  expect(componentBody).toMatchObject({
    stroke_color: "#840000",
    fill_color: "#ffffc2",
  })
  expect(standaloneNote).toMatchObject({ stroke_color: "#0000ff" })
  expect(librarySymbolLine).toMatchObject({ color: "#840000" })
  expect(generatedTscircuit).toContain('color={"#840000"}')
  expect(generatedTscircuit).toContain('fillColor={"#ffffc2"}')
  expect(generatedTscircuit).toContain('color={"#006464"}')
  await expect(
    convertCircuitJsonToSchematicSvg(renderedCircuitJson),
  ).toMatchSvgSnapshot(import.meta.path)
})
