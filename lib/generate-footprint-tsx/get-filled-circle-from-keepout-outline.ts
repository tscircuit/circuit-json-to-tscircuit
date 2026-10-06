import type { PcbKeepoutOutline } from "circuit-json"

interface FilledKeepoutCircle {
  center: { x: number; y: number }
  radius: number
}

const MINIMUM_CIRCLE_VERTEX_COUNT = 8
const CIRCLE_RADIUS_TOLERANCE = 0.001
const MAXIMUM_ANGULAR_STEP_RATIO = 1.5
const FULL_ROTATION_RADIANS = Math.PI * 2

const getNormalizedAngleDelta = (angleDelta: number): number => {
  if (angleDelta > Math.PI) return angleDelta - FULL_ROTATION_RADIANS
  if (angleDelta <= -Math.PI) return angleDelta + FULL_ROTATION_RADIANS
  return angleDelta
}

const completesCircularTraversal = ({
  center,
  outline,
  radius,
}: {
  center: { x: number; y: number }
  outline: PcbKeepoutOutline["outline"]
  radius: number
}): boolean => {
  const firstPoint = outline[0]
  const lastPoint = outline.at(-1)
  if (!firstPoint || !lastPoint) return false
  if (
    Math.hypot(firstPoint.x - lastPoint.x, firstPoint.y - lastPoint.y) >
    radius * CIRCLE_RADIUS_TOLERANCE
  ) {
    return false
  }

  const traversalPoints = outline.slice(0, -1)
  const maximumAngularStep =
    (FULL_ROTATION_RADIANS / traversalPoints.length) *
    MAXIMUM_ANGULAR_STEP_RATIO
  const angleDeltas = traversalPoints.map((point, pointIndex) => {
    const nextPoint =
      traversalPoints[(pointIndex + 1) % traversalPoints.length]!
    const pointAngle = Math.atan2(point.y - center.y, point.x - center.x)
    const nextPointAngle = Math.atan2(
      nextPoint.y - center.y,
      nextPoint.x - center.x,
    )
    return getNormalizedAngleDelta(nextPointAngle - pointAngle)
  })
  const traversalDirection = Math.sign(angleDeltas[0] ?? 0)

  return (
    traversalDirection !== 0 &&
    angleDeltas.every(
      (angleDelta) =>
        Math.sign(angleDelta) === traversalDirection &&
        Math.abs(angleDelta) <= maximumAngularStep,
    )
  )
}

export const getFilledCircleFromKeepoutOutline = (
  keepout: PcbKeepoutOutline,
): FilledKeepoutCircle | null => {
  const outline = keepout.outline
  if (outline.length < MINIMUM_CIRCLE_VERTEX_COUNT) return null

  const minX = Math.min(...outline.map((point) => point.x))
  const maxX = Math.max(...outline.map((point) => point.x))
  const minY = Math.min(...outline.map((point) => point.y))
  const maxY = Math.max(...outline.map((point) => point.y))
  const center = { x: (minX + maxX) / 2, y: (minY + maxY) / 2 }
  const horizontalRadius = (maxX - minX) / 2
  const verticalRadius = (maxY - minY) / 2
  const centerlineRadius = (horizontalRadius + verticalRadius) / 2

  if (!Number.isFinite(centerlineRadius) || centerlineRadius <= 0) return null
  if (
    Math.abs(horizontalRadius - verticalRadius) >
    centerlineRadius * CIRCLE_RADIUS_TOLERANCE
  ) {
    return null
  }

  const isCircular = outline.every((point) => {
    const pointRadius = Math.hypot(point.x - center.x, point.y - center.y)
    return (
      Math.abs(pointRadius - centerlineRadius) <=
      centerlineRadius * CIRCLE_RADIUS_TOLERANCE
    )
  })
  if (!isCircular) return null
  if (
    !completesCircularTraversal({ center, outline, radius: centerlineRadius })
  )
    return null

  const strokeRadius = keepout.stroke_width / 2
  if (strokeRadius < centerlineRadius) return null

  return { center, radius: centerlineRadius + strokeRadius }
}
