import { expect, test } from "bun:test"
import type { AnyCircuitElement, SchematicPort, SourcePort } from "circuit-json"
import { runTscircuitCode } from "tscircuit"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

test("React symbol ports are reused for chip pin labels", async () => {
  const circuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="20mm" height="10mm">
        <chip
          name="U1"
          schX={3}
          schY={-1}
          pinLabels={{ pin1: ["IN"], pin2: ["OUT"] }}
          footprint={<footprint>
            <smtpad portHints={["1"]} pcbX={-0.5} pcbY={-0.3} width={0.5} height={0.5} />
            <smtpad portHints={["1"]} pcbX={-0.5} pcbY={0.3} width={0.5} height={0.5} />
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

  const sourceComponent = circuitJson.find(
    (element): element is SourceComponent =>
      element.type === "source_component" && element.name === "U1",
  )
  if (!sourceComponent) throw new Error("Expected U1 source component")

  const sourcePorts = circuitJson.filter(
    (element): element is SourcePort =>
      element.type === "source_port" &&
      element.source_component_id === sourceComponent.source_component_id,
  )
  const schematicPorts = circuitJson.filter(
    (element): element is SchematicPort => element.type === "schematic_port",
  )

  const primarySourcePorts = sourcePorts.filter(
    (sourcePort) => sourcePort.pin_number !== undefined,
  )

  expect(primarySourcePorts).toHaveLength(2)
  expect(schematicPorts).toHaveLength(2)
  expect(
    primarySourcePorts.map((sourcePort) => sourcePort.name).sort(),
  ).toEqual(["IN", "OUT"])
  expect(
    schematicPorts
      .map((schematicPort) => schematicPort.center)
      .sort((firstCenter, secondCenter) => firstCenter.x - secondCenter.x),
  ).toEqual([
    { x: 2.2, y: -1 },
    { x: 3.8, y: -1 },
  ])
})
