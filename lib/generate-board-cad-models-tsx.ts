import type { AnyCircuitElement, PcbBoard } from "circuit-json"
import { getBoardChildRuntimeNames } from "./board-converter/get-board-child-runtime-names"
import { generateCadModelGroupTsx } from "./generate-board-cad-models-tsx/generate-cad-model-group-tsx"
import { getCadModelGroups } from "./generate-board-cad-models-tsx/get-cad-model-groups"

export function generateBoardCadModelsTsx({
  circuitJson,
  pcbBoard,
}: {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard | undefined
}): string[] {
  if (!pcbBoard) return []

  const { standaloneCadModelRuntimeNameByCadComponentId } =
    getBoardChildRuntimeNames(circuitJson)

  return getCadModelGroups(circuitJson).flatMap((cadModelGroup) => {
    const firstCadComponent = cadModelGroup.cadComponents[0]
    if (!firstCadComponent) return []
    const runtimeName = standaloneCadModelRuntimeNameByCadComponentId.get(
      firstCadComponent.cad_component_id,
    )
    if (!runtimeName) return []

    const cadModelGroupTsx = generateCadModelGroupTsx({
      cadModelGroup,
      pcbBoard,
      runtimeName,
    })
    return cadModelGroupTsx ? [cadModelGroupTsx] : []
  })
}
