import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("standalone PCB primitives do not create a board-sized component obstruction", () => {
  const source: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_hole",
      pcb_hole_id: "pcb_hole",
      x: 4,
      y: 4,
      hole_shape: "circle",
      hole_diameter: 1,
    },
  ]

  const generated = convertCircuitJsonToTscircuit(source, {
    componentName: "BoardWithMountingHole",
  })

  expect(generated).toContain(
    '<chip name="ImportedBoard" noSchematicRepresentation obstructsWithinBounds={false}',
  )
})
