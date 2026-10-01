import { expect, test } from "bun:test"
import type { AnyCircuitElement, PcbTrace, SourceTrace } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board width="16mm" height="10mm" routingDisabled>
    <chip
      name="U1"
      pcbX={-3}
      schX={-3}
      pinLabels={{ pin1: ["OUT"] }}
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" shape="rect" layer="top" />
      </footprint>}
    />
    <chip
      name="U2"
      pcbX={3}
      schX={3}
      pinLabels={{ pin1: ["IN"] }}
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" shape="rect" layer="top" />
      </footprint>}
    />
    <net name="SIGNAL" />
    <trace
      path={[".U1 > .pin1", ".U2 > .pin1", "net.SIGNAL"]}
      sourceTraceId="source_trace_imported"
    />
    <pcbtrace
      source_trace_id="source_trace_imported"
      route={[
        { route_type: "wire", x: -3, y: 0, width: 0.25, layer: "top" },
        { route_type: "wire", x: 3, y: 0, width: 0.25, layer: "top" },
      ]}
    />
  </board>
)
`

test("preserves PCB source connectivity through generated tscircuit", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const pcbSourceTrace = sourceCircuitJson.find(
    (element): element is SourceTrace =>
      element.type === "source_trace" &&
      element.source_trace_id === "source_trace_imported",
  )
  if (!pcbSourceTrace) throw new Error("Expected the source PCB trace")

  pcbSourceTrace.subcircuit_connectivity_map_key = "pcb_signal"
  sourceCircuitJson.push({
    ...pcbSourceTrace,
    source_trace_id: "source_trace_schematic",
    subcircuit_connectivity_map_key: "schematic_signal",
  })
  for (const element of sourceCircuitJson) {
    if (element.type === "schematic_trace") {
      element.source_trace_id = "source_trace_schematic"
      element.subcircuit_connectivity_map_key = "schematic_signal"
    }
  }

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedSourceTrace = renderedCircuitJson.find(
    (element): element is SourceTrace =>
      element.type === "source_trace" &&
      element.source_trace_id === "source_trace_imported",
  )
  const renderedPcbTrace = renderedCircuitJson.find(
    (element): element is PcbTrace =>
      element.type === "pcb_trace" &&
      element.source_trace_id === "source_trace_imported",
  )
  const renderedPcbPads = renderedCircuitJson.filter(
    (element) => element.type === "pcb_smtpad",
  )
  const renderedPcbPorts = renderedCircuitJson.filter(
    (element) => element.type === "pcb_port",
  )

  expect(generatedTscircuit).toContain('sourceTraceId="source_trace_imported"')
  expect(generatedTscircuit).not.toContain(
    'sourceTraceId="source_trace_imported" noSchematicRepresentation',
  )
  expect(renderedSourceTrace?.connected_source_port_ids).toHaveLength(2)
  expect(renderedPcbTrace).toBeDefined()
  if (!renderedSourceTrace)
    throw new Error("Expected the imported source trace")
  if (!renderedPcbTrace) throw new Error("Expected the imported PCB trace")

  expect([...renderedSourceTrace.connected_source_port_ids].sort()).toEqual(
    renderedPcbPorts.map((pcbPort) => pcbPort.source_port_id).sort(),
  )
  expect(renderedPcbPads.map((pcbPad) => pcbPad.pcb_port_id).sort()).toEqual(
    renderedPcbPorts.map((pcbPort) => pcbPort.pcb_port_id).sort(),
  )
  expect(
    renderedCircuitJson.some(
      (element) => element.type === "pcb_pad_trace_clearance_error",
    ),
  ).toBe(false)

  const pcbComparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    {
      gap: 24,
      normalizeSize: true,
      targetSize: 600,
      rootAttributes: {
        "aria-label":
          "PCB source connectivity: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )
  await expect(pcbComparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})
