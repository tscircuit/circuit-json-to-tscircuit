import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const loadTmds62levmSheet05 = async (): Promise<CircuitJson> => {
  const compressedFixture = await readFile(
    join(
      import.meta.dir,
      "../fixtures/ti-evms/tmds62levm-sheet-05.circuit.json.gz",
    ),
  )
  return JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson
}

const createComparisonPanel = ({
  schematicSvg,
  x,
}: {
  schematicSvg: string
  x: number
}): string => {
  const schematicContents = schematicSvg
    .replace(/^<svg[^>]*>/u, "")
    .replace(/<\/svg>\s*$/u, "")

  return `<svg x="${x}" y="30" width="800" height="600" viewBox="0 0 800 600">${schematicContents}</svg>`
}

test(
  "preserves the TMDS62LEVM sheet 05 block diagram",
  async () => {
    const sourceCircuitJson = await loadTmds62levmSheet05()
    const generatedTscircuit = convertCircuitJsonToTscircuit(
      sourceCircuitJson,
      { componentName: "Tmds62levmSheet05" },
    )
    const renderedCircuitJson = (await runTscircuitCode(
      generatedTscircuit,
    )) as CircuitJson
    const sourceGraphics = sourceCircuitJson.filter(
      (element) => element.type === "schematic_graphic",
    )
    const renderedGraphics = renderedCircuitJson.filter(
      (element) => element.type === "schematic_graphic",
    )

    expect(sourceGraphics).toHaveLength(1)
    expect(renderedGraphics).toHaveLength(sourceGraphics.length)

    const sourceSvg = convertCircuitJsonToSchematicSvg(sourceCircuitJson, {
      width: 800,
      height: 600,
    })
    const renderedSvg = convertCircuitJsonToSchematicSvg(renderedCircuitJson, {
      width: 800,
      height: 600,
    })
    const comparisonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1624" height="630" viewBox="0 0 1624 630" aria-label="TMDS62LEVM sheet 05: preserved block diagram on both sides" role="img">
      <rect width="1624" height="630" fill="#fff" />
      <text x="400" y="20" text-anchor="middle" font-family="sans-serif" font-size="16">Source Circuit JSON</text>
      <text x="1224" y="20" text-anchor="middle" font-family="sans-serif" font-size="16">Round-trip output</text>
      ${createComparisonPanel({ schematicSvg: sourceSvg, x: 0 })}
      ${createComparisonPanel({ schematicSvg: renderedSvg, x: 824 })}
    </svg>`

    await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path)
  },
  { timeout: 120_000 },
)
