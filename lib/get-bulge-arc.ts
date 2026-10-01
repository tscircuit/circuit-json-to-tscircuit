export interface BulgePoint {
  bulge?: number
  x: number
  y: number
}

export interface BulgeArc {
  center: { x: number; y: number }
  radius: number
  sweepAngle: number
}

export const getBulgeArc = ({
  end,
  start,
}: {
  end: BulgePoint
  start: BulgePoint
}): BulgeArc | null => {
  const bulge = start.bulge ?? 0
  const deltaX = end.x - start.x
  const deltaY = end.y - start.y
  const chordLength = Math.hypot(deltaX, deltaY)

  if (Math.abs(bulge) < 1e-12 || chordLength < 1e-12) return null

  const centerOffset = (chordLength * (1 - bulge * bulge)) / (4 * bulge)
  const midpoint = {
    x: (start.x + end.x) / 2,
    y: (start.y + end.y) / 2,
  }

  return {
    center: {
      x: midpoint.x - (deltaY / chordLength) * centerOffset,
      y: midpoint.y + (deltaX / chordLength) * centerOffset,
    },
    radius: Math.abs((chordLength * (1 + bulge * bulge)) / (4 * bulge)),
    sweepAngle: 4 * Math.atan(bulge),
  }
}
