import type { PcbBoard, PcbComponent } from "circuit-json"
import { applyToPoint, inverse, translate } from "transformation-matrix"

export interface PcbComponentRenderPlacement {
  cadModelParentCenter: { x: number; y: number }
  componentPosition: { x: number; y: number }
}

export const getPcbComponentRenderPlacement = ({
  pcbBoard,
  pcbComponent,
}: {
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): PcbComponentRenderPlacement => {
  const componentPosition = applyToPoint(
    inverse(translate(pcbBoard.center.x, pcbBoard.center.y)),
    pcbComponent.center,
  )
  // Core anchors cadModel.positionOffset at the chip's pre-layout footprint
  // origin, not at its pad bounds. CAD offsets use absolute board XY axes;
  // the chip's board-local position becomes pcbComponent.center after rendering.
  return {
    cadModelParentCenter: pcbComponent.center,
    componentPosition,
  }
}
