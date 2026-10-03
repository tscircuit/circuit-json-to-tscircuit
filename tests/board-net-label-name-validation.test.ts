import { expect, test } from "bun:test"
import { canRenderNativeNetLabel } from "../lib/generate-board-schematic-tsx/can-render-native-net-label"
import { runTscircuitCode } from "tscircuit"

for (const name of ["VCC-P", "VCC+P", "3V3", "1", "-VCC", "net.name"]) {
  test(`native label guard agrees with core rejection of ${name}`, async () => {
    expect(canRenderNativeNetLabel(name)).toBe(false)
    await expect(
      runTscircuitCode(
        `export default () => <board><netlabel net={${JSON.stringify(name)}} /></board>`,
      ),
    ).rejects.toThrow(/Net name/)
  })
}

for (const name of ["SDA", "V3_3", "_RESET", "/RESET", "A1"]) {
  test(`native label guard agrees with core acceptance of ${name}`, async () => {
    expect(canRenderNativeNetLabel(name)).toBe(true)
    const output = await runTscircuitCode(
      `export default () => <board><netlabel net={${JSON.stringify(name)}} /></board>`,
    )
    expect(output).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: "schematic_net_label", text: name }),
      ]),
    )
  })
}

test("embedded slashes cannot resolve a native label net", async () => {
  expect(canRenderNativeNetLabel("BUS/DATA")).toBe(false)
  await expect(
    runTscircuitCode(
      'export default () => <board><netlabel net="BUS/DATA" /></board>',
    ),
  ).rejects.toThrow()
})
