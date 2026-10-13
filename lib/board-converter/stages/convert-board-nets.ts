import { generateBoardNetsTsx } from "../../generate-board-nets-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertBoardNets: BoardConverterStage = ({
  boardChildren,
  boardProps,
  circuitJson,
  footprintConversionContext,
}) => {
  boardChildren.push(...generateBoardNetsTsx(footprintConversionContext))
  if (
    circuitJson.some((element) => element.type === "pcb_trace") &&
    !boardProps.includes("routingDisabled")
  ) {
    boardProps.push("routingDisabled")
  }
}
