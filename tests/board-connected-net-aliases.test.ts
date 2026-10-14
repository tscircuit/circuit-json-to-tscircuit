import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("connected source-net aliases use one canonical runtime net", () => {
  const source: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_canonical",
      name: "HU_",
      member_source_group_ids: [],
    },
    {
      type: "source_net",
      source_net_id: "source_net_alias",
      name: "UH_",
      member_source_group_ids: [],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_signal",
      connected_source_port_ids: [],
      connected_source_net_ids: ["source_net_canonical", "source_net_alias"],
    },
    {
      type: "pcb_via",
      pcb_via_id: "pcb_via_alias",
      source_net_id: "source_net_alias",
      x: 0,
      y: 0,
      outer_diameter: 0.6,
      hole_diameter: 0.3,
      layers: ["top", "bottom"],
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

  const generated = convertCircuitJsonToTscircuit(source, {
    componentName: "AliasedNetBoard",
  })

  expect(generated).toContain('<net name={"HU_"}')
  expect(generated).not.toContain('<net name={"UH_"}')
  expect(generated).not.toContain("net.UH_")
  expect(generated).not.toContain('<trace path={["net.HU_","net.HU_"]}')
  expect(generated).toContain('connectsTo={"net.HU_"}')
})
