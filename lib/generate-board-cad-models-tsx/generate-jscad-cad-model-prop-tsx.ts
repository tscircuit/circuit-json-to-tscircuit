import type { CadComponent, PcbBoard } from "circuit-json"
import type { JscadOperation } from "jscad-planner"
import type { CadModelParentPlacement } from "./converter-types"
import { formatPointProp } from "./format-point-prop"
import { getCadModelOriginPosition } from "./get-cad-model-origin-position"
import { getCadModelPlacement } from "./get-cad-model-placement"
import { getJscadOperationInBaseModelFrame } from "./get-jscad-operation-in-base-model-frame"
import { packJscadOperations } from "./pack-jscad-operations"

function generateSingleJscadCadModelPropTsx({
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

  const modelOriginPosition = getCadModelOriginPosition(cadComponent)
  if (modelOriginPosition !== undefined) {
    properties.push(
      `modelOriginPosition: ${formatPointProp(modelOriginPosition)}`,
    )
  }
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
  if (cadComponent.size !== undefined) {
    properties.push(`size: ${formatPointProp(cadComponent.size)}`)
  }

  return `{ ${properties.join(", ")} }`
}

export function generateJscadCadModelPropTsx({
  cadComponents,
  parentPlacement,
  pcbBoard,
}: {
  cadComponents: CadComponent[]
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}): string | undefined {
  const baseCadComponent = cadComponents[0]
  if (!baseCadComponent || baseCadComponent.model_jscad === undefined) {
    return undefined
  }
  if (cadComponents.length === 1) {
    return generateSingleJscadCadModelPropTsx({
      cadComponent: baseCadComponent,
      parentPlacement,
      pcbBoard,
    })
  }

  const basePlacement = getCadModelPlacement({
    cadComponent: baseCadComponent,
    parentPlacement,
    pcbBoard,
  })
  const shapes = cadComponents.flatMap((cadComponent) => {
    const placement = getCadModelPlacement({
      cadComponent,
      parentPlacement,
      pcbBoard,
    })
    const operation = getJscadOperationInBaseModelFrame({
      baseCadComponent,
      basePositionOffset: basePlacement.positionOffset,
      cadComponent,
      positionOffset: placement.positionOffset,
    })
    return operation ? [operation] : []
  })
  if (shapes.length === 0) return undefined

  const packedJscadOperations = packJscadOperations(shapes)
  const jscad: JscadOperation = packedJscadOperations?.jscad ?? {
    type: "union",
    shapes,
  }
  const properties = [
    `jscad: ${JSON.stringify(jscad)}`,
    `positionOffset: ${formatPointProp(basePlacement.positionOffset)}`,
    `rotationOffset: ${formatPointProp(basePlacement.ccwRotationOffsetDegrees)}`,
    `modelOriginPosition: ${formatPointProp({ x: 0, y: 0, z: 0 })}`,
    "modelUnitToMmScale: 1",
    'modelBoardNormalDirection: "z+"',
  ]
  if (packedJscadOperations?.size !== undefined) {
    properties.push(`size: ${formatPointProp(packedJscadOperations.size)}`)
  }

  return `{ ${properties.join(", ")} }`
}
