import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("does not duplicate numeric box pin names", async () => {
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
      schematic_component_id: "net_tie",
      center: { x: 0, y: 0 },
      size: { width: 0.4, height: 0.4 },
      is_box_with_pins: true,
    },
    {
      type: "source_port",
      source_port_id: "net_tie_left_source",
      name: "1",
      pin_number: 1,
    },
    {
      type: "source_port",
      source_port_id: "net_tie_right_source",
      name: "2",
      pin_number: 2,
    },
    {
      type: "schematic_port",
      schematic_port_id: "net_tie_left",
      source_port_id: "net_tie_left_source",
      schematic_component_id: "net_tie",
      center: { x: -0.4, y: 0 },
      side_of_component: "left",
      facing_direction: "left",
      pin_number: 1,
    },
    {
      type: "schematic_port",
      schematic_port_id: "net_tie_right",
      source_port_id: "net_tie_right_source",
      schematic_component_id: "net_tie",
      center: { x: 0.4, y: 0 },
      side_of_component: "right",
      facing_direction: "right",
      pin_number: 2,
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "NetTieBoard",
    }),
  )
  const numericTexts = renderedCircuitJson
    .flatMap((element) =>
      element.type === "schematic_text" && /^[12]$/.test(element.text)
        ? [element.text]
        : [],
    )
    .sort()

  expect(numericTexts).toEqual(["1", "2"])
})
