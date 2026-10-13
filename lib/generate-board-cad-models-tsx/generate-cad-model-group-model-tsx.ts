import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"
import { generateJscadCadModelPropTsx } from "./generate-jscad-cad-model-prop-tsx"

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
  const urlCadComponents = cadModelGroup.cadComponents.filter(
    (cadComponent) => cadComponent.model_jscad === undefined,
  )
  if (jscadCadComponents.length > 0 && urlCadComponents.length === 0) {
    return generateJscadCadModelPropTsx({
      cadComponents: jscadCadComponents,
      parentPlacement: cadModelGroup.parentPlacement,
      pcbBoard,
    })
  }

  const modelElements = urlCadComponents.flatMap((cadComponent) => {
    const modelElement = generateCadModelTsx({
      cadComponent,
      parentPlacement: cadModelGroup.parentPlacement,
      pcbBoard,
    })
    return modelElement ? [modelElement] : []
  })
  if (modelElements.length === 0) return undefined
  if (modelElements.length === 1) return modelElements[0]

  return `<cadassembly>${modelElements.join("\n")}</cadassembly>`
}
