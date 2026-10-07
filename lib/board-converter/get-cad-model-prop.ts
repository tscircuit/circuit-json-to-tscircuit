import { getPcbElementBounds } from "@tscircuit/circuit-json-util"
import type {
  AnyCircuitElement,
  CadComponent,
  PcbBoard,
  PcbComponent,
} from "circuit-json"
import { formatJsxStringAttribute } from "../format-jsx-string-attribute"

interface CadModelUrl {
  extension: "glb" | "gltf" | "obj" | "step" | "stl" | "wrl"
  url: string
}

interface CadModelPlacement {
  positionOffset: { x: number; y: number; z: number }
  rotationOffset: { x: number; y: number; z: number }
}

const NON_PHYSICAL_PCB_ELEMENT_TYPE_PREFIXES = [
  "pcb_courtyard_",
  "pcb_fabrication_note_",
  "pcb_note_",
  "pcb_silkscreen_",
]

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

function formatPoint(point: { x: number; y: number; z: number }): string {
  return `{ x: ${point.x}, y: ${point.y}, z: ${point.z} }`
}

function getRotationOffset({
  cadComponent,
  pcbComponent,
}: {
  cadComponent: CadComponent
  pcbComponent: PcbComponent
}): CadModelPlacement["rotationOffset"] {
  const rotation = cadComponent.rotation ?? { x: 0, y: 0, z: 0 }
  if (pcbComponent.layer === "bottom") {
    return {
      x: rotation.x,
      y: rotation.y - 180,
      z: 180 - rotation.z - pcbComponent.rotation,
    }
  }

  return {
    x: rotation.x,
    y: rotation.y,
    z: rotation.z - pcbComponent.rotation,
  }
}

function getDirectCadModelPlacement({
  cadComponent,
  circuitJson,
  pcbBoard,
  pcbComponent,
}: {
  cadComponent: CadComponent
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): CadModelPlacement {
  const boardSurfaceZ = pcbBoard.thickness / 2
  const anchor = getRenderedPcbComponentCenter({
    circuitJson,
    pcbBoard,
    pcbComponent,
  })
  return {
    positionOffset: {
      x: cadComponent.position.x - anchor.x,
      y: cadComponent.position.y - anchor.y,
      z:
        pcbComponent.layer === "bottom"
          ? cadComponent.position.z + boardSurfaceZ
          : cadComponent.position.z - boardSurfaceZ,
    },
    rotationOffset: getRotationOffset({ cadComponent, pcbComponent }),
  }
}

function getRenderedPcbComponentCenter({
  circuitJson,
  pcbBoard,
  pcbComponent,
}: {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): { x: number; y: number } {
  const physicalElementBounds = circuitJson.flatMap((element) => {
    if (
      !("pcb_component_id" in element) ||
      element.pcb_component_id !== pcbComponent.pcb_component_id ||
      element.type === "cad_component" ||
      element.type === "pcb_component" ||
      element.type === "pcb_port" ||
      NON_PHYSICAL_PCB_ELEMENT_TYPE_PREFIXES.some((prefix) =>
        element.type.startsWith(prefix),
      )
    ) {
      return []
    }

    const bounds = getPcbElementBounds(element)
    return bounds ? [bounds] : []
  })

  if (physicalElementBounds.length === 0) {
    return {
      x: pcbComponent.center.x - pcbBoard.center.x,
      y: pcbComponent.center.y - pcbBoard.center.y,
    }
  }

  const minX = Math.min(...physicalElementBounds.map((bounds) => bounds.minX))
  const minY = Math.min(...physicalElementBounds.map((bounds) => bounds.minY))
  const maxX = Math.max(...physicalElementBounds.map((bounds) => bounds.maxX))
  const maxY = Math.max(...physicalElementBounds.map((bounds) => bounds.maxY))

  return {
    x: (minX + maxX) / 2,
    y: (minY + maxY) / 2,
  }
}

function getCadModelElement({
  cadComponent,
  placement,
}: {
  cadComponent: CadComponent
  placement: CadModelPlacement
}): string | undefined {
  const cadModelUrl = getCadModelUrl(cadComponent)
  if (!cadModelUrl) return undefined

  const attributes = [
    `modelUrl=${formatJsxStringAttribute(getModelUrlWithExtensionHint(cadModelUrl))}`,
    `positionOffset={${formatPoint(placement.positionOffset)}}`,
    `rotationOffset={${formatPoint(placement.rotationOffset)}}`,
  ]

  if (cadComponent.model_unit_to_mm_scale_factor !== undefined) {
    attributes.push(
      `modelUnitToMmScale={${cadComponent.model_unit_to_mm_scale_factor}}`,
    )
  }
  if (cadComponent.model_board_normal_direction !== undefined) {
    attributes.push(
      `modelBoardNormalDirection=${formatJsxStringAttribute(cadComponent.model_board_normal_direction)}`,
    )
  }
  if (cadComponent.model_origin_position !== undefined) {
    attributes.push(
      `modelOriginPosition={${formatPoint(cadComponent.model_origin_position)}}`,
    )
  }
  if (cadComponent.size !== undefined) {
    attributes.push(`size={${formatPoint(cadComponent.size)}}`)
  }
  if (cadComponent.show_as_translucent_model === true) {
    attributes.push("showAsTranslucentModel")
  }

  return `<cadmodel ${attributes.join(" ")} />`
}

export function getCadModelProp({
  circuitJson,
  pcbBoard,
  pcbComponent,
}: {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): string | undefined {
  const cadComponents = circuitJson.filter(
    (element): element is CadComponent =>
      element.type === "cad_component" &&
      element.pcb_component_id === pcbComponent.pcb_component_id &&
      getCadModelUrl(element) !== undefined,
  )
  if (cadComponents.length === 0) return undefined

  if (cadComponents.length === 1) {
    const cadComponent = cadComponents[0]
    if (!cadComponent) return undefined
    const cadModelElement = getCadModelElement({
      cadComponent,
      placement: getDirectCadModelPlacement({
        cadComponent,
        circuitJson,
        pcbBoard,
        pcbComponent,
      }),
    })
    return cadModelElement ? `cadModel={${cadModelElement}}` : undefined
  }

  const cadModelElements = cadComponents.flatMap((cadComponent) => {
    const cadModelElement = getCadModelElement({
      cadComponent,
      placement: getDirectCadModelPlacement({
        cadComponent,
        circuitJson,
        pcbBoard,
        pcbComponent,
      }),
    })
    return cadModelElement ? [cadModelElement] : []
  })

  return cadModelElements.length > 0
    ? `cadModel={<cadassembly>${cadModelElements.join("")}</cadassembly>}`
    : undefined
}
