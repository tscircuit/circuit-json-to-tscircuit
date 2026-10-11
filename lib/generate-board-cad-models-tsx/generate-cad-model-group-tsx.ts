import type { PcbBoard } from "circuit-json"
import type { CadModelGroup } from "./converter-types"
import { generateCadModelTsx } from "./generate-cad-model-tsx"
import { generateJscadCadModelPropTsx } from "./generate-jscad-cad-model-prop-tsx"

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
  const firstCadComponent = cadComponents[0]
  if (
    cadComponents.length === 1 &&
    firstCadComponent?.model_jscad !== undefined
  ) {
    const cadModelProp = generateJscadCadModelPropTsx({
      cadComponent: firstCadComponent,
      parentPlacement,
      pcbBoard,
    })
    return createCadModelChipTsx({
      cadModelProp,
      groupIndex,
      parentPlacement,
    })
  }

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

  return createCadModelChipTsx({
    cadModelProp: cadModelTsx,
    groupIndex,
    parentPlacement,
  })
}

function createCadModelChipTsx({
  cadModelProp,
  groupIndex,
  parentPlacement,
}: {
  cadModelProp: string
  groupIndex: number
  parentPlacement: CadModelGroup["parentPlacement"]
}): string {
  const attributes = [
    `name={${JSON.stringify(`ImportedCadModel${groupIndex + 1}`)}}`,
    `pcbX={${parentPlacement.center.x}}`,
    `pcbY={${parentPlacement.center.y}}`,
    `pcbRotation="${parentPlacement.ccwRotationDegrees}deg"`,
    `layer="${parentPlacement.layer}"`,
    "noSchematicRepresentation",
    "obstructsWithinBounds={false}",
    "footprint={<footprint />}",
    `cadModel={${cadModelProp}}`,
  ]
  return `<chip ${attributes.join(" ")} />`
}
