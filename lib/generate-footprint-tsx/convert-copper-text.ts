import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import {
  escapeJsxText,
  formatOptionalBooleanAttr,
  formatOptionalNumberAttr,
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
      `<coppertext pcbX={${anchorPosition.x}} pcbY={${anchorPosition.y}} anchorAlignment="${copperText.anchor_alignment ?? "center"}" text="${escapeJsxText(copperText.text)}"${formatOptionalStringAttr("font", copperText.font)}${formatOptionalNumberAttr("fontSize", copperText.font_size)}${formatPcbRotationAttr(copperText.ccw_rotation)}${formatOptionalBooleanAttr("knockout", copperText.is_knockout)}${formatOptionalBooleanAttr("mirrored", copperText.is_mirrored)}${nonDefaultLayer} />`,
    )
  }

  return elementStrings
}
