import { generateBoardTracesTsx } from "../../generate-board-traces-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertBoardTraces: BoardConverterStage = ({
  boardChildren,
  circuitJson,
  footprintConversionContext,
}) => {
  boardChildren.push(
    ...generateBoardTracesTsx(circuitJson, footprintConversionContext),
  )
}
