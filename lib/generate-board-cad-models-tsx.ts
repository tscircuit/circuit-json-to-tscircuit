import type {
  AnyCircuitElement,
  CadComponent,
  PcbBoard,
  PcbComponent,
} from "circuit-json"

type PcbComponentId = PcbComponent["pcb_component_id"]
type PcbComponentLayer = PcbComponent["layer"]
type CadModelLayer = "bottom" | "top"

interface CadModelUrl {
  extension: "glb" | "gltf" | "obj" | "step" | "stl" | "wrl"
  url: string
}

interface Point3 {
  x: number
  y: number
  z: number
}

function getCadModelUrl(cadComponent: CadComponent): CadModelUrl | undefined {
  if (cadComponent.model_glb_url) {
    return { extension: "glb", url: cadComponent.model_glb_url }
  }
  if (cadComponent.model_gltf_url) {
    return { extension: "gltf", url: cadComponent.model_gltf_url }
  }
  if (cadComponent.model_obj_url) {
    return { extension: "obj", url: cadComponent.model_obj_url }
  }
  if (cadComponent.model_step_url) {
    return { extension: "step", url: cadComponent.model_step_url }
  }
  if (cadComponent.model_stl_url) {
    return { extension: "stl", url: cadComponent.model_stl_url }
  }
  if (cadComponent.model_wrl_url) {
    return { extension: "wrl", url: cadComponent.model_wrl_url }
  }
  return undefined
}

function getModelUrlWithExtensionHint({ extension, url }: CadModelUrl): string {
  const pathWithoutQuery = url.split(/[?#]/u)[0] ?? ""
  return pathWithoutQuery.toLowerCase().endsWith(`.${extension}`)
    ? url
    : `${url}#ext=${extension}`
}

function formatPoint(point: Point3): string {
  return `{ x: ${point.x}, y: ${point.y}, z: ${point.z} }`
}

function getCadModelLayer({
  cadComponent,
  layerByPcbComponentId,
}: {
  cadComponent: CadComponent
  layerByPcbComponentId: Map<PcbComponentId, PcbComponentLayer>
}): CadModelLayer {
  if (cadComponent.layer === "bottom" || cadComponent.layer === "top") {
    return cadComponent.layer
  }
  return cadComponent.pcb_component_id !== undefined &&
    layerByPcbComponentId.get(cadComponent.pcb_component_id) === "bottom"
    ? "bottom"
    : "top"
}

function getCadModelElement({
  anchor,
  boardSurfaceZ,
  cadComponent,
  layer,
}: {
  anchor: { x: number; y: number }
  boardSurfaceZ: number
  cadComponent: CadComponent
  layer: CadModelLayer
}): string | undefined {
  const cadModelUrl = getCadModelUrl(cadComponent)
  if (!cadModelUrl) return undefined

  const rotation = cadComponent.rotation ?? { x: 0, y: 0, z: 0 }
  const positionOffset = {
    x: cadComponent.position.x - anchor.x,
    y: cadComponent.position.y - anchor.y,
    z:
      layer === "bottom"
        ? cadComponent.position.z + boardSurfaceZ
        : cadComponent.position.z - boardSurfaceZ,
  }
  const rotationOffset = {
    x: rotation.x,
    y: layer === "bottom" ? rotation.y - 180 : rotation.y,
    z: rotation.z,
  }
  const attributes = [
    `modelUrl=${JSON.stringify(getModelUrlWithExtensionHint(cadModelUrl))}`,
    `positionOffset={${formatPoint(positionOffset)}}`,
    `rotationOffset={${formatPoint(rotationOffset)}}`,
  ]

  if (cadComponent.model_unit_to_mm_scale_factor !== undefined) {
    attributes.push(
      `modelUnitToMmScale={${cadComponent.model_unit_to_mm_scale_factor}}`,
    )
  }
  if (cadComponent.model_board_normal_direction !== undefined) {
    attributes.push(
      `modelBoardNormalDirection=${JSON.stringify(cadComponent.model_board_normal_direction)}`,
    )
  }
  const modelOriginPosition =
    cadComponent.model_origin_position ??
    (cadComponent.model_origin_alignment === "unknown"
      ? { x: 0, y: 0, z: 0 }
      : undefined)
  if (modelOriginPosition !== undefined) {
    attributes.push(`modelOriginPosition={${formatPoint(modelOriginPosition)}}`)
  }
  if (cadComponent.size !== undefined) {
    attributes.push(`size={${formatPoint(cadComponent.size)}}`)
  }
  if (cadComponent.show_as_translucent_model === true) {
    attributes.push("showAsTranslucentModel")
  }

  return `<cadmodel ${attributes.join(" ")} />`
}

function getCadModelAnchorChip({
  anchor,
  cadModelElements,
  layer,
}: {
  anchor: { x: number; y: number }
  cadModelElements: string[]
  layer: CadModelLayer
}): string | undefined {
  if (cadModelElements.length === 0) return undefined

  const name =
    layer === "top" ? "ImportedTopCadModels" : "ImportedBottomCadModels"
  return `<chip name="${name}" layer="${layer}" pcbX={${anchor.x}} pcbY={${anchor.y}} noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint />} cadModel={<cadassembly>${cadModelElements.join("")}</cadassembly>} />`
}

export function generateBoardCadModelsTsx({
  circuitJson,
  pcbBoard,
}: {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
}): string[] {
  const layerByPcbComponentId = new Map<PcbComponentId, PcbComponentLayer>()
  for (const element of circuitJson) {
    if (element.type === "pcb_component") {
      layerByPcbComponentId.set(element.pcb_component_id, element.layer)
    }
  }

  const anchor = pcbBoard.center
  const boardSurfaceZ = pcbBoard.thickness / 2
  const cadModelElementsByLayer: Record<CadModelLayer, string[]> = {
    bottom: [],
    top: [],
  }
  for (const element of circuitJson) {
    if (element.type !== "cad_component") continue
    const layer = getCadModelLayer({
      cadComponent: element,
      layerByPcbComponentId,
    })
    const cadModelElement = getCadModelElement({
      anchor,
      boardSurfaceZ,
      cadComponent: element,
      layer,
    })
    if (cadModelElement) cadModelElementsByLayer[layer].push(cadModelElement)
  }

  return (["top", "bottom"] as const).flatMap((layer) => {
    const cadModelAnchorChip = getCadModelAnchorChip({
      anchor,
      cadModelElements: cadModelElementsByLayer[layer],
      layer,
    })
    return cadModelAnchorChip ? [cadModelAnchorChip] : []
  })
}
