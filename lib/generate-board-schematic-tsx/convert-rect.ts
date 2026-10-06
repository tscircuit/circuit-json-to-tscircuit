import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"
import { formatElement } from "./format-attributes"

const DEFAULT_SCHEMATIC_STROKE_WIDTH = 0.02
const DASH_LENGTH_TO_STROKE_WIDTH_RATIO = 3

export const convertRect = ({
  center,
  width,
  height,
  ccwRotationDegrees,
  strokeWidth,
  color,
  fillColor,
  isFilled,
  isDashed,
}: {
  center: { x: number; y: number }
  width: number
  height: number
  ccwRotationDegrees?: number
  strokeWidth?: number | null
  color?: string
  fillColor?: string
  isFilled?: boolean
  isDashed?: boolean
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
  const dashLength = isDashed
    ? (strokeWidth ?? DEFAULT_SCHEMATIC_STROKE_WIDTH) *
      DASH_LENGTH_TO_STROKE_WIDTH_RATIO
    : undefined

  // Paths preserve the separate outline and fill colors used by imported
  // rectangles. Explicit dash lengths retain the rectangle's dashed outline.
  return formatElement("schematicpath", {
    points,
    strokeWidth,
    strokeColor: color,
    fillColor,
    isFilled,
    dashLength,
    dashGap: dashLength,
  })
}
