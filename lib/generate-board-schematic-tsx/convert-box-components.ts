import { su } from "@tscircuit/soup-util"
import {
  schematic_text,
  type AnyCircuitElement,
  type SchematicComponent,
} from "circuit-json"
import { formatElement } from "./format-attributes"

export const convertBoxComponent = (
  schematic_component: SchematicComponent,
  circuitJson: AnyCircuitElement[],
): string[] => {
  const primitives = [
    formatElement("schematicrect", {
      schX: schematic_component.center.x,
      schY: schematic_component.center.y,
      width: schematic_component.size.width,
      height: schematic_component.size.height,
    }),
  ]
  for (const schematic_port of su(circuitJson).schematic_port.list({
    schematic_component_id: schematic_component.schematic_component_id,
  })) {
    const edge = { ...schematic_port.center }
    switch (schematic_port.side_of_component) {
      case "left":
        edge.x =
          schematic_component.center.x - schematic_component.size.width / 2
        break
      case "right":
        edge.x =
          schematic_component.center.x + schematic_component.size.width / 2
        break
      case "top":
        edge.y =
          schematic_component.center.y + schematic_component.size.height / 2
        break
      case "bottom":
        edge.y =
          schematic_component.center.y - schematic_component.size.height / 2
        break
    }
    primitives.push(
      formatElement("schematicline", {
        x1: edge.x,
        y1: edge.y,
        x2: schematic_port.center.x,
        y2: schematic_port.center.y,
      }),
    )
    const source_port = su(circuitJson).source_port.get(
      schematic_port.source_port_id,
    )
    const anchor =
      schematic_port.side_of_component === "left"
        ? "center_left"
        : schematic_port.side_of_component === "right"
          ? "center_right"
          : "center"
    if (source_port?.name)
      primitives.push(
        formatElement("schematictext", {
          text: source_port.name,
          schX: edge.x,
          schY: edge.y,
          anchor,
          fontSize: schematic_text.shape.font_size.parse(undefined),
        }),
      )
    if (schematic_port.pin_number !== undefined)
      primitives.push(
        formatElement("schematictext", {
          text: String(schematic_port.pin_number),
          schX: (edge.x + schematic_port.center.x) / 2,
          schY: (edge.y + schematic_port.center.y) / 2,
          anchor: "bottom_center",
          fontSize: schematic_text.shape.font_size.parse(undefined),
        }),
      )
  }
  return primitives
}
