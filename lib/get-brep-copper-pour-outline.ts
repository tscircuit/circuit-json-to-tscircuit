import type { PcbCopperPourBRep, Point } from "circuit-json"

type BRepShape = PcbCopperPourBRep["brep_shape"]

export const getBrepCopperPourOutline = (
  brepShape: BRepShape,
): Point[] | undefined => {
  // <copperpour> accepts one outline. Opposite-winding hole rings joined by
  // duplicate bridge edges retain their voids when the solver rebuilds BRep.
  let outline = withWinding(brepShape.outer_ring.vertices, "ccw")
  const holes = (brepShape.inner_rings ?? [])
    .map((ring) => withWinding(ring.vertices, "cw"))
    .filter((ring) => ring.length >= 3)
    .sort((first, second) => getLeftmostX(first) - getLeftmostX(second))

  for (const hole of holes) {
    const bridgedOutline = bridgeHoleIntoOutline({ hole, outline })
    if (!bridgedOutline) return undefined
    outline = bridgedOutline
  }

  return outline
}

const bridgeHoleIntoOutline = ({
  hole,
  outline,
}: {
  hole: Point[]
  outline: Point[]
}): Point[] | undefined => {
  const holeStartIndex = getLeftmostPointIndex(hole)
  const holeStart = hole[holeStartIndex]!
  const bridge = findLeftwardBridge({ holeStart, outline })
  if (!bridge) return undefined

  const outlineWithBridge = [...outline]
  let bridgeIndex = bridge.edgeStartIndex
  const edgeEndIndex = (bridge.edgeStartIndex + 1) % outline.length

  if (pointsEqual(bridge.point, outline[edgeEndIndex]!)) {
    bridgeIndex = edgeEndIndex
  } else if (!pointsEqual(bridge.point, outline[bridge.edgeStartIndex]!)) {
    bridgeIndex = bridge.edgeStartIndex + 1
    outlineWithBridge.splice(bridgeIndex, 0, bridge.point)
  }

  const orderedHole = [
    ...hole.slice(holeStartIndex),
    ...hole.slice(0, holeStartIndex),
  ]

  return [
    ...outlineWithBridge.slice(0, bridgeIndex + 1),
    ...orderedHole,
    holeStart,
    bridge.point,
    ...outlineWithBridge.slice(bridgeIndex + 1),
  ]
}

const findLeftwardBridge = ({
  holeStart,
  outline,
}: {
  holeStart: Point
  outline: Point[]
}): { edgeStartIndex: number; point: Point } | undefined => {
  let closestBridge: { edgeStartIndex: number; point: Point } | undefined

  for (let index = 0; index < outline.length; index++) {
    const start = outline[index]!
    const end = outline[(index + 1) % outline.length]!
    if (start.y > holeStart.y === end.y > holeStart.y) continue

    const x =
      start.x +
      ((holeStart.y - start.y) * (end.x - start.x)) / (end.y - start.y)
    if (x > holeStart.x) continue
    if (closestBridge && x <= closestBridge.point.x) continue

    closestBridge = {
      edgeStartIndex: index,
      point: { x, y: holeStart.y },
    }
  }

  return closestBridge
}

const withWinding = (ring: Point[], winding: "cw" | "ccw"): Point[] => {
  const isCounterclockwise = getSignedArea(ring) > 0
  const shouldReverse =
    (winding === "ccw" && !isCounterclockwise) ||
    (winding === "cw" && isCounterclockwise)
  return shouldReverse ? [...ring].reverse() : [...ring]
}

const getSignedArea = (ring: Point[]): number =>
  ring.reduce((area, point, index) => {
    const nextPoint = ring[(index + 1) % ring.length]!
    return area + point.x * nextPoint.y - nextPoint.x * point.y
  }, 0) / 2

const getLeftmostPointIndex = (ring: Point[]): number =>
  ring.reduce(
    (leftmostIndex, point, index) =>
      point.x < ring[leftmostIndex]!.x ? index : leftmostIndex,
    0,
  )

const getLeftmostX = (ring: Point[]): number =>
  ring[getLeftmostPointIndex(ring)]!.x

const pointsEqual = (first: Point, second: Point): boolean =>
  first.x === second.x && first.y === second.y
