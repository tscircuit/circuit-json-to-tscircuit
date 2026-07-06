import { expect, test } from "bun:test"
import type { AnyCircuitElement, PcbSmtPad } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
const BoardChildChip = (props) => (
  <chip
    footprint={<footprint>
      <smtpad
        portHints={["1"]}
        pcbX="-1mm"
        pcbY="0mm"
        width="1mm"
        height="0.8mm"
        shape="rect"
        layer="top"
      />
      <smtpad
        portHints={["2"]}
        pcbX="1mm"
        pcbY="0mm"
        width="1mm"
        height="0.8mm"
        shape="rect"
        layer="top"
      />
    </footprint>}
    {...props}
  />
)

export default () => (
  <board width="12mm" height="8mm">
    <BoardChildChip name="U1" />
  </board>
)
`

test("preserves board child geometry", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]

  const sourcePads = sourceCircuitJson.filter(
    (element): element is PcbSmtPad => element.type === "pcb_smtpad",
  )

  expect(sourcePads).toHaveLength(2)

  const convertedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ConvertedBoard",
  })

  expect(convertedTscircuit).toMatchInlineSnapshot(`
    "export default () => (
      <board width={12} height={8} minTraceWidth={0.1} minViaHoleEdgeToViaHoleEdgeClearance={0.1} minPlatedHoleDrillEdgeToDrillEdgeClearance={0.15} minTraceToPadEdgeClearance={0.1} minPadEdgeToPadEdgeClearance={0.1} minBoardEdgeClearance={0.2} minViaHoleDiameter={0.2} minViaPadDiameter={0.3} material="fr4" layers={2} thickness={1.4} doubleSidedAssembly={false}>
        <chip footprint={<footprint>
                <smtpad portHints={["1"]} pcbX="-1mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="1mm" height="0.8mm" shape="rect" />
        <smtpad portHints={["2"]} pcbX="1mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="1mm" height="0.8mm" shape="rect" />
              </footprint>} />
      </board>
    )"
  `)

  const convertedCircuitJson = (await runTscircuitCode(
    convertedTscircuit,
  )) as AnyCircuitElement[]

  const convertedPads = convertedCircuitJson.filter(
    (element): element is PcbSmtPad => element.type === "pcb_smtpad",
  )

  const pcbSvg = convertCircuitJsonToPcbSvg(convertedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")

  expect(convertedPads).toHaveLength(2)
}, 15_000)
