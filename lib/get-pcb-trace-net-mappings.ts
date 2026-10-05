import type { AnyCircuitElement } from "circuit-json"

export const getSourceNetIdsUsedByPcbTraces = (
  circuitJson: AnyCircuitElement[],
): Set<string> => {
  const sourceTraceIds = new Set(
    circuitJson.flatMap((element) =>
      element.type === "pcb_trace" && element.source_trace_id
        ? [element.source_trace_id]
        : [],
    ),
  )
  return new Set(
    circuitJson.flatMap((element) =>
      element.type === "source_trace" &&
      sourceTraceIds.has(element.source_trace_id)
        ? element.connected_source_net_ids
        : [],
    ),
  )
}

export const getRuntimeNetNamesBySourceTraceId = ({
  circuitJson,
  runtimeNetNameBySourceNetId,
}: {
  circuitJson: AnyCircuitElement[]
  runtimeNetNameBySourceNetId: Map<string, string>
}): Map<string, string> => {
  const result = new Map<string, string>()
  for (const element of circuitJson) {
    if (element.type !== "source_trace") continue
    const runtimeNetName = element.connected_source_net_ids
      .map((sourceNetId) => runtimeNetNameBySourceNetId.get(sourceNetId))
      .find(Boolean)
    if (runtimeNetName) result.set(element.source_trace_id, runtimeNetName)
  }
  return result
}
