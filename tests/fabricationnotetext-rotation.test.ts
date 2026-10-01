import { expect, test } from "bun:test"
import { convertFabrication } from "../lib/generate-footprint-tsx/convert-fabrication"

// Repro for rotations lost by the TI EVM Circuit JSON -> TSX conversion.
test("preserves fabricationnotetext rotations on both layers", () => {
  for (const layer of ["top", "bottom"]) {
    for (const rotation of [0, 30, 90, 180, 270, -45, undefined]) {
      const [tsx] = convertFabrication([
        {
          type: "pcb_fabrication_note_text",
          layer,
          ccw_rotation: rotation,
          anchor_position: { x: 1, y: 2 },
          text: "Assembly",
        },
      ] as any)
      if (rotation === undefined) expect(tsx).not.toContain("pcbRotation")
      else expect(tsx).toContain(`pcbRotation="${rotation}deg"`)
      expect(
        new Bun.Transpiler({ loader: "tsx" }).transformSync(
          `export default () => (${tsx})`,
        ),
      ).toBeTruthy()
    }
  }
})
