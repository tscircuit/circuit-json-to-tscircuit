import { su } from "@tscircuit/soup-util"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { parseSync, stringify } from "svgson"
import type { FootprintElementConverter } from "./converter-types"

export const convertSilkscreenGraphics: FootprintElementConverter = (
  circuitJson,
) => {
  return su(circuitJson)
    .pcb_silkscreen_graphic.list()
    .map((graphic) => {
      const vertices = graphic.brep_shape.outer_ring.vertices
      let minX = Infinity
      let maxX = -Infinity
      let minY = Infinity
      let maxY = -Infinity
      for (const vertex of vertices) {
        minX = Math.min(minX, vertex.x)
        maxX = Math.max(maxX, vertex.x)
        minY = Math.min(minY, vertex.y)
        maxY = Math.max(maxY, vertex.y)
      }
      const width = maxX - minX
      const height = maxY - minY
      if (!(width > 0 && height > 0)) {
        throw new Error(
          `Silkscreen graphic ${graphic.pcb_silkscreen_graphic_id} has no area`,
        )
      }
      const svg = parseSync(
        convertCircuitJsonToPcbSvg([graphic], {
          width,
          height,
          drawPaddingOutsideBoard: false,
          viewport: { minX, minY, maxX, maxY },
        }),
      )
      svg.attributes.viewBox = `0 0 ${width} ${height}`
      const imageUrl = `data:image/svg+xml,${encodeURIComponent(stringify(svg))}`
      return `<silkscreengraphic pcbX={${(minX + maxX) / 2}} pcbY={${(minY + maxY) / 2}} width={${width}} height={${height}} layer="${graphic.layer}" imageUrl="${imageUrl}" />`
    })
}
