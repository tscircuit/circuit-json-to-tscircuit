import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import {
  escapeJsxText,
  formatOptionalJsxAttr,
  formatOptionalStringAttr,
  formatPcbRotationAttr,
} from "./helpers"

export const convertCopperText: FootprintElementConverter = (circuitJson) => {
  const copperTexts = su(circuitJson).pcb_copper_text.list()
  const elementStrings: string[] = []

  for (const copperText of copperTexts) {
    const anchorPosition = copperText.anchor_position ?? { x: 0, y: 0 }
    const nonDefaultLayer =
      copperText.layer !== undefined && copperText.layer !== "top"
        ? formatOptionalStringAttr("layer", copperText.layer)
        : ""

    elementStrings.push(
      `<coppertext pcbX={${anchorPosition.x}} pcbY={${anchorPosition.y}} anchorAlignment="${copperText.anchor_alignment ?? "center"}" text="${escapeJsxText(copperText.text)}"${formatOptionalStringAttr("font", copperText.font)}${formatOptionalJsxAttr("fontSize", copperText.font_size)}${formatPcbRotationAttr(copperText.ccw_rotation)}${formatOptionalJsxAttr("knockout", copperText.is_knockout)}${formatOptionalJsxAttr("mirrored", copperText.is_mirrored)}${nonDefaultLayer} />`,
    )
  }

  return elementStrings
}
