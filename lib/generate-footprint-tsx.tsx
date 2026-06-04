import { mmStr } from "@tscircuit/mm"
import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"

export const generateFootprintTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const holes = su(circuitJson).pcb_hole.list()
  const platedHoles = su(circuitJson).pcb_plated_hole.list()
  const smtPads = su(circuitJson).pcb_smtpad.list()
  const silkscreenLines = su(circuitJson).pcb_silkscreen_line.list()
  const silkscreenPaths = su(circuitJson).pcb_silkscreen_path.list()
  const silkscreenRects = su(circuitJson).pcb_silkscreen_rect.list()
  const silkscreenCircles = su(circuitJson).pcb_silkscreen_circle.list()
  const fabricationNotePaths = su(circuitJson).pcb_fabrication_note_path.list()
  const fabricationNoteTexts = su(circuitJson).pcb_fabrication_note_text.list()
  const fabricationNoteRects = su(circuitJson).pcb_fabrication_note_rect.list()
  const fabricationNoteDimensions =
    su(circuitJson).pcb_fabrication_note_dimension.list()
  const copperTexts = su(circuitJson).pcb_copper_text.list()
  const silkscreenTexts = su(circuitJson).pcb_silkscreen_text.list()
  const pcbCutouts = su(circuitJson).pcb_cutout.list()
  const noteTexts = su(circuitJson).pcb_note_text.list()
  const noteRects = su(circuitJson).pcb_note_rect.list()
  const notePaths = su(circuitJson).pcb_note_path.list()
  const noteLines = su(circuitJson).pcb_note_line.list()
  const noteDimensions = su(circuitJson).pcb_note_dimension.list()
  const courtyardOutlines = su(circuitJson).pcb_courtyard_outline.list()
  const courtyardRects = su(circuitJson).pcb_courtyard_rect.list()
  const courtyardCircles = su(circuitJson).pcb_courtyard_circle.list()

  const elementStrings: string[] = []

  for (const hole of holes) {
    if (hole.hole_shape === "circle") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" diameter="${mmStr(hole.hole_diameter)}" />`,
      )
    } else if (hole.hole_shape === "rect") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="rect" />`,
      )
    } else if (
      hole.hole_shape === "oval" ||
      hole.hole_shape === "pill" ||
      hole.hole_shape === "rotated_pill"
    ) {
      const pcbRotation =
        "ccw_rotation" in hole && hole.ccw_rotation !== undefined
          ? ` pcbRotation="${typeof hole.ccw_rotation === "number" ? `${hole.ccw_rotation}deg` : hole.ccw_rotation}"`
          : ""
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="pill"${pcbRotation} />`,
      )
    }
  }

  for (const platedHole of platedHoles) {
    if (platedHole.shape === "oval" || platedHole.shape === "pill") {
      const pcbRotation =
        "ccw_rotation" in platedHole && platedHole.ccw_rotation !== undefined
          ? ` pcbRotation="${typeof platedHole.ccw_rotation === "number" ? `${platedHole.ccw_rotation}deg` : platedHole.ccw_rotation}"`
          : ""
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" outerHeight="${mmStr(platedHole.outer_height)}" outerWidth="${mmStr(platedHole.outer_width)}" holeHeight="${mmStr(platedHole.hole_height)}" holeWidth="${mmStr(platedHole.hole_width)}" height="${mmStr(platedHole.hole_height)}" shape="${platedHole.shape}"${pcbRotation} />`,
      )
    } else if (platedHole.shape === "circle") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" outerDiameter="${mmStr(platedHole.outer_diameter)}" holeDiameter="${mmStr(platedHole.hole_diameter)}" shape="circle" />`,
      )
    }
  }

  for (const smtPad of smtPads) {
    if (smtPad.shape === "circle") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" radius="${mmStr(smtPad.radius)}" shape="circle" />`,
      )
    } else if (smtPad.shape === "rect") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" width="${mmStr(smtPad.width)}" height="${mmStr(smtPad.height)}" shape="rect" />`,
      )
    } else if (smtPad.shape === "pill") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" width="${mmStr(smtPad.width)}" height="${mmStr(smtPad.height)}" radius="${mmStr(smtPad.radius)}" shape="pill" />`,
      )
    } else if (smtPad.shape === "polygon") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} shape="polygon" points={${JSON.stringify(smtPad.points)}} />`,
      )
    } else if (smtPad.shape === "rotated_rect") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" width="${mmStr(smtPad.width)}" height="${mmStr(smtPad.height)}" ccwRotation={${smtPad.ccw_rotation}} shape="rotated_rect" />`,
      )
    }
  }

  for (const silkscreenPath of silkscreenPaths) {
    elementStrings.push(
      `<silkscreenpath route={${JSON.stringify(silkscreenPath.route)}} />`,
    )
  }

  for (const silkscreenRect of silkscreenRects) {
    const center = silkscreenRect.center ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${center.x}}`,
      `pcbY={${center.y}}`,
      `width={${silkscreenRect.width ?? 0}}`,
      `height={${silkscreenRect.height ?? 0}}`,
      `layer="${silkscreenRect.layer}"`,
    ]

    if (silkscreenRect.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenRect.stroke_width}}`)
    }
    if (silkscreenRect.is_filled !== undefined) {
      attrs.push(`filled={${silkscreenRect.is_filled}}`)
    }
    if (silkscreenRect.corner_radius !== undefined) {
      attrs.push(`cornerRadius={${silkscreenRect.corner_radius}}`)
    }

    elementStrings.push(`<silkscreenrect ${attrs.join(" ")} />`)
  }

  for (const silkscreenCircle of silkscreenCircles) {
    const center = silkscreenCircle.center ?? { x: 0, y: 0 }
    const attrs = [
      `pcbX={${center.x}}`,
      `pcbY={${center.y}}`,
      `radius={${silkscreenCircle.radius ?? 0}}`,
      `layer="${silkscreenCircle.layer}"`,
    ]

    if (silkscreenCircle.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenCircle.stroke_width}}`)
    }
    if (silkscreenCircle.is_filled !== undefined) {
      attrs.push(`isFilled={${silkscreenCircle.is_filled}}`)
    }

    elementStrings.push(`<silkscreencircle ${attrs.join(" ")} />`)
  }

  for (const silkscreenLine of silkscreenLines) {
    const attrs = [
      `x1={${silkscreenLine.x1 ?? 0}}`,
      `y1={${silkscreenLine.y1 ?? 0}}`,
      `x2={${silkscreenLine.x2 ?? 0}}`,
      `y2={${silkscreenLine.y2 ?? 0}}`,
    ]

    if (silkscreenLine.stroke_width !== undefined) {
      attrs.push(`strokeWidth={${silkscreenLine.stroke_width}}`)
    }

    if (silkscreenLine.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<silkscreenline ${attrs.join(" ")} />`)
  }

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
    const anchorAlignment = fabText.anchor_alignment ?? "center"
    const rawText = String(fabText.text ?? "")
    const escapedText = rawText.replace(/"/g, '\\"')

    const attrs = [
      `pcbX={${anchorPosition.x}}`,
      `pcbY={${anchorPosition.y}}`,
      `anchorAlignment="${anchorAlignment}"`,
      `text="${escapedText}"`,
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
      const escapedText = String(fabDimension.text).replace(/"/g, '\\"')
      attrs.push(`text="${escapedText}"`)
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
    if (fabDimension.offset !== undefined) {
      attrs.push(`offset={${fabDimension.offset}}`)
    } else if (
      "offset_distance" in fabDimension &&
      fabDimension.offset_distance !== undefined
    ) {
      attrs.push(`offset={${fabDimension.offset_distance}}`)
    }
    if (fabDimension.layer === "bottom") {
      attrs.push(`layer="bottom"`)
    }

    elementStrings.push(`<fabricationnotedimension ${attrs.join(" ")} />`)
  }

  for (const copperText of copperTexts) {
    const anchorPosition = copperText.anchor_position ?? { x: 0, y: 0 }
    const anchorAlignment = copperText.anchor_alignment ?? "center"
    const rawText = String(copperText.text ?? "")
    const escapedText = rawText.replace(/"/g, '\\"')

    const attrs = [
      `pcbX={${anchorPosition.x}}`,
      `pcbY={${anchorPosition.y}}`,
      `anchorAlignment="${anchorAlignment}"`,
      `text="${escapedText}"`,
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

  // Add silkscreen text elements (use pcbX/pcbY instead of anchorPosition)
  for (const stext of silkscreenTexts) {
    const pcbX = stext.anchor_position?.x ?? 0
    const pcbY = stext.anchor_position?.y ?? 0
    const anchorAlignment = stext.anchor_alignment
    // Escape quotes in text content for JSX attribute
    const rawText = String(stext.text ?? "")
    const escapedText = rawText.replace(/"/g, '\\"')

    // Only emit fontSize when set; emitting `fontSize={null}` or
    // `fontSize={undefined}` produces invalid TSX that fails typecheck
    // for downstream consumers of the generated component.
    const attrs = [
      `pcbX={${pcbX}}`,
      `pcbY={${pcbY}}`,
      `anchorAlignment="${anchorAlignment}"`,
    ]
    if (stext.font_size != null) {
      attrs.push(`fontSize={${stext.font_size}}`)
    }
    attrs.push(`text="${escapedText}"`)

    elementStrings.push(`<silkscreentext ${attrs.join(" ")} />`)
  }

  // Add cutout elements
  for (const cutout of pcbCutouts) {
    if (cutout.shape === "rect") {
      const pcbX = cutout.center.x
      const pcbY = cutout.center.y
      const width = mmStr(cutout.width)
      const height = mmStr(cutout.height)
      const rotation =
        cutout.rotation !== undefined
          ? ` pcbRotation="${mmStr(cutout.rotation)}"`
          : ""

      elementStrings.push(
        `<cutout shape="rect" pcbX="${mmStr(pcbX)}" pcbY="${mmStr(pcbY)}" width="${width}" height="${height}"${rotation} />`,
      )
    } else if (cutout.shape === "circle") {
      const pcbX = cutout.center.x
      const pcbY = cutout.center.y
      const radius = mmStr(cutout.radius)

      elementStrings.push(
        `<cutout shape="circle" pcbX="${mmStr(pcbX)}" pcbY="${mmStr(pcbY)}" radius="${radius}" />`,
      )
    } else if (cutout.shape === "polygon") {
      const pointsJson = JSON.stringify(cutout.points)

      elementStrings.push(`<cutout shape="polygon" points={${pointsJson}} />`)
    } else {
      console.warn(`Unhandled pcb_cutout shape: ${(cutout as any).shape}`)
    }
  }

  for (const noteText of noteTexts) {
    const anchorPosition = noteText.anchor_position ?? { x: 0, y: 0 }
    const anchorAlignment = noteText.anchor_alignment ?? "center"
    const font = noteText.font ?? "tscircuit2024"
    const fontSize = noteText.font_size ?? 0
    const colorAttr = noteText.color ? ` color="${noteText.color}"` : ""

    const rawText = String(noteText.text ?? "")
    const escapedText = rawText.replace(/"/g, '\\"')

    elementStrings.push(
      `<pcbnotetext pcbX={${anchorPosition.x}} pcbY={${anchorPosition.y}} anchorAlignment="${anchorAlignment}" font="${font}" fontSize={${fontSize}} text="${escapedText}"${colorAttr} />`,
    )
  }

  for (const noteRect of noteRects) {
    const center = noteRect.center ?? { x: 0, y: 0 }
    const width = noteRect.width ?? 0
    const height = noteRect.height ?? 0
    const strokeWidth = noteRect.stroke_width ?? 0

    const attrs = [
      `pcbX={${center.x}}`,
      `pcbY={${center.y}}`,
      `width={${width}}`,
      `height={${height}}`,
      `strokeWidth={${strokeWidth}}`,
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
    const routeJson = JSON.stringify(notePath.route ?? [])
    const attrs = [`route={${routeJson}}`]

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
    const font = noteDimension.font ?? "tscircuit2024"
    const fontSize = noteDimension.font_size ?? 0
    const arrowSize = noteDimension.arrow_size
    const attrs = [
      `from={{ x: ${fromPoint.x}, y: ${fromPoint.y} }}`,
      `to={{ x: ${toPoint.x}, y: ${toPoint.y} }}`,
      `font="${font}"`,
      `fontSize={${fontSize}}`,
    ]

    if (arrowSize !== undefined) {
      attrs.push(`arrowSize={${arrowSize}}`)
    }

    if ("offset" in noteDimension) {
      const offsetValue = (noteDimension as { offset?: number }).offset
      if (offsetValue !== undefined) {
        attrs.push(`offset={${offsetValue}}`)
      }
    }

    if (noteDimension.text !== undefined) {
      const escapedText = String(noteDimension.text).replace(/"/g, '\\"')
      attrs.push(`text="${escapedText}"`)
    }

    if (noteDimension.color !== undefined) {
      attrs.push(`color="${noteDimension.color}"`)
    }

    elementStrings.push(`<pcbnotedimension ${attrs.join(" ")} />`)
  }

  for (const courtyardOutline of courtyardOutlines) {
    const attrs = [
      `outline={${JSON.stringify(courtyardOutline.outline ?? [])}}`,
    ]
    if (courtyardOutline.layer !== undefined) {
      attrs.push(`layer="${courtyardOutline.layer}"`)
    }

    elementStrings.push(`<courtyardoutline ${attrs.join(" ")} />`)
  }

  for (const courtyardRect of courtyardRects) {
    const attrs = [
      `pcbX={${courtyardRect.center?.x ?? 0}}`,
      `pcbY={${courtyardRect.center?.y ?? 0}}`,
      `width={${courtyardRect.width ?? 0}}`,
      `height={${courtyardRect.height ?? 0}}`,
    ]
    if (courtyardRect.layer !== undefined) {
      attrs.push(`layer="${courtyardRect.layer}"`)
    }

    elementStrings.push(`<courtyardrect ${attrs.join(" ")} />`)
  }

  for (const courtyardCircle of courtyardCircles) {
    const attrs = [
      `pcbX={${courtyardCircle.center?.x ?? 0}}`,
      `pcbY={${courtyardCircle.center?.y ?? 0}}`,
      `radius={${courtyardCircle.radius ?? 0}}`,
    ]
    if (courtyardCircle.layer !== undefined) {
      attrs.push(`layer="${courtyardCircle.layer}"`)
    }

    elementStrings.push(`<courtyardcircle ${attrs.join(" ")} />`)
  }

  if (elementStrings.length === 0) {
    return null
  }

  return `
      <footprint>
        ${elementStrings.join("\n")}
      </footprint>
  `.trim()
}
