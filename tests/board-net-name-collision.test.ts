import { expect, test } from "bun:test"
import type { AnyCircuitElement, PcbVia, SourceNet } from "circuit-json"
import { createBoardConversionContext } from "lib/board-conversion-context"

const sanitizedSourceNet: SourceNet = {
  type: "source_net",
  source_net_id: "source_net_sanitized",
  name: "12V+",
  member_source_group_ids: [],
}
const existingSourceNet: SourceNet = {
  type: "source_net",
  source_net_id: "source_net_existing",
  name: "NET_12V_",
  member_source_group_ids: [],
}
const via: PcbVia = {
  type: "pcb_via",
  pcb_via_id: "pcb_via_sanitized_net",
  source_net_id: sanitizedSourceNet.source_net_id,
  x: 0,
  y: 0,
  outer_diameter: 0.6,
  hole_diameter: 0.3,
  layers: ["top", "bottom"],
}

test("distinct net names remain distinct regardless of input order", () => {
  const sourceNetOrders = [
    [sanitizedSourceNet, existingSourceNet],
    [existingSourceNet, sanitizedSourceNet],
  ]

  for (const sourceNets of sourceNetOrders) {
    const circuitJson: AnyCircuitElement[] = [...sourceNets, via]
    const context = createBoardConversionContext(circuitJson)

    expect(Object.fromEntries(context.runtimeNetNameBySourceNetId)).toEqual({
      source_net_existing: "NET_12V_",
      source_net_sanitized: "NET_12V__2",
    })
  }
})
