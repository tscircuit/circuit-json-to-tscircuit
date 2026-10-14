import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"
import { generateJscadCadModelTsx } from "./generate-jscad-cad-model-tsx"

const generateCadModelElementsTsx = ({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string[] =>
  cadModelGroup.cadComponents.flatMap((cadComponent) => {
    const modelElementGenerator =
      cadComponent.model_jscad === undefined
        ? generateCadModelTsx
        : generateJscadCadModelTsx
    const modelElement = modelElementGenerator({
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
  const modelElements = generateCadModelElementsTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (modelElements.length === 0) return undefined
  if (modelElements.length === 1) return modelElements[0]

  return `<cadassembly>${modelElements.join("\n")}</cadassembly>`
}
