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
  expect(generatedTscircuit).toContain("<symbol>")
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
  expect(controllerLabel.rotation).toBe(-90)
  const paths = renderedCircuitJson.filter(
    (elm) => elm.type === "schematic_path",
  )
  expect(
    paths.some((path) =>
      path.points.some((point) => point.x === -2 && point.y === 2),
    ),
  ).toBe(true)
  const junctions = renderedCircuitJson.filter(
    (elm) => elm.type === "schematic_circle",
  )
  expect(
    junctions.some(
      (circle) =>
        Math.abs(circle.center.x) < 0.000001 &&
        Math.abs(circle.center.y - 2) < 0.000001,
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

// Imported symbol bounds can be canonical while port positions use another scale.
test("fits named symbol geometry to imported schematic ports", async () => {
  const importedCapacitor: CircuitJson = [
    circuitJson[0]!,
    {
      type: "schematic_component",
      schematic_component_id: "capacitor",
      center: { x: 10, y: 3 },
      size: { width: 0.9, height: 0.6 },
      symbol_name: "capacitor_down",
      is_box_with_pins: true,
    },
    {
      type: "schematic_port",
      schematic_port_id: "top",
      schematic_component_id: "capacitor",
      source_port_id: "top",
      center: { x: 10, y: 5 },
      facing_direction: "up",
      side_of_component: "top",
    },
    {
      type: "schematic_port",
      schematic_port_id: "bottom",
      schematic_component_id: "capacitor",
      source_port_id: "bottom",
      center: { x: 10, y: 1 },
      facing_direction: "down",
      side_of_component: "bottom",
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(importedCapacitor, {
      componentName: "ImportedCapacitor",
    }),
  )
  const points = renderedCircuitJson.flatMap((element) =>
    element.type === "schematic_path" ? element.points : [],
  )
  for (const y of [1, 5])
    expect(
      points.some(
        (point) =>
          Math.abs(point.x - 10) < 0.000001 && Math.abs(point.y - y) < 0.000001,
      ),
    ).toBe(true)
})
