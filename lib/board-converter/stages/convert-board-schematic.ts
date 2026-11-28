import { generateBoardSchematicSheetTsx } from "../../generate-board-schematic-sheet-tsx"
import { generateBoardSchematicElements } from "../../generate-board-schematic-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertBoardSchematic: BoardConverterStage = ({
  boardChildren,
  circuitJson,
  nativeBoardComponents,
}) => {
  const {
    reconstructedSchematicComponentIds,
    reconstructedSchematicSourceTraceIds,
  } = nativeBoardComponents
  const filteredCircuitJson =
    reconstructedSchematicComponentIds.size === 0 &&
    reconstructedSchematicSourceTraceIds.size === 0
      ? circuitJson
      : circuitJson.filter((element) => {
          if (
            element.type === "schematic_component" &&
            reconstructedSchematicComponentIds.has(
              element.schematic_component_id,
            )
          ) {
            return false
          }
          if (
            element.type === "schematic_port" &&
            element.schematic_component_id !== undefined &&
            reconstructedSchematicComponentIds.has(
              element.schematic_component_id,
            )
          ) {
            return false
          }
          if (
            element.type === "schematic_trace" &&
            element.source_trace_id !== undefined &&
            reconstructedSchematicSourceTraceIds.has(element.source_trace_id)
          ) {
            return false
          }
          return true
        })
  const schematicElements = generateBoardSchematicElements(filteredCircuitJson)
  const schematicSheetTsx = generateBoardSchematicSheetTsx({
    circuitJson: filteredCircuitJson,
    schematicElements,
  })
  if (schematicSheetTsx || boardChildren.length === 0) {
    boardChildren.push(schematicSheetTsx)
  }
}
