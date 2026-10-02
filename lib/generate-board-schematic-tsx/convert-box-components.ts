import { su } from "@tscircuit/soup-util"
import { type AnyCircuitElement, type SchematicComponent } from "circuit-json"
import { convertRect } from "./convert-rect"
import { formatElement } from "./format-attributes"

// Circuit JSON does not encode box body styling. These values mirror the
// circuit-to-svg defaults so reconstructed boxes keep the compiled view.
const DEFAULT_BOX_BODY_STROKE_WIDTH = 0.02
const DEFAULT_BOX_BODY_STROKE_COLOR = "#840000"
const DEFAULT_BOX_BODY_FILL_COLOR = "#ffffc2"

// Circuit JSON does not encode these presentation values. They mirror the
// circuit-to-svg defaults so reconstructed box pins keep the compiled view.
const DEFAULT_PIN_TEXT_FONT_SIZE = 0.15
const DEFAULT_PIN_TEXT_COLOR = "#a90000"
const DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE = 0.1
const DEFAULT_PIN_NUMBER_BASELINE_OFFSET = 0.02

export const convertBoxComponent = ({
  circuitJson,
  schematicComponent,
}: {
  circuitJson: AnyCircuitElement[]
  schematicComponent: SchematicComponent
}): string[] => {
  const primitives = [
    convertRect({
      center: schematicComponent.center,
      width: schematicComponent.size.width,
      height: schematicComponent.size.height,
      strokeWidth: DEFAULT_BOX_BODY_STROKE_WIDTH,
      color: DEFAULT_BOX_BODY_STROKE_COLOR,
      fillColor: DEFAULT_BOX_BODY_FILL_COLOR,
      isFilled: true,
    }),
  ]
  for (const schematicPort of su(circuitJson).schematic_port.list({
    schematic_component_id: schematicComponent.schematic_component_id,
  })) {
    const edge = { ...schematicPort.center }
    switch (schematicPort.side_of_component) {
      case "left":
        edge.x = schematicComponent.center.x - schematicComponent.size.width / 2
        break
      case "right":
        edge.x = schematicComponent.center.x + schematicComponent.size.width / 2
        break
      case "top":
        edge.y =
          schematicComponent.center.y + schematicComponent.size.height / 2
        break
      case "bottom":
        edge.y =
          schematicComponent.center.y - schematicComponent.size.height / 2
        break
    }
    primitives.push(
      formatElement("schematicline", {
        x1: edge.x,
        y1: edge.y,
        x2: schematicPort.center.x,
        y2: schematicPort.center.y,
        strokeWidth: DEFAULT_BOX_BODY_STROKE_WIDTH,
        color: DEFAULT_BOX_BODY_STROKE_COLOR,
      }),
    )
    const sourcePort = su(circuitJson).source_port.get(
      schematicPort.source_port_id,
    )
    const labelPosition = { ...edge }
    const pinNumberPosition = {
      x: (edge.x + schematicPort.center.x) / 2,
      y: (edge.y + schematicPort.center.y) / 2,
    }
    let anchor = "center"
    let rotation = 0
    switch (schematicPort.side_of_component) {
      case "left":
        labelPosition.x += DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
        pinNumberPosition.y += DEFAULT_PIN_NUMBER_BASELINE_OFFSET
        anchor = "center_left"
        break
      case "right":
        labelPosition.x -= DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
        pinNumberPosition.y += DEFAULT_PIN_NUMBER_BASELINE_OFFSET
        anchor = "center_right"
        break
      case "top":
        labelPosition.y -= DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
        pinNumberPosition.x -= DEFAULT_PIN_NUMBER_BASELINE_OFFSET
        anchor = "center_right"
        rotation = -90
        break
      case "bottom":
        labelPosition.y += DEFAULT_PIN_LABEL_DISTANCE_FROM_EDGE
        pinNumberPosition.x -= DEFAULT_PIN_NUMBER_BASELINE_OFFSET
        anchor = "center_left"
        rotation = -90
        break
    }
    const displayPinLabel = schematicPort.display_pin_label ?? sourcePort?.name
    if (displayPinLabel)
      primitives.push(
        formatElement("schematictext", {
          text: displayPinLabel,
          schX: labelPosition.x,
          schY: labelPosition.y,
          anchor,
          fontSize: DEFAULT_PIN_TEXT_FONT_SIZE,
          color: DEFAULT_PIN_TEXT_COLOR,
          schRotation: rotation || undefined,
        }),
      )
    if (schematicPort.pin_number !== undefined)
      primitives.push(
        formatElement("schematictext", {
          text: String(schematicPort.pin_number),
          schX: pinNumberPosition.x,
          schY: pinNumberPosition.y,
          anchor: "bottom_center",
          fontSize: DEFAULT_PIN_TEXT_FONT_SIZE,
          color: DEFAULT_PIN_TEXT_COLOR,
          schRotation: rotation || undefined,
        }),
      )
  }
  return primitives
}
