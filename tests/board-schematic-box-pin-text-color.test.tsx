import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("uses the compiled schematic color for box pin text", async () => {
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
      type: "source_port",
      source_port_id: "feedback_source",
      name: "FB",
      pin_number: 1,
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
      pin_number: 1,
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "ImportedController",
    }),
  )
  const pinTexts = renderedCircuitJson
    .filter((element) => element.type === "schematic_text")
    .filter((element) => element.text === "FB" || element.text === "1")

  expect(pinTexts).toHaveLength(2)
  expect(pinTexts.every((text) => text.color === "#a90000")).toBe(true)
})
