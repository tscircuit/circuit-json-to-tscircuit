import type { Point, SchematicPort } from "circuit-json"
import { formatElement } from "./format-attributes"

const ARROW_SIZE = 0.1
const ARROW_HALF_ANGLE_RADIANS = Math.PI / 6
const ARROW_AXIAL_LENGTH = ARROW_SIZE * Math.cos(ARROW_HALF_ANGLE_RADIANS)
const ARROW_HALF_WIDTH = ARROW_SIZE * Math.sin(ARROW_HALF_ANGLE_RADIANS)
const ARROW_STROKE_WIDTH = 0.02 / 3
const ARROW_STROKE_COLOR = "#840000"
const ARROW_FILL_COLOR = "#ffffff"

const getOutwardDirection = (
  side: SchematicPort["side_of_component"],
): Point | null => {
  switch (side) {
    case "left":
      return { x: -1, y: 0 }
    case "right":
      return { x: 1, y: 0 }
    case "top":
      return { x: 0, y: 1 }
    case "bottom":
      return { x: 0, y: -1 }
    default:
      return null
  }
}

const createArrowPath = ({
  tip,
  direction,
}: {
  tip: Point
  direction: Point
}): string => {
  const base = {
    x: tip.x - direction.x * ARROW_AXIAL_LENGTH,
    y: tip.y - direction.y * ARROW_AXIAL_LENGTH,
  }
  const perpendicular = { x: -direction.y, y: direction.x }
  const firstBaseCorner = {
    x: base.x + perpendicular.x * ARROW_HALF_WIDTH,
    y: base.y + perpendicular.y * ARROW_HALF_WIDTH,
  }
  const secondBaseCorner = {
    x: base.x - perpendicular.x * ARROW_HALF_WIDTH,
    y: base.y - perpendicular.y * ARROW_HALF_WIDTH,
  }
  return formatElement("schematicpath", {
    points: [tip, firstBaseCorner, secondBaseCorner, tip],
    strokeWidth: ARROW_STROKE_WIDTH,
    strokeColor: ARROW_STROKE_COLOR,
    fillColor: ARROW_FILL_COLOR,
    isFilled: true,
  })
}

export const convertBoxPortArrowMarkers = ({
  schematicPort,
  edge,
}: {
  schematicPort: SchematicPort
  edge: Point
}): string[] => {
  const outward = getOutwardDirection(schematicPort.side_of_component)
  if (!outward) return []

  const arrows: string[] = []
  if (schematicPort.has_input_arrow) {
    arrows.push(
      createArrowPath({
        tip: edge,
        direction: { x: -outward.x, y: -outward.y },
      }),
    )
  }
  if (schematicPort.has_output_arrow) {
    const separation = schematicPort.has_input_arrow ? ARROW_AXIAL_LENGTH : 0
    arrows.push(
      createArrowPath({
        tip: {
          x: edge.x + outward.x * (separation + ARROW_SIZE),
          y: edge.y + outward.y * (separation + ARROW_SIZE),
        },
        direction: outward,
      }),
    )
  }
  return arrows
}
