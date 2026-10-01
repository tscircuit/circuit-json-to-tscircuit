import type { PcbNoteDimension, Point } from "circuit-json"
import { escapeJsxText } from "./footprint-tsx-attribute-formatters/escape-jsx-text"

interface OffsetGeometry {
  shiftedFrom: Point
  shiftedTo: Point
  extensionRoutes: [Point[], Point[]]
}

export const convertPcbNoteDimension = (
  dimension: PcbNoteDimension,
): string[] => {
  const from = dimension.from ?? { x: 0, y: 0 }
  const to = dimension.to ?? { x: 0, y: 0 }
  const legacyOffset =
    "offset" in dimension && typeof dimension.offset === "number"
      ? dimension.offset
      : undefined
  const offsetDistance = dimension.offset_distance ?? legacyOffset
  const arrowSize = dimension.arrow_size ?? 1
  const offsetGeometry = getOffsetGeometry({
    arrowSize,
    from,
    offsetDirection: dimension.offset_direction,
    offsetDistance,
    to,
  })
  const renderedFrom = offsetGeometry?.shiftedFrom ?? from
  const renderedTo = offsetGeometry?.shiftedTo ?? to
  const attrs = [
    `from={{ x: ${renderedFrom.x}, y: ${renderedFrom.y} }}`,
    `to={{ x: ${renderedTo.x}, y: ${renderedTo.y} }}`,
    `font="${dimension.font ?? "tscircuit2024"}"`,
    `fontSize={${dimension.font_size ?? 0}}`,
  ]

  if (dimension.arrow_size !== undefined) {
    attrs.push(`arrowSize={${dimension.arrow_size}}`)
  }
  if (offsetDistance !== undefined && !offsetGeometry) {
    attrs.push(`offset={${offsetDistance}}`)
  }
  if (dimension.text !== undefined) {
    attrs.push(`text="${escapeJsxText(dimension.text)}"`)
  }
  if (dimension.color !== undefined) attrs.push(`color="${dimension.color}"`)
  if (dimension.layer === "bottom") attrs.push(`layer="bottom"`)

  const dimensionTsx = `<pcbnotedimension ${attrs.join(" ")} />`
  if (!offsetGeometry) return [dimensionTsx]

  const pathAttrs = [
    `strokeWidth={${arrowSize / 5}}`,
    dimension.color === undefined ? "" : `color="${dimension.color}"`,
    dimension.layer === "bottom" ? 'layer="bottom"' : "",
  ]
    .filter(Boolean)
    .join(" ")
  const extensionPathTsx = offsetGeometry.extensionRoutes.map(
    (route) => `<pcbnotepath route={${JSON.stringify(route)}} ${pathAttrs} />`,
  )

  return [...extensionPathTsx, dimensionTsx]
}

const getOffsetGeometry = ({
  arrowSize,
  from,
  offsetDirection,
  offsetDistance,
  to,
}: {
  arrowSize: number
  from: Point
  offsetDirection?: Point
  offsetDistance?: number
  to: Point
}): OffsetGeometry | undefined => {
  if (offsetDistance === undefined || offsetDirection === undefined) return
  const directionLength = Math.hypot(offsetDirection.x, offsetDirection.y)
  if (directionLength <= Number.EPSILON) return

  const normalizedOffsetDirection = {
    x: offsetDirection.x / directionLength,
    y: offsetDirection.y / directionLength,
  }
  const offsetVector = {
    x: normalizedOffsetDirection.x * offsetDistance,
    y: normalizedOffsetDirection.y * offsetDistance,
  }
  const extensionVector = {
    x: normalizedOffsetDirection.x * (offsetDistance + arrowSize),
    y: normalizedOffsetDirection.y * (offsetDistance + arrowSize),
  }
  const shiftPoint = (point: Point, vector: Point): Point => ({
    x: point.x + vector.x,
    y: point.y + vector.y,
  })

  return {
    shiftedFrom: shiftPoint(from, offsetVector),
    shiftedTo: shiftPoint(to, offsetVector),
    extensionRoutes: [
      [from, shiftPoint(from, extensionVector)],
      [to, shiftPoint(to, extensionVector)],
    ],
  }
}
