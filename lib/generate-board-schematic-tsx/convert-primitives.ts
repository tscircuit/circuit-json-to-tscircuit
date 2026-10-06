import { schematic_text } from "circuit-json"
import { convertRect } from "./convert-rect"
import { generateSymbolElements } from "../generate-symbol-tsx"
import { formatElement } from "./format-attributes"
import type { SchematicElementConverter } from "./converter-types"

export const convertPrimitives: SchematicElementConverter = (circuitJson) => [
  ...generateSymbolElements(
    circuitJson.filter(
      (element) =>
        element.type === "schematic_table" ||
        element.type === "schematic_table_cell",
    ),
  ),
  ...circuitJson.flatMap((element) => {
    switch (element.type) {
      case "schematic_text":
        return [
          formatElement("schematictext", {
            text: element.text,
            schX: element.position.x,
            schY: element.position.y,
            anchor: element.anchor,
            fontSize:
              element.font_size ??
              schematic_text.shape.font_size.parse(undefined),
            color: element.color,
            schRotation: element.rotation,
          }),
        ]
      case "schematic_path":
        return [
          formatElement("schematicpath", {
            points: element.points,
            strokeWidth: element.stroke_width,
            strokeColor: element.stroke_color,
            fillColor: element.fill_color,
            isFilled: element.is_filled,
            dashLength: element.dash_length,
            dashGap: element.dash_gap,
          }),
        ]
      case "schematic_rect":
        return [
          convertRect({
            center: element.center,
            width: element.width,
            height: element.height,
            ccwRotationDegrees: element.rotation ?? undefined,
            strokeWidth: element.stroke_width,
            color: element.color,
            fillColor: element.fill_color,
            isFilled: element.is_filled,
            isDashed: element.is_dashed,
          }),
        ]
      case "schematic_line":
        return [
          formatElement("schematicline", {
            x1: element.x1,
            y1: element.y1,
            x2: element.x2,
            y2: element.y2,
            strokeWidth: element.stroke_width,
            color: element.color,
            isDashed: element.is_dashed,
            dashLength: element.dash_length,
            dashGap: element.dash_gap,
          }),
        ]
      case "schematic_circle":
        return [
          formatElement("schematiccircle", {
            center: element.center,
            radius: element.radius,
            strokeWidth: element.stroke_width,
            color: element.color,
            fillColor: element.fill_color,
            isFilled: element.is_filled,
            isDashed: element.is_dashed,
          }),
        ]
      case "schematic_arc":
        return [
          formatElement("schematicarc", {
            center: element.center,
            radius: element.radius,
            startAngleDegrees: element.start_angle_degrees,
            endAngleDegrees: element.end_angle_degrees,
            strokeWidth: element.stroke_width,
            color: element.color,
            isDashed: element.is_dashed,
            direction: element.direction,
          }),
        ]
      case "schematic_box":
        return [
          formatElement("schematicbox", {
            schX: element.x,
            schY: element.y,
            width: element.width,
            height: element.height,
            isDashed: element.is_dashed,
          }),
        ]
      default:
        return []
    }
  }),
]
