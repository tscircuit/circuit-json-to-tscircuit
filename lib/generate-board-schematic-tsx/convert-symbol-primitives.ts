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
    // Transform displacement vectors without translation to measure lengths in
    // schematic coordinates, including when the symbol transform has rotation.
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
      const radius = Math.hypot(radiusVector.x, radiusVector.y)
      return `<schematiccircle center={${JSON.stringify(center)}} radius={${radius}} color="#840000" strokeWidth={0.02} isFilled={${primitive.fill}} />`
    }
    const widthVector = applyToPoint(symbolToSchematicVectorTransform, {
      x: primitive.width,
      y: 0,
    })
    const heightVector = applyToPoint(symbolToSchematicVectorTransform, {
      x: 0,
      y: primitive.height,
    })
    const width = Math.hypot(widthVector.x, widthVector.y)
    const height = Math.hypot(heightVector.x, heightVector.y)
    const ccwRotationDegrees =
      (Math.atan2(widthVector.y, widthVector.x) * 180) / Math.PI
    const rotationAttribute = ccwRotationDegrees
      ? ` rotation={${ccwRotationDegrees}}`
      : ""
    return `<schematicrect schX={${center.x}} schY={${center.y}} width={${width}} height={${height}} color="#840000" strokeWidth={0.02}${rotationAttribute} />`
  })
