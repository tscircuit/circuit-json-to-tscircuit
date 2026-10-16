import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SchematicText,
  SourcePort,
} from "circuit-json"
import { symbols, type SchSymbol } from "schematic-symbols"
import { applyToPoint, identity } from "transformation-matrix"
import { convertSymbolPrimitives } from "../lib/generate-board-schematic-tsx/convert-symbol-primitives"
import { getSymbolToSchematicTransform } from "../lib/generate-board-schematic-tsx/get-symbol-to-schematic-transform"
import { matchSymbolPortsByPinIdentity } from "../lib/generate-board-schematic-tsx/match-symbol-ports-by-pin-identity"
import { getNativeSymbolTextReplacements } from "../lib/generate-board-schematic-tsx/get-native-symbol-text-replacements"
import {
  resolveNativeSchematicSymbolName,
  type NativeSchematicSymbolName,
} from "../lib/generate-board-schematic-tsx/resolve-native-schematic-symbol-name"

const PORT_ALIGNMENT_TOLERANCE = 0.000001

const nativeSymbols: Partial<Record<NativeSchematicSymbolName, SchSymbol>> =
  symbols

const nativeSymbolCases: Array<{
  fixtureName: string
  symbolName: NativeSchematicSymbolName
}> = [
  {
    fixtureName: "lmg342x-bb-evm",
    symbolName: "and_gate_right",
  },
  {
    fixtureName: "lmg342x-bb-evm",
    symbolName: "schmitt_trigger_inverter_right",
  },
  {
    fixtureName: "lm5155evm-fly",
    symbolName: "phototransistor_optocoupler_right",
  },
  {
    fixtureName: "lm5155evm-fly",
    symbolName: "transformer_4_winding_right",
  },
  {
    fixtureName: "lm251772evm-pd",
    symbolName: "dual_series_schottky_diode_right",
  },
]

const loadTiFixture = (fixtureName: string): CircuitJson =>
  JSON.parse(
    gunzipSync(
      readFileSync(
        join(
          import.meta.dir,
          "fixtures",
          "ti-evms",
          `${fixtureName}.circuit.json.gz`,
        ),
      ),
    ).toString("utf8"),
  ) as CircuitJson

const getSchematicPorts = ({
  circuitJson,
  schematicComponent,
}: {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
}): SchematicPort[] =>
  circuitJson.filter(
    (element): element is SchematicPort =>
      element.type === "schematic_port" &&
      element.schematic_component_id ===
        schematicComponent.schematic_component_id,
  )

test("real TI custom components use aligned native schematic symbols", () => {
  for (const { fixtureName, symbolName } of nativeSymbolCases) {
    const circuitJson = loadTiFixture(fixtureName)
    const schematicComponent = circuitJson.find(
      (element): element is SchematicComponent =>
        element.type === "schematic_component" &&
        resolveNativeSchematicSymbolName({
          circuitJson,
          schematicComponent: element,
        }) === symbolName,
    )
    expect(schematicComponent, symbolName).toBeDefined()
    if (!schematicComponent) continue

    const symbol = nativeSymbols[symbolName]
    expect(symbol, symbolName).toBeDefined()
    if (!symbol) continue
    const schematicPorts = getSchematicPorts({
      circuitJson,
      schematicComponent,
    })
    const sourcePorts = circuitJson.filter(
      (element): element is SourcePort =>
        element.type === "source_port" &&
        element.source_component_id === schematicComponent.source_component_id,
    )
    const matches = matchSymbolPortsByPinIdentity({
      schematicPorts,
      sourcePorts,
      symbol,
    })
    expect(matches, symbolName).toHaveLength(symbol.ports.length)
    expect(
      new Set(matches.map((match) => match.schematicPort.schematic_port_id))
        .size,
      symbolName,
    ).toBe(symbol.ports.length)

    const transform = getSymbolToSchematicTransform({
      schematicComponent,
      schematicPorts,
      sourcePorts,
      symbol,
    })
    for (const match of matches) {
      const renderedPort = applyToPoint(transform, match.symbolPort)
      expect(
        Math.hypot(
          renderedPort.x - match.schematicPort.center.x,
          renderedPort.y - match.schematicPort.center.y,
        ),
        symbolName,
      ).toBeLessThan(PORT_ALIGNMENT_TOLERANCE)
    }
  }
})

