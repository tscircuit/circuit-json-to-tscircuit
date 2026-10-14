import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"
import { generateJscadCadModelPropTsx } from "./generate-jscad-cad-model-prop-tsx"
import { getCadModelUrl } from "./get-cad-model-url"

const generateUrlCadModelElementsTsx = ({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string[] =>
  cadModelGroup.cadComponents.flatMap((cadComponent) => {
    if (getCadModelUrl(cadComponent) === undefined) return []

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
  const modelElements = generateUrlCadModelElementsTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (modelElements.length === 0) {
    const jscadCadComponents = cadModelGroup.cadComponents.filter(
      (cadComponent) => cadComponent.model_jscad !== undefined,
    )
    return generateJscadCadModelPropTsx({
      cadComponents: jscadCadComponents,
      parentPlacement: cadModelGroup.parentPlacement,
      pcbBoard,
    })
  }
  if (modelElements.length === 1) return modelElements[0]

  return `<cadassembly>${modelElements.join("\n")}</cadassembly>`
}
