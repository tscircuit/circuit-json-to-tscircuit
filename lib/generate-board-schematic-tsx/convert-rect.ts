import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"
import { formatElement } from "./format-attributes"

export const convertRect = ({
  center,
  width,
  height,
  ccwRotationDegrees,
  strokeWidth,
  color,
  fillColor,
  isFilled,
}: {
  center: { x: number; y: number }
  width: number
  height: number
  ccwRotationDegrees?: number
  strokeWidth?: number | null
  color?: string
  fillColor?: string
  isFilled?: boolean
}) => {
  const rectToSchematicTransform = compose(
    translate(center.x, center.y),
    rotateDEG(ccwRotationDegrees ?? 0),
  )
  const points = [
    { x: -width / 2, y: -height / 2 },
    { x: width / 2, y: -height / 2 },
    { x: width / 2, y: height / 2 },
    { x: -width / 2, y: height / 2 },
    { x: -width / 2, y: -height / 2 },
  ].map((point) => applyToPoint(rectToSchematicTransform, point))
  // Native rectangles cannot carry separate outline and fill colors.
  return formatElement("schematicpath", {
    points,
    strokeWidth,
    strokeColor: color,
    fillColor,
    isFilled,
  })
}
