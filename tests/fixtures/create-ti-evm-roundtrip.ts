import { createHash } from "node:crypto"
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

interface TiEvmRoundtripResult {
  generatedTscircuit: string
  generatedTscircuitSnapshot: string
  pcbComparisonSvg: string
  schematicComparisonSvg: string
}

const assertPcbTracesReferenceSourceTraces = (
  circuitJson: CircuitJson,
): void => {
  const sourceTraceIds = new Set(
    circuitJson.flatMap((element) =>
      element.type === "source_trace" ? [element.source_trace_id] : [],
    ),
  )
  const missingSourceTraceIds = [
    ...new Set(
      circuitJson.flatMap((element) =>
        element.type === "pcb_trace" &&
        element.source_trace_id &&
        !sourceTraceIds.has(element.source_trace_id)
          ? [element.source_trace_id]
          : [],
      ),
    ),
  ]

  if (missingSourceTraceIds.length > 0) {
    throw new Error(
      `Rendered PCB traces reference missing source traces: ${missingSourceTraceIds.join(", ")}`,
    )
  }
}

const replaceSilkscreenGraphicGeometryWithHashes = (
  generatedTscircuit: string,
): string =>
  generatedTscircuit.replace(
    /<pcbsilkscreengraphic\b[^>]*\/>/g,
    (graphicElement) => {
      const geometryHash = createHash("sha256")
        .update(graphicElement)
        .digest("hex")
        .slice(0, 12)

      return `<pcbsilkscreengraphic geometryHash="${geometryHash}" />`
    },
  )

const replaceCustomSymbolGeometryWithHashes = (
  generatedTscircuit: string,
): string =>
  generatedTscircuit.replace(/<symbol>[\s\S]*?<\/symbol>/g, (symbolElement) => {
    const geometryHash = createHash("sha256")
      .update(symbolElement)
      .digest("hex")
      .slice(0, 12)

    return `<symbol geometryHash="${geometryHash}" />`
  })

const replaceStandaloneSchematicPrimitivesWithHash = (
  generatedTscircuit: string,
): string =>
  generatedTscircuit.replace(
    /\{\/\* Standalone schematic primitives \*\/\}[\s\S]*?\{\/\* End standalone schematic primitives \*\/\}/g,
    (primitiveBlock) => {
      const primitiveCount = (
        primitiveBlock.match(
          /<schematic(?:arc|box|circle|line|path|rect|table|text)\b/g,
        ) ?? []
      ).length
      const geometryHash = createHash("sha256")
        .update(primitiveBlock)
        .digest("hex")
        .slice(0, 12)

      return `{/* standalone schematic primitives: count=${primitiveCount} geometryHash=${geometryHash} */}`
    },
  )

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
  assertPcbTracesReferenceSourceTraces(renderedCircuitJson)

  const sourcePcbSvg = convertCircuitJsonToPcbSvg(sourceCircuitJson, {
    matchBoardAspectRatio: true,
  })
  const renderedPcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson, {
    matchBoardAspectRatio: true,
  })
  const sourceSchematicSvg = convertCircuitJsonToSchematicSvg(sourceCircuitJson)
  const renderedSchematicSvg =
    convertCircuitJsonToSchematicSvg(renderedCircuitJson)

  return {
    generatedTscircuit,
    generatedTscircuitSnapshot: replaceStandaloneSchematicPrimitivesWithHash(
      replaceCustomSymbolGeometryWithHashes(
        replaceSilkscreenGraphicGeometryWithHashes(generatedTscircuit),
      ),
    ),
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

function createComparisonSvg({
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
  const comparisonSvg = stackSvgsHorizontally([sourceSvg, renderedSvg], {
    gap: 24,
    normalizeSize: true,
    targetSize: 800,
    rootAttributes: {
      "aria-label": `${fixtureName} ${kind}: source Circuit JSON on left, generated tscircuit render on right`,
      role: "img",
    },
  })

  return comparisonSvg.replace(/[\t ]+$/gm, "")
}
