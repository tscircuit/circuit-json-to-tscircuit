import { expect, test } from "bun:test"
import { convertCircuitJsonToSolderPasteMask } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

test("custom solder-paste dimensions survive conversion on both copper sides", async () => {
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
  const source =
    await runTscircuitCode(`export default () => <board width={10} height={10}>
    <chip name="U1" footprint={<footprint>${pads.join("\n")}</footprint>} />
  </board>`)
  const output = await runTscircuitCode(
    convertCircuitJsonToTscircuit(source, { componentName: "PasteBoard" }),
  )
  for (const layer of ["top", "bottom"] as const) {
    const sourceSvg = convertCircuitJsonToSolderPasteMask(source, {
      layer,
      width: 400,
      height: 400,
      includeVersion: false,
    })
    const outputSvg = convertCircuitJsonToSolderPasteMask(output, {
      layer,
      width: 400,
      height: 400,
      includeVersion: false,
    })
    const comparison = stackSvgsHorizontally([sourceSvg, outputSvg], {
      gap: 24,
    })
    await expect(comparison).toMatchSvgSnapshot(import.meta.path, layer)
  }
  const sourcePastes = source.filter((e) => e.type === "pcb_solder_paste")
  const outputPastes = output.filter((e) => e.type === "pcb_solder_paste")
  expect(sourcePastes).toHaveLength(18)
  expect(outputPastes).toHaveLength(18)
  for (const paste of sourcePastes) {
    const actual = outputPastes.find(
      (e) =>
        e.layer === paste.layer &&
        Math.abs(e.x - paste.x) < 1e-6 &&
        Math.abs(e.y - paste.y) < 1e-6,
    )
    expect(actual).toBeDefined()
    if (!actual) throw new Error("Missing solder-paste aperture")
    expect(actual.shape).toBe(paste.shape)
    if (paste.shape === "circle" && actual.shape === "circle") {
      expect(actual.radius).toBeCloseTo(paste.radius, 6)
    } else if (
      (paste.shape === "rect" || paste.shape === "rotated_rect") &&
      (actual.shape === "rect" || actual.shape === "rotated_rect")
    ) {
      expect(actual.width).toBeCloseTo(paste.width, 6)
      expect(actual.height).toBeCloseTo(paste.height, 6)
      if (paste.shape === "rotated_rect" && actual.shape === "rotated_rect") {
        expect(actual.ccw_rotation).toBeCloseTo(paste.ccw_rotation, 6)
      }
    }
  }
})
