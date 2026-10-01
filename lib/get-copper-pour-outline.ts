import type { PcbCopperPour, Point } from "circuit-json"
import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"
import { getBrepCopperPourOutline } from "./get-brep-copper-pour-outline"

export function getCopperPourOutline(pour: PcbCopperPour): Point[] | undefined {
  if (pour.shape === "polygon") return pour.points
  if (pour.shape === "brep") {
    return getBrepCopperPourOutline(pour.brep_shape)
  }

  const halfWidth = pour.width / 2
  const halfHeight = pour.height / 2
  const pourToBoardTransform = compose(
    translate(pour.center.x, pour.center.y),
    rotateDEG(pour.rotation ?? 0),
  )

  return [
    { x: -halfWidth, y: -halfHeight },
    { x: halfWidth, y: -halfHeight },
    { x: halfWidth, y: halfHeight },
    { x: -halfWidth, y: halfHeight },
  ].map((point) => applyToPoint(pourToBoardTransform, point))
}
