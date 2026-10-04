import { expect, test } from "bun:test"
import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
} from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("emits one symbol port for a pin shared by multiple units", async () => {
  const sourceCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="10mm" height="10mm" routingDisabled>
        <chip
          name="U1"
          footprint={<footprint>
            <smtpad portHints={["1"]} pcbX={-0.5} width={0.5} height={0.5} />
            <smtpad portHints={["2"]} pcbX={0.5} width={0.5} height={0.5} />
          </footprint>}
          symbol={<symbol>
            <port name="IN" pinNumber={1} schX={-0.8} direction="left" />
            <port name="GND" pinNumber={2} schX={0.8} direction="right" />
          </symbol>}
        />
        <trace from=".U1 > .pin1" to=".U1 > .pin2" />
      </board>
    )
  `)) as CircuitJson
  const firstUnit = sourceCircuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component",
  )
  const sharedPort = sourceCircuitJson.find(
    (element): element is SchematicPort =>
      element.type === "schematic_port" && element.pin_number === 2,
  )
  if (!firstUnit || !sharedPort) {
    throw new Error("Expected a schematic component and shared port")
  }

  const secondUnitId = "schematic_component_unit_b"
  sourceCircuitJson.push(
    {
      ...firstUnit,
      schematic_component_id: secondUnitId,
      center: { x: 3, y: 0 },
    },
    {
      ...sharedPort,
      schematic_port_id: "schematic_port_unit_b_shared_ground",
      schematic_component_id: secondUnitId,
      center: { x: 3.8, y: 0 },
    },
  )

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "MultiunitSharedPort",
  })
  const sharedPinDeclarations = generatedTscircuit.match(/pinNumber=\{2\}/g)

  expect(sharedPinDeclarations).toHaveLength(1)

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson

  expect(
    renderedCircuitJson.filter(
      (element) => element.type === "source_trace_not_connected_error",
    ),
  ).toHaveLength(0)
  expect(
    renderedCircuitJson.filter(
      (element) => element.type === "source_port" && element.pin_number === 2,
    ),
  ).toHaveLength(1)
})
