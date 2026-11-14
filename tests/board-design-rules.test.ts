import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

// Seven DDR3 balls of the Allwinner H616 devboard (0.65 mm pitch BGA) as
// kicad-to-circuit-json 0.0.150 imports them with the KiCad project file:
// pcb_board minimums from the board constraints and a source_net.trace_width
// from each net class.
const loadImportedBoard = async (): Promise<CircuitJson> =>
  Bun.file(
    new URL("./fixtures/h616-ddr-data-corner.circuit.json", import.meta.url),
  ).json()

const getDesignRules = (circuitJson: CircuitJson) => {
  const boardRules: Record<string, number> = {}
  const traceWidthByNetName: Record<string, number> = {}
  for (const element of circuitJson) {
    if (element.type === "pcb_board") {
      for (const [field, minimum] of Object.entries(element)) {
        if (!field.startsWith("min_")) continue
        if (typeof minimum === "number") boardRules[field] = minimum
      }
    }
    if (element.type === "source_net" && element.trace_width !== undefined) {
      traceWidthByNetName[element.name] = element.trace_width
    }
  }
  return { boardRules, traceWidthByNetName }
}

// Draws the rules to scale beside the balls: one trace per net at its
// source_net.trace_width, and one via at the board's minimum via size.
const getDesignRuleLegend = (circuitJson: CircuitJson): CircuitJson => {
  const { boardRules, traceWidthByNetName } = getDesignRules(circuitJson)
  const legend: CircuitJson = []
  const netNames = Object.keys(traceWidthByNetName).sort()
  for (const [netIndex, netName] of netNames.entries()) {
    const width = traceWidthByNetName[netName]!
    const y = 1.05 - netIndex * 0.3
    legend.push(
      {
        type: "pcb_trace",
        pcb_trace_id: `legend_trace_${netIndex}`,
        route: [
          { route_type: "wire", x: 1.6, y, width, layer: "top" },
          { route_type: "wire", x: 2.3, y, width, layer: "top" },
        ],
      },
      {
        type: "pcb_silkscreen_text",
        pcb_silkscreen_text_id: `legend_text_${netIndex}`,
        pcb_component_id: "legend",
        font: "tscircuit2024",
        font_size: 0.16,
        text: `${netName} ${width}mm`,
        layer: "top",
        anchor_position: { x: 2.45, y },
        anchor_alignment: "center_left",
      },
    )
  }

  const viaPadDiameter = boardRules.min_via_pad_diameter
  const viaHoleDiameter = boardRules.min_via_hole_diameter
  if (viaPadDiameter && viaHoleDiameter) {
    legend.push(
      {
        type: "pcb_via",
        pcb_via_id: "legend_via",
        x: 1.95,
        y: -1.05,
        outer_diameter: viaPadDiameter,
        hole_diameter: viaHoleDiameter,
        layers: ["top", "bottom"],
      },
      {
        type: "pcb_silkscreen_text",
        pcb_silkscreen_text_id: "legend_text_via",
        pcb_component_id: "legend",
        font: "tscircuit2024",
        font_size: 0.16,
        text: `min via ${viaPadDiameter}/${viaHoleDiameter}mm`,
        layer: "top",
        anchor_position: { x: 2.45, y: -1.05 },
        anchor_alignment: "center_left",
      },
    )
  }

  return legend
}

const roundTripImportedBoard = async () => {
  const imported = await loadImportedBoard()
  const tsx = convertCircuitJsonToTscircuit(imported, {
    componentName: "H616DdrDataCorner",
  })
  const rendered = (await runTscircuitCode(tsx)) as CircuitJson
  return { imported, tsx, rendered }
}

test("generated TSX keeps the board minimums and net trace widths", async () => {
  const { imported, tsx, rendered } = await roundTripImportedBoard()
  const importedDesignRules = getDesignRules(imported)
  const renderedDesignRules = getDesignRules(rendered)

  expect(tsx).toContain('minViaPadDiameter="0.35mm"')
  expect(tsx).toContain('nominalTraceWidth="0.0975mm"')
  expect(renderedDesignRules.boardRules).toMatchObject(
    importedDesignRules.boardRules,
  )
  expect(renderedDesignRules.traceWidthByNetName).toEqual(
    importedDesignRules.traceWidthByNetName,
  )
}, 30000)

test("renders an SVG of the design rules before and after the round trip", async () => {
  const { imported, rendered } = await roundTripImportedBoard()
  const comparison = stackSvgsHorizontally(
    [imported, rendered].map((circuitJson) =>
      convertCircuitJsonToPcbSvg(
        [...circuitJson, ...getDesignRuleLegend(circuitJson)],
        {
          width: 480,
          height: 288,
          includeVersion: false,
          viewport: { minX: -1.5, maxX: 4.5, minY: -1.8, maxY: 1.8 },
        },
      ),
    ),
    {
      gap: 24,
      normalizeSize: false,
      rootAttributes: {
        "aria-label":
          "Imported design rules on left; rules after the TSX round trip on right",
      },
    },
  )
  // TEMPORARY: print the snapshot so it can be committed from the CI log.
  const encodedSnapshot = Buffer.from(comparison).toString("base64")
  for (let offset = 0; offset < encodedSnapshot.length; offset += 3000) {
    console.log(`SNAPSHOT|${encodedSnapshot.slice(offset, offset + 3000)}`)
  }
  console.log(
    `RULES|${JSON.stringify([getDesignRules(imported), getDesignRules(rendered)])}`,
  )
  await expect(comparison).toMatchSvgSnapshot(
    import.meta.path,
    "h616-ddr-design-rules",
  )
}, 30000)
