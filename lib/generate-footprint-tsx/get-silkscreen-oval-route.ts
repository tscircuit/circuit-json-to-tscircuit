import type { Point } from "circuit-json"
import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"

const OVAL_SEGMENT_COUNT = 64

export const getSilkscreenOvalRoute = ({
  center,
  radiusX,
  radiusY,
  ccwRotationDegrees,
}: {
  center: Point
  radiusX: number
  radiusY: number
  ccwRotationDegrees: number
}): Point[] => {
  const ovalToPcbTransform = compose(
    translate(center.x, center.y),
    rotateDEG(ccwRotationDegrees),
  )

  const route = Array.from({ length: OVAL_SEGMENT_COUNT }, (_, index) => {
    const angleRadians = (index * 2 * Math.PI) / OVAL_SEGMENT_COUNT
    return applyToPoint(ovalToPcbTransform, {
      x: radiusX * Math.cos(angleRadians),
      y: radiusY * Math.sin(angleRadians),
    })
  })
  return [...route, route[0]!]
}
