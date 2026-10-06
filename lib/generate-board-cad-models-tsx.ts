import type { AnyCircuitElement, CadComponent, PcbBoard } from "circuit-json"

interface CadModelUrl {
  format: "glb" | "gltf" | "obj" | "step" | "stl" | "wrl"
  url: string
}

const getCadModelUrl = (
  cadComponent: CadComponent,
): CadModelUrl | undefined => {
  if (cadComponent.model_glb_url)
    return { format: "glb", url: cadComponent.model_glb_url }
  if (cadComponent.model_gltf_url)
    return { format: "gltf", url: cadComponent.model_gltf_url }
  if (cadComponent.model_obj_url)
    return { format: "obj", url: cadComponent.model_obj_url }
  if (cadComponent.model_step_url)
    return { format: "step", url: cadComponent.model_step_url }
  if (cadComponent.model_stl_url)
    return { format: "stl", url: cadComponent.model_stl_url }
  if (cadComponent.model_wrl_url)
    return { format: "wrl", url: cadComponent.model_wrl_url }
  return undefined
}

const getModelUrlWithFormatHint = ({ format, url }: CadModelUrl): string => {
  const pathWithoutQuery = url.split(/[?#]/u)[0] ?? ""
  if (pathWithoutQuery.toLowerCase().endsWith(`.${format}`)) return url
  return `${url}#ext=${format}`
}

const generateCadModelTsx = ({
  boardThickness,
  cadComponent,
  modelUrl,
}: {
  boardThickness: number
  cadComponent: CadComponent
  modelUrl: CadModelUrl
}): string => {
  const rotation = cadComponent.rotation ?? { x: 0, y: 0, z: 0 }
  const attributes = [
    `modelUrl={${JSON.stringify(getModelUrlWithFormatHint(modelUrl))}}`,
    `pcbX={${cadComponent.position.x}}`,
    `pcbY={${cadComponent.position.y}}`,
    `pcbZ={${cadComponent.position.z - boardThickness / 2}}`,
    `rotationOffset={${JSON.stringify(rotation)}}`,
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
  if (cadComponent.model_origin_position !== undefined) {
    attributes.push(
      `modelOriginPosition={${JSON.stringify(cadComponent.model_origin_position)}}`,
    )
  }
  if (cadComponent.size !== undefined) {
    attributes.push(`size={${JSON.stringify(cadComponent.size)}}`)
  }
  if (cadComponent.show_as_translucent_model === true) {
    attributes.push("showAsTranslucentModel")
  }

  return `<cadmodel ${attributes.join(" ")} />`
}

export const generateBoardCadModelsTsx = ({
  circuitJson,
  pcbBoard,
}: {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard | undefined
}): string | undefined => {
  if (!pcbBoard) return undefined

  const cadModels = circuitJson.flatMap((element) => {
    if (element.type !== "cad_component") return []
    const modelUrl = getCadModelUrl(element)
    if (!modelUrl) return []
    return [
      generateCadModelTsx({
        boardThickness: pcbBoard.thickness,
        cadComponent: element,
        modelUrl,
      }),
    ]
  })

  if (cadModels.length === 0) return undefined
  return `<cadassembly>${cadModels.join("\n")}</cadassembly>`
}
