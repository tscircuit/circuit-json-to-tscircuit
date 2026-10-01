import type { Point } from "circuit-json"
import { getBulgeArc, type BulgePoint } from "./get-bulge-arc"

const MAX_ANGLE_STEP = Math.PI / 18

export const flattenBrepRing = (vertices: BulgePoint[]): Point[] => {
  if (vertices.length < 2) return vertices.map(toPoint)

  const points: Point[] = [toPoint(vertices[0]!)]
  for (let index = 0; index < vertices.length; index++) {
    const start = vertices[index]!
    const end = vertices[(index + 1) % vertices.length]!
    const isClosingSegment = index === vertices.length - 1
    const arc = getBulgeArc({ end, start })

    if (!arc) {
      if (!isClosingSegment) points.push(toPoint(end))
      continue
    }

    const startAngle = Math.atan2(
      start.y - arc.center.y,
      start.x - arc.center.x,
    )
    const stepCount = Math.max(
      2,
      Math.ceil(Math.abs(arc.sweepAngle) / MAX_ANGLE_STEP),
    )
    for (let step = 1; step <= stepCount; step++) {
      if (isClosingSegment && step === stepCount) continue
      if (step === stepCount) {
        points.push(toPoint(end))
        continue
      }
      const angle = startAngle + (arc.sweepAngle * step) / stepCount
      points.push({
        x: arc.center.x + arc.radius * Math.cos(angle),
        y: arc.center.y + arc.radius * Math.sin(angle),
      })
    }
  }

  return points
}

const toPoint = ({ x, y }: BulgePoint): Point => ({ x, y })
