import { expect, test } from "bun:test"
import type { CircuitJson, Point } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("fits mirrored three-pin board symbols", async () => {
  const mirroredPorts = [
    { pinNumber: 1, center: { x: -0.57, y: -0.18 } },
    { pinNumber: 2, center: { x: -0.57, y: 0.09 } },
    { pinNumber: 3, center: { x: 0.43, y: -0.04 } },
  ]
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
      schematic_component_id: "opamp",
      center: { x: -0.07, y: -0.05 },
      size: { width: 1, height: 0.72 },
      symbol_name: "opamp_no_power_right",
      is_box_with_pins: true,
    },
    ...mirroredPorts.map(({ pinNumber, center }) => ({
      type: "schematic_port" as const,
      schematic_port_id: `port_${pinNumber}`,
      pin_number: pinNumber,
      schematic_component_id: "opamp",
      source_port_id: `source_port_${pinNumber}`,
      center,
      facing_direction:
        pinNumber === 3 ? ("right" as const) : ("left" as const),
      side_of_component:
        pinNumber === 3 ? ("right" as const) : ("left" as const),
    })),
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "MirroredOpamp",
    }),
  )
  const points = renderedCircuitJson.flatMap((element) =>
    element.type === "schematic_path" ? element.points : [],
  )

  for (const { center } of mirroredPorts) {
    expect(points.some((point) => pointsAreEqual(point, center))).toBe(true)
  }
})

const pointsAreEqual = (first: Point, second: Point) =>
  Math.hypot(first.x - second.x, first.y - second.y) < 0.000001
