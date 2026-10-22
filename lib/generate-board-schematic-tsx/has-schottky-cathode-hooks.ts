import type { CircuitJson, Point, SchematicLine } from "circuit-json"

interface Segment {
  start: Point
  end: Point
}

interface CathodeHook {
  outwardVector: Point
}

const POINT_TOLERANCE = 1e-6

const pointsCoincide = (firstPoint: Point, secondPoint: Point): boolean =>
  Math.hypot(firstPoint.x - secondPoint.x, firstPoint.y - secondPoint.y) <
  POINT_TOLERANCE

const getVector = ({ start, end }: Segment): Point => ({
  x: end.x - start.x,
  y: end.y - start.y,
})

const getLength = (vector: Point): number => Math.hypot(vector.x, vector.y)

const getDotProduct = (firstVector: Point, secondVector: Point): number =>
  firstVector.x * secondVector.x + firstVector.y * secondVector.y

const getCrossProduct = (firstVector: Point, secondVector: Point): number =>
  firstVector.x * secondVector.y - firstVector.y * secondVector.x

const arePerpendicular = (firstVector: Point, secondVector: Point): boolean =>
  Math.abs(getDotProduct(firstVector, secondVector)) < POINT_TOLERANCE

const areParallel = (firstVector: Point, secondVector: Point): boolean =>
  Math.abs(getCrossProduct(firstVector, secondVector)) < POINT_TOLERANCE

const getOtherEndpoint = ({
  segment,
  sharedPoint,
}: {
  segment: Segment
  sharedPoint: Point
}): Point | undefined => {
  if (pointsCoincide(segment.start, sharedPoint)) return segment.end
  if (pointsCoincide(segment.end, sharedPoint)) return segment.start
  return undefined
}

const findCathodeHooksAtEndpoint = ({
  cathodeBar,
  cathodeEndpoint,
  otherCathodeEndpoint,
  segments,
}: {
  cathodeBar: Segment
  cathodeEndpoint: Point
  otherCathodeEndpoint: Point
  segments: Segment[]
}): CathodeHook[] => {
  const cathodeVector = getVector(cathodeBar)
  const cathodeLength = getLength(cathodeVector)

  return segments.flatMap((outwardSegment) => {
    const outwardEnd = getOtherEndpoint({
      segment: outwardSegment,
      sharedPoint: cathodeEndpoint,
    })
    if (!outwardEnd) return []
    const outwardVector = getVector({
      start: cathodeEndpoint,
      end: outwardEnd,
    })
    if (
      !arePerpendicular(cathodeVector, outwardVector) ||
      getLength(outwardVector) >= cathodeLength / 2
    ) {
      return []
    }

    const hasInwardSegment = segments.some((inwardSegment) => {
      if (inwardSegment === outwardSegment) return false
      const inwardEnd = getOtherEndpoint({
        segment: inwardSegment,
        sharedPoint: outwardEnd,
      })
      if (!inwardEnd) return false
      const inwardVector = getVector({ start: outwardEnd, end: inwardEnd })
      const towardCathodeInterior = getVector({
        start: cathodeEndpoint,
        end: otherCathodeEndpoint,
      })
      return (
        areParallel(cathodeVector, inwardVector) &&
        getLength(inwardVector) < cathodeLength / 2 &&
        getDotProduct(inwardVector, towardCathodeInterior) > 0
      )
    })

    return hasInwardSegment ? [{ outwardVector }] : []
  })
}

const lineToSegment = (line: SchematicLine): Segment => ({
  start: { x: line.x1, y: line.y1 },
  end: { x: line.x2, y: line.y2 },
})

export const hasSchottkyCathodeHooks = ({
  circuitJson,
  schematicComponentId,
}: {
  circuitJson: CircuitJson
  schematicComponentId: string
}): boolean => {
  const segments = circuitJson.flatMap((element) =>
    element.type === "schematic_line" &&
    element.schematic_component_id === schematicComponentId
      ? [lineToSegment(element)]
      : [],
  )

  return segments.some((cathodeBar) => {
    const hooksAtStart = findCathodeHooksAtEndpoint({
      cathodeBar,
      cathodeEndpoint: cathodeBar.start,
      otherCathodeEndpoint: cathodeBar.end,
      segments,
    })
    const hooksAtEnd = findCathodeHooksAtEndpoint({
      cathodeBar,
      cathodeEndpoint: cathodeBar.end,
      otherCathodeEndpoint: cathodeBar.start,
      segments,
    })
    return hooksAtStart.some((startHook) =>
      hooksAtEnd.some(
        (endHook) =>
          getDotProduct(startHook.outwardVector, endHook.outwardVector) < 0,
      ),
    )
  })
}
