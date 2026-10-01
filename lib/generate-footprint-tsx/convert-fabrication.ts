import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { escapeJsxText } from "./footprint-tsx-attribute-formatters/escape-jsx-text"

export const convertFabrication: FootprintElementConverter = (circuitJson) => {
  const fabricationNotePaths = su(circuitJson).pcb_fabrication_note_path.list()
  const fabricationNoteTexts = su(circuitJson).pcb_fabrication_note_text.list()
  const fabricationNoteRects = su(circuitJson).pcb_fabrication_note_rect.list()
  const fabricationNoteDimensions =
    su(circuitJson).pcb_fabrication_note_dimension.list()
  const elementStrings: string[] = []

  for (const fabPath of fabricationNotePaths) {
    const attrs = [`route={${JSON.stringify(fabPath.route)}}`]

    if ("stroke_width" in fabPath && fabPath.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${fabPath.stroke_width}}`)
    }
    if ("color" in fabPath && fabPath.color !== undefined) {
      attrs.push(`color="${fabPath.color}"`)
    }
    if ("layer" in fabPath && fabPath.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<fabricationnotepath ${attrs.join(" ")} />`)
  }

  for (const fabText of fabricationNoteTexts) {
    const anchorPosition = fabText.anchor_position ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${anchorPosition.x}}`,
      `pcbY={${anchorPosition.y}}`,
      `anchorAlignment="${fabText.anchor_alignment ?? "center"}"`,
      `text="${escapeJsxText(fabText.text)}"`,
    ]

    if (fabText.font !== undefined) {
      attrs.push(`font="${fabText.font}"`)
    }
    if (fabText.font_size !== undefined) {
      attrs.push(`fontSize={${fabText.font_size}}`)
    }
    if (fabText.color !== undefined) {
      attrs.push(`color="${fabText.color}"`)
    }
    if (fabText.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<fabricationnotetext ${attrs.join(" ")} />`)
  }

  for (const fabRect of fabricationNoteRects) {
    const center = fabRect.center ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${center.x}}`,
      `pcbY={${center.y}}`,
      `width={${fabRect.width ?? 0}}`,
      `height={${fabRect.height ?? 0}}`,
    ]

    if (fabRect.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${fabRect.stroke_width}}`)
    }
    if (fabRect.is_filled !== undefined) {
      attrs.push(`isFilled={${fabRect.is_filled}}`)
    }
    if (fabRect.has_stroke !== undefined) {
      attrs.push(`hasStroke={${fabRect.has_stroke}}`)
    }
    if (fabRect.is_stroke_dashed !== undefined) {
      attrs.push(`isStrokeDashed={${fabRect.is_stroke_dashed}}`)
    }
    if (fabRect.color !== undefined) {
      attrs.push(`color="${fabRect.color}"`)
    }
    if ("corner_radius" in fabRect && fabRect.corner_radius !== undefined) {
      attrs.push(`cornerRadius={${fabRect.corner_radius}}`)
    }
    if (fabRect.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<fabricationnoterect ${attrs.join(" ")} />`)
  }

  for (const fabDimension of fabricationNoteDimensions) {
    const fromPoint = fabDimension.from ?? { x: 0, y: 0 }
    const toPoint = fabDimension.to ?? { x: 0, y: 0 }
    const attrs = [
      `from={{ x: ${fromPoint.x}, y: ${fromPoint.y} }}`,
      `to={{ x: ${toPoint.x}, y: ${toPoint.y} }}`,
    ]

    if (fabDimension.text !== undefined) {
      attrs.push(`text="${escapeJsxText(fabDimension.text)}"`)
    }
    if (fabDimension.font !== undefined) {
      attrs.push(`font="${fabDimension.font}"`)
    }
    if (fabDimension.font_size !== undefined) {
      attrs.push(`fontSize={${fabDimension.font_size}}`)
    }
    if (fabDimension.color !== undefined) {
      attrs.push(`color="${fabDimension.color}"`)
    }
    if (fabDimension.arrow_size !== undefined) {
      attrs.push(`arrowSize={${fabDimension.arrow_size}}`)
    }
    // Circuit JSON uses offset_distance for the magnitude and offset_direction
    // for the vector. Keep legacy offset input working when no magnitude exists.
    const offset = fabDimension.offset_distance ?? fabDimension.offset
    if (offset !== undefined) {
      attrs.push(`offset={${offset}}`)
    }
    if (fabDimension.offset_direction !== undefined) {
      attrs.push(
        `offsetDirection={${JSON.stringify(fabDimension.offset_direction)}}`,
      )
    }
    if (fabDimension.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<fabricationnotedimension ${attrs.join(" ")} />`)
  }

  return elementStrings
}
