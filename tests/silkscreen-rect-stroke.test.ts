import { expect, test } from "bun:test"
import { convertSilkscreen } from "../lib/generate-footprint-tsx/convert-silkscreen"

test("maps rectangle stroke flags without re-enabling a disabled outline", () => {
  const cases = [
    [{ has_stroke: false, is_stroke_dashed: true }, "none"],
    [{ has_stroke: false }, "none"],
    [{ has_stroke: true, is_stroke_dashed: true }, "dashed"],
    [{ is_stroke_dashed: true }, "dashed"],
    [{ has_stroke: true }, "solid"],
    [{ is_stroke_dashed: false }, "solid"],
    [{}, undefined],
  ] as const
  for (const [flags, stroke] of cases) {
    const [tsx] = convertSilkscreen([
      {
        type: "pcb_silkscreen_rect",
        layer: "top",
        center: { x: 0, y: 0 },
        width: 4,
        height: 2,
        stroke_width: 0.2,
        is_filled: true,
        ...flags,
      },
    ] as any)
    if (stroke) expect(tsx).toContain(`stroke="${stroke}"`)
    else expect(tsx).not.toContain('stroke="')
    expect(tsx).toContain("filled={true}")
    expect(tsx).toContain("strokeWidth={0.2}")
  }
})
