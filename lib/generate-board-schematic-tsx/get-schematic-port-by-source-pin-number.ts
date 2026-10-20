import type { SchematicPort, SourcePort } from "circuit-json"
import { getSourcePinNumber } from "./get-source-pin-number"

export const getSchematicPortBySourcePinNumber = ({
  sourcePinNumber,
  sourcePorts,
  schematicPorts,
}: {
  sourcePinNumber: string
  sourcePorts: SourcePort[]
  schematicPorts: SchematicPort[]
}): SchematicPort | undefined => {
  const sourcePort = sourcePorts.find(
    (candidate) =>
      getSourcePinNumber({
        sourcePort: candidate,
        schematicPorts,
      }) === sourcePinNumber,
  )
  return schematicPorts.find(
    (schematicPort) =>
      schematicPort.source_port_id === sourcePort?.source_port_id,
  )
}
