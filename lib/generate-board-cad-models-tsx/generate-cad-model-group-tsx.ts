import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import {
  generateCadModelGroupChildrenTsx,
  generateCadModelGroupModelTsx,
} from "./generate-cad-model-group-model-tsx"
import { isJscadCadModelGroupTranslucent } from "./is-jscad-cad-model-group-translucent"

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
  if (isJscadCadModelGroupTranslucent(cadModelGroup)) {
    attributes.push("showAsTranslucentModel")
  }
  const childModelElementsTsx = generateCadModelGroupChildrenTsx({
    cadModelGroup,
    pcbBoard,
  })
  if (childModelElementsTsx.length === 0) {
    return `<chip ${attributes.join(" ")} />`
  }

  return `<chip ${attributes.join(" ")}>${childModelElementsTsx.join("\n")}</chip>`
}
