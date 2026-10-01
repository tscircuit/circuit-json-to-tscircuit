import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"

export const convertRect = ({
  center,
  width,
  height,
  ccwRotationDegrees = 0,
  strokeWidth,
  color,
  fillColor,
  isFilled,
}: {
  center: { x: number; y: number }
  width: number
  height: number
  ccwRotationDegrees?: number
  strokeWidth: number
  color: string
  fillColor: string
  isFilled: boolean
}) => {
  const rectToSchematicTransform = compose(
    translate(center.x, center.y),
    rotateDEG(ccwRotationDegrees),
  )
  const points = [
    { x: -width / 2, y: -height / 2 },
    { x: width / 2, y: -height / 2 },
    { x: width / 2, y: height / 2 },
    { x: -width / 2, y: height / 2 },
    { x: -width / 2, y: -height / 2 },
  ].map((point) => applyToPoint(rectToSchematicTransform, point))
  // SchematicRect does not expose separate outline and fill colors in core.
  return `<schematicpath points={${JSON.stringify(points)}} strokeWidth={${strokeWidth}} strokeColor={${JSON.stringify(color)}} fillColor={${JSON.stringify(fillColor)}} isFilled={${isFilled}} />`
}
