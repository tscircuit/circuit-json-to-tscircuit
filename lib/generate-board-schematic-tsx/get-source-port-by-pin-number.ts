import type { SchematicPort, SourcePort } from "circuit-json"
import { getSourcePinNumber } from "./get-source-pin-number"

export const getSourcePortByPinNumber = ({
  sourcePinNumber,
  sourcePorts,
  schematicPorts,
}: {
  sourcePinNumber: string
  sourcePorts: SourcePort[]
  schematicPorts: SchematicPort[]
}): SourcePort | undefined =>
  sourcePorts.find(
    (sourcePort) =>
      getSourcePinNumber({ sourcePort, schematicPorts }) === sourcePinNumber,
  )
