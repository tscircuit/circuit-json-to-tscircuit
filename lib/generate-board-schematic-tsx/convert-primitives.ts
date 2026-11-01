import { schematic_text, type AnyCircuitElement } from "circuit-json"
import { generateSymbolElements } from "../generate-symbol-tsx"
import type { SchematicElementConverter } from "./converter-types"
import { convertRect } from "./convert-rect"
import { formatElement } from "./format-attributes"
import { getNativeSymbolTextReplacements } from "./get-native-symbol-text-replacements"
import { getReplacedSchematicComponentIds } from "./get-replaced-schematic-component-ids"
import { getSchematicPrimitivePaint } from "./get-schematic-primitive-paint"
import {
  getSchematicPrimitivesInRenderOrder,
  type SchematicPrimitive,
} from "./get-schematic-primitives-in-render-order"

const getRenderablePrimitives = (
  circuitJson: AnyCircuitElement[],
): SchematicPrimitive[] => {
  const replacedTextIds = new Set(
    getNativeSymbolTextReplacements(circuitJson).flatMap((replacement) => [
      ...replacement.importedTextIds,
    ]),
  )
  return getSchematicPrimitivesInRenderOrder(
    circuitJson,
    getReplacedSchematicComponentIds(circuitJson),
  ).filter(
    (primitive) =>
      primitive.type !== "schematic_text" ||
      !replacedTextIds.has(primitive.schematic_text_id),
  )
}

export const convertPrimitives: SchematicElementConverter = (circuitJson) => [
  ...generateSymbolElements(
    circuitJson.filter(
      (element) =>
        element.type === "schematic_table" ||
        element.type === "schematic_table_cell",
    ),
  ),
  ...getRenderablePrimitives(circuitJson).flatMap((element) => {
    const paint = getSchematicPrimitivePaint(element)
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
            color: paint.color,
            schRotation: element.rotation,
          }),
        ]
      case "schematic_path":
        return [
          formatElement("schematicpath", {
            points: element.points,
            strokeWidth: element.stroke_width,
            strokeColor: paint.strokeColor,
            fillColor: paint.fillColor,
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
            color: paint.color,
            fillColor: paint.fillColor,
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
            color: paint.color,
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
            color: paint.color,
            fillColor: paint.fillColor,
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
            color: paint.color,
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
