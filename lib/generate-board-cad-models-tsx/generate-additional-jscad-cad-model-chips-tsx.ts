import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateJscadCadModelObjectTsx } from "./generate-jscad-cad-model-object-tsx"
import { getCadModelUrl } from "./get-cad-model-url"

export function generateAdditionalJscadCadModelChipsTsx({
  cadModelGroup,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
}): string[] {
  const hasUrlCadModel = cadModelGroup.cadComponents.some(
    (cadComponent) => getCadModelUrl(cadComponent) !== undefined,
  )
  const jscadCadComponents = cadModelGroup.cadComponents.filter(
    (cadComponent) => cadComponent.model_jscad !== undefined,
  )
  const additionalJscadCadComponents = hasUrlCadModel
    ? jscadCadComponents
    : jscadCadComponents.slice(0, -1)
  const { parentPlacement } = cadModelGroup

  return additionalJscadCadComponents.flatMap((cadComponent) => {
    const cadModelObjectTsx = generateJscadCadModelObjectTsx({
      cadComponent,
      parentPlacement,
      pcbBoard,
    })
    if (!cadModelObjectTsx) return []

    const attributes = [
      `pcbX={${parentPlacement.center.x}}`,
      `pcbY={${parentPlacement.center.y}}`,
      'pcbRotation="0deg"',
      `layer="${parentPlacement.layer}"`,
      "noSchematicRepresentation",
      "obstructsWithinBounds={false}",
      "footprint={<footprint />}",
      `cadModel={${cadModelObjectTsx}}`,
    ]
    return [`<chip ${attributes.join(" ")} />`]
  })
}
