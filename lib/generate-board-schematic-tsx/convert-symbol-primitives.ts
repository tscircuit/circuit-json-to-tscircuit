import { schematic_text } from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import { applyToPoint, type Matrix } from "transformation-matrix"
import { formatElement } from "./format-attributes"

// Circuit JSON symbol primitives do not encode this presentation value. It
// matches the component outline width used by circuit-to-svg.
const DEFAULT_SYMBOL_CIRCLE_STROKE_WIDTH = 0.02

const anchors = {
  middle_top: "top_center",
  middle_bottom: "bottom_center",
  middle_left: "center_left",
  middle_right: "center_right",
  top_left: "top_left",
  top_right: "top_right",
  bottom_left: "bottom_left",
  bottom_right: "bottom_right",
  center: "center",
}

export const convertSymbolPrimitives = ({
  symbol,
  symbolToSchematicTransform,
  reference,
  displayText,
}: {
  symbol: SchSymbol
  symbolToSchematicTransform: Matrix
  reference: string
  displayText: string
}): string[] =>
  symbol.primitives.map((primitive) => {
    if (primitive.type === "path") {
      const points = primitive.points.map((point) =>
        applyToPoint(symbolToSchematicTransform, point),
      )
      if (primitive.closed && points[0]) points.push(points[0])
      return formatElement("schematicpath", {
        points,
        strokeWidth: primitive.strokeWidth,
        isFilled: primitive.fill,
      })
    }
    const center = applyToPoint(symbolToSchematicTransform, primitive)
    if (primitive.type === "text") {
      const text =
        primitive.text === "{REF}"
          ? reference
          : primitive.text === "{VAL}"
            ? displayText
            : primitive.text
      return formatElement("schematictext", {
        text,
        schX: center.x,
        schY: center.y,
        anchor: anchors[primitive.anchor],
        fontSize:
          primitive.fontSize ?? schematic_text.shape.font_size.parse(undefined),
      })
    }
    const symbolToSchematicVectorTransform = {
      ...symbolToSchematicTransform,
      e: 0,
      f: 0,
    }
    if (primitive.type === "circle") {
      const radiusVector = applyToPoint(symbolToSchematicVectorTransform, {
        x: primitive.radius,
        y: 0,
      })
      return formatElement("schematiccircle", {
        center,
        radius: Math.hypot(radiusVector.x, radiusVector.y),
        strokeWidth: DEFAULT_SYMBOL_CIRCLE_STROKE_WIDTH,
        isFilled: primitive.fill,
      })
    }
    const widthVector = applyToPoint(symbolToSchematicVectorTransform, {
      x: primitive.width,
      y: 0,
    })
    const heightVector = applyToPoint(symbolToSchematicVectorTransform, {
      x: 0,
      y: primitive.height,
    })
    const ccwRotationDegrees =
      (Math.atan2(widthVector.y, widthVector.x) * 180) / Math.PI
    return formatElement("schematicrect", {
      schX: center.x,
      schY: center.y,
      width: Math.hypot(widthVector.x, widthVector.y),
      height: Math.hypot(heightVector.x, heightVector.y),
      rotation: ccwRotationDegrees,
    })
  })
