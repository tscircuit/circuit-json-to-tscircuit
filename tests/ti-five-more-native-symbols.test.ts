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

const PORT_ALIGNMENT_TOLERANCE = 0.000001

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
    const schematicComponent = circuitJson.find(
      (element): element is SchematicComponent =>
        element.type === "schematic_component" &&
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
