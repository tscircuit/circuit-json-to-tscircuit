import type { CircuitJson, SourcePort } from "circuit-json"
import { sourcePortsShareSourceTrace } from "./source-ports-share-source-trace"

export const hasRedundantAnodeSchottkyConnections = ({
  circuitJson,
  sourcePorts,
}: {
  circuitJson: CircuitJson
  sourcePorts: SourcePort[]
}): boolean => {
  const anodeSourcePorts = sourcePorts.filter(
    (sourcePort) => sourcePort.name.toLowerCase() === "a",
  )
  const cathode = sourcePorts.find(
    (sourcePort) => sourcePort.name.toLowerCase() === "k",
  )
  const [firstAnode, secondAnode] = anodeSourcePorts
  if (!firstAnode || !secondAnode || !cathode) return false
  return (
    sourcePortsShareSourceTrace({
      circuitJson,
      firstSourcePort: firstAnode,
      secondSourcePort: secondAnode,
    }) &&
    anodeSourcePorts.every(
      (anodeSourcePort) =>
        !sourcePortsShareSourceTrace({
          circuitJson,
          firstSourcePort: anodeSourcePort,
          secondSourcePort: cathode,
        }),
    )
  )
}
