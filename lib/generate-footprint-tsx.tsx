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

  // Add pcb_cutout elements
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
        `<pcbcutout shape="rect" pcbX="${mmStr(pcbX)}" pcbY="${mmStr(pcbY)}" width="${width}" height="${height}"${rotation} />`,
      )
    } else if (cutout.shape === "circle") {
      const pcbX = cutout.center.x
      const pcbY = cutout.center.y
      const radius = mmStr(cutout.radius)

      elementStrings.push(
        `<pcbcutout shape="circle" pcbX="${mmStr(pcbX)}" pcbY="${mmStr(pcbY)}" radius="${radius}" />`,
      )
    } else if (cutout.shape === "polygon") {
      const pointsJson = JSON.stringify(cutout.points)

      elementStrings.push(
        `<pcbcutout shape="polygon" points={${pointsJson}} />`,
      )
    } else {
      console.warn(`Unhandled pcb_cutout shape: ${(cutout as any).shape}`)
    }
  }

  return `
      <footprint>
        ${elementStrings.join("\n")}
      </footprint>
  `.trim()
}
