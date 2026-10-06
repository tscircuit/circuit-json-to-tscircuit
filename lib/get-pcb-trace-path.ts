import type { PcbPath } from "@tscircuit/props"
import type { LayerRef, PcbTrace } from "circuit-json"

export interface PcbTracePath {
  path: PcbPath
  startLayer: LayerRef
  width: number
}

/**
 * Circuit JSON route entries are points in the right-handed board-world PCB
 * frame, measured in millimetres (+X right, +Y top). The generated chip uses
 * the same unrotated board frame, so these point coordinates remain unchanged.
 */
export const getPcbTracePath = (
  pcbTrace: PcbTrace,
): PcbTracePath | undefined => {
  const firstWire = pcbTrace.route.find((point) => point.route_type === "wire")
  if (!firstWire) return
  const width = firstWire.width
  let currentLayer = firstWire.layer
  const path: PcbPath = []

  for (const point of pcbTrace.route) {
    if (point.route_type === "wire") {
      if (point.width !== width || point.layer !== currentLayer) return
      path.push({ x: point.x, y: point.y })
      continue
    }
    if (point.route_type === "via") {
      if (point.from_layer !== currentLayer) return
      path.push({
        x: point.x,
        y: point.y,
        via: true,
        fromLayer: point.from_layer,
        toLayer: point.to_layer,
      })
      currentLayer = point.to_layer
      continue
    }
    return
  }

  if (path.length < 2) return
  return { path, startLayer: firstWire.layer, width }
}
