import type { SchematicPort, SourcePort } from "circuit-json"

export const getBoxPinDisplayLabel = ({
  schematicPort,
  sourcePort,
}: {
  schematicPort: SchematicPort
  sourcePort: SourcePort | null
}): string | undefined => {
  if (schematicPort.display_pin_label !== undefined)
    return schematicPort.display_pin_label

  const sourceName = sourcePort?.name
  return sourceName && !/^\d+$/.test(sourceName) ? sourceName : undefined
}
