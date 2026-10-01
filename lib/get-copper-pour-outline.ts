import type { PcbCopperPour, Point } from "circuit-json"
import { getBrepCopperPourOutline } from "./get-brep-copper-pour-outline"

export function getCopperPourOutline(pour: PcbCopperPour): Point[] | undefined {
  if (pour.shape === "polygon") return pour.points
  if (pour.shape === "brep") {
    return getBrepCopperPourOutline(pour.brep_shape)
  }

  const halfWidth = pour.width / 2
  const halfHeight = pour.height / 2
  const ccwRotationRadians = ((pour.rotation ?? 0) * Math.PI) / 180
  const cosine = Math.cos(ccwRotationRadians)
  const sine = Math.sin(ccwRotationRadians)

  return [
    { x: -halfWidth, y: -halfHeight },
    { x: halfWidth, y: -halfHeight },
    { x: halfWidth, y: halfHeight },
    { x: -halfWidth, y: halfHeight },
  ].map(({ x, y }) => ({
    x: pour.center.x + x * cosine - y * sine,
    y: pour.center.y + x * sine + y * cosine,
  }))
}
