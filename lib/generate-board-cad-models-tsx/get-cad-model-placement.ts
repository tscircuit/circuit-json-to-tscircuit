import type { CadComponent, PcbBoard } from "circuit-json"
import type {
  CadModelParentPlacement,
  CadModelPlacement,
} from "./converter-types"

export function getCadModelPlacement({
  cadComponent,
  parentPlacement,
  pcbBoard,
}: {
  cadComponent: CadComponent
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}): CadModelPlacement {
  const cadModelCcwRotationDegrees = cadComponent.rotation ?? {
    x: 0,
    y: 0,
    z: 0,
  }
  const boardSurfaceZ = pcbBoard.thickness / 2
  let positionOffsetZ = cadComponent.position.z - boardSurfaceZ
  let ccwRotationOffsetDegrees = {
    x: cadModelCcwRotationDegrees.x,
    y: cadModelCcwRotationDegrees.y,
    z: cadModelCcwRotationDegrees.z - parentPlacement.ccwRotationDegrees,
  }

  if (parentPlacement.layer === "bottom") {
    positionOffsetZ = cadComponent.position.z + boardSurfaceZ
    ccwRotationOffsetDegrees = {
      x: cadModelCcwRotationDegrees.x,
      y: cadModelCcwRotationDegrees.y - 180,
      z: cadModelCcwRotationDegrees.z + parentPlacement.ccwRotationDegrees,
    }
  }

  return {
    positionOffset: {
      x: cadComponent.position.x - parentPlacement.center.x,
      y: cadComponent.position.y - parentPlacement.center.y,
      z: positionOffsetZ,
    },
    ccwRotationOffsetDegrees,
  }
}
