import { expect, test } from "bun:test"
import type { AnyCircuitElement, SourceTrace } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board width="16mm" height="10mm" routingDisabled>
    <chip
      name="U1"
      pcbX={-3}
      noSchematicRepresentation
      pinLabels={{ pin1: ["OUT"] }}
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" shape="rect" layer="top" />
      </footprint>}
    />
    <chip
      name="U2"
      pcbX={3}
      noSchematicRepresentation
      pinLabels={{ pin1: ["IN"] }}
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" shape="rect" layer="top" />
      </footprint>}
    />
    <trace
      from=".U1 > .pin1"
      to=".U2 > .pin1"
      sourceTraceId="source_trace_physical_only"
      noSchematicRepresentation
    />
    <pcbtrace
      source_trace_id="source_trace_physical_only"
      route={[
        { route_type: "wire", x: -3, y: 0, width: 0.25, layer: "top" },
        { route_type: "wire", x: 3, y: 0, width: 0.25, layer: "top" },
      ]}
    />
  </board>
)
`

test("preserves PCB-only source connectivity without adding a schematic net", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson)
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedSourceTrace = renderedCircuitJson.find(
    (element): element is SourceTrace =>
      element.type === "source_trace" &&
      element.source_trace_id === "source_trace_physical_only",
  )

  expect(generatedTscircuit).toContain(
    'sourceTraceId="source_trace_physical_only"',
  )
  expect(generatedTscircuit).toContain("noSchematicRepresentation")
  expect(renderedSourceTrace?.connected_source_port_ids).toHaveLength(2)
  expect(renderedCircuitJson).not.toContainEqual(
    expect.objectContaining({
      type: "schematic_trace",
      source_trace_id: "source_trace_physical_only",
    }),
  )
})
