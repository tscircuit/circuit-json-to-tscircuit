import type { SchematicPort } from "circuit-json"

export const getBoxPinDisplayLabel = ({
  schematicPort,
}: {
  schematicPort: SchematicPort
}): string | undefined => schematicPort.display_pin_label
