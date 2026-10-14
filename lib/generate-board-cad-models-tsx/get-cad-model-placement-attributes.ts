import type { CadComponent, PcbBoard } from "circuit-json"
import type { CadModelParentPlacement } from "./converter-types"
import { formatPointProp } from "./format-point-prop"
import { getCadModelOriginPosition } from "./get-cad-model-origin-position"
import { getCadModelPlacement } from "./get-cad-model-placement"

export function getCadModelPlacementAttributes({
  cadComponent,
  parentPlacement,
  pcbBoard,
}: {
  cadComponent: CadComponent
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}): string[] {
  const placement = getCadModelPlacement({
    cadComponent,
    parentPlacement,
    pcbBoard,
  })
  const attributes = [
    `positionOffset={${formatPointProp(placement.positionOffset)}}`,
    `rotationOffset={${formatPointProp(placement.ccwRotationOffsetDegrees)}}`,
  ]

  if (cadComponent.model_unit_to_mm_scale_factor !== undefined) {
    attributes.push(
      `modelUnitToMmScale={${cadComponent.model_unit_to_mm_scale_factor}}`,
    )
  }
  if (cadComponent.model_board_normal_direction !== undefined) {
    attributes.push(
      `modelBoardNormalDirection={${JSON.stringify(cadComponent.model_board_normal_direction)}}`,
    )
  }
  const modelOriginPosition = getCadModelOriginPosition(cadComponent)
  if (modelOriginPosition !== undefined) {
    attributes.push(
      `modelOriginPosition={${formatPointProp(modelOriginPosition)}}`,
    )
  }
  if (cadComponent.size !== undefined) {
    attributes.push(`size={${formatPointProp(cadComponent.size)}}`)
  }
  if (cadComponent.show_as_translucent_model === true) {
    attributes.push("showAsTranslucentModel")
  }

  return attributes
}
