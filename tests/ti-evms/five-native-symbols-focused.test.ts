import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { generateBoardSchematicElements } from "../../lib/generate-board-schematic-tsx"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"
import {
  createZoomedSchematicComparison,
  getSchematicComponentCenter,
} from "../helpers/create-zoomed-schematic-comparison"

const expectZoomedComparison = async ({
  sourceCircuitJson,
  renderedCircuitJson,
  componentName,
  description,
  snapshotName,
  cropSize,
}: {
  sourceCircuitJson: CircuitJson
  renderedCircuitJson: CircuitJson
  componentName: string
  description: string
  snapshotName: string
  cropSize: { width: number; height: number }
}) => {
  const comparisonSvg = createZoomedSchematicComparison({
    sourceCircuitJson,
    renderedCircuitJson,
    focusPoint: getSchematicComponentCenter({
      circuitJson: sourceCircuitJson,
      componentName,
    }),
    cropSize,
    description,
  })
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path, snapshotName)
}

test("zoomed real-board integration comparisons show each symbol", async () => {
  const tmdsFixturePath = join(
    import.meta.dir,
    "../fixtures/ti-evms/tmds62levm-sheet-13.circuit.json.gz",
  )
  const tmdsSource = JSON.parse(
    gunzipSync(await readFile(tmdsFixturePath)).toString("utf8"),
  ) as CircuitJson
  const tmdsElements = generateBoardSchematicElements(tmdsSource)
  const tmdsRendered = (await runTscircuitCode(`
    export default () => <board><symbol>${tmdsElements.join("\n")}</symbol></board>
  `)) as CircuitJson
  await expectZoomedComparison({
    sourceCircuitJson: tmdsSource,
    renderedCircuitJson: [
      ...tmdsRendered,
      ...tmdsSource.filter((element) => element.type === "schematic_port"),
    ],
    componentName: "U57",
    description: "TMDS62LEVM U57 powered OR gate",
    snapshotName: "or-gate",
    cropSize: { width: 125, height: 90 },
  })

  const lm5155 = await createTiEvmRoundtrip({
    componentName: "Lm5155EvmFly",
    fixtureName: "lm5155evm-fly",
  })
  await expectZoomedComparison({
    ...lm5155,
    componentName: "D1",
    description: "LM5155EVM-FLY D1 three-pin Schottky",
    snapshotName: "three-pin-schottky",
    cropSize: { width: 115, height: 85 },
  })

  const lmg342x = await createTiEvmRoundtrip({
    componentName: "Lmg342xBbEvm",
    fixtureName: "lmg342x-bb-evm",
  })
  await expectZoomedComparison({
    ...lmg342x,
    componentName: "L3",
    description: "LMG342x-BB-EVM L3 coupled inductor",
    snapshotName: "coupled-inductor",
    cropSize: { width: 90, height: 75 },
  })
  await expectZoomedComparison({
    ...lmg342x,
    componentName: "C22",
    description: "LMG342x-BB-EVM C22 four-terminal capacitor",
    snapshotName: "four-terminal-capacitor",
    cropSize: { width: 90, height: 70 },
  })

  const lm251772 = await createTiEvmRoundtrip({
    componentName: "Lm251772EvmPd",
    fixtureName: "lm251772evm-pd",
  })
  await expectZoomedComparison({
    ...lm251772,
    componentName: "Q7",
    description: "LM251772EVM-PD Q7 five-terminal MOSFET",
    snapshotName: "five-terminal-mosfet",
    cropSize: { width: 100, height: 80 },
  })
}, 120_000)
