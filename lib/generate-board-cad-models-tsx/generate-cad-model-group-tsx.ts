import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import {
  generateCadModelGroupChildrenTsx,
  generateCadModelGroupModelTsx,
} from "./generate-cad-model-group-model-tsx"

export function generateCadModelGroupTsx({
  cadModelGroup,
  groupIndex,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  groupIndex: number
  pcbBoard: PcbBoard
}): string | undefined {
  const { parentPlacement } = cadModelGroup
  const cadModelTsx = generateCadModelGroupModelTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (!cadModelTsx) return undefined
  const cadModelChildrenTsx = generateCadModelGroupChildrenTsx({
    cadModelGroup,
    pcbBoard,
  })

  const attributes = [
    `name={${JSON.stringify(`ImportedCadModel${groupIndex + 1}`)}}`,
    `pcbX={${parentPlacement.center.x}}`,
    `pcbY={${parentPlacement.center.y}}`,
    `pcbRotation="${parentPlacement.ccwRotationDegrees}deg"`,
    `layer="${parentPlacement.layer}"`,
    "noSchematicRepresentation",
    "obstructsWithinBounds={false}",
    "footprint={<footprint />}",
    `cadModel={${cadModelTsx}}`,
  ]
  const chipContents = cadModelChildrenTsx.join("\n")
  return chipContents
    ? `<chip ${attributes.join(" ")}>${chipContents}</chip>`
    : `<chip ${attributes.join(" ")} />`
}
