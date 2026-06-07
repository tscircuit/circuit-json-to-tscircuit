import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { escapeJsxText } from "./helpers"

export const convertNotes: FootprintElementConverter = (circuitJson) => {
  const noteTexts = su(circuitJson).pcb_note_text.list()
  const noteRects = su(circuitJson).pcb_note_rect.list()
  const notePaths = su(circuitJson).pcb_note_path.list()
  const noteLines = su(circuitJson).pcb_note_line.list()
  const noteDimensions = su(circuitJson).pcb_note_dimension.list()
  const elementStrings: string[] = []

  for (const noteText of noteTexts) {
    const anchorPosition = noteText.anchor_position ?? { x: 0, y: 0 }
    const colorAttr = noteText.color ? ` color="${noteText.color}"` : ""

    elementStrings.push(
      `<pcbnotetext pcbX={${anchorPosition.x}} pcbY={${anchorPosition.y}} anchorAlignment="${noteText.anchor_alignment ?? "center"}" font="${noteText.font ?? "tscircuit2024"}" fontSize={${noteText.font_size ?? 0}} text="${escapeJsxText(noteText.text)}"${colorAttr} />`,
    )
  }

  for (const noteRect of noteRects) {
    const center = noteRect.center ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${center.x}}`,
      `pcbY={${center.y}}`,
      `width={${noteRect.width ?? 0}}`,
      `height={${noteRect.height ?? 0}}`,
      `strokeWidth={${noteRect.stroke_width ?? 0}}`,
    ]

    if (noteRect.is_filled !== undefined) {
      attrs.push(`isFilled={${noteRect.is_filled}}`)
    }
    if (noteRect.has_stroke !== undefined) {
      attrs.push(`hasStroke={${noteRect.has_stroke}}`)
    }
    if (noteRect.is_stroke_dashed !== undefined) {
      attrs.push(`isStrokeDashed={${noteRect.is_stroke_dashed}}`)
    }
    if (noteRect.color !== undefined) {
      attrs.push(`color="${noteRect.color}"`)
    }

    elementStrings.push(`<pcbnoterect ${attrs.join(" ")} />`)
  }

  for (const notePath of notePaths) {
    const attrs = [`route={${JSON.stringify(notePath.route ?? [])}}`]

    if (notePath.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${notePath.stroke_width}}`)
    }
    if (notePath.color !== undefined) {
      attrs.push(`color="${notePath.color}"`)
    }

    elementStrings.push(`<pcbnotepath ${attrs.join(" ")} />`)
  }

  for (const noteLine of noteLines) {
    const attrs = [
      `x1={${noteLine.x1 ?? 0}}`,
      `y1={${noteLine.y1 ?? 0}}`,
      `x2={${noteLine.x2 ?? 0}}`,
      `y2={${noteLine.y2 ?? 0}}`,
    ]

    if (noteLine.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${noteLine.stroke_width}}`)
    }
    if (noteLine.color !== undefined) {
      attrs.push(`color="${noteLine.color}"`)
    }
    if (noteLine.is_dashed !== undefined) {
      attrs.push(`isDashed={${noteLine.is_dashed}}`)
    }

    elementStrings.push(`<pcbnoteline ${attrs.join(" ")} />`)
  }

  for (const noteDimension of noteDimensions) {
    const fromPoint = noteDimension.from ?? { x: 0, y: 0 }
    const toPoint = noteDimension.to ?? { x: 0, y: 0 }
    const attrs = [
      `from={{ x: ${fromPoint.x}, y: ${fromPoint.y} }}`,
      `to={{ x: ${toPoint.x}, y: ${toPoint.y} }}`,
      `font="${noteDimension.font ?? "tscircuit2024"}"`,
      `fontSize={${noteDimension.font_size ?? 0}}`,
    ]

    if (noteDimension.arrow_size !== undefined) {
      attrs.push(`arrowSize={${noteDimension.arrow_size}}`)
    }

    if ("offset" in noteDimension) {
      const offsetValue = (noteDimension as { offset?: number }).offset
      if (offsetValue !== undefined) {
        attrs.push(`offset={${offsetValue}}`)
      }
    }

    if (noteDimension.text !== undefined) {
      attrs.push(`text="${escapeJsxText(noteDimension.text)}"`)
    }
    if (noteDimension.color !== undefined) {
      attrs.push(`color="${noteDimension.color}"`)
    }

    elementStrings.push(`<pcbnotedimension ${attrs.join(" ")} />`)
  }

  return elementStrings
}
