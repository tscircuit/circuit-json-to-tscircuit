import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SourcePort,
} from "circuit-json"
import { symbols } from "schematic-symbols"
import { applyToPoint } from "transformation-matrix"
import { getNativeSymbolPortMatchingInputs } from "../lib/generate-board-schematic-tsx/get-native-symbol-port-matching-inputs"
import { getSymbolToSchematicTransform } from "../lib/generate-board-schematic-tsx/get-symbol-to-schematic-transform"
import { matchSymbolPortsByPinIdentity } from "../lib/generate-board-schematic-tsx/match-symbol-ports-by-pin-identity"
import {
  resolveNativeSchematicSymbolName,
  type NativeSchematicSymbolName,
} from "../lib/generate-board-schematic-tsx/resolve-native-schematic-symbol-name"
import { convertNativeSymbolPortExtensions } from "../lib/generate-board-schematic-tsx/convert-native-symbol-port-extensions"

const PORT_ALIGNMENT_TOLERANCE = 0.000001
const MAXIMUM_NATIVE_PIN_EXTENSION_LENGTH = 0.16

interface NativeSymbolCase {
  fixtureName: string
  componentName: string
  symbolName: NativeSchematicSymbolName
}

const nativeSymbolCases: NativeSymbolCase[] = [
  {
    fixtureName: "tmds62levm-sheet-13",
    componentName: "U57",
    symbolName: "or_gate_with_power_right",
  },
  {
    fixtureName: "lm5155evm-fly",
    componentName: "D1",
    symbolName: "dual_common_cathode_schottky_diode_right",
  },
  {
    fixtureName: "lmg342x-bb-evm",
    componentName: "L3",
    symbolName: "coupled_inductor_up",
  },
  {
    fixtureName: "lmg342x-bb-evm",
    componentName: "C22",
    symbolName: "four_terminal_capacitor_up",
  },
  {
    fixtureName: "lm251772evm-pd",
    componentName: "Q7",
    symbolName: "n_channel_power_mosfet_5_pin_gate_left_drain_top",
  },
  {
    fixtureName: "lm251772evm-pd",
    componentName: "Q5",
    symbolName: "n_channel_power_mosfet_5_pin_gate_bottom_drain_right",
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

test("five more real TI components use aligned native symbols", () => {
  for (const nativeSymbolCase of nativeSymbolCases) {
    const circuitJson = loadTiFixture(nativeSymbolCase.fixtureName)
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
    if (sourceComponent?.type !== "source_component") continue

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
    if (!schematicComponent) continue

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
      throw new Error(
        `Missing schematic symbol: ${nativeSymbolCase.symbolName}`,
      )
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

    const transform = getSymbolToSchematicTransform({
      symbol,
      schematicComponent,
      schematicPorts,
      ...portMatchingInputs,
    })
    const portGaps = matches.map((match) => {
      const renderedPort = applyToPoint(transform, match.symbolPort)
      return Math.hypot(
        renderedPort.x - match.schematicPort.center.x,
        renderedPort.y - match.schematicPort.center.y,
      )
    })
    const portExtensions = convertNativeSymbolPortExtensions({
      symbolToSchematicTransform: transform,
      portMatches: matches,
    })
    expect(portExtensions).toHaveLength(
      portGaps.filter((portGap) => portGap >= PORT_ALIGNMENT_TOLERANCE).length,
    )

    const usesImportedPackagePinEnvelope =
      nativeSymbolCase.symbolName.startsWith(
        "n_channel_power_mosfet_5_pin_gate_",
      )
    if (usesImportedPackagePinEnvelope) {
      expect(portExtensions.length).toBeGreaterThan(0)
      expect(Math.max(...portGaps)).toBeLessThan(
        MAXIMUM_NATIVE_PIN_EXTENSION_LENGTH,
      )
      continue
    }
    for (const match of matches) {
      const renderedPort = applyToPoint(transform, match.symbolPort)
      expect(
        Math.hypot(
          renderedPort.x - match.schematicPort.center.x,
          renderedPort.y - match.schematicPort.center.y,
        ),
        nativeSymbolCase.symbolName,
      ).toBeLessThan(PORT_ALIGNMENT_TOLERANCE)
    }
  }
})
