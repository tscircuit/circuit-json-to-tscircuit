import type { CadComponent, PcbBoard, PcbComponent } from "circuit-json"
import { formatJsxStringAttribute } from "../format-jsx-string-attribute"

interface CadModelPlacement {
  positionOffset: { x: number; y: number; z: number }
  rotationOffset: { x: number; y: number; z: number }
}

const getCadModelPlacement = ({
  cadComponent,
  pcbBoard,
  pcbComponent,
}: {
  cadComponent: CadComponent
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): CadModelPlacement => {
  const layer = cadComponent.layer ?? pcbComponent.layer
  const rotation = cadComponent.rotation ?? { x: 0, y: 0, z: 0 }
  const boardSurfaceZ = pcbBoard.thickness / 2

  return {
    positionOffset: {
      x: cadComponent.position.x - pcbComponent.center.x,
      y: cadComponent.position.y - pcbComponent.center.y,
      z:
        layer === "bottom"
          ? cadComponent.position.z + boardSurfaceZ
          : cadComponent.position.z - boardSurfaceZ,
    },
    rotationOffset:
      layer === "bottom"
        ? {
            x: rotation.x,
            y: rotation.y - 180,
            z: -rotation.z - pcbComponent.rotation,
          }
        : {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z - pcbComponent.rotation,
          },
  }
}

const formatPointProp = (point: { x: number; y: number; z: number }): string =>
  `{ x: ${point.x}, y: ${point.y}, z: ${point.z} }`

const getCadModelSourceProps = (
  cadComponent: CadComponent,
): string[] | undefined => {
  if (cadComponent.model_step_url) {
    const modelUrl = formatJsxStringAttribute(cadComponent.model_step_url)
    return [`modelUrl=${modelUrl}`, `stepUrl=${modelUrl}`]
  }
  if (cadComponent.model_glb_url) {
    return [`modelUrl=${formatJsxStringAttribute(cadComponent.model_glb_url)}`]
  }
  return undefined
}

const generateCadModelElementTsx = ({
  cadComponent,
  pcbBoard,
  pcbComponent,
}: {
  cadComponent: CadComponent
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): string | undefined => {
  const sourceProps = getCadModelSourceProps(cadComponent)
  if (!sourceProps) return undefined
  const placement = getCadModelPlacement({
    cadComponent,
    pcbBoard,
    pcbComponent,
  })
  const modelProps = [
    ...sourceProps,
    `positionOffset={${formatPointProp(placement.positionOffset)}}`,
    `rotationOffset={${formatPointProp(placement.rotationOffset)}}`,
  ]

  if (cadComponent.model_unit_to_mm_scale_factor !== undefined) {
    modelProps.push(
      `modelUnitToMmScale={${cadComponent.model_unit_to_mm_scale_factor}}`,
    )
  }
  if (cadComponent.model_board_normal_direction !== undefined) {
    modelProps.push(
      `modelBoardNormalDirection=${formatJsxStringAttribute(cadComponent.model_board_normal_direction)}`,
    )
  }
  if (cadComponent.model_origin_position !== undefined) {
    modelProps.push(
      `modelOriginPosition={${formatPointProp(cadComponent.model_origin_position)}}`,
    )
  }
  if (cadComponent.size !== undefined) {
    modelProps.push(`size={${formatPointProp(cadComponent.size)}}`)
  }
  if (cadComponent.show_as_translucent_model === true) {
    modelProps.push("showAsTranslucentModel")
  }

  return `<cadmodel ${modelProps.join(" ")} />`
}

export const generateCadModelTsx = ({
  cadComponents,
  pcbBoard,
  pcbComponent,
}: {
  cadComponents: CadComponent[]
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): string | undefined => {
  const modelElements = cadComponents.flatMap((cadComponent) => {
    const modelElement = generateCadModelElementTsx({
      cadComponent,
      pcbBoard,
      pcbComponent,
    })
    return modelElement ? [modelElement] : []
  })
  if (modelElements.length === 0) return undefined
  if (modelElements.length === 1) return modelElements[0]
  return `<cadassembly>${modelElements.join("")}</cadassembly>`
}
