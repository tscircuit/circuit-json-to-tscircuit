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
    source_component_id: "controller",
    name: "U1",
    ftype: "simple_chip",
  },
  {
    type: "schematic_component",
    schematic_component_id: "controller_symbol",
    source_component_id: "controller",
    center: { x: 2, y: 3 },
    size: { width: 2, height: 3 },
    is_box_with_pins: true,
  },
  {
    type: "schematic_text",
    schematic_text_id: "controller_label",
    schematic_component_id: "controller_symbol",
    text: 'U1 "controller" {flyback}',
    position: { x: 1, y: 5 },
    anchor: "bottom_left",
    font_size: 0.2,
    color: "#000000",
    rotation: 90,
  },
  {
    type: "schematic_trace",
    schematic_trace_id: "wire",
    source_trace_id: "connection",
    edges: [
      { from: { x: -2, y: 2 }, to: { x: 0, y: 2 } },
      { from: { x: 0, y: 2 }, to: { x: 0, y: -1 } },
    ],
    junctions: [{ x: 0, y: 2 }],
  },
]

test("test22 preserves board schematic drawing without a PCB footprint", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ImportedBoard",
  })
  expect(generatedTscircuit).toContain("<schematicpath")
  expect(generatedTscircuit).not.toContain("<symbol>")
  expect(generatedTscircuit).not.toContain("footprint=")
  expect(generatedTscircuit).not.toContain("svgPath=")
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const controllerLabel = renderedCircuitJson.find(
    (elm) => elm.type === "schematic_text" && elm.text.includes("flyback"),
  )
  if (controllerLabel?.type !== "schematic_text") {
    throw new Error("Controller label was lost")
  }
  expect(controllerLabel.text).toBe('U1 "controller" {flyback}')
  expect(controllerLabel.position.x).toBeCloseTo(1, 6)
  expect(controllerLabel.position.y).toBeCloseTo(5, 6)
  expect(controllerLabel.rotation).toBe(90)
  const paths = renderedCircuitJson.filter(
    (elm) => elm.type === "schematic_path",
  )
  expect(
    paths.some((path) =>
      path.points.some((point) => point.x === -2 && point.y === 2),
    ),
  ).toBe(true)
  expect(
    renderedCircuitJson.some(
      (elm) => elm.type === "pcb_missing_footprint_error",
    ),
  ).toBe(false)
  await expect(
    convertCircuitJsonToSchematicSvg(renderedCircuitJson),
  ).toMatchSvgSnapshot(import.meta.path, "schematic")
})
