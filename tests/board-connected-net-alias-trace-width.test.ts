import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

const getAliasedNets = (traceWidths: {
  canonical?: number
  alias?: number
}): CircuitJson => [
  {
    type: "source_net",
    source_net_id: "source_net_canonical",
    name: "MOTOR",
    member_source_group_ids: [],
    trace_width: traceWidths.canonical,
  },
  {
    type: "source_net",
    source_net_id: "source_net_alias",
    name: "MOTOR_SENSE",
    member_source_group_ids: [],
    trace_width: traceWidths.alias,
  },
  {
    type: "source_trace",
    source_trace_id: "source_trace_motor",
    connected_source_port_ids: [],
    connected_source_net_ids: ["source_net_canonical", "source_net_alias"],
  },
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board",
    center: { x: 0, y: 0 },
    width: 10,
    height: 10,
    thickness: 1.6,
    num_layers: 2,
    material: "fr4",
  },
]

// Source nets joined by a source trace are one electrical net and become one
// <net />. Core routes such a connection at the widest trace_width of its
// source nets, so that is the width the single <net /> asks for.
test("connected source-net aliases keep the widest trace width", () => {
  const widerAlias = convertCircuitJsonToTscircuit(
    getAliasedNets({ canonical: 0.2, alias: 1 }),
    { componentName: "AliasedNetBoard" },
  )
  expect(widerAlias).toContain('<net name={"MOTOR"} nominalTraceWidth="1mm" />')
  expect(widerAlias).not.toContain('<net name={"MOTOR_SENSE"}')

  const widerCanonical = convertCircuitJsonToTscircuit(
    getAliasedNets({ canonical: 1, alias: 0.2 }),
    { componentName: "AliasedNetBoard" },
  )
  expect(widerCanonical).toContain(
    '<net name={"MOTOR"} nominalTraceWidth="1mm" />',
  )
})

test("a trace width on only one connected source net is kept", () => {
  const generated = convertCircuitJsonToTscircuit(
    getAliasedNets({ alias: 0.5 }),
    { componentName: "AliasedNetBoard" },
  )
  expect(generated).toContain(
    '<net name={"MOTOR"} nominalTraceWidth="0.5mm" />',
  )
})

test("connected source nets without a trace width request none", () => {
  const generated = convertCircuitJsonToTscircuit(getAliasedNets({}), {
    componentName: "AliasedNetBoard",
  })
  expect(generated).toContain('<net name={"MOTOR"} />')
  expect(generated).not.toContain("nominalTraceWidth")
})
