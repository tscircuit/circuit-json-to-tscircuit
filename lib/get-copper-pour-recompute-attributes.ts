import type { AnyCircuitElement, PcbCopperPour } from "circuit-json"

export function getCopperPourRecomputeAttributes(
  circuitJson: AnyCircuitElement[],
  pour?: PcbCopperPour,
): string {
  const board = circuitJson.find((element) => element.type === "pcb_board")
  const padMargin = requireClearance({
    clearance: pour?.clearance ?? board?.min_trace_to_pad_edge_clearance,
    field: "min_trace_to_pad_edge_clearance",
  })
  const traceMargin = requireClearance({
    clearance:
      pour?.clearance ??
      board?.min_different_net_trace_edge_to_trace_edge_clearance,
    field: "min_different_net_trace_edge_to_trace_edge_clearance",
  })
  const clearance = requireClearance({
    clearance: pour?.clearance ?? board?.min_pad_edge_to_pad_edge_clearance,
    field: "min_pad_edge_to_pad_edge_clearance",
  })
  const boardEdgeMargin = requireClearance({
    clearance:
      pour?.board_edge_margin ?? board?.min_board_edge_clearance ?? clearance,
    field: "min_board_edge_clearance",
  })
  // A physical PCB cutout is another board edge; drill holes have separate electrical rules.
  const cutoutMargin =
    pour?.board_edge_margin === undefined ? clearance : boardEdgeMargin
  return `padMargin={${padMargin}} traceMargin={${traceMargin}} clearance={${clearance}} boardEdgeMargin={${boardEdgeMargin}} cutoutMargin={${cutoutMargin}}`
}

function requireClearance({
  clearance,
  field,
}: {
  clearance: number | undefined
  field: string
}): number {
  if (clearance === undefined || !Number.isFinite(clearance) || clearance < 0) {
    throw new Error(
      `Copper pour recomputation requires a finite, nonnegative pcb_board.${field}`,
    )
  }
  return clearance
}
