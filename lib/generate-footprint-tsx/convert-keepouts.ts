import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatMm } from "./footprint-tsx-attribute-formatters"

export const convertKeepouts: FootprintElementConverter = (circuitJson) => {
  const pcbKeepouts = su(circuitJson).pcb_keepout.list()
  const elementStrings: string[] = []

  for (const keepout of pcbKeepouts) {
    if (keepout.shape === "rect") {
      elementStrings.push(
        `<keepout shape="rect" pcbX="${formatMm(keepout.center.x)}" pcbY="${formatMm(keepout.center.y)}" width="${formatMm(keepout.width)}" height="${formatMm(keepout.height)}" />`,
      )
    } else if (keepout.shape === "circle") {
      elementStrings.push(
        `<keepout shape="circle" pcbX="${formatMm(keepout.center.x)}" pcbY="${formatMm(keepout.center.y)}" radius="${formatMm(keepout.radius)}" />`,
      )
    } else {
      console.warn(`Unhandled pcb_keepout shape: ${(keepout as any).shape}`)
    }
  }

  return elementStrings
}
