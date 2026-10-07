import { expect, test } from "bun:test"
import { getSchematicTextProp } from "lib/generate-board-schematic-tsx/get-schematic-text-prop"

test("converts valid Circuit JSON text parts into rich schematic text", () => {
  expect(
    getSchematicTextProp({
      text: "FB/INT",
      textParts: [{ text: "FB/" }, { text: "INT", is_overlined: true }],
    }),
  ).toEqual([{ text: "FB/" }, { text: "INT", overline: true }])

  expect(
    getSchematicTextProp({
      text: "FB/INT",
      textParts: [{ text: "FB/" }, { text: "IRQ", is_overlined: true }],
    }),
  ).toBe("FB/INT")

  expect(
    getSchematicTextProp({
      text: "FB/INT",
      textParts: [
        { text: "FB/" },
        { text: "", is_overlined: true },
        { text: "INT" },
      ],
    }),
  ).toBe("FB/INT")
})
