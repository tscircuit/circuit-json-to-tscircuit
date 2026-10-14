import type { AnyCircuitElement, PcbBoard } from "circuit-json"
import type { BoardConversionContext as FootprintConversionContext } from "../board-conversion-context"
import type {
  PcbComponentRuntimeNameByPcbComponentId,
  StandaloneCadModelRuntimeNameByCadComponentId,
} from "./get-board-child-runtime-names"

export interface BoardConverterContext {
  circuitJson: AnyCircuitElement[]
  footprintConversionContext: FootprintConversionContext
  pcbComponentRuntimeNameByPcbComponentId: PcbComponentRuntimeNameByPcbComponentId
  standaloneCadModelRuntimeNameByCadComponentId: StandaloneCadModelRuntimeNameByCadComponentId
  pcbBoard: PcbBoard
  boardProps: string[]
  boardChildren: string[]
}

export type BoardConverterStage = (context: BoardConverterContext) => void
