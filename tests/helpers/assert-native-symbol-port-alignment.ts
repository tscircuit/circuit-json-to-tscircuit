import { expect } from "bun:test"
import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SourcePort,
} from "circuit-json"
import { symbols } from "schematic-symbols"
import { applyToPoint } from "transformation-matrix"
import { convertNativeSymbolPortExtensions } from "../../lib/generate-board-schematic-tsx/convert-native-symbol-port-extensions"
import { getNativeSymbolPortMatchingInputs } from "../../lib/generate-board-schematic-tsx/get-native-symbol-port-matching-inputs"
import { getSymbolToSchematicTransform } from "../../lib/generate-board-schematic-tsx/get-symbol-to-schematic-transform"
import { matchSymbolPortsByPinIdentity } from "../../lib/generate-board-schematic-tsx/match-symbol-ports-by-pin-identity"
import {
  resolveNativeSchematicSymbolName,
  type NativeSchematicSymbolName,
} from "../../lib/generate-board-schematic-tsx/resolve-native-schematic-symbol-name"

const PORT_ALIGNMENT_TOLERANCE = 0.000001
const MAXIMUM_NATIVE_SYMBOL_PIN_EXTENSION_LENGTH = 0.8
const MAXIMUM_LATERAL_PIN_EXTENSION_OFFSET = 0.02

export interface NativeSymbolAlignmentCase {
  componentName: string
  symbolName: NativeSchematicSymbolName
}

export const assertNativeSymbolPortAlignment = ({
  circuitJson,
  nativeSymbolCase,
}: {
  circuitJson: CircuitJson
  nativeSymbolCase: NativeSymbolAlignmentCase
}) => {
  const sourceComponent = circuitJson.find(
    (element) =>
      element.type === "source_component" &&
      element.name === nativeSymbolCase.componentName &&
      circuitJson.some(
        (candidate) =>
          candidate.type === "schematic_component" &&
          candidate.source_component_id === element.source_component_id,
      ),
  )
  expect(sourceComponent, nativeSymbolCase.componentName).toBeDefined()
  if (sourceComponent?.type !== "source_component") return

  const schematicComponent = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceComponent.source_component_id &&
      resolveNativeSchematicSymbolName({
        circuitJson,
        schematicComponent: element,
      }) === nativeSymbolCase.symbolName,
  )
  expect(schematicComponent, nativeSymbolCase.componentName).toBeDefined()
  if (!schematicComponent) return

  const schematicPorts = circuitJson.filter(
    (element): element is SchematicPort =>
      element.type === "schematic_port" &&
      element.schematic_component_id ===
        schematicComponent.schematic_component_id,
  )
  const sourcePorts = circuitJson.filter(
    (element): element is SourcePort =>
      element.type === "source_port" &&
      element.source_component_id === schematicComponent.source_component_id,
  )
  const symbol = symbols[nativeSymbolCase.symbolName]
  if (!symbol) {
    throw new Error(`Missing schematic symbol: ${nativeSymbolCase.symbolName}`)
  }

  const portMatchingInputs = getNativeSymbolPortMatchingInputs({
    symbolName: nativeSymbolCase.symbolName,
    sourcePorts,
    schematicPorts,
    isInferredSymbol: true,
  })
  const matches = matchSymbolPortsByPinIdentity({
    schematicPorts,
    symbol,
    ...portMatchingInputs,
  })
  expect(matches, nativeSymbolCase.symbolName).toHaveLength(
    schematicPorts.length,
  )

  const symbolToSchematicTransform = getSymbolToSchematicTransform({
    symbol,
    schematicComponent,
    schematicPorts,
    preferCenteredBoundsTransform:
      nativeSymbolCase.symbolName === "coupled_inductor_right",
    ...portMatchingInputs,
  })
  const portGaps = matches.map((match) => {
    const renderedPort = applyToPoint(
      symbolToSchematicTransform,
      match.symbolPort,
    )
    return Math.hypot(
      renderedPort.x - match.schematicPort.center.x,
      renderedPort.y - match.schematicPort.center.y,
    )
  })
  const portExtensions = convertNativeSymbolPortExtensions({
    symbolToSchematicTransform,
    portMatches: matches,
  })
  expect(portExtensions).toHaveLength(
    portGaps.filter((portGap) => portGap >= PORT_ALIGNMENT_TOLERANCE).length,
  )
  expect(Math.max(...portGaps)).toBeLessThan(
    MAXIMUM_NATIVE_SYMBOL_PIN_EXTENSION_LENGTH,
  )

  if (nativeSymbolCase.symbolName !== "coupled_inductor_right") return

  expect(portExtensions.length).toBeGreaterThan(0)
  for (const match of matches) {
    const renderedPort = applyToPoint(
      symbolToSchematicTransform,
      match.symbolPort,
    )
    const portGap = Math.hypot(
      renderedPort.x - match.schematicPort.center.x,
      renderedPort.y - match.schematicPort.center.y,
    )
    if (portGap < PORT_ALIGNMENT_TOLERANCE) continue
    expect(
      Math.abs(renderedPort.x - match.schematicPort.center.x),
    ).toBeLessThan(MAXIMUM_LATERAL_PIN_EXTENSION_OFFSET)
  }
}
