import type { Point, SchematicPort } from "circuit-json"
import { formatElement } from "./format-attributes"

const ARROW_SIZE = 0.1
const ARROW_HALF_ANGLE_RADIANS = Math.PI / 6
const ARROW_AXIAL_LENGTH = ARROW_SIZE * Math.cos(ARROW_HALF_ANGLE_RADIANS)
const ARROW_HALF_WIDTH = ARROW_SIZE * Math.sin(ARROW_HALF_ANGLE_RADIANS)
const MARKER_STROKE_WIDTH = 0.02 / 3
const MARKER_STROKE_COLOR = "#840000"
const MARKER_FILL_COLOR = "#ffffff"
const INVERSION_BUBBLE_RADIUS = 0.06

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
    strokeWidth: MARKER_STROKE_WIDTH,
    strokeColor: MARKER_STROKE_COLOR,
    fillColor: MARKER_FILL_COLOR,
    isFilled: true,
  })
}

export const convertBoxPortMarkers = ({
  schematicPort,
  edge,
}: {
  schematicPort: SchematicPort
  edge: Point
}): { markers: string[]; pinLineStart: Point } => {
  const outward = getOutwardDirection(schematicPort.side_of_component)
  if (!outward) return { markers: [], pinLineStart: edge }

  const inversionOffset = schematicPort.is_drawn_with_inversion_circle
    ? INVERSION_BUBBLE_RADIUS * 2
    : 0
  const pinLineStart = {
    x: edge.x + outward.x * inversionOffset,
    y: edge.y + outward.y * inversionOffset,
  }
  const markers: string[] = []

  if (schematicPort.is_drawn_with_inversion_circle) {
    markers.push(
      formatElement("schematiccircle", {
        center: {
          x: edge.x + outward.x * INVERSION_BUBBLE_RADIUS,
          y: edge.y + outward.y * INVERSION_BUBBLE_RADIUS,
        },
        radius: INVERSION_BUBBLE_RADIUS,
        strokeWidth: MARKER_STROKE_WIDTH * 3,
        color: MARKER_STROKE_COLOR,
        fillColor: MARKER_FILL_COLOR,
        isFilled: true,
      }),
    )
  }
  if (schematicPort.has_input_arrow) {
    markers.push(
      createArrowPath({
        tip: pinLineStart,
        direction: { x: -outward.x, y: -outward.y },
      }),
    )
  }
  if (schematicPort.has_output_arrow) {
    const separation = schematicPort.has_input_arrow ? ARROW_AXIAL_LENGTH : 0
    markers.push(
      createArrowPath({
        tip: {
          x: pinLineStart.x + outward.x * (separation + ARROW_SIZE),
          y: pinLineStart.y + outward.y * (separation + ARROW_SIZE),
        },
        direction: outward,
      }),
    )
  }
  return { markers, pinLineStart }
}
