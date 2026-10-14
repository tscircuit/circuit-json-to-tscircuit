import { generateCadModelGroupTsx } from "../../generate-board-cad-models-tsx/generate-cad-model-group-tsx"
import { getCadModelGroups } from "../../generate-board-cad-models-tsx/get-cad-model-groups"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertBoardCadModels: BoardConverterStage = ({
  circuitJson,
  pcbBoard,
  boardChildren,
  standaloneCadModelRuntimeNameByCadComponentId,
}) => {
  const standaloneCadModelGroups = getCadModelGroups(circuitJson).filter(
    (cadModelGroup) =>
      cadModelGroup.cadComponents.every(
        (cadComponent) => cadComponent.pcb_component_id === undefined,
      ),
  )

  for (const cadModelGroup of standaloneCadModelGroups) {
    const firstCadComponent = cadModelGroup.cadComponents[0]
    if (!firstCadComponent) continue
    const runtimeName = standaloneCadModelRuntimeNameByCadComponentId.get(
      firstCadComponent.cad_component_id,
    )
    if (!runtimeName) {
      throw new Error(
        `Missing runtime name for standalone CAD model ${firstCadComponent.cad_component_id}`,
      )
    }
    const cadModelGroupTsx = generateCadModelGroupTsx({
      cadModelGroup,
      pcbBoard,
      runtimeName,
    })
    if (cadModelGroupTsx) boardChildren.push(cadModelGroupTsx)
  }
}
