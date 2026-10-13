import { generateCadModelGroupTsx } from "../../generate-board-cad-models-tsx/generate-cad-model-group-tsx"
import { getCadModelGroups } from "../../generate-board-cad-models-tsx/get-cad-model-groups"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertBoardCadModels: BoardConverterStage = ({
  circuitJson,
  pcbBoard,
  boardChildren,
}) => {
  const standaloneCadModelGroups = getCadModelGroups(circuitJson).filter(
    (cadModelGroup) =>
      cadModelGroup.cadComponents.every(
        (cadComponent) => cadComponent.pcb_component_id === undefined,
      ),
  )

  for (const [
    groupIndex,
    cadModelGroup,
  ] of standaloneCadModelGroups.entries()) {
    const cadModelGroupTsx = generateCadModelGroupTsx({
      cadModelGroup,
      groupIndex,
      pcbBoard,
    })
    if (cadModelGroupTsx) boardChildren.push(cadModelGroupTsx)
  }
}
