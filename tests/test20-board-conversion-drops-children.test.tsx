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

test("test20 board conversion preserves child component geometry", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]

  const sourcePads = sourceCircuitJson.filter(
    (elm): elm is PcbSmtPad => elm.type === "pcb_smtpad",
  )

  expect(sourcePads).toHaveLength(2)

  const convertedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ConvertedBoard",
  })

  expect(convertedTscircuit).toMatchInlineSnapshot(`
    "export default () => (
      <board width="12mm" height="8mm" thickness="1.4mm" layers={2} material="fr4">
        <chip footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="-1mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="1mm" height="0.8mm" shape="rect" />
    <smtpad portHints={["2"]} pcbX="1mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="1mm" height="0.8mm" shape="rect" />
          </footprint>} symbol={<symbol>
    <schematicpath svgPath={"M-0.2 0.2h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
    <schematictext text={""} schX={-0.19999999999999996} schY={-0.33000000000000007} fontSize={0.18} color={"#006464"} anchor="center_left" schRotation={0} />
    <schematictext text={"U1"} schX={-0.19999999999999996} schY={0.32999999999999996} fontSize={0.18} color={"#006464"} anchor="center_left" schRotation={0} />
    <schematicpath svgPath={"M-0.2 0L-0.58 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
    <schematiccircle center={{"x":-0.6000000000000001,"y":-1.1102230246251565e-16}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
    <schematictext text={"1"} schX={-0.3999999999999999} schY={0.020000000000000018} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
    <schematicpath svgPath={"M0.2 0L0.58 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
    <schematiccircle center={{"x":0.6000000000000005,"y":-1.1102230246251565e-16}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
    <schematictext text={"2"} schX={0.40000000000000036} schY={0.020000000000000018} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
    </symbol>} />
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
})
