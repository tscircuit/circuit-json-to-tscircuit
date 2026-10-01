import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertSilkscreenGraphics: FootprintElementConverter = (
  circuitJson,
) => {
  return su(circuitJson)
    .pcb_silkscreen_graphic.list()
    .map((graphic) => {
      const attrs = [
        `brepShape={${JSON.stringify(graphic.brep_shape)}}`,
        `layer="${graphic.layer}"`,
      ]
      if (graphic.image_asset !== undefined) {
        attrs.push(`imageAsset={${JSON.stringify(graphic.image_asset)}}`)
      }
      return `<pcbsilkscreengraphic ${attrs.join(" ")} />`
    })
}
