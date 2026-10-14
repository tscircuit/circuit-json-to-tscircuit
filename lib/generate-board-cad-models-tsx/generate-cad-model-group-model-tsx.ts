import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"
import { generateJscadCadModelObjectTsx } from "./generate-jscad-cad-model-object-tsx"
import { getCadModelUrl } from "./get-cad-model-url"

function generateUrlCadModelElementsTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string[] {
  return cadModelGroup.cadComponents.flatMap((cadComponent) => {
    const modelElement = generateCadModelTsx({
      cadComponent,
      parentPlacement: cadModelGroup.parentPlacement,
      pcbBoard,
    })
    return modelElement ? [modelElement] : []
  })
}

export function generateCadModelGroupModelTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string | undefined {
  const urlModelElements = generateUrlCadModelElementsTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (urlModelElements.length === 1) return urlModelElements[0]
  if (urlModelElements.length > 1) {
    return `<cadassembly>${urlModelElements.join("\n")}</cadassembly>`
  }

  const jscadCadComponentsWithoutUrl = cadModelGroup.cadComponents.filter(
    (cadComponent) =>
      cadComponent.model_jscad !== undefined &&
      getCadModelUrl(cadComponent) === undefined,
  )
  const lastJscadCadComponent = jscadCadComponentsWithoutUrl.at(-1)
  if (!lastJscadCadComponent) return undefined

  return generateJscadCadModelObjectTsx({
    cadComponent: lastJscadCadComponent,
    parentPlacement: cadModelGroup.parentPlacement,
    pcbBoard,
  })
}
