import type { AnyCircuitElement } from "circuit-json"
import type { BoardConversionContext } from "./board-conversion-context"

export function generateBoardTracesTsx(
  circuitJson: AnyCircuitElement[],
  context: BoardConversionContext,
): string[] {
  return circuitJson.flatMap((element) => {
    if (element.type !== "source_trace") return []

    const portSelectors = element.connected_source_port_ids.flatMap(
      (sourcePortId) =>
        context.pcbPortSelectorsBySourcePortId.get(sourcePortId) ?? [],
    )
    const netSelectors = element.connected_source_net_ids.flatMap(
      (sourceNetId) => {
        const runtimeNetName =
          context.runtimeNetNameBySourceNetId.get(sourceNetId)
        return runtimeNetName ? [`net.${runtimeNetName}`] : []
      },
    )
    const path = [...portSelectors, ...netSelectors]

    return path.length >= 2 ? [`<trace path={${JSON.stringify(path)}} />`] : []
  })
}
