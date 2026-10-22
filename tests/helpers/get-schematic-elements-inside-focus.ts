import type { AnyCircuitElement, CircuitJson } from "circuit-json"

export interface SchematicFocusBounds {
  center: { x: number; y: number }
  size: { width: number; height: number }
}

const FOCUS_MARGIN = 0.08
const TEXT_FOCUS_MARGIN = 0

const isPointInsideFocus = (
  point: { x: number; y: number },
  bounds: SchematicFocusBounds,
  margin = FOCUS_MARGIN,
): boolean =>
  Math.abs(point.x - bounds.center.x) <= bounds.size.width / 2 + margin &&
  Math.abs(point.y - bounds.center.y) <= bounds.size.height / 2 + margin

const getElementReferencePoints = (
  element: AnyCircuitElement,
): Array<{ x: number; y: number }> => {
  const elementRecord = element as Record<string, unknown>
  const referencePoints: Array<{ x: number; y: number }> = []
  const addPoint = (pointCandidate: unknown) => {
    if (!pointCandidate || typeof pointCandidate !== "object") return
    const pointRecord = pointCandidate as Record<string, unknown>
    if (typeof pointRecord.x !== "number" || typeof pointRecord.y !== "number")
      return
    referencePoints.push({ x: pointRecord.x, y: pointRecord.y })
  }

  addPoint(elementRecord.center)
  addPoint(elementRecord.position)
  if (
    typeof elementRecord.x === "number" &&
    typeof elementRecord.y === "number"
  )
    addPoint({ x: elementRecord.x, y: elementRecord.y })
  if (
    typeof elementRecord.x1 === "number" &&
    typeof elementRecord.y1 === "number"
  )
    addPoint({ x: elementRecord.x1, y: elementRecord.y1 })
  if (
    typeof elementRecord.x2 === "number" &&
    typeof elementRecord.y2 === "number"
  )
    addPoint({ x: elementRecord.x2, y: elementRecord.y2 })
  if (Array.isArray(elementRecord.points)) {
    for (const pathPoint of elementRecord.points) addPoint(pathPoint)
  }

  return referencePoints
}

export const isSchematicElementInsideFocus = ({
  element,
  bounds,
}: {
  element: AnyCircuitElement
  bounds: SchematicFocusBounds
}): boolean =>
  getElementReferencePoints(element).some((point) =>
    isPointInsideFocus(
      point,
      bounds,
      element.type === "schematic_text" ? TEXT_FOCUS_MARGIN : FOCUS_MARGIN,
    ),
  )

export const getSchematicElementsInsideFocus = ({
  circuitJson,
  bounds,
}: {
  circuitJson: CircuitJson
  bounds: SchematicFocusBounds
}): AnyCircuitElement[] =>
  circuitJson.filter(
    (element) =>
      element.type.startsWith("schematic_") &&
      isSchematicElementInsideFocus({ element, bounds }),
  )
