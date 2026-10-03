import { expect, test } from "bun:test"
import { convertNetLabels } from "../lib/generate-board-schematic-tsx/convert-net-labels"
import { runTscircuitCode } from "tscircuit"

function convertPlainNetLabel(text: string) {
  return convertNetLabels([
    {
      type: "schematic_net_label",
      schematic_net_label_id: "label",
      source_net_id: "net",
      text,
      center: { x: 2, y: 3 },
      anchor_position: { x: 2, y: 3 },
      anchor_side: "left",
    },
  ]).join("\n")
}

for (const name of ["VCC-P", "VCC+P", "3V3", "1", "-VCC", "net.name"]) {
  test(`conversion preserves text when core rejects ${name}`, async () => {
    await expect(
      runTscircuitCode(
        `export default () => <board><netlabel net={${JSON.stringify(name)}} /></board>`,
      ),
    ).rejects.toThrow(/Net name/)
    const generated = convertPlainNetLabel(name)
    expect(generated).not.toContain("<netlabel")
    const output = await runTscircuitCode(
      `export default () => <board><symbol>${generated}</symbol></board>`,
    )
    expect(output).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: "schematic_text", text: name }),
      ]),
    )
  })
}

for (const name of ["SDA", "V3_3", "_RESET", "/RESET", "/3V3", "A1"]) {
  test(`conversion preserves native labels accepted by core: ${name}`, async () => {
    const source = await runTscircuitCode(
      `export default () => <board><netlabel net={${JSON.stringify(name)}} schX={2} schY={3} anchorSide="left" /></board>`,
    )
    const generated = convertNetLabels(source).join("\n")
    expect(generated).toContain("<netlabel")
    const output = await runTscircuitCode(
      `export default () => <board><symbol>${generated}</symbol></board>`,
    )
    expect(output).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "schematic_net_label",
          text: name,
          anchor_position: { x: 2, y: 3 },
          anchor_side: "left",
        }),
      ]),
    )
  })
}

for (const name of [
  "BUS/DATA",
  "//RESET",
  "HV VSYS",
  "A>B",
  "A,B",
  "A[1]",
  "A:B",
  'A"B',
  "",
  "電源",
]) {
  test(`conversion preserves selector-unsafe label text: ${name}`, async () => {
    const generated = convertPlainNetLabel(name)
    expect(generated).not.toContain("<netlabel")
    const output = await runTscircuitCode(
      `export default () => <board><symbol>${generated}</symbol></board>`,
    )
    expect(output).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: "schematic_text", text: name }),
      ]),
    )
  })
}
