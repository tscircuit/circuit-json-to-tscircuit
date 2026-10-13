import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"

export function generateCadModelGroupModelTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string | undefined {
  const modelElements = cadModelGroup.cadComponents.flatMap((cadComponent) => {
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
