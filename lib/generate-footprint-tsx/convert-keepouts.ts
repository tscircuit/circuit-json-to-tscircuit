import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatMm } from "./footprint-tsx-attribute-formatters/format-mm"

/**
 * Circularity thresholds ported verbatim from @tscircuit/core's
 * getCircumscribedRectFromCircularPcbKeepoutOutline. Keeping these in sync
 * means a keepout we treat as circular is exactly one core would also treat
 * as circular, so the converter never reinterprets a shape core wouldn't.
 */
const MINIMUM_CIRCULAR_OUTLINE_POINT_COUNT = 12
const MINIMUM_CIRCULAR_OUTLINE_ASPECT_RATIO = 0.99
const MAXIMUM_RADIUS_VARIATION_RATIO = 1e-3

interface KeepoutPoint {
  x: number
  y: number
}

/**
 * Detects a circular pcb_keepout outline (a closed, evenly-angled circle)
 * and returns the equivalent circle, or null when the outline is not
 * circular. Uses the same criteria as core.
 */
const circleFromCircularKeepoutOutline = (
  outline: KeepoutPoint[],
  strokeWidth: number | undefined,
): { center: KeepoutPoint; radius: number } | null => {
  const firstPoint = outline[0]
  const lastPoint = outline.at(-1)
  if (!firstPoint || !lastPoint) return null
  // Must be a closed outline.
  if (firstPoint.x !== lastPoint.x || firstPoint.y !== lastPoint.y) return null
  const centerlinePoints = outline.slice(0, -1)
  if (centerlinePoints.length < MINIMUM_CIRCULAR_OUTLINE_POINT_COUNT) {
    return null
  }
  const minX = Math.min(...centerlinePoints.map(({ x }) => x))
  const maxX = Math.max(...centerlinePoints.map(({ x }) => x))
  const minY = Math.min(...centerlinePoints.map(({ y }) => y))
  const maxY = Math.max(...centerlinePoints.map(({ y }) => y))
  const centerlineWidth = maxX - minX
  const centerlineHeight = maxY - minY
  const centerlineDiameter = Math.max(centerlineWidth, centerlineHeight)
  if (
    !Number.isFinite(centerlineDiameter) ||
    centerlineDiameter <= 0 ||
    Math.min(centerlineWidth, centerlineHeight) / centerlineDiameter <
      MINIMUM_CIRCULAR_OUTLINE_ASPECT_RATIO
  ) {
    return null
  }
  // The center must come from the bounding box, not a mean of the points:
  // a closed outline repeats its first point last, which biases a mean.
  const center = { x: (minX + maxX) / 2, y: (minY + maxY) / 2 }
  const radii = centerlinePoints.map(({ x, y }) =>
    Math.hypot(x - center.x, y - center.y),
  )
  if (
    Math.max(...radii) - Math.min(...radii) >
    centerlineDiameter * MAXIMUM_RADIUS_VARIATION_RATIO
  ) {
    return null
  }
  const angles = centerlinePoints.map(({ x, y }) =>
    Math.atan2(y - center.y, x - center.x),
  )
  const angularSteps = angles.map((angle, angleIndex) => {
    const nextAngle = angles[(angleIndex + 1) % angles.length]
    return Math.atan2(Math.sin(nextAngle - angle), Math.cos(nextAngle - angle))
  })
  const traversalDirection = Math.sign(angularSteps[0])
  if (
    traversalDirection === 0 ||
    angularSteps.some(
      (angularStep) =>
        Math.sign(angularStep) !== traversalDirection ||
        Math.abs(angularStep) > (4 * Math.PI) / centerlinePoints.length,
    )
  ) {
    return null
  }
  const outerDiameter = centerlineDiameter + (strokeWidth ?? 0)
  return { center, radius: outerDiameter / 2 }
}

export const convertKeepouts: FootprintElementConverter = (circuitJson) => {
  const pcbKeepouts = su(circuitJson).pcb_keepout.list()
  const elementStrings: string[] = []

  for (const keepout of pcbKeepouts) {
    // Default is top; only emit layer when it differs, matching
    // convert-silkscreen.ts.
    const layerAttr = keepout.layers.includes("bottom") ? ` layer="bottom"` : ""

    if (keepout.shape === "rect") {
      elementStrings.push(
        `<keepout shape="rect" pcbX="${formatMm(keepout.center.x)}" pcbY="${formatMm(keepout.center.y)}" width="${formatMm(keepout.width)}" height="${formatMm(keepout.height)}"${layerAttr} />`,
      )
    } else if (keepout.shape === "circle") {
      elementStrings.push(
        `<keepout shape="circle" pcbX="${formatMm(keepout.center.x)}" pcbY="${formatMm(keepout.center.y)}" radius="${formatMm(keepout.radius)}"${layerAttr} />`,
      )
    } else if (keepout.shape === "outline") {
      const circle = circleFromCircularKeepoutOutline(
        keepout.outline ?? [],
        keepout.stroke_width,
      )
      if (circle) {
        elementStrings.push(
          `<keepout shape="circle" pcbX="${formatMm(circle.center.x)}" pcbY="${formatMm(circle.center.y)}" radius="${formatMm(circle.radius)}"${layerAttr} />`,
        )
      } else {
        // Deliberately dropped rather than approximated with a bounding-box
        // rect: a keepout constrains placement, so an over-approximated box can
        // make core report false placement/clearance errors or shift parts off
        // legal positions. A missing keepout is a visible fidelity loss; a
        // fabricated one is a silent correctness bug.
        console.warn(
          `Unhandled pcb_keepout shape: outline (non-circular, ${(keepout.outline ?? []).length} pts) — dropped rather than approximated.`,
        )
      }
    } else {
      console.warn(`Unhandled pcb_keepout shape: ${(keepout as any).shape}`)
    }
  }

  return elementStrings
}
