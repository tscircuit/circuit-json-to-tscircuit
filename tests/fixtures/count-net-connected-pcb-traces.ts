import type { CircuitJson } from "circuit-json"

export const countNetConnectedPcbTraces = (
  circuitJson: CircuitJson,
): number => {
  const connectedSourceTraceIds = new Set(
    circuitJson.flatMap((element) =>
      element.type === "source_trace" &&
      element.connected_source_net_ids.length > 0
        ? [element.source_trace_id]
        : [],
    ),
  )
  return circuitJson.filter(
    (element) =>
      element.type === "pcb_trace" &&
      element.source_trace_id &&
      connectedSourceTraceIds.has(element.source_trace_id),
  ).length
}
