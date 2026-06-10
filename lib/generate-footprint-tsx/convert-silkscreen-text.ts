import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { escapeJsxText } from "./helpers"

export const convertSilkscreenText: FootprintElementConverter = (
  circuitJson,
) => {
  const silkscreenTexts = su(circuitJson).pcb_silkscreen_text.list()
  const elementStrings: string[] = []

  for (const silkscreenText of silkscreenTexts) {
    const anchorPosition = silkscreenText.anchor_position ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${anchorPosition.x}}`,
      `pcbY={${anchorPosition.y}}`,
      `anchorAlignment="${silkscreenText.anchor_alignment}"`,
      `fontSize={${silkscreenText.font_size}}`,
      `text="${escapeJsxText(silkscreenText.text)}"`,
    ]

    if (silkscreenText.font !== undefined) {
      attrs.push(`font="${silkscreenText.font}"`)
    }
    if (silkscreenText.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<silkscreentext ${attrs.join(" ")} />`)
  }

  return elementStrings
}
