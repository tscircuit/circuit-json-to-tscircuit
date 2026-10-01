import { su } from "@tscircuit/soup-util"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import type { FootprintElementConverter } from "./converter-types"

export const convertSilkscreenGraphics: FootprintElementConverter = (
  circuitJson,
) => {
  return su(circuitJson)
    .pcb_silkscreen_graphic.list()
    .map((graphic) => {
      const vertices = graphic.brep_shape.outer_ring.vertices
      const minX = Math.min(...vertices.map((vertex) => vertex.x))
      const maxX = Math.max(...vertices.map((vertex) => vertex.x))
      const minY = Math.min(...vertices.map((vertex) => vertex.y))
      const maxY = Math.max(...vertices.map((vertex) => vertex.y))
      const width = maxX - minX
      const height = maxY - minY
      if (!(width > 0 && height > 0)) {
        throw new Error(
          `Silkscreen graphic ${graphic.pcb_silkscreen_graphic_id} has no area`,
        )
      }
      const svg = convertCircuitJsonToPcbSvg([graphic], {
        width,
        height,
        drawPaddingOutsideBoard: false,
        viewport: { minX, minY, maxX, maxY },
      }).replace("<svg ", `<svg viewBox="0 0 ${width} ${height}" `)
      const imageUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`
      return `<silkscreengraphic pcbX={${(minX + maxX) / 2}} pcbY={${(minY + maxY) / 2}} width={${width}} height={${height}} layer="${graphic.layer}" imageUrl="${imageUrl}" />`
    })
}
