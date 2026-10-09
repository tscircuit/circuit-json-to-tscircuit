import type { AnyCircuitElement, PcbBoard } from "circuit-json"
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

  return getCadModelGroups(circuitJson).flatMap((cadModelGroup, groupIndex) => {
    const cadModelGroupTsx = generateCadModelGroupTsx({
      cadModelGroup,
      groupIndex,
      pcbBoard,
    })
    return cadModelGroupTsx ? [cadModelGroupTsx] : []
  })
}
