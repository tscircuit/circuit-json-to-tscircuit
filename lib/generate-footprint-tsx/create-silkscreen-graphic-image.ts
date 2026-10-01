import type { PcbSilkscreenGraphicBRep } from "circuit-json"
import { getBrepRingsBounds } from "./get-brep-rings-bounds"
import { getBulgeArc } from "./get-bulge-arc"

interface SilkscreenGraphicImage {
  center: { x: number; y: number }
  dataUrl: string
  height: number
  width: number
}

type SilkscreenRing = PcbSilkscreenGraphicBRep["brep_shape"]["outer_ring"]

export const createSilkscreenGraphicImage = (
  graphic: PcbSilkscreenGraphicBRep,
): SilkscreenGraphicImage | null => {
  const rings = [
    graphic.brep_shape.outer_ring,
    ...(graphic.brep_shape.inner_rings ?? []).filter(isRenderableRing),
  ]
  if (!isRenderableRing(graphic.brep_shape.outer_ring)) return null

  const bounds = getBrepRingsBounds(rings)
  if (!bounds) return null

  const { maxX, maxY, minX, minY } = bounds
  const width = maxX - minX
  const height = maxY - minY

  if (width <= 0 || height <= 0) return null

  const pathData = rings
    .map((ring) => createRingPath({ maxY, minX, ring }))
    .join(" ")
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`,
    `<path d="${pathData}" fill="black" fill-rule="evenodd"/>`,
    "</svg>",
  ].join("")

  return {
    center: { x: (minX + maxX) / 2, y: (minY + maxY) / 2 },
    dataUrl: `data:image/svg+xml;base64,${btoa(svg)}`,
    height,
    width,
  }
}

const createRingPath = ({
  maxY,
  minX,
  ring,
}: {
  maxY: number
  minX: number
  ring: SilkscreenRing
}): string => {
  const firstVertex = ring.vertices[0]
  const commands = [
    `M${formatCoordinate(firstVertex.x - minX)} ${formatCoordinate(maxY - firstVertex.y)}`,
  ]

  for (let index = 0; index < ring.vertices.length; index++) {
    const start = ring.vertices[index]
    const end = ring.vertices[(index + 1) % ring.vertices.length]
    const arc = getBulgeArc({ end, start })
    const x = formatCoordinate(end.x - minX)
    const y = formatCoordinate(maxY - end.y)

    if (arc) {
      const radius = formatCoordinate(arc.radius)
      const largeArcFlag = Math.abs(start.bulge ?? 0) > 1 ? 1 : 0
      const sweepFlag = (start.bulge ?? 0) < 0 ? 1 : 0
      commands.push(
        `A${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${x} ${y}`,
      )
    } else if (index < ring.vertices.length - 1) {
      commands.push(`L${x} ${y}`)
    }
  }

  return commands.concat("Z").join(" ")
}

const isRenderableRing = (ring: SilkscreenRing): boolean =>
  ring.vertices.length >= 3 ||
  (ring.vertices.length >= 2 &&
    ring.vertices.some((vertex) => Math.abs(vertex.bulge ?? 0) > 1e-12))

const formatCoordinate = (value: number): string =>
  Number(value.toFixed(6)).toString()
