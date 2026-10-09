import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"

export function generateCadModelGroupTsx({
  cadModelGroup,
  groupIndex,
  pcbBoard,
}: {
  cadModelGroup: CadModelGroup
  groupIndex: number
  pcbBoard: PcbBoard
}): string | undefined {
  const { cadComponents, parentPlacement } = cadModelGroup
  const modelElements = cadComponents.flatMap((cadComponent) => {
    const modelElement = generateCadModelTsx({
      cadComponent,
      parentPlacement,
      pcbBoard,
    })
    return modelElement ? [modelElement] : []
  })
  if (modelElements.length === 0) return undefined

  let cadModelTsx = modelElements[0]
  if (modelElements.length > 1) {
    cadModelTsx = `<cadassembly>${modelElements.join("\n")}</cadassembly>`
  }
  if (!cadModelTsx) return undefined

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
  return `<chip ${attributes.join(" ")} />`
}
