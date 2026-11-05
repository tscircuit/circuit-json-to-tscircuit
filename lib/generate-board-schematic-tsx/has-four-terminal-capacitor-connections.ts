import type { CircuitJson, SchematicPort, SourcePort } from "circuit-json"
import { getSourcePortByPinNumber } from "./get-source-port-by-pin-number"
import { sourcePortsShareSourceTrace } from "./source-ports-share-source-trace"

export const hasFourTerminalCapacitorConnections = ({
  circuitJson,
  sourcePorts,
  schematicPorts,
}: {
  circuitJson: CircuitJson
  sourcePorts: SourcePort[]
  schematicPorts: SchematicPort[]
}): boolean => {
  const numberedSourcePorts = ["1", "2", "3", "4"].map((sourcePinNumber) =>
    getSourcePortByPinNumber({
      sourcePinNumber,
      sourcePorts,
      schematicPorts,
    }),
  )
  const [pin1, pin2, pin3, pin4] = numberedSourcePorts
  if (!pin1 || !pin2 || !pin3 || !pin4) return false
  return (
    sourcePortsShareSourceTrace({
      circuitJson,
      firstSourcePort: pin1,
      secondSourcePort: pin3,
    }) &&
    sourcePortsShareSourceTrace({
      circuitJson,
      firstSourcePort: pin2,
      secondSourcePort: pin4,
    }) &&
    !sourcePortsShareSourceTrace({
      circuitJson,
      firstSourcePort: pin1,
      secondSourcePort: pin2,
    })
  )
}
