import type { AnyCircuitElement } from "circuit-json"
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
import { convertVias } from "./generate-footprint-tsx/convert-vias"
import type { FootprintElementConverter } from "./generate-footprint-tsx/converter-types"

export const generateFootprintTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const converters: FootprintElementConverter[] = [
    convertHoles,
    convertPlatedHoles,
    convertSmtPads,
    convertVias,
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

  return `
      <footprint>
        ${elementStrings.join("\n")}
      </footprint>
  `.trim()
}
