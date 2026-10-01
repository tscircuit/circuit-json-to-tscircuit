import { expect, test } from "bun:test"
import type { CircuitJson, PcbBoard } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves offset board bounds without moving its footprint", async () => {
  for (const center of [
    { x: 60, y: 85 },
    { x: -60, y: -85 },
  ]) {
    const board: PcbBoard = {
      type: "pcb_board",
      pcb_board_id: "board",
      center,
      width: 20,
      height: 10,
      num_layers: 2,
      thickness: 1.6,
      material: "fr4",
      outline: [
        { x: center.x - 10, y: center.y - 5 },
        { x: center.x + 10, y: center.y - 5 },
        { x: center.x + 10, y: center.y + 5 },
        { x: center.x - 10, y: center.y + 5 },
      ],
    }
    const circuitJson: CircuitJson = [
      board,
      {
        type: "pcb_hole",
        pcb_hole_id: "hole",
        x: center.x + 2,
        y: center.y - 1,
        hole_shape: "circle",
        hole_diameter: 1,
      },
    ]
    const rendered = (await runTscircuitCode(
      convertCircuitJsonToTscircuit(circuitJson, {
        componentName: "OffsetBoard",
      }),
    )) as CircuitJson
    expect(
      rendered.find((element) => element.type === "pcb_board"),
    ).toMatchObject({
      center,
      width: board.width,
      height: board.height,
      outline: board.outline,
    })
    expect(
      rendered.find((element) => element.type === "pcb_hole"),
    ).toMatchObject({ x: center.x + 2, y: center.y - 1 })
  }
})
