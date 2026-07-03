import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { escapeJsxText } from "./footprint-tsx-attribute-formatters"

export const convertCopperText: FootprintElementConverter = (circuitJson) => {
  const copperTexts = su(circuitJson).pcb_copper_text.list()
  const elementStrings: string[] = []

  for (const copperText of copperTexts) {
    const anchorPosition = copperText.anchor_position ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${anchorPosition.x}}`,
      `pcbY={${anchorPosition.y}}`,
      `anchorAlignment="${copperText.anchor_alignment ?? "center"}"`,
      `text="${escapeJsxText(copperText.text)}"`,
    ]

    if (copperText.font !== undefined) {
      attrs.push(`font="${copperText.font}"`)
    }
    if (copperText.font_size !== undefined) {
      attrs.push(`fontSize={${copperText.font_size}}`)
    }
    if (copperText.ccw_rotation !== undefined) {
      attrs.push(`pcbRotation="${copperText.ccw_rotation}deg"`)
    }
    if (copperText.is_knockout !== undefined) {
      attrs.push(`knockout={${copperText.is_knockout}}`)
    }
    if (copperText.is_mirrored !== undefined) {
      attrs.push(`mirrored={${copperText.is_mirrored}}`)
    }
    if (copperText.layer !== undefined && copperText.layer !== "top") {
      attrs.push(`layer="${copperText.layer}"`)
    }

    elementStrings.push(`<coppertext ${attrs.join(" ")} />`)
  }

  return elementStrings
}
