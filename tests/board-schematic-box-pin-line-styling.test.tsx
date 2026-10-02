import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("uses compiled schematic styling for box pin lines", async () => {
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
      type: "schematic_component",
      schematic_component_id: "controller",
      center: { x: 0, y: 0 },
      size: { width: 2, height: 1 },
      is_box_with_pins: true,
    },
    {
      type: "schematic_port",
      schematic_port_id: "feedback",
      source_port_id: "feedback_source",
      schematic_component_id: "controller",
      center: { x: -1.4, y: 0 },
      distance_from_component_edge: 0.4,
      side_of_component: "left",
      facing_direction: "left",
      display_pin_label: "FB",
      pin_number: 1,
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "ImportedController",
    }),
  )
  const pinLine = renderedCircuitJson.find(
    (element) =>
      element.type === "schematic_line" &&
      element.x1 === -1 &&
      element.y1 === 0 &&
      element.x2 === -1.4 &&
      element.y2 === 0,
  )

  expect(pinLine).toMatchObject({
    stroke_width: 0.02,
    color: "#840000",
  })
})
