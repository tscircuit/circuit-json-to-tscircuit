import type { SchematicComponent, SchematicPort } from "circuit-json"

export const getBoxPinDisplayLabel = ({
  schematicComponent,
  schematicPort,
}: {
  schematicComponent: SchematicComponent
  schematicPort: SchematicPort
}): string | undefined =>
  schematicPort.display_pin_label ??
  schematicComponent.port_labels?.[String(schematicPort.pin_number)]
