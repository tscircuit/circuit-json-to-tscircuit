import type { AnyCircuitElement } from "circuit-json"
import type { FootprintElementConverter } from "./generate-footprint-tsx/converter-types"
import { convertCopperText } from "./generate-footprint-tsx/convert-copper-text"
import { convertCourtyard } from "./generate-footprint-tsx/convert-courtyard"
import { convertCutouts } from "./generate-footprint-tsx/convert-cutouts"
import { convertFabrication } from "./generate-footprint-tsx/convert-fabrication"
import { convertHoles } from "./generate-footprint-tsx/convert-holes"
import { convertKeepouts } from "./generate-footprint-tsx/convert-keepouts"
import { convertNotes } from "./generate-footprint-tsx/convert-notes"
import { convertPlatedHoles } from "./generate-footprint-tsx/convert-plated-holes"
import { convertSilkscreen } from "./generate-footprint-tsx/convert-silkscreen"
import { convertSilkscreenText } from "./generate-footprint-tsx/convert-silkscreen-text"
import { convertSmtPads } from "./generate-footprint-tsx/convert-smt-pads"

export const generateFootprintTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const converters: FootprintElementConverter[] = [
    convertHoles,
    convertPlatedHoles,
    convertSmtPads,
    convertSilkscreen,
    convertFabrication,
    convertSilkscreenText,
    convertCopperText,
    convertKeepouts,
    convertCutouts,
    convertNotes,
    convertCourtyard,
  ]
  const elementStrings = converters.flatMap((convert) => convert(circuitJson))

  if (elementStrings.length === 0) {
    return null
  }

  // Add courtyard rect elements
  const courtyardRects = circuitJson.filter(
    (el: any) => el.type === "pcb_courtyard_rect",
  )
  for (const courtyard of courtyardRects) {
    const cy = courtyard as any
    const cx = cy.center?.x ?? 0
    const cy_ = cy.center?.y ?? 0
    const width = cy.width ?? 0
    const height = cy.height ?? 0
    const layer = cy.layer ?? "top"

    elementStrings.push(
      `<courtyardrect pcbX="${mmStr(cx)}" pcbY="${mmStr(cy_)}" width="${mmStr(width)}" height="${mmStr(height)}" layer="${layer}" />`,
    )
  }

  return `
      <footprint>
        ${elementStrings.join("\n")}
      </footprint>
  `.trim()
}
