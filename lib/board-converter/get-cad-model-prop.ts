import { getPcbElementBounds } from "@tscircuit/circuit-json-util"
import type {
  AnyCircuitElement,
  CadComponent,
  PcbBoard,
  PcbComponent,
} from "circuit-json"
import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"
import { formatJsxStringAttribute } from "../format-jsx-string-attribute"
import { localizePcbComponentElements } from "./localize-pcb-component-elements"

interface CadModelUrl {
  extension: "glb" | "gltf" | "obj" | "step" | "stl" | "wrl"
  url: string
}

interface CadModelPlacement {
  positionOffset: { x: number; y: number; z: number }
  rotationOffset: { x: number; y: number; z: number }
}

interface CadModelProperty {
  name:
    | "jscad"
    | "modelBoardNormalDirection"
    | "modelOriginPosition"
    | "modelUnitToMmScale"
    | "positionOffset"
    | "rotationOffset"
    | "showAsTranslucentModel"
  value: string
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

function hasCadModelSource(cadComponent: CadComponent): boolean {
  return (
    cadComponent.model_jscad !== undefined ||
    getCadModelUrl(cadComponent) !== undefined
  )
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
  const cadModelCcwRotationDegrees = cadComponent.rotation ?? {
    x: 0,
    y: 0,
    z: 0,
  }
  if (pcbComponent.layer === "bottom") {
    return {
      x: cadModelCcwRotationDegrees.x,
      y: cadModelCcwRotationDegrees.y - 180,
      z: cadModelCcwRotationDegrees.z + pcbComponent.rotation,
    }
  }

  return {
    x: cadModelCcwRotationDegrees.x,
    y: cadModelCcwRotationDegrees.y,
    z: cadModelCcwRotationDegrees.z - pcbComponent.rotation,
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
  const renderedPcbComponentCenter = getRenderedPcbComponentCenter({
    circuitJson,
    pcbBoard,
    pcbComponent,
  })
  return {
    positionOffset: {
      x: cadComponent.position.x - renderedPcbComponentCenter.x,
      y: cadComponent.position.y - renderedPcbComponentCenter.y,
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
  const componentToBoardTransform = compose(
    translate(pcbComponent.center.x, pcbComponent.center.y),
    rotateDEG(pcbComponent.rotation),
  )
  const localComponentElements = localizePcbComponentElements({
    circuitJson,
    pcbComponent,
  })
  const physicalElementBounds = localComponentElements.flatMap((element) => {
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

    const localBounds = getPcbElementBounds(element)
    if (!localBounds) return []

    const boardPoints = [
      { x: localBounds.minX, y: localBounds.minY },
      { x: localBounds.maxX, y: localBounds.minY },
      { x: localBounds.maxX, y: localBounds.maxY },
      { x: localBounds.minX, y: localBounds.maxY },
    ].map((point) => applyToPoint(componentToBoardTransform, point))
    const xs = boardPoints.map((point) => point.x)
    const ys = boardPoints.map((point) => point.y)
    return [
      {
        minX: Math.min(...xs),
        minY: Math.min(...ys),
        maxX: Math.max(...xs),
        maxY: Math.max(...ys),
      },
    ]
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

function getJscadCadModelProperties({
  cadComponent,
  placement,
}: {
  cadComponent: CadComponent
  placement: CadModelPlacement
}): CadModelProperty[] {
  if (cadComponent.model_jscad === undefined) return []
  const properties: CadModelProperty[] = [
    { name: "jscad", value: JSON.stringify(cadComponent.model_jscad) },
    { name: "positionOffset", value: formatPoint(placement.positionOffset) },
    { name: "rotationOffset", value: formatPoint(placement.rotationOffset) },
  ]

  if (cadComponent.model_unit_to_mm_scale_factor !== undefined) {
    properties.push({
      name: "modelUnitToMmScale",
      value: String(cadComponent.model_unit_to_mm_scale_factor),
    })
  }
  if (cadComponent.model_board_normal_direction !== undefined) {
    properties.push({
      name: "modelBoardNormalDirection",
      value: JSON.stringify(cadComponent.model_board_normal_direction),
    })
  }
  const modelOriginPosition =
    cadComponent.model_origin_position ??
    (cadComponent.model_origin_alignment === "unknown"
      ? { x: 0, y: 0, z: 0 }
      : undefined)
  if (modelOriginPosition !== undefined) {
    properties.push({
      name: "modelOriginPosition",
      value: formatPoint(modelOriginPosition),
    })
  }
  if (cadComponent.show_as_translucent_model === true) {
    properties.push({ name: "showAsTranslucentModel", value: "true" })
  }

  return properties
}

function getJscadCadModelProp(params: {
  cadComponents: CadComponent[]
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): string {
  const models = params.cadComponents.map((cadComponent) => ({
    cadComponent,
    properties: getJscadCadModelProperties({
      cadComponent,
      placement: getDirectCadModelPlacement({
        cadComponent,
        circuitJson: params.circuitJson,
        pcbBoard: params.pcbBoard,
        pcbComponent: params.pcbComponent,
      }),
    }),
  }))
  const firstModel = models[0]
  if (!firstModel) return "cadModel={null}"
  if (models.length === 1) {
    const properties = firstModel.properties
      .map(({ name, value }) => `${name}: ${value}`)
      .join(", ")
    return `cadModel={{ ${properties} }}`
  }

  const cadModelElements = models.map(
    ({ cadComponent, properties }) =>
      `<cadmodel key=${formatJsxStringAttribute(cadComponent.cad_component_id)} ${properties.map(({ name, value }) => `${name}={${value}}`).join(" ")} />`,
  )
  return `cadModel={<cadassembly>${cadModelElements.join("")}</cadassembly>}`
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
      hasCadModelSource(element),
  )
  if (cadComponents.length === 0) return "cadModel={null}"

  const jscadCadComponents = cadComponents.filter(
    (cadComponent) => cadComponent.model_jscad !== undefined,
  )
  if (jscadCadComponents.length > 0) {
    return getJscadCadModelProp({
      cadComponents: jscadCadComponents,
      circuitJson,
      pcbBoard,
      pcbComponent,
    })
  }

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
