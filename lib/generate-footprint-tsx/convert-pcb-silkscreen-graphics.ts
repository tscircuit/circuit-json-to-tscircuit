import type { PcbSilkscreenGraphic } from "circuit-json"
import type { FootprintElementConverter } from "./converter-types"

export const convertPcbSilkscreenGraphics: FootprintElementConverter = (
  circuitJson,
) =>
  circuitJson
    .filter(
      (element): element is PcbSilkscreenGraphic =>
        element.type === "pcb_silkscreen_graphic",
    )
    .map((graphic) => {
      const attributes = [
        `layer=${JSON.stringify(graphic.layer)}`,
        `brepShape={${JSON.stringify(graphic.brep_shape)}}`,
      ]

      if (graphic.image_asset !== undefined) {
        attributes.push(`imageAsset={${JSON.stringify(graphic.image_asset)}}`)
      }

      return `<pcbsilkscreengraphic ${attributes.join(" ")} />`
    })
