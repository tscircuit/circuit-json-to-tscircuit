import { expect } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import {
  convertCircuitJsonToPcbSvg,
  convertCircuitJsonToSchematicSvg,
} from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"
import { countNetConnectedPcbTraces } from "./count-net-connected-pcb-traces"

interface TiEvmRoundtripResult {
  sourceCircuitJson: CircuitJson
  renderedCircuitJson: CircuitJson
  generatedTscircuit: string
  pcbComparisonSvg: string
  schematicComparisonSvg: string
}

export async function createTiEvmRoundtrip({
  componentName,
  fixtureName,
}: {
  componentName: string
  fixtureName: string
}): Promise<TiEvmRoundtripResult> {
  const compressedFixture = await readFile(
    join(import.meta.dir, "ti-evms", `${fixtureName}.circuit.json.gz`),
  )
  const sourceCircuitJson = JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName,
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson

  const sourceBoard = sourceCircuitJson.find(
    (element) => element.type === "pcb_board",
  )
  const renderedBoard = renderedCircuitJson.find(
    (element) => element.type === "pcb_board",
  )
  if (!sourceBoard || !renderedBoard) {
    throw new Error(
      `${fixtureName} must contain source and rendered PCB boards`,
    )
  }
  expect(renderedBoard).toMatchObject({ center: sourceBoard.center })

  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_via"),
  ).toHaveLength(
    sourceCircuitJson.filter((element) => element.type === "pcb_via").length,
  )
  expect(
    renderedCircuitJson.filter(
      (element) => element.type === "pcb_via" && element.source_net_id,
    ),
  ).toHaveLength(
    sourceCircuitJson.filter(
      (element) => element.type === "pcb_via" && element.source_net_id,
    ).length,
  )

  const isPortedPad = (element: CircuitJson[number]) =>
    (element.type === "pcb_smtpad" || element.type === "pcb_plated_hole") &&
    Boolean(element.pcb_port_id)
  expect(renderedCircuitJson.filter(isPortedPad)).toHaveLength(
    sourceCircuitJson.filter(isPortedPad).length,
  )

  expect(countNetConnectedPcbTraces(renderedCircuitJson)).toBe(
    countNetConnectedPcbTraces(sourceCircuitJson),
  )

  for (const circuitJson of [sourceCircuitJson, renderedCircuitJson]) {
    const unresolvedProjectStrings = circuitJson.filter(
      (element) =>
        element.type === "pcb_silkscreen_text" &&
        /\.(?:PRJ_[A-Za-z0-9_]+|PCB_Rev)\b/u.test(element.text),
    )
    expect(unresolvedProjectStrings).toEqual([])
  }

  const sourcePcbSvg = convertCircuitJsonToPcbSvg(sourceCircuitJson, {
    matchBoardAspectRatio: true,
  })
  const renderedPcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson, {
    matchBoardAspectRatio: true,
  })
  const sourceSchematicSvg = convertCircuitJsonToSchematicSvg(sourceCircuitJson)
  const renderedSchematicSvg =
    convertCircuitJsonToSchematicSvg(renderedCircuitJson)
  expect(getSchematicViewportTransform(renderedSchematicSvg)).toBe(
    getSchematicViewportTransform(sourceSchematicSvg),
  )

  return {
    generatedTscircuit,
    sourceCircuitJson,
    renderedCircuitJson,
    pcbComparisonSvg: createComparisonSvg({
      fixtureName,
      kind: "PCB",
      renderedSvg: renderedPcbSvg,
      sourceSvg: sourcePcbSvg,
    }),
    schematicComparisonSvg: createComparisonSvg({
      fixtureName,
      kind: "schematic",
      renderedSvg: renderedSchematicSvg,
      sourceSvg: sourceSchematicSvg,
    }),
  }
}

const getSchematicViewportTransform = (svg: string): string => {
  const transform = svg.match(/data-real-to-screen-transform="([^"]+)"/u)?.[1]
  if (!transform) throw new Error("Schematic SVG is missing its viewport")
  return transform
}

export function createComparisonSvg({
  fixtureName,
  kind,
  renderedSvg,
  sourceSvg,
}: {
  fixtureName: string
  kind: "PCB" | "schematic"
  renderedSvg: string
  sourceSvg: string
}): string {
  return stackSvgsHorizontally([sourceSvg, renderedSvg], {
    gap: 24,
    // Schematic SVGs have no viewBox; normalizing only their canvas clips them.
    normalizeSize: false,
    rootAttributes: {
      "aria-label": `${fixtureName} ${kind}: source Circuit JSON on left, generated tscircuit render on right`,
      role: "img",
    },
  })
}
