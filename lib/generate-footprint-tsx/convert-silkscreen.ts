import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatPcbRotationAttr } from "./footprint-tsx-attribute-formatters/format-pcb-rotation-attr"
import { getSilkscreenOvalRoute } from "./get-silkscreen-oval-route"
import { getSilkscreenPillRoute } from "./get-silkscreen-pill-route"

const DEFAULT_SHAPE_STROKE_WIDTH = 0.1

export const convertSilkscreen: FootprintElementConverter = (circuitJson) => {
  const silkscreenLines = su(circuitJson).pcb_silkscreen_line.list()
  const silkscreenPaths = su(circuitJson).pcb_silkscreen_path.list()
  const silkscreenRects = su(circuitJson).pcb_silkscreen_rect.list()
  const silkscreenCircles = su(circuitJson).pcb_silkscreen_circle.list()
  const silkscreenOvals = su(circuitJson).pcb_silkscreen_oval.list()
  const silkscreenPills = su(circuitJson).pcb_silkscreen_pill.list()
  const elementStrings: string[] = []

  for (const silkscreenPath of silkscreenPaths) {
    const attrs = [`route={${JSON.stringify(silkscreenPath.route)}}`]

    if (silkscreenPath.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenPath.stroke_width}}`)
    }
    if (silkscreenPath.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<silkscreenpath ${attrs.join(" ")} />`)
  }

  for (const silkscreenRect of silkscreenRects) {
    const center = silkscreenRect.center ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${center.x}}`,
      `pcbY={${center.y}}`,
      `width={${silkscreenRect.width ?? 0}}`,
      `height={${silkscreenRect.height ?? 0}}`,
      `layer="${silkscreenRect.layer}"`,
    ]

    if (silkscreenRect.has_stroke === false) {
      attrs.push("strokeWidth={0}")
    } else if (silkscreenRect.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenRect.stroke_width}}`)
    }
    if (silkscreenRect.is_filled !== undefined) {
      attrs.push(`filled={${silkscreenRect.is_filled}}`)
    }
    if (silkscreenRect.corner_radius !== undefined) {
      attrs.push(`cornerRadius={${silkscreenRect.corner_radius}}`)
    }

    elementStrings.push(
      `<silkscreenrect ${attrs.join(" ")}${formatPcbRotationAttr(silkscreenRect.ccw_rotation)} />`,
    )
  }

  for (const silkscreenCircle of silkscreenCircles) {
    const center = silkscreenCircle.center ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${center.x}}`,
      `pcbY={${center.y}}`,
      `radius={${silkscreenCircle.radius ?? 0}}`,
      `layer="${silkscreenCircle.layer}"`,
    ]

    if (silkscreenCircle.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenCircle.stroke_width}}`)
    }
    if (silkscreenCircle.is_filled !== undefined) {
      attrs.push(`isFilled={${silkscreenCircle.is_filled}}`)
    }

    elementStrings.push(`<silkscreencircle ${attrs.join(" ")} />`)
  }

  for (const silkscreenOval of silkscreenOvals) {
    const route = getSilkscreenOvalRoute({
      center: silkscreenOval.center,
      radiusX: silkscreenOval.radius_x,
      radiusY: silkscreenOval.radius_y,
      ccwRotationDegrees: silkscreenOval.ccw_rotation ?? 0,
    })
    const attrs = [
      `route={${JSON.stringify(route)}}`,
      `strokeWidth={${DEFAULT_SHAPE_STROKE_WIDTH}}`,
    ]
    if (silkscreenOval.layer === "bottom") attrs.push('layer="bottom"')
    elementStrings.push(`<silkscreenpath ${attrs.join(" ")} />`)
  }

  for (const silkscreenPill of silkscreenPills) {
    const route = getSilkscreenPillRoute({
      center: silkscreenPill.center,
      width: silkscreenPill.width,
      height: silkscreenPill.height,
      ccwRotationDegrees: silkscreenPill.ccw_rotation ?? 0,
    })
    const attrs = [
      `route={${JSON.stringify(route)}}`,
      `strokeWidth={${DEFAULT_SHAPE_STROKE_WIDTH}}`,
    ]
    if (silkscreenPill.layer === "bottom") attrs.push('layer="bottom"')
    elementStrings.push(`<silkscreenpath ${attrs.join(" ")} />`)
  }

  for (const silkscreenLine of silkscreenLines) {
    const attrs = [
      `x1={${silkscreenLine.x1 ?? 0}}`,
      `y1={${silkscreenLine.y1 ?? 0}}`,
      `x2={${silkscreenLine.x2 ?? 0}}`,
      `y2={${silkscreenLine.y2 ?? 0}}`,
    ]

    if (silkscreenLine.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenLine.stroke_width}}`)
    }
    if (silkscreenLine.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<silkscreenline ${attrs.join(" ")} />`)
  }
  return elementStrings
}
