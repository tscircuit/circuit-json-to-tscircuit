import { expect, test } from "bun:test"
import { convertFabrication } from "../lib/generate-footprint-tsx/convert-fabrication"

test("preserves dimension offset distance and direction with legacy fallback", () => {
  for (const [fields, expected] of [
    [{ offset_distance: 10, offset_direction: { x: 0, y: -1 } }, 10],
    [{ offset_distance: 11, offset_direction: { x: -1, y: 0 } }, 11],
    [{ offset_distance: 0, offset: 9, offset_direction: { x: 1, y: 0 } }, 0],
    [{ offset: 0.5 }, 0.5],
  ] as const) {
    const [tsx] = convertFabrication([
      {
        type: "pcb_fabrication_note_dimension",
        from: { x: -2, y: 0 },
        to: { x: 2, y: 0 },
        layer: "bottom",
        ...fields,
      },
    ] as any)
    expect(tsx).toContain(`offset={${expected}}`)
    if ("offset_direction" in fields)
      expect(tsx).toContain(
        `offsetDirection={${JSON.stringify(fields.offset_direction)}}`,
      )
    else expect(tsx).not.toContain("offsetDirection")
    expect(tsx).toContain("from={{ x: -2, y: 0 }}")
    expect(tsx).toContain("to={{ x: 2, y: 0 }}")
    expect(tsx).toContain('layer="bottom"')
  }
})
