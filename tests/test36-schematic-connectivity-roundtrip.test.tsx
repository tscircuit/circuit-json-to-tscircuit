import { expect, test } from "bun:test"
import type { CircuitJson, SourceTrace } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board width="20mm" height="10mm" routingDisabled>
    <chip
      name="U1"
      schX={-3}
      pcbX={-3}
      pinLabels={{ pin1: ["OUT"] }}
      footprint={<footprint>
        <smtpad portHints={["1"]} width={1} height={1} />
      </footprint>}
    />
    <chip
      name="U2"
      schX={3}
      pcbX={3}
      pinLabels={{ pin1: ["IN"] }}
      footprint={<footprint>
        <smtpad portHints={["1"]} width={1} height={1} />
      </footprint>}
    />
    <trace from=".U1 > .OUT" to=".U2 > .IN" />
  </board>
)
`

test("preserves schematic source connectivity without rerouting the PCB", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as CircuitJson
  const sourceTrace = sourceCircuitJson.find(
    (element): element is SourceTrace => element.type === "source_trace",
  )
  if (!sourceTrace) throw new Error("Expected a source trace in the fixture")

  sourceCircuitJson.push({
    type: "source_net",
    source_net_id: "source_net_5v",
    name: "5V",
    member_source_group_ids: [],
  })
  sourceTrace.connected_source_net_ids = ["source_net_5v"]

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })

  expect(generatedTscircuit).toContain("routingDisabled")
  expect(generatedTscircuit).toContain('<net name="NET_5V" />')
  expect(generatedTscircuit).toContain(
    '<trace path={[".U1 > .pin1",".U2 > .pin1","net.NET_5V"]} />',
  )

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedSourceTrace = renderedCircuitJson.find(
    (element): element is SourceTrace => element.type === "source_trace",
  )

  expect(renderedSourceTrace).toMatchObject({
    connected_source_net_ids: expect.arrayContaining([expect.any(String)]),
    connected_source_port_ids: expect.arrayContaining([
      expect.any(String),
      expect.any(String),
    ]),
  })
  expect(
    renderedCircuitJson.some((element) => element.type === "schematic_trace"),
  ).toBeTrue()
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_trace"),
  ).toHaveLength(0)

  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToSchematicSvg(sourceCircuitJson),
      convertCircuitJsonToSchematicSvg(renderedCircuitJson),
    ],
    {
      gap: 24,
      normalizeSize: true,
      targetSize: 1200,
      rootAttributes: {
        "aria-label":
          "schematic connectivity: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )

  await expect(comparisonSvg).toMatchSvgSnapshot(
    import.meta.path,
    "schematic-comparison",
  )
})
