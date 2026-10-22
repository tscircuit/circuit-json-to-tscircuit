import { expect, test } from "bun:test"
import { createFocusedNativeSymbolComparison } from "../helpers/create-focused-native-symbol-comparison"

const focusedSymbolCases = [
  {
    fixtureName: "tmds62levm-sheet-13",
    componentName: "U57",
    description: "TMDS62LEVM U57 powered OR gate",
    snapshotName: "or-gate",
  },
  {
    fixtureName: "lm5155evm-fly",
    componentName: "D1",
    description: "LM5155EVM-FLY D1 three-pin Schottky",
    snapshotName: "three-pin-schottky",
  },
  {
    fixtureName: "lmg342x-bb-evm",
    componentName: "L3",
    description: "LMG342x-BB-EVM L3 coupled inductor",
    snapshotName: "coupled-inductor",
  },
  {
    fixtureName: "lmg342x-bb-evm",
    componentName: "C22",
    description: "LMG342x-BB-EVM C22 four-terminal capacitor",
    snapshotName: "four-terminal-capacitor",
  },
  {
    fixtureName: "lm251772evm-pd",
    componentName: "Q7",
    description: "LM251772EVM-PD Q7 five-terminal MOSFET",
    snapshotName: "five-terminal-mosfet",
  },
] as const

test("focused real-board comparisons show each new native symbol", async () => {
  for (const focusedSymbolCase of focusedSymbolCases) {
    const comparisonSvg =
      await createFocusedNativeSymbolComparison(focusedSymbolCase)
    await expect(comparisonSvg).toMatchSvgSnapshot(
      import.meta.path,
      focusedSymbolCase.snapshotName,
    )
  }
})
