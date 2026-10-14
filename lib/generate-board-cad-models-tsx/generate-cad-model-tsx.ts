import type { CadComponent, PcbBoard } from "circuit-json"
import type { CadModelParentPlacement } from "./converter-types"
import { getCadModelPlacementAttributes } from "./get-cad-model-placement-attributes"
import { getCadModelUrl } from "./get-cad-model-url"
import { getModelUrlWithFormatHint } from "./get-model-url-with-format-hint"

export function generateCadModelTsx({
  cadComponent,
  parentPlacement,
  pcbBoard,
}: {
  cadComponent: CadComponent
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}): string | undefined {
  const modelUrl = getCadModelUrl(cadComponent)
  if (!modelUrl) return undefined

  const attributes = [
    `modelUrl={${JSON.stringify(getModelUrlWithFormatHint(modelUrl))}}`,
    ...getCadModelPlacementAttributes({
      cadComponent,
      parentPlacement,
      pcbBoard,
    }),
  ]

  return `<cadmodel ${attributes.join(" ")} />`
}
