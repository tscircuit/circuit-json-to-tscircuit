import type { Point } from "circuit-json"
import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"

const PILL_CAP_SEGMENT_COUNT = 16

export const getSilkscreenPillRoute = ({
  center,
  width,
  height,
  ccwRotationDegrees,
}: {
  center: Point
  width: number
  height: number
  ccwRotationDegrees: number
}): Point[] => {
  const radius = Math.min(width, height) / 2
  const halfStraightLength = Math.abs(width - height) / 2
  const pillToPcbTransform = compose(
    translate(center.x, center.y),
    rotateDEG(ccwRotationDegrees),
  )
  const localPoints: Point[] = []

  for (let capIndex = 0; capIndex < 2; capIndex++) {
    for (let index = 0; index <= PILL_CAP_SEGMENT_COUNT; index++) {
      const angleRadians =
        width >= height
          ? -Math.PI / 2 +
            capIndex * Math.PI +
            (index * Math.PI) / PILL_CAP_SEGMENT_COUNT
          : capIndex * Math.PI + (index * Math.PI) / PILL_CAP_SEGMENT_COUNT
      localPoints.push(
        width >= height
          ? {
              x:
                (capIndex === 0 ? 1 : -1) * halfStraightLength +
                radius * Math.cos(angleRadians),
              y: radius * Math.sin(angleRadians),
            }
          : {
              x: radius * Math.cos(angleRadians),
              y:
                (capIndex === 0 ? 1 : -1) * halfStraightLength +
                radius * Math.sin(angleRadians),
            },
      )
    }
  }

  const route = localPoints.map((point) =>
    applyToPoint(pillToPcbTransform, point),
  )
  return [...route, route[0]!]
}
