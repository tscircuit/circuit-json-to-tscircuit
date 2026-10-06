import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatMm } from "./footprint-tsx-attribute-formatters/format-mm"
import { getFilledCircleFromKeepoutOutline } from "./get-filled-circle-from-keepout-outline"

const formatLayersAttribute = (layers: string[]): string =>
  ` layers={${JSON.stringify(layers)}}`

export const convertKeepouts: FootprintElementConverter = (circuitJson) => {
  const pcbKeepouts = su(circuitJson).pcb_keepout.list()
  const elementStrings: string[] = []

  for (const keepout of pcbKeepouts) {
    if (keepout.shape === "rect") {
      elementStrings.push(
        `<keepout shape="rect" pcbX="${formatMm(keepout.center.x)}" pcbY="${formatMm(keepout.center.y)}" width="${formatMm(keepout.width)}" height="${formatMm(keepout.height)}"${formatLayersAttribute(keepout.layers)} />`,
      )
    } else if (keepout.shape === "circle") {
      elementStrings.push(
        `<keepout shape="circle" pcbX="${formatMm(keepout.center.x)}" pcbY="${formatMm(keepout.center.y)}" radius="${formatMm(keepout.radius)}"${formatLayersAttribute(keepout.layers)} />`,
      )
    } else if (keepout.shape === "outline") {
      const circle = getFilledCircleFromKeepoutOutline(keepout)
      if (!circle) continue
      elementStrings.push(
        `<keepout shape="circle" pcbX="${formatMm(circle.center.x)}" pcbY="${formatMm(circle.center.y)}" radius="${formatMm(circle.radius)}"${formatLayersAttribute(keepout.layers)} />`,
      )
    }
  }

  return elementStrings
}
