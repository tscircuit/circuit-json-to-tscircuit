import type { PcbFabricationNoteDimension } from "circuit-json"
import { escapeJsxText } from "./footprint-tsx-attribute-formatters/escape-jsx-text"

export const convertFabricationNoteDimension = (
  dimension: PcbFabricationNoteDimension,
): string[] => {
  const from = dimension.from ?? { x: 0, y: 0 }
  const to = dimension.to ?? { x: 0, y: 0 }
  const offsetDistance = dimension.offset_distance ?? dimension.offset
  const attrs = [
    `from={{ x: ${from.x}, y: ${from.y} }}`,
    `to={{ x: ${to.x}, y: ${to.y} }}`,
  ]

  if (dimension.text !== undefined) {
    attrs.push(`text="${escapeJsxText(dimension.text)}"`)
  }
  if (dimension.font !== undefined) attrs.push(`font="${dimension.font}"`)
  if (dimension.font_size !== undefined) {
    attrs.push(`fontSize={${dimension.font_size}}`)
  }
  if (dimension.color !== undefined) attrs.push(`color="${dimension.color}"`)
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
  if (dimension.layer === "bottom") attrs.push(`layer="bottom"`)

  return [`<fabricationnotedimension ${attrs.join(" ")} />`]
}
