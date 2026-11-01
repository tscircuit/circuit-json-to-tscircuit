import { schematic_text } from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import { applyToPoint, type Matrix } from "transformation-matrix"
import { formatElement } from "./format-attributes"

// circuit-to-svg renders library symbol paths and circles with a fixed
// component outline width, independent of library strokeWidth and symbol scale.
const SYMBOL_OUTLINE_STROKE_WIDTH = 0.02
const MINIMUM_FILL_AREA = 1e-12

const pathHasFillArea = (points: Array<{ x: number; y: number }>): boolean => {
  if (points.length < 3) return false
  let doubledArea = 0
  for (const [pointIndex, point] of points.entries()) {
    const nextPoint = points[(pointIndex + 1) % points.length]
    if (!nextPoint) continue
    doubledArea += point.x * nextPoint.y - nextPoint.x * point.y
  }
  return Math.abs(doubledArea) > MINIMUM_FILL_AREA
}

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
  includeReference = true,
  includeDisplayText = true,
  referenceFontSize,
  displayTextFontSize,
  filledPrimitiveColor,
}: {
  symbol: SchSymbol
  symbolToSchematicTransform: Matrix
  reference: string
  displayText: string
  includeReference?: boolean
  includeDisplayText?: boolean
  referenceFontSize?: number
  displayTextFontSize?: number
  filledPrimitiveColor?: string
}): string[] =>
  symbol.primitives.flatMap((primitive) => {
    if (primitive.type === "path") {
      const points = primitive.points.map((point) =>
        applyToPoint(symbolToSchematicTransform, point),
      )
      if (primitive.closed && points[0]) points.push(points[0])
      return formatElement("schematicpath", {
        points,
        strokeWidth: SYMBOL_OUTLINE_STROKE_WIDTH,
        fillColor:
          primitive.fill && pathHasFillArea(points)
            ? filledPrimitiveColor
            : undefined,
        isFilled: primitive.fill,
      })
    }
    const center = applyToPoint(symbolToSchematicTransform, primitive)
    if (primitive.type === "text") {
      if (!includeReference && primitive.text === "{REF}") return []
      if (!includeDisplayText && primitive.text === "{VAL}") return []
      const text =
        primitive.text === "{REF}"
          ? reference
          : primitive.text === "{VAL}"
            ? displayText
            : primitive.text
      const importedFontSize =
        primitive.text === "{REF}"
          ? referenceFontSize
          : primitive.text === "{VAL}"
            ? displayTextFontSize
            : undefined
      return [
        formatElement("schematictext", {
          text,
          schX: center.x,
          schY: center.y,
          anchor: anchors[primitive.anchor],
          fontSize:
            importedFontSize ??
            primitive.fontSize ??
            schematic_text.shape.font_size.parse(undefined),
        }),
      ]
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
      return [
        formatElement("schematiccircle", {
          center,
          radius: Math.hypot(radiusVector.x, radiusVector.y),
          strokeWidth: SYMBOL_OUTLINE_STROKE_WIDTH,
          fillColor: primitive.fill ? filledPrimitiveColor : undefined,
          isFilled: primitive.fill,
        }),
      ]
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
    return [
      formatElement("schematicrect", {
        schX: center.x,
        schY: center.y,
        width: Math.hypot(widthVector.x, widthVector.y),
        height: Math.hypot(heightVector.x, heightVector.y),
        rotation: ccwRotationDegrees,
      }),
    ]
  })
