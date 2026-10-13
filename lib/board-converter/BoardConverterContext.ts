import type { AnyCircuitElement, PcbBoard } from "circuit-json"
import type { BoardConversionContext as FootprintConversionContext } from "../board-conversion-context"

export interface BoardConverterContext {
  circuitJson: AnyCircuitElement[]
  footprintConversionContext: FootprintConversionContext
  pcbBoard: PcbBoard
  boardProps: string[]
  boardChildren: string[]
}

export type BoardConverterStage = (context: BoardConverterContext) => void
