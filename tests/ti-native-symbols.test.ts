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
import { symbols, type SchSymbol } from "schematic-symbols"
import { applyToPoint } from "transformation-matrix"
import { getSymbolToSchematicTransform } from "../lib/generate-board-schematic-tsx/get-symbol-to-schematic-transform"
import { matchSymbolPortsByPinIdentity } from "../lib/generate-board-schematic-tsx/match-symbol-ports-by-pin-identity"
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
      (element): element is SourcePort => element.type === "source_port",
    )
    const matches = matchSymbolPortsByPinIdentity({
      schematicPorts,
      sourcePorts,
      symbol,
    })
    expect(matches, symbolName).toHaveLength(symbol.ports.length)

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
