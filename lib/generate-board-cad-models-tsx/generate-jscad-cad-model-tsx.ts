import type { CadComponent, PcbBoard } from "circuit-json"
import type { CadModelParentPlacement } from "./converter-types"
import { getCadModelPlacementAttributes } from "./get-cad-model-placement-attributes"

export function generateJscadCadModelTsx({
  cadComponent,
  parentPlacement,
  pcbBoard,
}: {
  cadComponent: CadComponent
  parentPlacement: CadModelParentPlacement
  pcbBoard: PcbBoard
}): string | undefined {
  if (cadComponent.model_jscad === undefined) return undefined

  const attributes = [
    `jscad={${JSON.stringify(cadComponent.model_jscad)}}`,
    ...getCadModelPlacementAttributes({
      cadComponent,
      parentPlacement,
      pcbBoard,
    }),
  ]

  return `<cadmodel ${attributes.join(" ")} />`
}
