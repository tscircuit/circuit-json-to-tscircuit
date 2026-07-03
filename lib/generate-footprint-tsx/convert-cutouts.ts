import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatMm } from "./footprint-tsx-attribute-formatters"

export const convertCutouts: FootprintElementConverter = (circuitJson) => {
  const pcbCutouts = su(circuitJson).pcb_cutout.list()
  const elementStrings: string[] = []

  for (const cutout of pcbCutouts) {
    if (cutout.shape === "rect") {
      const rotation =
        cutout.rotation !== undefined
          ? ` pcbRotation="${formatMm(cutout.rotation)}"`
          : ""

      elementStrings.push(
        `<cutout shape="rect" pcbX="${formatMm(cutout.center.x)}" pcbY="${formatMm(cutout.center.y)}" width="${formatMm(cutout.width)}" height="${formatMm(cutout.height)}"${rotation} />`,
      )
    } else if (cutout.shape === "circle") {
      elementStrings.push(
        `<cutout shape="circle" pcbX="${formatMm(cutout.center.x)}" pcbY="${formatMm(cutout.center.y)}" radius="${formatMm(cutout.radius)}" />`,
      )
    } else if (cutout.shape === "polygon") {
      elementStrings.push(
        `<cutout shape="polygon" points={${JSON.stringify(cutout.points)}} />`,
      )
    } else {
      console.warn(`Unhandled pcb_cutout shape: ${(cutout as any).shape}`)
    }
  }

  return elementStrings
}
