import { expect, test } from "bun:test"
import { convertSilkscreen } from "../lib/generate-footprint-tsx/convert-silkscreen"

// Repro for rotations lost by the TI EVM Circuit JSON -> TSX conversion.
test("preserves silkscreenrect rotations on both layers", () => {
  for (const layer of ["top", "bottom"]) {
    for (const rotation of [0, 30, 90, 180, 270, -45, undefined]) {
      const [tsx] = convertSilkscreen([
        {
          type: "pcb_silkscreen_rect",
          layer,
          ccw_rotation: rotation,
          center: { x: 1, y: 2 },
          width: 4,
          height: 2,
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