test("multi-unit native symbols keep one package value label", () => {
  const circuitJson = loadTiFixture("lmg342x-bb-evm")
  const schmittComponentIds = circuitJson.flatMap((element) =>
    element.type === "schematic_component" &&
    resolveNativeSchematicSymbolName({
      circuitJson,
      schematicComponent: element,
    }) === "schmitt_trigger_inverter_right"
      ? [element.schematic_component_id]
      : [],
  )
  const replacements = getNativeSymbolTextReplacements(circuitJson).filter(
    (replacement) =>
      schmittComponentIds.includes(replacement.schematicComponentId),
  )

  expect(replacements.length).toBeGreaterThan(1)
  expect(
    replacements.every((replacement) => replacement.replacesReference),
  ).toBe(true)
  expect(
    replacements.every((replacement) => !replacement.includeNativeDisplayText),
  ).toBe(true)

  const removedTextIds = new Set(
    replacements.flatMap((replacement) => [...replacement.importedTextIds]),
  )
  const packageValueTexts = circuitJson.filter(
    (element): element is SchematicText =>
      element.type === "schematic_text" &&
      element.text === "SN74LVC3G14DCUTG4" &&
      element.rotation === 0,
  )
  const perUnitValueTexts = circuitJson.filter(
    (element): element is SchematicText =>
      element.type === "schematic_text" &&
      element.text === "SN74LVC3G14DCUTG4" &&
      element.rotation === 90,
  )

  expect(packageValueTexts).toHaveLength(2)
  expect(
    packageValueTexts.every(
      (schematicText) => !removedTextIds.has(schematicText.schematic_text_id),
    ),
  ).toBe(true)
  expect(perUnitValueTexts).toHaveLength(6)
  expect(
    perUnitValueTexts.every((schematicText) =>
      removedTextIds.has(schematicText.schematic_text_id),
    ),
  ).toBe(true)
  expect(
    replacements.every(
      (replacement) => replacement.referenceFontSize === 0.12737378415933304,
    ),
  ).toBe(true)
})

test("filled native symbol details use the schematic outline color", () => {
  const symbolsWithSolidDetails: NativeSchematicSymbolName[] = [
    "phototransistor_optocoupler_right",
    "transformer_4_winding_right",
    "dual_series_schottky_diode_right",
  ]

  for (const symbolName of symbolsWithSolidDetails) {
    const symbol = nativeSymbols[symbolName]
    expect(symbol, symbolName).toBeDefined()
    if (!symbol) continue
    const convertedPrimitives = convertSymbolPrimitives({
      symbol,
      symbolToSchematicTransform: identity(),
      reference: "REF",
      displayText: "VALUE",
      filledPrimitiveColor: "#840000",
    })
    const filledPrimitives = convertedPrimitives.filter((element) =>
      element.includes('fillColor={"#840000"}'),
    )

    expect(filledPrimitives.length, symbolName).toBeGreaterThan(0)
  }
})

test("native symbol labels preserve imported font sizes", () => {
  const symbol = nativeSymbols.dual_series_schottky_diode_right
  expect(symbol).toBeDefined()
  if (!symbol) return

  const convertedPrimitives = convertSymbolPrimitives({
    symbol,
    symbolToSchematicTransform: identity(),
    reference: "D1",
    displayText: "BAS70-04-E3-18",
    referenceFontSize: 0.12,
    displayTextFontSize: 0.13,
  })

  expect(
    convertedPrimitives.some(
      (element) =>
        element.includes('text={"D1"}') && element.includes("fontSize={0.12}"),
    ),
  ).toBe(true)
  expect(
    convertedPrimitives.some(
      (element) =>
        element.includes('text={"BAS70-04-E3-18"}') &&
        element.includes("fontSize={0.13}"),
    ),
  ).toBe(true)
})
