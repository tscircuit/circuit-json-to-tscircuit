import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { generateBoardSchematicElements } from "../lib/generate-board-schematic-tsx"
import {
  assertNativeSymbolPortAlignment,
  type NativeSymbolAlignmentCase,
} from "./helpers/assert-native-symbol-port-alignment"

interface NativeSymbolCase extends NativeSymbolAlignmentCase {
  fixtureName: string
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
    symbolName: "schottky_diode_3_pin_right",
  },
  {
    fixtureName: "lmg342x-bb-evm",
    componentName: "L3",
    symbolName: "coupled_inductor_right",
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
    assertNativeSymbolPortAlignment({
      circuitJson: loadTiFixture(nativeSymbolCase.fixtureName),
      nativeSymbolCase,
    })
  }
})

test("five-terminal MOSFETs preserve composite drain designators", () => {
  const circuitJson = loadTiFixture("lm251772evm-pd")
  const compoundDrainLabels = generateBoardSchematicElements(
    circuitJson,
  ).filter((element) => element.includes('text={"5-6-7-8"}'))

  expect(compoundDrainLabels).toHaveLength(6)
})
