import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { createSilkscreenGraphicImage } from "./create-silkscreen-graphic-image"

export const convertSilkscreenGraphics: FootprintElementConverter = (
  circuitJson,
) => {
  return su(circuitJson)
    .pcb_silkscreen_graphic.list()
    .flatMap((graphic) => {
      const image = createSilkscreenGraphicImage(graphic)
      if (!image) return []

      return [
        `<silkscreengraphic imageUrl=${JSON.stringify(image.dataUrl)} pcbX={${image.center.x}} pcbY={${image.center.y}} width={${image.width}} height={${image.height}} layer=${JSON.stringify(graphic.layer)} />`,
      ]
    })
}
