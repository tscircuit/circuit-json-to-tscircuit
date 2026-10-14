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

const getJscadCadComponents = (
  cadModelGroup: CadModelGroup,
): CadModelGroup["cadComponents"] =>
  cadModelGroup.cadComponents.filter(
    (cadComponent) => cadComponent.model_jscad !== undefined,
  )

export function generateCadModelGroupModelTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string | undefined {
  const jscadCadComponents = getJscadCadComponents(cadModelGroup)
  if (jscadCadComponents.length > 0) {
    return generateJscadCadModelPropTsx({
      cadComponents: jscadCadComponents,
      parentPlacement: cadModelGroup.parentPlacement,
      pcbBoard,
    })
  }

  const urlCadModelElementsTsx = generateUrlCadModelElementsTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (urlCadModelElementsTsx.length === 0) return undefined
  if (urlCadModelElementsTsx.length === 1) return urlCadModelElementsTsx[0]

  return `<cadassembly>${urlCadModelElementsTsx.join("\n")}</cadassembly>`
}

export function generateCadModelGroupChildrenTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string[] {
  if (getJscadCadComponents(cadModelGroup).length === 0) return []

  return generateUrlCadModelElementsTsx({ cadModelGroup, pcbBoard })
}
