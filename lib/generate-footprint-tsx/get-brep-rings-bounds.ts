import type { PcbSilkscreenGraphicBRep } from "circuit-json"
import { getBulgeArc, type BulgePoint } from "../get-bulge-arc"

type SilkscreenRing = PcbSilkscreenGraphicBRep["brep_shape"]["outer_ring"]

export interface BrepRingsBounds {
  maxX: number
  maxY: number
  minX: number
  minY: number
}

export const getBrepRingsBounds = (
  rings: SilkscreenRing[],
): BrepRingsBounds | null => {
  const boundaryPoints = rings.flatMap(getRingBoundaryPoints)
  if (boundaryPoints.length === 0) return null

  const xs = boundaryPoints.map((point) => point.x)
  const ys = boundaryPoints.map((point) => point.y)

  return {
    maxX: Math.max(...xs),
    maxY: Math.max(...ys),
    minX: Math.min(...xs),
    minY: Math.min(...ys),
  }
}

const getRingBoundaryPoints = (ring: SilkscreenRing): BulgePoint[] => {
  const boundaryPoints: BulgePoint[] = [...ring.vertices]

  for (let index = 0; index < ring.vertices.length; index++) {
    const start = ring.vertices[index]
    const end = ring.vertices[(index + 1) % ring.vertices.length]
    const arc = getBulgeArc({ end, start })
    if (!arc) continue

    const startAngle = Math.atan2(
      start.y - arc.center.y,
      start.x - arc.center.x,
    )
    for (const angle of [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2]) {
      if (!isAngleOnArc({ angle, startAngle, sweepAngle: arc.sweepAngle })) {
        continue
      }
      boundaryPoints.push({
        x: arc.center.x + arc.radius * Math.cos(angle),
        y: arc.center.y + arc.radius * Math.sin(angle),
      })
    }
  }

  return boundaryPoints
}

const isAngleOnArc = ({
  angle,
  startAngle,
  sweepAngle,
}: {
  angle: number
  startAngle: number
  sweepAngle: number
}): boolean => {
  const angularDistance =
    sweepAngle >= 0
      ? normalizeAngle(angle - startAngle)
      : normalizeAngle(startAngle - angle)

  return angularDistance <= Math.abs(sweepAngle) + 1e-12
}

const normalizeAngle = (angle: number): number => {
  const fullTurn = 2 * Math.PI
  return ((angle % fullTurn) + fullTurn) % fullTurn
}
