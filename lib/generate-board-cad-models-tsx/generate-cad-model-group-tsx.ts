import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateAdditionalJscadCadModelChipsTsx } from "./generate-additional-jscad-cad-model-chips-tsx"
import { generateCadModelGroupModelTsx } from "./generate-cad-model-group-model-tsx"

export function generateCadModelGroupTsx({
  cadModelGroup,
  pcbBoard,
  runtimeName,
}: {
  cadModelGroup: CadModelGroup
  pcbBoard: PcbBoard
  runtimeName: string
}): string | undefined {
  const { parentPlacement } = cadModelGroup
  const cadModelTsx = generateCadModelGroupModelTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (!cadModelTsx) return undefined
  const additionalCadModelChipsTsx = generateAdditionalJscadCadModelChipsTsx({
    cadModelGroup,
    pcbBoard,
  })

  const attributes = [
    `name={${JSON.stringify(runtimeName)}}`,
    `pcbX={${parentPlacement.center.x}}`,
    `pcbY={${parentPlacement.center.y}}`,
    `pcbRotation="${parentPlacement.ccwRotationDegrees}deg"`,
    `layer="${parentPlacement.layer}"`,
    "noSchematicRepresentation",
    "obstructsWithinBounds={false}",
    "footprint={<footprint />}",
    `cadModel={${cadModelTsx}}`,
  ]
  if (additionalCadModelChipsTsx.length === 0) {
    return `<chip ${attributes.join(" ")} />`
  }

  return `<chip ${attributes.join(" ")}>${additionalCadModelChipsTsx.join("\n")}</chip>`
}
