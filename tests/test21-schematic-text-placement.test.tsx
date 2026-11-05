import { expect, test } from "bun:test"
import type { AnyCircuitElement, SchematicText } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const placements = [
  { position: { x: 2, y: 3 }, rotation: 0, anchor: "center" },
  { position: { x: 0, y: 0 }, rotation: 0, anchor: "bottom_right" },
  { position: { x: 0, y: 0 }, rotation: 45, anchor: "center" },
  { position: { x: -2.5, y: 1.5 }, rotation: -30, anchor: "top_left" },
  { position: { x: 0, y: 0 }, rotation: 0, anchor: "center" },
] satisfies Pick<SchematicText, "position" | "rotation" | "anchor">[]

test.each(placements)(
  "preserves schematic text placement %j",
  async (placement) => {
    const text: SchematicText = {
      type: "schematic_text",
      schematic_text_id: "label",
      text: "Label",
      font_size: 0.2,
      color: "red",
      ...placement,
    }
    const input = [text]
    const original = structuredClone(input)
    const generated = convertCircuitJsonToTscircuit(input, {
      componentName: "LabelComponent",
    })
    const rendered = (await runTscircuitCode(generated)) as AnyCircuitElement[]
    const labels = rendered.filter(
      (element) => element.type === "schematic_text",
    )

    expect(labels).toHaveLength(1)
    expect(labels[0]).toMatchObject({
      text: text.text,
      font_size: text.font_size,
      color: text.color,
      ...placement,
    })
    expect(input).toEqual(original)
  },
)

test("imported schematic labels retain their separation", async () => {
  const labels: SchematicText[] = [
    {
      type: "schematic_text",
      schematic_text_id: "label_a",
      text: "A",
      position: { x: 2, y: 3 },
      rotation: 45,
      anchor: "top_left",
      font_size: 0.2,
      color: "red",
    },
    {
      type: "schematic_text",
      schematic_text_id: "label_b",
      text: "B",
      position: { x: -2, y: 1 },
      rotation: 0,
      anchor: "bottom_right",
      font_size: 0.2,
      color: "blue",
    },
  ]
  const generated = convertCircuitJsonToTscircuit(labels, {
    componentName: "LabelComponent",
  })
  const rendered = (await runTscircuitCode(generated)) as AnyCircuitElement[]
  const actual = rendered.filter((element) => element.type === "schematic_text")

  expect(actual).toHaveLength(2)
  for (const { schematic_text_id, ...expected } of labels) {
    expect(
      actual.find((element) => element.text === expected.text),
    ).toMatchObject(expected)
  }
})
