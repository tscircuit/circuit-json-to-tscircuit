import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatPcbRotationAttr } from "./helpers"

export const convertCourtyard: FootprintElementConverter = (circuitJson) => {
  const courtyardOutlines = su(circuitJson).pcb_courtyard_outline.list()
  const courtyardRects = su(circuitJson).pcb_courtyard_rect.list()
  const courtyardCircles = su(circuitJson).pcb_courtyard_circle.list()
  const elementStrings: string[] = []

  for (const courtyardOutline of courtyardOutlines) {
    const attrs = [
      `outline={${JSON.stringify(courtyardOutline.outline ?? [])}}`,
    ]
    if (courtyardOutline.layer !== undefined) {
      attrs.push(`layer="${courtyardOutline.layer}"`)
    }

    elementStrings.push(`<courtyardoutline ${attrs.join(" ")} />`)
  }

  for (const courtyardRect of courtyardRects) {
    const attrs = [
      `pcbX={${courtyardRect.center?.x ?? 0}}`,
      `pcbY={${courtyardRect.center?.y ?? 0}}`,
      `width={${courtyardRect.width ?? 0}}`,
      `height={${courtyardRect.height ?? 0}}`,
    ]
    if (courtyardRect.layer !== undefined) {
      attrs.push(`layer="${courtyardRect.layer}"`)
    }
    if (courtyardRect.ccw_rotation !== undefined) {
      attrs.push(formatPcbRotationAttr(courtyardRect.ccw_rotation).trimStart())
    }

    elementStrings.push(`<courtyardrect ${attrs.join(" ")} />`)
  }

  for (const courtyardCircle of courtyardCircles) {
    const attrs = [
      `pcbX={${courtyardCircle.center?.x ?? 0}}`,
      `pcbY={${courtyardCircle.center?.y ?? 0}}`,
      `radius={${courtyardCircle.radius ?? 0}}`,
    ]
    if (courtyardCircle.layer !== undefined) {
      attrs.push(`layer="${courtyardCircle.layer}"`)
    }

    elementStrings.push(`<courtyardcircle ${attrs.join(" ")} />`)
  }

  return elementStrings
}
