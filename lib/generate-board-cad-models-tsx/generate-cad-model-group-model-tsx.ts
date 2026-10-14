import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"
import { generateJscadCadModelPropTsx } from "./generate-jscad-cad-model-prop-tsx"

const generateUrlCadModelElementsTsx = ({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string[] =>
  cadModelGroup.cadComponents.flatMap((cadComponent) => {
    if (cadComponent.model_jscad !== undefined) return []

    const modelElement = generateCadModelTsx({
      cadComponent,
      parentPlacement: cadModelGroup.parentPlacement,
      pcbBoard,
    })
    return modelElement ? [modelElement] : []
  })

export function generateCadModelGroupModelTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string | undefined {
  const jscadCadComponents = cadModelGroup.cadComponents.filter(
    (cadComponent) => cadComponent.model_jscad !== undefined,
  )
  if (jscadCadComponents.length > 0) {
    return generateJscadCadModelPropTsx({
      cadComponents: jscadCadComponents,
      parentPlacement: cadModelGroup.parentPlacement,
      pcbBoard,
    })
  }

  const modelElements = generateUrlCadModelElementsTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (modelElements.length === 0) return undefined
  if (modelElements.length === 1) return modelElements[0]

  return `<cadassembly>${modelElements.join("\n")}</cadassembly>`
}

export function generateCadModelGroupChildrenTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string[] {
  const hasJscadCadComponent = cadModelGroup.cadComponents.some(
    (cadComponent) => cadComponent.model_jscad !== undefined,
  )
  if (!hasJscadCadComponent) return []

  return generateUrlCadModelElementsTsx({ cadModelGroup, pcbBoard })
}
