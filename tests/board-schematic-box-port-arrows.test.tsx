import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves input and output arrows on imported box pins", async () => {
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
      size: { width: 2, height: 2 },
      is_box_with_pins: true,
    },
    {
      type: "schematic_port",
      schematic_port_id: "output",
      source_port_id: "output_source",
      schematic_component_id: "controller",
      center: { x: -1.4, y: 0 },
      side_of_component: "left",
      facing_direction: "left",
      has_output_arrow: true,
      is_drawn_with_inversion_circle: true,
      pin_number: 1,
    },
    {
      type: "schematic_port",
      schematic_port_id: "input",
      source_port_id: "input_source",
      schematic_component_id: "controller",
      center: { x: 1.4, y: 0.4 },
      side_of_component: "right",
      facing_direction: "right",
      has_input_arrow: true,
      is_drawn_with_inversion_circle: true,
      pin_number: 2,
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "ArrowPinBoard",
    }),
  )
  const arrowPaths = renderedCircuitJson.flatMap((element) =>
    element.type === "schematic_path" &&
    element.is_filled &&
    element.fill_color === "#ffffff"
      ? [element]
      : [],
  )

  expect(arrowPaths).toHaveLength(2)
  expect(
    arrowPaths.some((path) =>
      path.points.some(
        (point) => Math.abs(point.x + 1.22) < 0.000001 && point.y === 0,
      ),
    ),
  ).toBe(true)
  expect(
    arrowPaths.some((path) =>
      path.points.some(
        (point) =>
          Math.abs(point.x - 1.12) < 0.000001 &&
          Math.abs(point.y - 0.4) < 0.000001,
      ),
    ),
  ).toBe(true)

  const inversionCircles = renderedCircuitJson.flatMap((element) =>
    element.type === "schematic_circle" &&
    element.is_filled &&
    element.fill_color === "#ffffff" &&
    element.radius === 0.06
      ? [element]
      : [],
  )
  expect(inversionCircles).toHaveLength(2)
  expect(inversionCircles.map((circle) => circle.center.x).sort()).toEqual([
    -1.06, 1.06,
  ])

  const shiftedPinLines = renderedCircuitJson.flatMap((element) =>
    element.type === "schematic_line" &&
    ((Math.abs(element.x1 + 1.12) < 0.000001 && element.y1 === 0) ||
      (Math.abs(element.x1 - 1.12) < 0.000001 &&
        Math.abs(element.y1 - 0.4) < 0.000001))
      ? [element]
      : [],
  )
  expect(shiftedPinLines).toHaveLength(2)
})
