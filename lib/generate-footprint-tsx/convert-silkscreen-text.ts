import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import { escapeJsxText } from "./footprint-tsx-attribute-formatters/escape-jsx-text"

export const convertSilkscreenText: FootprintElementConverter = (
  circuitJson,
) => {
  const silkscreenTexts = su(circuitJson).pcb_silkscreen_text.list()
  const elementStrings: string[] = []

  for (const silkscreenText of silkscreenTexts) {
    const pcbX = silkscreenText.anchor_position?.x ?? 0
    const pcbY = silkscreenText.anchor_position?.y ?? 0
    const knockoutPadding = silkscreenText.knockout_padding
    const hasUniformKnockoutPadding =
      knockoutPadding &&
      knockoutPadding.left === knockoutPadding.top &&
      knockoutPadding.top === knockoutPadding.right &&
      knockoutPadding.right === knockoutPadding.bottom

    elementStrings.push(
      `<silkscreentext pcbX={${pcbX}} pcbY={${pcbY}} anchorAlignment="${silkscreenText.anchor_alignment}" fontSize={${silkscreenText.font_size}}${silkscreenText.font !== undefined ? ` font="${silkscreenText.font}"` : ""}${silkscreenText.ccw_rotation !== undefined ? ` pcbRotation="${typeof silkscreenText.ccw_rotation === "number" ? `${silkscreenText.ccw_rotation}deg` : silkscreenText.ccw_rotation}"` : ""}${silkscreenText.is_knockout !== undefined ? ` isKnockout={${silkscreenText.is_knockout}}` : ""}${knockoutPadding ? (hasUniformKnockoutPadding ? ` knockoutPadding="${mmStr(knockoutPadding.left)}"` : ` knockoutPaddingLeft="${mmStr(knockoutPadding.left)}" knockoutPaddingTop="${mmStr(knockoutPadding.top)}" knockoutPaddingRight="${mmStr(knockoutPadding.right)}" knockoutPaddingBottom="${mmStr(knockoutPadding.bottom)}"`) : ""}${silkscreenText.is_mirrored !== undefined ? ` mirrored={${silkscreenText.is_mirrored}}` : ""}${silkscreenText.layer !== undefined ? ` layer="${silkscreenText.layer}"` : ""} text="${escapeJsxText(silkscreenText.text)}" />`,
    )
  }

  return elementStrings
}
