import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { escapeJsxText } from "./helpers"

const formatJsxProp = (
  name: string,
  value: string | number | boolean,
): string =>
  typeof value === "string"
    ? `${name}=${JSON.stringify(value)}`
    : `${name}={${JSON.stringify(value)}}`

export const convertSilkscreenText: FootprintElementConverter = (
  circuitJson,
) => {
  const silkscreenTexts = su(circuitJson).pcb_silkscreen_text.list()
  const elementStrings: string[] = []

  for (const silkscreenText of silkscreenTexts) {
    const pcbX = silkscreenText.anchor_position?.x ?? 0
    const pcbY = silkscreenText.anchor_position?.y ?? 0
    const attrs = [
      `pcbX={${pcbX}}`,
      `pcbY={${pcbY}}`,
      `anchorAlignment=${JSON.stringify(silkscreenText.anchor_alignment ?? "center")}`,
      formatJsxProp("fontSize", silkscreenText.font_size),
      `text="${escapeJsxText(silkscreenText.text)}"`,
    ]

    if (silkscreenText.font !== undefined) {
      attrs.push(formatJsxProp("font", silkscreenText.font))
    }

    if (silkscreenText.ccw_rotation !== undefined) {
      attrs.push(formatJsxProp("pcbRotation", silkscreenText.ccw_rotation))
    }

    if (silkscreenText.is_knockout !== undefined) {
      attrs.push(formatJsxProp("isKnockout", silkscreenText.is_knockout))
    }

    if (silkscreenText.knockout_padding !== undefined) {
      const { left, right, top, bottom } = silkscreenText.knockout_padding
      if (left === right && left === top && left === bottom) {
        attrs.push(formatJsxProp("knockoutPadding", left))
      } else {
        attrs.push(formatJsxProp("knockoutPaddingLeft", left))
        attrs.push(formatJsxProp("knockoutPaddingRight", right))
        attrs.push(formatJsxProp("knockoutPaddingTop", top))
        attrs.push(formatJsxProp("knockoutPaddingBottom", bottom))
      }
    }

    if (silkscreenText.layer !== undefined) {
      attrs.push(formatJsxProp("layer", silkscreenText.layer))
    }

    elementStrings.push(`<silkscreentext ${attrs.join(" ")} />`)
  }

  return elementStrings
}
