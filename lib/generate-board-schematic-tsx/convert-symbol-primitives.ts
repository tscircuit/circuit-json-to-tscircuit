import type { SchSymbol } from "schematic-symbols"
import { applyToPoint, type Matrix } from "transformation-matrix"

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
      return `<schematicpath points={${JSON.stringify(points)}} strokeWidth={0.02} strokeColor="#840000" />`
    }
    const center = applyToPoint(symbolToSchematicTransform, primitive)
    if (primitive.type === "text") {
      const text =
        primitive.text === "{REF}"
          ? reference
          : primitive.text === "{VAL}"
            ? displayText
            : primitive.text
      return `<schematictext text={${JSON.stringify(text)}} schX={${center.x}} schY={${center.y}} anchor="${anchors[primitive.anchor]}" fontSize={0.18} color="#006464" />`
    }
    if (primitive.type === "circle") {
      return `<schematiccircle center={${JSON.stringify(center)}} radius={${primitive.radius * Math.abs(symbolToSchematicTransform.a)}} color="#840000" strokeWidth={0.02} isFilled={${primitive.fill}} />`
    }
    return `<schematicrect schX={${center.x}} schY={${center.y}} width={${primitive.width * Math.abs(symbolToSchematicTransform.a)}} height={${primitive.height * Math.abs(symbolToSchematicTransform.d)}} color="#840000" strokeWidth={0.02} />`
  })
