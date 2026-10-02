import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves board schematic trace junction markers", async () => {
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
      type: "schematic_trace",
      schematic_trace_id: "crossing_wires",
      source_trace_id: "trace",
      edges: [
        { from: { x: -1, y: 0 }, to: { x: 1, y: 0 } },
        { from: { x: 0, y: -1 }, to: { x: 0, y: 1 } },
      ],
      junctions: [{ x: 0, y: 0 }],
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "JunctionBoard",
    }),
  )
  expect(
    renderedCircuitJson.some(
      (element) =>
        element.type === "schematic_circle" &&
        element.center.x === 0 &&
        element.center.y === 0 &&
        element.radius === 0.03 &&
        element.stroke_width === 0 &&
        element.color === "#009600" &&
        element.fill_color === "#009600" &&
        element.is_filled,
    ),
  ).toBe(true)
  expect(convertCircuitJsonToSchematicSvg(renderedCircuitJson)).toContain(
    "schematic-circle",
  )
})
