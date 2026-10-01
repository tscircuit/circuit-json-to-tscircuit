import type { PcbNoteDimension } from "circuit-json"
import { escapeJsxText } from "./footprint-tsx-attribute-formatters/escape-jsx-text"

export const convertPcbNoteDimension = (
  dimension: PcbNoteDimension,
): string[] => {
  const from = dimension.from ?? { x: 0, y: 0 }
  const to = dimension.to ?? { x: 0, y: 0 }
  const legacyOffset =
    "offset" in dimension && typeof dimension.offset === "number"
      ? dimension.offset
      : undefined
  const offsetDistance = dimension.offset_distance ?? legacyOffset
  const attrs = [
    `from={{ x: ${from.x}, y: ${from.y} }}`,
    `to={{ x: ${to.x}, y: ${to.y} }}`,
    `font="${dimension.font ?? "tscircuit2024"}"`,
    `fontSize={${dimension.font_size ?? 0}}`,
  ]

  if (dimension.arrow_size !== undefined) {
    attrs.push(`arrowSize={${dimension.arrow_size}}`)
  }
  if (offsetDistance !== undefined) {
    attrs.push(`offset={${offsetDistance}}`)
  }
  if (dimension.offset_direction !== undefined) {
    attrs.push(
      `offsetDirection={${JSON.stringify(dimension.offset_direction)}}`,
    )
  }
  if (dimension.text !== undefined) {
    attrs.push(`text="${escapeJsxText(dimension.text)}"`)
  }
  if (dimension.color !== undefined) attrs.push(`color="${dimension.color}"`)
  if (dimension.layer === "bottom") attrs.push(`layer="bottom"`)

  return [`<pcbnotedimension ${attrs.join(" ")} />`]
}
