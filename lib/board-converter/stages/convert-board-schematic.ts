import { generateBoardSchematicSheetTsx } from "../../generate-board-schematic-sheet-tsx"
import { generateBoardSchematicElements } from "../../generate-board-schematic-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertBoardSchematic: BoardConverterStage = ({
  boardChildren,
  circuitJson,
}) => {
  const schematicElements = generateBoardSchematicElements(circuitJson)
  boardChildren.push(
    generateBoardSchematicSheetTsx({
      circuitJson,
      schematicElements,
    }),
  )
}
