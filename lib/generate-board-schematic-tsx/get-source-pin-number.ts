import type { SchematicPort, SourcePort } from "circuit-json"

const getNumericPortHint = (sourcePort: SourcePort): string | undefined => {
  const numericPortHint = sourcePort.port_hints?.find((portHint) =>
    /^(?:pin)?\d+$/.test(portHint),
  )
  return numericPortHint?.replace(/^pin/, "")
}

const getNumericPortName = (sourcePort: SourcePort): string | undefined =>
  /^\d+$/.test(sourcePort.name) ? sourcePort.name : undefined

export const getSourcePinNumber = ({
  sourcePort,
  schematicPorts,
}: {
  sourcePort: SourcePort
  schematicPorts: SchematicPort[]
}): string | undefined => {
  const linkedSchematicPort = schematicPorts.find(
    (schematicPort) =>
      schematicPort.source_port_id === sourcePort.source_port_id,
  )
  const sourcePinNumber =
    sourcePort.pin_number ??
    linkedSchematicPort?.pin_number ??
    getNumericPortHint(sourcePort) ??
    getNumericPortName(sourcePort)
  return sourcePinNumber === undefined ? undefined : String(sourcePinNumber)
}
