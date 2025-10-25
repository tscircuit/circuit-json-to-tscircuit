import { mmStr } from "@tscircuit/mm"
import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"

export const generateFootprintTsx = (
  circuitJson: AnyCircuitElement[],
): string => {
  const holes = su(circuitJson).pcb_hole.list()
  const platedHoles = su(circuitJson).pcb_plated_hole.list()
  const smtPads = su(circuitJson).pcb_smtpad.list()
  const silkscreenPaths = su(circuitJson).pcb_silkscreen_path.list()
  const fabricationNotePaths = su(circuitJson).pcb_fabrication_note_path.list()
  const silkscreenTexts = su(circuitJson).pcb_silkscreen_text.list()
  const pcbCutouts = su(circuitJson).pcb_cutout.list()
  const noteTexts = su(circuitJson).pcb_note_text.list()
  const noteRects = su(circuitJson).pcb_note_rect.list()
  const notePaths = su(circuitJson).pcb_note_path.list()
  const noteLines = su(circuitJson).pcb_note_line.list()
  const noteDimensions = su(circuitJson).pcb_note_dimension.list()

  const elementStrings: string[] = []

  for (const hole of holes) {
    if (hole.hole_shape === "circle") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" diameter="${mmStr(hole.hole_diameter)}" />`,
      )
    } else if (hole.hole_shape === "oval") {
      console.warn("Unhandled oval hole in conversion (needs implementation)")
    }
  }

  for (const platedHole of platedHoles) {
    if (platedHole.shape === "oval" || platedHole.shape === "pill") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" outerHeight="${mmStr(platedHole.outer_height)}" outerWidth="${mmStr(platedHole.outer_width)}" holeHeight="${mmStr(platedHole.hole_height)}" holeWidth="${mmStr(platedHole.hole_width)}" height="${mmStr(platedHole.hole_height)}" shape="${platedHole.shape}" />`,
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
    }
  }

  for (const silkscreenPath of silkscreenPaths) {
    elementStrings.push(
      `<silkscreenpath route={${JSON.stringify(silkscreenPath.route)}} />`,
    )
  }

  // Map fabrication note paths to silkscreen paths in footprints
  for (const fabPath of fabricationNotePaths) {
    elementStrings.push(
      `<silkscreenpath route={${JSON.stringify(fabPath.route)}} />`,
    )
  }

  // Add silkscreen text elements (use pcbX/pcbY instead of anchorPosition)
  for (const stext of silkscreenTexts) {
    const pcbX = stext.anchor_position?.x ?? 0
    const pcbY = stext.anchor_position?.y ?? 0
    const anchorAlignment = stext.anchor_alignment
    const fontSize = stext.font_size
    // Escape quotes in text content for JSX attribute
    const rawText = String(stext.text ?? "")
    const escapedText = rawText.replace(/"/g, '\\"')

    elementStrings.push(
      `<silkscreentext pcbX={${pcbX}} pcbY={${pcbY}} anchorAlignment="${anchorAlignment}" fontSize={${fontSize}} text="${escapedText}" />`,
    )
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

  return `
      <footprint>
        ${elementStrings.join("\n")}
      </footprint>
  `.trim()
}
