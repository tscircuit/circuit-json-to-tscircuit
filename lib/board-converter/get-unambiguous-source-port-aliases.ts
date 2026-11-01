import type { AnyCircuitElement } from "circuit-json"

type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>

export function getUnambiguousSourcePortAliases({
  sourcePort,
  sourcePorts,
}: {
  sourcePort: SourcePort
  sourcePorts: SourcePort[]
}): string[] {
  return [sourcePort.name, ...(sourcePort.port_hints ?? [])].filter((alias) => {
    if (/^(pin)?\d+$/.test(alias)) return true
    return !sourcePorts.some(
      (otherPort) =>
        otherPort.source_port_id !== sourcePort.source_port_id &&
        (otherPort.name === alias ||
          (alias !== sourcePort.name && otherPort.port_hints?.includes(alias))),
    )
  })
}
