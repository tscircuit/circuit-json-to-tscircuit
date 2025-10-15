import { mmStr } from "@tscircuit/mm"
import type {
  AnyCircuitElement,
  PcbCutout,
  PcbNoteLine,
  PcbNotePath,
  PcbNoteRect,
} from "circuit-json"
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
  const pcbNoteRects = circuitJson.filter(
    (element): element is PcbNoteRect => element.type === "pcb_note_rect",
  )
  const pcbNotePaths = circuitJson.filter(
    (element): element is PcbNotePath => element.type === "pcb_note_path",
  )
  const pcbNoteLines = circuitJson.filter(
    (element): element is PcbNoteLine => element.type === "pcb_note_line",
  )
  const pcbCutouts = circuitJson.filter(
    (element): element is PcbCutout => element.type === "pcb_cutout",
  )

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

  for (const noteRect of pcbNoteRects) {
    const attributes = [
      `pcbX="${mmStr(noteRect.center.x)}"`,
      `pcbY="${mmStr(noteRect.center.y)}"`,
      `width="${mmStr(noteRect.width)}"`,
      `height="${mmStr(noteRect.height)}"`,
      `strokeWidth="${mmStr(noteRect.stroke_width ?? "0.1mm")}"`,
    ]

    if (noteRect.is_filled !== undefined) {
      attributes.push(`isFilled={${noteRect.is_filled}}`)
    }

    if (noteRect.has_stroke !== undefined) {
      attributes.push(`hasStroke={${noteRect.has_stroke}}`)
    }

    if (noteRect.is_stroke_dashed !== undefined) {
      attributes.push(`isStrokeDashed={${noteRect.is_stroke_dashed}}`)
    }

    if (noteRect.color !== undefined) {
      attributes.push(`color="${noteRect.color}"`)
    }

    elementStrings.push(`<pcbnoterect ${attributes.join(" ")} />`)
  }

  for (const notePath of pcbNotePaths) {
    const attributes = [
      `route={${JSON.stringify(notePath.route)}}`,
      `strokeWidth="${mmStr(notePath.stroke_width ?? "0.1mm")}"`,
    ]

    if (notePath.color !== undefined) {
      attributes.push(`color="${notePath.color}"`)
    }

    elementStrings.push(`<pcbnotepath ${attributes.join(" ")} />`)
  }

  for (const noteLine of pcbNoteLines) {
    const attributes = [
      `x1="${mmStr(noteLine.x1)}"`,
      `y1="${mmStr(noteLine.y1)}"`,
      `x2="${mmStr(noteLine.x2)}"`,
      `y2="${mmStr(noteLine.y2)}"`,
      `strokeWidth="${mmStr(noteLine.stroke_width ?? "0.1mm")}"`,
    ]

    if (noteLine.color !== undefined) {
      attributes.push(`color="${noteLine.color}"`)
    }

    if (noteLine.is_dashed !== undefined) {
      attributes.push(`isDashed={${noteLine.is_dashed}}`)
    }

    elementStrings.push(`<pcbnoteline ${attributes.join(" ")} />`)
  }

  for (const cutout of pcbCutouts) {
    const attributes = [`shape="${cutout.shape}"`]

    const maybeRotation =
      "rotation" in cutout && cutout.rotation !== undefined
        ? cutout.rotation
        : undefined

    if (cutout.shape === "rect") {
      attributes.push(`pcbX="${mmStr(cutout.center.x)}"`)
      attributes.push(`pcbY="${mmStr(cutout.center.y)}"`)
      attributes.push(`width="${mmStr(cutout.width)}"`)
      attributes.push(`height="${mmStr(cutout.height)}"`)
    }

    if (cutout.shape === "circle") {
      attributes.push(`pcbX="${mmStr(cutout.center.x)}"`)
      attributes.push(`pcbY="${mmStr(cutout.center.y)}"`)
      attributes.push(`radius="${mmStr(cutout.radius)}"`)
    }

    if (cutout.shape === "polygon") {
      const formattedPoints = cutout.points.map((point) => ({
        ...point,
        x: typeof point.x === "string" ? parseFloat(point.x) : point.x,
        y: typeof point.y === "string" ? parseFloat(point.y) : point.y,
      }))
      attributes.push(`points={${JSON.stringify(formattedPoints)}}`)
    }

    if (maybeRotation !== undefined) {
      attributes.push(`pcbRotation={${maybeRotation}}`)
    }

    elementStrings.push(`<pcbcutout ${attributes.join(" ")} />`)
  }

  return `
      <footprint>
        ${elementStrings.join("\n")}
      </footprint>
  `.trim()
}
