import type { SchematicComponent, SchematicPort } from "circuit-json"
import { formatElement } from "./format-attributes"
import { getBoxPinDisplayLabel } from "./get-box-pin-display-label"
import { getSchematicTextProp } from "./get-schematic-text-prop"

const DEFAULT_PIN_TEXT_FONT_SIZE = 0.15
const DEFAULT_PIN_TEXT_COLOR = "#a90000"
const DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE = 0.1
export const convertBoxPinLabel = ({
  edge,
  schematicComponent,
  schematicPort,
}: {
  edge: { x: number; y: number }
  schematicComponent: SchematicComponent
  schematicPort: SchematicPort
}): string[] => {
  const displayPinLabel = getBoxPinDisplayLabel({
    schematicComponent,
    schematicPort,
  })
  if (!displayPinLabel) return []

  const labelPosition = { ...edge }
  let anchor: "center_left" | "center_right"
  let ccwRotationDegrees = 0
  switch (schematicPort.side_of_component) {
    case "right":
      labelPosition.x -= DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
      anchor = "center_right"
      break
    case "top":
      labelPosition.y -= DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
      anchor = "center_right"
      ccwRotationDegrees = -90
      break
    case "bottom":
      labelPosition.y += DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
      anchor = "center_left"
      ccwRotationDegrees = -90
      break
    default:
      labelPosition.x += DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
      anchor = "center_left"
  }
  const fontSize =
    schematicPort.display_pin_label_font_size ?? DEFAULT_PIN_TEXT_FONT_SIZE
  return [
    formatElement("schematictext", {
      text: getSchematicTextProp({
        text: displayPinLabel,
        textParts: schematicPort.display_pin_label_text_parts,
      }),
      schX: labelPosition.x,
      schY: labelPosition.y,
      anchor,
      fontSize,
      color: DEFAULT_PIN_TEXT_COLOR,
      schRotation: ccwRotationDegrees || undefined,
    }),
  ]
}
