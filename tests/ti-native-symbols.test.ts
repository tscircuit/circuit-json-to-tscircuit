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
import { applyToPoint, identity, rotateDEG } from "transformation-matrix"
import { convertSymbolPrimitives } from "../lib/generate-board-schematic-tsx/convert-symbol-primitives"
import { getSymbolToSchematicTransform } from "../lib/generate-board-schematic-tsx/get-symbol-to-schematic-transform"
import { matchSymbolPortsByPinIdentity } from "../lib/generate-board-schematic-tsx/match-symbol-ports-by-pin-identity"
import { getNativeSymbolTextReplacements } from "../lib/generate-board-schematic-tsx/get-native-symbol-text-replacements"
import { getNativeSymbolPortMatchingInputs } from "../lib/generate-board-schematic-tsx/get-native-symbol-port-matching-inputs"
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
    const portMatchingInputs = getNativeSymbolPortMatchingInputs({
      symbolName,
      sourcePorts,
      schematicPorts,
      isInferredSymbol: true,
    })
    const matches = matchSymbolPortsByPinIdentity({
      schematicPorts,
      symbol,
      ...portMatchingInputs,
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
      symbol,
      ...portMatchingInputs,
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

test("explicit transformer symbols keep generic sequential pin identities", () => {
  const sourcePorts = Array.from({ length: 8 }, (_, pinIndex) => ({
    type: "source_port" as const,
    source_port_id: `source_port_${pinIndex + 1}`,
    source_component_id: "source_component_transformer",
    name: String(pinIndex + 1),
    pin_number: pinIndex + 1,
  }))
  const matchingInputs = getNativeSymbolPortMatchingInputs({
    symbolName: "transformer_4_winding_right",
    sourcePorts,
    schematicPorts: [],
    isInferredSymbol: false,
  })

  expect(matchingInputs.sourcePorts).toBe(sourcePorts)
  expect(matchingInputs.includeSchematicPinNumbers).toBe(true)
  expect(
    matchingInputs.sourcePorts.map((sourcePort) => sourcePort.pin_number),
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})

test("inferred Schottky aliases survive omitted source pin numbers", () => {
  const circuitJson = loadTiFixture("lm251772evm-pd")
  const schematicComponent = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      resolveNativeSchematicSymbolName({
        circuitJson,
        schematicComponent: element,
      }) === "dual_series_schottky_diode_right",
  )
  expect(schematicComponent).toBeDefined()
  if (!schematicComponent) return

  const schematicPorts = getSchematicPorts({
    circuitJson,
    schematicComponent,
  })
  const sourcePorts = circuitJson
    .filter(
      (element): element is SourcePort =>
        element.type === "source_port" &&
        element.source_component_id === schematicComponent.source_component_id,
    )
    .map((sourcePort) => ({ ...sourcePort, pin_number: undefined }))
  const symbol = nativeSymbols.dual_series_schottky_diode_right
  expect(symbol).toBeDefined()
  if (!symbol) return

  const matchingInputs = getNativeSymbolPortMatchingInputs({
    symbolName: "dual_series_schottky_diode_right",
    sourcePorts,
    schematicPorts,
    isInferredSymbol: true,
  })
  const matches = matchSymbolPortsByPinIdentity({
    schematicPorts,
    symbol,
    ...matchingInputs,
  })
  const semanticLabelByImportedPin = Object.fromEntries(
    matches.map(({ schematicPort, symbolPort }) => [
      schematicPort.pin_number,
      symbolPort.labels.find((label) =>
        ["anode", "cathode", "common"].includes(label),
      ),
    ]),
  )
  expect(semanticLabelByImportedPin).toEqual({
    1: "anode",
    2: "cathode",
    3: "common",
  })

  const transform = getSymbolToSchematicTransform({
    symbol,
    schematicComponent,
    schematicPorts,
    ...matchingInputs,
  })
  for (const match of matches) {
    const renderedPort = applyToPoint(transform, match.symbolPort)
    expect(
      Math.hypot(
        renderedPort.x - match.schematicPort.center.x,
        renderedPort.y - match.schematicPort.center.y,
      ),
    ).toBeLessThan(PORT_ALIGNMENT_TOLERANCE)
  }
})

test("inferred transformer aliases fall back to numeric source-port names", () => {
  const circuitJson = loadTiFixture("lm5155evm-fly")
  const schematicComponent = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      resolveNativeSchematicSymbolName({
        circuitJson,
        schematicComponent: element,
      }) === "transformer_4_winding_right",
  )
  expect(schematicComponent).toBeDefined()
  if (!schematicComponent) return

  const quarterTurn = rotateDEG(
    90,
    schematicComponent.center.x,
    schematicComponent.center.y,
  )
  const rotatedSchematicComponent: SchematicComponent = {
    ...schematicComponent,
    size: {
      width: schematicComponent.size.height,
      height: schematicComponent.size.width,
    },
  }
  const schematicPorts = getSchematicPorts({
    circuitJson,
    schematicComponent,
  }).map((schematicPort) => ({
    ...schematicPort,
    center: applyToPoint(quarterTurn, schematicPort.center),
    pin_number: undefined,
  }))
  const sourcePorts = circuitJson
    .filter(
      (element): element is SourcePort =>
        element.type === "source_port" &&
        element.source_component_id === schematicComponent.source_component_id,
    )
    .map((sourcePort) => ({
      ...sourcePort,
      pin_number: undefined,
      port_hints: undefined,
    }))
  const symbol = nativeSymbols.transformer_4_winding_right
  expect(symbol).toBeDefined()
  if (!symbol) return

  const matchingInputs = getNativeSymbolPortMatchingInputs({
    symbolName: "transformer_4_winding_right",
    sourcePorts,
    schematicPorts,
    isInferredSymbol: true,
  })
  const matches = matchSymbolPortsByPinIdentity({
    schematicPorts,
    symbol,
    ...matchingInputs,
  })
  expect(matches).toHaveLength(symbol.ports.length)

  const transform = getSymbolToSchematicTransform({
    symbol,
    schematicComponent: rotatedSchematicComponent,
    schematicPorts,
    ...matchingInputs,
  })
  for (const match of matches) {
    const renderedPort = applyToPoint(transform, match.symbolPort)
    expect(
      Math.hypot(
        renderedPort.x - match.schematicPort.center.x,
        renderedPort.y - match.schematicPort.center.y,
      ),
    ).toBeLessThan(PORT_ALIGNMENT_TOLERANCE)
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

test("multi-unit native symbols restore one value when the package label is absent", () => {
  const circuitJson = loadTiFixture("lmg342x-bb-evm").filter(
    (element) =>
      element.type !== "schematic_text" ||
      element.text !== "SN74LVC3G14DCUTG4" ||
      element.schematic_component_id === undefined,
  )
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
  const replacementsWithValues = replacements.filter(
    (replacement) => replacement.includeNativeDisplayText,
  )
  const sourceComponentIds = replacementsWithValues.flatMap((replacement) => {
    const component = circuitJson.find(
      (element): element is SchematicComponent =>
        element.type === "schematic_component" &&
        element.schematic_component_id === replacement.schematicComponentId,
    )
    return component?.source_component_id ? [component.source_component_id] : []
  })

  expect(replacementsWithValues).toHaveLength(2)
  expect(new Set(sourceComponentIds).size).toBe(2)
})

test("distant same-value text is not claimed as a native symbol label", () => {
  const circuitJson = loadTiFixture("lm251772evm-pd")
  const diodeComponent = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      resolveNativeSchematicSymbolName({
        circuitJson,
        schematicComponent: element,
      }) === "dual_series_schottky_diode_right",
  )
  expect(diodeComponent).toBeDefined()
  if (!diodeComponent) return
  const sourceComponent = circuitJson.find(
    (element) =>
      element.type === "source_component" &&
      element.source_component_id === diodeComponent.source_component_id,
  )
  const displayValue =
    sourceComponent?.type === "source_component"
      ? sourceComponent.display_value
      : undefined
  const originalValueText = circuitJson.find(
    (element): element is SchematicText =>
      element.type === "schematic_text" &&
      element.schematic_component_id === undefined &&
      element.text === displayValue,
  )
  expect(originalValueText).toBeDefined()
  if (!originalValueText || !displayValue) return
  const distantValueText: SchematicText = {
    ...originalValueText,
    schematic_text_id: "schematic_text_distant_value",
    position: {
      x: diodeComponent.center.x + 10,
      y: diodeComponent.center.y,
    },
    rotation: 0,
  }
  const circuitJsonWithDistantValue = [
    ...circuitJson.filter(
      (element) =>
        element.type !== "schematic_text" ||
        element.schematic_component_id !== undefined ||
        element.text !== displayValue,
    ),
    distantValueText,
  ] as CircuitJson
  const replacement = getNativeSymbolTextReplacements(
    circuitJsonWithDistantValue,
  ).find(
    (candidate) =>
      candidate.schematicComponentId === diodeComponent.schematic_component_id,
  )

  expect(replacement).toBeDefined()
  expect(replacement?.importedTextIds).not.toContain(
    distantValueText.schematic_text_id,
  )
  expect(replacement?.includeNativeDisplayText).toBe(false)
})

test("filled native symbol details use the schematic outline color", () => {
  const symbolsWithSolidDetails: NativeSchematicSymbolName[] = [
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

  const optocoupler = nativeSymbols.phototransistor_optocoupler_right
  expect(optocoupler).toBeDefined()
  if (!optocoupler) return
  const optocouplerPrimitives = convertSymbolPrimitives({
    symbol: optocoupler,
    symbolToSchematicTransform: identity(),
    reference: "U1",
    displayText: "PS2811-1-M-A",
    filledPrimitiveColor: "#840000",
  })
  expect(
    optocouplerPrimitives.some((element) =>
      element.includes('fillColor={"#840000"}'),
    ),
  ).toBe(false)
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
