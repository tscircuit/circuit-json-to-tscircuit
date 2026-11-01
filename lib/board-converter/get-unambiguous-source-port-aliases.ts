import type { AnyCircuitElement } from "circuit-json"
import type { SourcePortId } from "../board-conversion-types"

type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>

export function getUnambiguousSourcePortAliases({
  sourcePort,
  sourcePorts,
  internallyConnectedSourcePortIds = [],
}: {
  sourcePort: SourcePort
  sourcePorts: SourcePort[]
  internallyConnectedSourcePortIds?: SourcePortId[][]
}): string[] {
  return (sourcePort.port_hints ?? []).filter((alias) => {
    if (alias === sourcePort.name) return true

    for (const canonicalPort of sourcePorts) {
      if (
        canonicalPort.name !== alias ||
        canonicalPort.source_port_id === sourcePort.source_port_id
      ) {
        continue
      }
      const isDeclaredInternalConnection =
        internallyConnectedSourcePortIds.some(
          (group) =>
            group.includes(sourcePort.source_port_id) &&
            group.includes(canonicalPort.source_port_id),
        )
      if (!isDeclaredInternalConnection) return false
    }
    return true
  })
}
