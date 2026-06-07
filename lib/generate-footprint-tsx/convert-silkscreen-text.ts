import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { escapeJsxText } from "./helpers"

export const convertSilkscreenText: FootprintElementConverter = (
  circuitJson,
) => {
  const silkscreenTexts = su(circuitJson).pcb_silkscreen_text.list()
  const elementStrings: string[] = []

  for (const silkscreenText of silkscreenTexts) {
    const pcbX = silkscreenText.anchor_position?.x ?? 0
    const pcbY = silkscreenText.anchor_position?.y ?? 0

    elementStrings.push(
      `<silkscreentext pcbX={${pcbX}} pcbY={${pcbY}} anchorAlignment="${silkscreenText.anchor_alignment}" fontSize={${silkscreenText.font_size}} text="${escapeJsxText(silkscreenText.text)}" />`,
    )
  }

  return elementStrings
}
