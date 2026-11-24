import { generateBoardNetsTsx } from "../../generate-board-nets-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertBoardNets: BoardConverterStage = ({
  boardChildren,
  boardProps,
  circuitJson,
  footprintConversionContext,
  nativeBoardComponents,
}) => {
  boardChildren.push(
    ...generateBoardNetsTsx(circuitJson, footprintConversionContext),
  )
  if (
    circuitJson.some((element) => element.type === "pcb_trace") &&
    !nativeBoardComponents.canAutorouteAllPcbTraces &&
    !boardProps.includes("routingDisabled")
  ) {
    boardProps.push("routingDisabled")
  }
}
