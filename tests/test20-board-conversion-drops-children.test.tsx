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

test.failing(
  "test20 board conversion drops child component geometry",
  async () => {
    const sourceCircuitJson = (await runTscircuitCode(
      sourceTscircuit,
    )) as AnyCircuitElement[]

    const sourcePads = sourceCircuitJson.filter(
      (elm): elm is PcbSmtPad => elm.type === "pcb_smtpad",
    )

    expect(sourcePads).toHaveLength(2)

    const convertedTscircuit = convertCircuitJsonToTscircuit(
      sourceCircuitJson,
      {
        componentName: "ConvertedBoard",
      },
    )

    expect(convertedTscircuit).toMatchInlineSnapshot(`
    "export default () => (
      <board thickness={1.4} width={12} height={8} material="fr4" minTraceWidth={0.1} minViaHoleDiameter={0.2} minViaPadDiameter={0.3} minViaHoleEdgeToViaHoleEdgeClearance={0.1} minTraceToPadEdgeClearance={0.1} minPadEdgeToPadEdgeClearance={0.1} minPlatedHoleDrillEdgeToDrillEdgeClearance={0.15} minBoardEdgeClearance={0.2} layers={2}>
      </board>
    )"
  `)

    const convertedCircuitJson = (await runTscircuitCode(
      convertedTscircuit,
    )) as AnyCircuitElement[]

    const convertedPads = convertedCircuitJson.filter(
      (elm): elm is PcbSmtPad => elm.type === "pcb_smtpad",
    )

    const pcbSvg = convertCircuitJsonToPcbSvg(convertedCircuitJson)
    await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")

    expect(convertedPads).toHaveLength(2)
  },
)
