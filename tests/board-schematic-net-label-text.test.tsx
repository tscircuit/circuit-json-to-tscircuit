import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves text for imported symbolic net labels", async () => {
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
      type: "source_net",
      source_net_id: "power_good_net",
      name: "PGOOD",
      member_source_group_ids: [],
    },
    {
      type: "schematic_net_label",
      schematic_net_label_id: "power_good_label",
      source_net_id: "power_good_net",
      text: "PGOOD",
      center: { x: 1, y: 2 },
      anchor_position: { x: 1, y: 2 },
      anchor_side: "left",
      symbol_name: "vcc_right",
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "NetLabelBoard",
    }),
  )

  expect(
    renderedCircuitJson.some(
      (element) =>
        element.type === "schematic_text" && element.text === "PGOOD",
    ),
  ).toBe(true)
})
