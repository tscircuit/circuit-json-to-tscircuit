import { su } from "@tscircuit/soup-util"
import {
  schematic_text,
  type AnyCircuitElement,
  type SchematicComponent,
} from "circuit-json"
import { convertRect } from "./convert-rect"
import { formatElement } from "./format-attributes"

const BOX_BODY_STROKE_WIDTH = 0.02
const BOX_BODY_STROKE_COLOR = "#840000"
const BOX_BODY_FILL_COLOR = "#ffffc2"

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
      strokeWidth: BOX_BODY_STROKE_WIDTH,
      color: BOX_BODY_STROKE_COLOR,
      fillColor: BOX_BODY_FILL_COLOR,
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
      }),
    )
    const sourcePort = su(circuitJson).source_port.get(
      schematicPort.source_port_id,
    )
    const anchor =
      schematicPort.side_of_component === "left"
        ? "center_left"
        : schematicPort.side_of_component === "right"
          ? "center_right"
          : "center"
    if (sourcePort?.name)
      primitives.push(
        formatElement("schematictext", {
          text: sourcePort.name,
          schX: edge.x,
          schY: edge.y,
          anchor,
          fontSize: schematic_text.shape.font_size.parse(undefined),
        }),
      )
    if (schematicPort.pin_number !== undefined)
      primitives.push(
        formatElement("schematictext", {
          text: String(schematicPort.pin_number),
          schX: (edge.x + schematicPort.center.x) / 2,
          schY: (edge.y + schematicPort.center.y) / 2,
          anchor: "bottom_center",
          fontSize: schematic_text.shape.font_size.parse(undefined),
        }),
      )
  }
  return primitives
}
