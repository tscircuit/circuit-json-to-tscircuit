import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertSilkscreen: FootprintElementConverter = (circuitJson) => {
  const silkscreenLines = su(circuitJson).pcb_silkscreen_line.list()
  const silkscreenPaths = su(circuitJson).pcb_silkscreen_path.list()
  const silkscreenRects = su(circuitJson).pcb_silkscreen_rect.list()
  const silkscreenCircles = su(circuitJson).pcb_silkscreen_circle.list()
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

    if (silkscreenRect.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenRect.stroke_width}}`)
    }
    if (silkscreenRect.is_filled !== undefined) {
      attrs.push(`filled={${silkscreenRect.is_filled}}`)
    }
    if (silkscreenRect.corner_radius !== undefined) {
      attrs.push(`cornerRadius={${silkscreenRect.corner_radius}}`)
    }

    elementStrings.push(`<silkscreenrect ${attrs.join(" ")} />`)
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
