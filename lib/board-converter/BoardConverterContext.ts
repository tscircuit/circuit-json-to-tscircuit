import type { AnyCircuitElement, PcbBoard } from "circuit-json"

export interface BoardConverterContext {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
  boardProps: string[]
  boardChildren: string[]
}

export type BoardConverterStage = (context: BoardConverterContext) => void
