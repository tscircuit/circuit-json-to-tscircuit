import type { AnyCircuitElement, PcbBoard } from "circuit-json"
import type { BoardConversionContext as FootprintConversionContext } from "../board-conversion-context"
import type { PcbComponentRuntimeNameByPcbComponentId } from "./get-pcb-component-runtime-name-by-pcb-component-id"

export interface BoardConverterContext {
  circuitJson: AnyCircuitElement[]
  footprintConversionContext: FootprintConversionContext
  pcbComponentRuntimeNameByPcbComponentId: PcbComponentRuntimeNameByPcbComponentId
  pcbBoard: PcbBoard
  boardProps: string[]
  boardChildren: string[]
}

export type BoardConverterStage = (context: BoardConverterContext) => void
