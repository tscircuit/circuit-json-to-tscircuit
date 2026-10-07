import type {
  AnyCircuitElement,
  CadComponent,
  PcbBoard,
  PcbComponent,
} from "circuit-json"

interface CadModelUrl {
  format: "glb" | "gltf" | "obj" | "step" | "stl" | "wrl"
  url: string
}

interface CadModelParentPlacement {
  center: { x: number; y: number }
  ccwRotationDegrees: number
  layer: "bottom" | "top"
}

interface CadModelGroup {
  cadComponents: CadComponent[]
  parentPlacement: CadModelParentPlacement
}

type CadModelGroupKey = string
type PcbComponentId = PcbComponent["pcb_component_id"]

const getCadModelUrl = (
  cadComponent: CadComponent,
): CadModelUrl | undefined => {
  if (cadComponent.model_glb_url) {
    return { format: "glb", url: cadComponent.model_glb_url }
  }
  if (cadComponent.model_gltf_url) {
    return { format: "gltf", url: cadComponent.model_gltf_url }
  }
  if (cadComponent.model_obj_url) {
    return { format: "obj", url: cadComponent.model_obj_url }
  }
  if (cadComponent.model_step_url) {
    return { format: "step", url: cadComponent.model_step_url }
  }
  if (cadComponent.model_stl_url) {
    return { format: "stl", url: cadComponent.model_stl_url }
  }
  if (cadComponent.model_wrl_url) {
    return { format: "wrl", url: cadComponent.model_wrl_url }
  }
  return undefined
}

const getModelUrlWithFormatHint = ({ format, url }: CadModelUrl): string => {
  const pathWithoutQuery = url.split(/[?#]/u)[0] ?? ""
  if (pathWithoutQuery.toLowerCase().endsWith(`.${format}`)) return url
  return `${url}#ext=${format}`
}

const formatPointProp = (point: {
  x: number
  y: number
  z: number
}): string => `{ x: ${point.x}, y: ${point.y}, z: ${point.z} }`

const getCadModelPlacement = ({
  cadComponent,
  parentPlacement,
  pcbBoard,
}: {
  cadComponent: CadComponent
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}) => {
  const cadModelCcwRotationDegrees = cadComponent.rotation ?? {
    x: 0,
    y: 0,
    z: 0,
  }
  const boardSurfaceZ = pcbBoard.thickness / 2

  return {
    positionOffset: {
      // Core interprets these offsets as board-axis deltas from the parent PCB
      // component center, not as coordinates in the component's rotated frame.
      x: cadComponent.position.x - parentPlacement.center.x,
      y: cadComponent.position.y - parentPlacement.center.y,
      z:
        parentPlacement.layer === "bottom"
          ? cadComponent.position.z + boardSurfaceZ
          : cadComponent.position.z - boardSurfaceZ,
    },
    // Core adds the parent rotation on top and mirrors Y/Z on the bottom.
    // These inverse offsets reproduce the authored board-space Euler angles.
    rotationOffset:
      parentPlacement.layer === "bottom"
        ? {
            x: cadModelCcwRotationDegrees.x,
            y: cadModelCcwRotationDegrees.y - 180,
            z:
              -cadModelCcwRotationDegrees.z -
              parentPlacement.ccwRotationDegrees,
          }
        : {
            x: cadModelCcwRotationDegrees.x,
            y: cadModelCcwRotationDegrees.y,
            z:
              cadModelCcwRotationDegrees.z - parentPlacement.ccwRotationDegrees,
          },
  }
}

const generateCadModelTsx = ({
  cadComponent,
  parentPlacement,
  pcbBoard,
}: {
  cadComponent: CadComponent
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}): string | undefined => {
  const modelUrl = getCadModelUrl(cadComponent)
  if (!modelUrl) return undefined
  const placement = getCadModelPlacement({
    cadComponent,
    parentPlacement,
    pcbBoard,
  })
  const attributes = [
    `modelUrl={${JSON.stringify(getModelUrlWithFormatHint(modelUrl))}}`,
    `positionOffset={${formatPointProp(placement.positionOffset)}}`,
    `rotationOffset={${formatPointProp(placement.rotationOffset)}}`,
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
  const modelOriginPosition =
    cadComponent.model_origin_position ??
    (cadComponent.model_origin_alignment === "unknown"
      ? { x: 0, y: 0, z: 0 }
      : undefined)
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

  return `<cadmodel ${attributes.join(" ")} />`
}

const getCadModelGroups = (
  circuitJson: AnyCircuitElement[],
): CadModelGroup[] => {
  const pcbComponentById = new Map<PcbComponentId, PcbComponent>()
  for (const element of circuitJson) {
    if (element.type === "pcb_component") {
      pcbComponentById.set(element.pcb_component_id, element)
    }
  }

  const groupByKey = new Map<CadModelGroupKey, CadModelGroup>()
  for (const element of circuitJson) {
    if (element.type !== "cad_component" || !getCadModelUrl(element)) continue
    const pcbComponent = element.pcb_component_id
      ? pcbComponentById.get(element.pcb_component_id)
      : undefined
    const layer =
      (element.layer ?? pcbComponent?.layer) === "bottom" ? "bottom" : "top"
    const parentPlacement: CadModelParentPlacement = pcbComponent
      ? {
          center: pcbComponent.center,
          ccwRotationDegrees: pcbComponent.rotation,
          layer,
        }
      : {
          center: element.position,
          ccwRotationDegrees: 0,
          layer,
        }
    const groupKey = pcbComponent
      ? `${pcbComponent.pcb_component_id}:${layer}`
      : element.cad_component_id
    const group = groupByKey.get(groupKey) ?? {
      cadComponents: [],
      parentPlacement,
    }
    group.cadComponents.push(element)
    groupByKey.set(groupKey, group)
  }

  return [...groupByKey.values()]
}

export const generateBoardCadModelsTsx = ({
  circuitJson,
  pcbBoard,
}: {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard | undefined
}): string[] => {
  if (!pcbBoard) return []

  return getCadModelGroups(circuitJson).flatMap(
    ({ cadComponents, parentPlacement }, groupIndex) => {
      const modelElements = cadComponents.flatMap((cadComponent) => {
        const modelElement = generateCadModelTsx({
          cadComponent,
          parentPlacement,
          pcbBoard,
        })
        return modelElement ? [modelElement] : []
      })
      if (modelElements.length === 0) return []
      const cadModel =
        modelElements.length === 1
          ? modelElements[0]
          : `<cadassembly>${modelElements.join("\n")}</cadassembly>`

      return [
        `<chip name="ImportedCadModel${groupIndex + 1}" pcbX={${parentPlacement.center.x}} pcbY={${parentPlacement.center.y}} pcbRotation="${parentPlacement.ccwRotationDegrees}deg" layer="${parentPlacement.layer}" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint />} cadModel={${cadModel}} />`,
      ]
    },
  )
}
