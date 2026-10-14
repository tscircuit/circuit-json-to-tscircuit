import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
const NestedChip = (props) => (
  <chip
    footprint={<footprint>
      <smtpad
        portHints={["1"]}
        width="1mm"
        height="1mm"
        shape="rect"
        layer="top"
      />
    </footprint>}
    {...props}
  />
)

export default () => (
  <board width="16mm" height="8mm">
    <group name="A" subcircuit>
      <NestedChip name="U1" pcbX="-4mm" />
      <trace from=".U1 > .pin1" to="net.GND" />
    </group>
    <group name="B" subcircuit>
      <NestedChip name="U1" pcbX="4mm" />
      <trace from=".U1 > .pin1" to="net.GND" />
    </group>
  </board>
)
`

test("board conversion disambiguates repeated component names from subcircuits", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as CircuitJson
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ConvertedBoard",
  })

  expect(generatedTscircuit).toContain('<chip name="U1"')
  expect(generatedTscircuit).toContain('<chip name="U1_2"')
  expect(generatedTscircuit).toContain(".U1 > .imported_pcb_port_1")
  expect(generatedTscircuit).toContain(".U1_2 > .imported_pcb_port_2")

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedErrors = renderedCircuitJson.filter((element) =>
    element.type.endsWith("_error"),
  )

  expect(renderedErrors).toEqual([])
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_component"),
  ).toHaveLength(2)
})
