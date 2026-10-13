import type { CadComponent, PcbBoard } from "circuit-json"
import type { CadModelParentPlacement } from "./converter-types"
import { formatPointProp } from "./format-point-prop"
import { getCadModelPlacement } from "./get-cad-model-placement"
import { getJscadOperationInBaseModelFrame } from "./get-jscad-operation-in-base-model-frame"

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

  const jscad = shapes.length === 1 ? shapes[0] : { type: "union", shapes }
  const properties = [
    `jscad: ${JSON.stringify(jscad)}`,
    `positionOffset: ${formatPointProp(basePlacement.positionOffset)}`,
    `rotationOffset: ${formatPointProp(basePlacement.ccwRotationOffsetDegrees)}`,
    `modelOriginPosition: ${formatPointProp({ x: 0, y: 0, z: 0 })}`,
    "modelUnitToMmScale: 1",
    'modelBoardNormalDirection: "z+"',
  ]
  if (
    cadComponents.every(
      (cadComponent) => cadComponent.show_as_translucent_model,
    )
  ) {
    properties.push("showAsTranslucentModel: true")
  }

  return `{ ${properties.join(", ")} }`
}
