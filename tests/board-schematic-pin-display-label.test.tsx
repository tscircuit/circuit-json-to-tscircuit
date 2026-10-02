import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("uses the schematic port display label for imported box pins", async () => {
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
      type: "source_port",
      source_port_id: "feedback",
      name: "FB/I\\N\\T\\",
    },
    {
      type: "schematic_component",
      schematic_component_id: "controller_symbol",
      source_component_id: "controller",
      center: { x: 0, y: 0 },
      size: { width: 2, height: 2 },
      is_box_with_pins: true,
    },
    {
      type: "schematic_port",
      schematic_port_id: "feedback_pin",
      schematic_component_id: "controller_symbol",
      source_port_id: "feedback",
      center: { x: 1.4, y: 0 },
      side_of_component: "right",
      facing_direction: "right",
      pin_number: 1,
      display_pin_label: "FB/INT",
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "PinLabelBoard",
    }),
  )
  const text = renderedCircuitJson
    .filter((element) => element.type === "schematic_text")
    .map((element) => element.text)

  expect(text).toContain("FB/INT")
  expect(text).not.toContain("FB/I\\N\\T\\")
})
