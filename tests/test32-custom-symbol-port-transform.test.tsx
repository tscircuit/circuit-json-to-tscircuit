import { expect, test } from "bun:test"
import type { AnyCircuitElement, SchematicPort } from "circuit-json"
import { runTscircuitCode } from "tscircuit"

test("custom symbol ports follow their component position", async () => {
  const circuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="20mm" height="10mm">
        <chip
          name="U1"
          schX={3}
          schY={-1}
          footprint={<footprint>
            <smtpad portHints={["1"]} pcbX={-0.5} width={0.5} height={0.5} />
            <smtpad portHints={["2"]} pcbX={0.5} width={0.5} height={0.5} />
          </footprint>}
          symbol={<symbol>
            <schematicrect schX={0} schY={0} width={1.2} height={0.8} />
            <port name="IN" pinNumber={1} schX={-0.8} schY={0} direction="left" />
            <port name="OUT" pinNumber={2} schX={0.8} schY={0} direction="right" />
          </symbol>}
        />
      </board>
    )
  `)) as AnyCircuitElement[]

  const schematicPortCenters = circuitJson
    .filter(
      (element): element is SchematicPort => element.type === "schematic_port",
    )
    .map((schematicPort) => schematicPort.center)
    .sort((firstCenter, secondCenter) => firstCenter.x - secondCenter.x)

  expect(schematicPortCenters).toEqual([
    { x: 2.2, y: -1 },
    { x: 3.8, y: -1 },
  ])
})
