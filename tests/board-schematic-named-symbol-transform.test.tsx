import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("fits named symbol geometry to imported schematic ports", async () => {
  const importedCapacitor: CircuitJson = [
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
      schematic_component_id: "capacitor",
      center: { x: 10, y: 3 },
      size: { width: 0.9, height: 0.6 },
      symbol_name: "capacitor_down",
      is_box_with_pins: true,
    },
    {
      type: "schematic_port",
      schematic_port_id: "top",
      pin_number: 1,
      schematic_component_id: "capacitor",
      source_port_id: "top",
      center: { x: 10, y: 5 },
      facing_direction: "up",
      side_of_component: "top",
    },
    {
      type: "schematic_port",
      schematic_port_id: "bottom",
      pin_number: 2,
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
  for (const y of [1, 5]) {
    expect(
      points.some(
        (point) =>
          Math.abs(point.x - 10) < 0.000001 && Math.abs(point.y - y) < 0.000001,
      ),
    ).toBe(true)
  }
})
