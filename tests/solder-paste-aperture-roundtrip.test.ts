import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToSolderPasteMask } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

test("preserve custom solder-paste apertures through conversion", async () => {
  const pads: string[] = []
  let pin = 0
  for (const layer of ["top", "bottom"]) {
    for (const [row, shape] of ["rect", "circle", "rotated_rect"].entries()) {
      for (const [column, margin] of [0, -0.2, 0.125].entries()) {
        const size =
          shape === "circle"
            ? "radius={0.8}"
            : `width={2} height={1.6}${shape === "rotated_rect" ? " ccwRotation={45}" : ""}`
        pads.push(`<smtpad shape="${shape}" ${size} layer="${layer}"
          pcbX={${(column - 1) * 3}} pcbY={${(1 - row) * 3}}
          portHints={["${++pin}"]} solderPasteMargin={${margin}} />`)
      }
    }
  }
  const source = await runTscircuitCode(`export default () => (
    <board width={10} height={10}>
      <chip name="U1" footprint={<footprint>${pads.join("\n")}</footprint>} />
    </board>
  )`)
  const tsx = convertCircuitJsonToTscircuit(source, {
    componentName: "PasteBoard",
  })
  const output = await runTscircuitCode(tsx)

  for (const layer of ["top", "bottom"] as const) {
    const render = (json: AnyCircuitElement[]) =>
      convertCircuitJsonToSolderPasteMask(json, {
        layer,
        width: 400,
        height: 400,
        includeVersion: false,
      })
    const comparison = stackSvgsHorizontally([render(source), render(output)], {
      gap: 24,
      rootAttributes: {
        "aria-label": `${layer} solder paste: source on left, round trip on right`,
        role: "img",
      },
    })
    await expect(comparison).toMatchSvgSnapshot(import.meta.path, layer)
  }

  const sourcePastes = source.filter((e) => e.type === "pcb_solder_paste")
  const outputPastes = output.filter((e) => e.type === "pcb_solder_paste")
  expect(sourcePastes).toHaveLength(18)
  expect(outputPastes).toHaveLength(sourcePastes.length)
  for (const paste of sourcePastes) {
    const actual = outputPastes.find(
      (e) =>
        e.layer === paste.layer &&
        Math.abs(e.x - paste.x) < 1e-6 &&
        Math.abs(e.y - paste.y) < 1e-6,
    )
    expect(actual).toBeDefined()
    expect(actual!.shape).toBe(paste.shape)
    for (const field of [
      "width",
      "height",
      "radius",
      "ccw_rotation",
    ] as const) {
      if (field in paste) {
        expect((actual as any)[field]).toBeCloseTo((paste as any)[field], 6)
      }
    }
  }
}, 15000)
