import type { CadComponent, PcbBoard } from "circuit-json"
import type { CadModelParentPlacement } from "./converter-types"
import { formatPointProp } from "./format-point-prop"
import { getCadModelOriginPosition } from "./get-cad-model-origin-position"
import { getCadModelPlacement } from "./get-cad-model-placement"

export function generateJscadCadModelPropTsx({
  cadComponent,
  parentPlacement,
  pcbBoard,
}: {
  cadComponent: CadComponent
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}): string {
  const placement = getCadModelPlacement({
    cadComponent,
    parentPlacement,
    pcbBoard,
  })
  const properties = [
    `jscad: ${JSON.stringify(cadComponent.model_jscad)}`,
    `positionOffset: ${formatPointProp(placement.positionOffset)}`,
    `rotationOffset: ${formatPointProp(placement.ccwRotationOffsetDegrees)}`,
  ]

  if (cadComponent.model_unit_to_mm_scale_factor !== undefined) {
    properties.push(
      `modelUnitToMmScale: ${cadComponent.model_unit_to_mm_scale_factor}`,
    )
  }
  if (cadComponent.model_board_normal_direction !== undefined) {
    properties.push(
      `modelBoardNormalDirection: ${JSON.stringify(cadComponent.model_board_normal_direction)}`,
    )
  }
  const modelOriginPosition = getCadModelOriginPosition(cadComponent)
  if (modelOriginPosition !== undefined) {
    properties.push(
      `modelOriginPosition: ${formatPointProp(modelOriginPosition)}`,
    )
  }
  if (cadComponent.size !== undefined) {
    properties.push(`size: ${formatPointProp(cadComponent.size)}`)
  }
  if (cadComponent.show_as_translucent_model === true) {
    properties.push("showAsTranslucentModel: true")
  }

  return `{ ${properties.join(", ")} }`
}
