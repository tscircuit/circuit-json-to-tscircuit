import { test, expect } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { runTscircuitCode } from "tscircuit"

test("test19 board conversion", async () => {
  const circuitJson = JSON.parse(
    await readFile(join(__dirname, "../assets/empty-board.json"), "utf-8"),
  )

  // A circuit json containing a pcb_board routes to the board converter
  const tscircuitCode = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "MyBoard",
  })

  expect(tscircuitCode).toMatchInlineSnapshot(`
    "export default () => (
      <board width={20} height={10} minTraceWidth={0.1} minViaHoleEdgeToViaHoleEdgeClearance={0.1} minPlatedHoleDrillEdgeToDrillEdgeClearance={0.15} minTraceToPadEdgeClearance={0.1} minPadEdgeToPadEdgeClearance={0.1} minBoardEdgeClearance={0.2} minViaHoleDiameter={0.2} minViaPadDiameter={0.3} material="fr4" layers={2} thickness={1.4} doubleSidedAssembly={false}>
      </board>
    )"
  `)

  // The generated board code should render back to an equivalent board
  const renderedCircuitJson = (await runTscircuitCode(
    tscircuitCode,
  )) as AnyCircuitElement[]

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})
