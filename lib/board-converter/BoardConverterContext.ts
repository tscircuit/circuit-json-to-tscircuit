import type { AnyCircuitElement, PcbBoard } from "circuit-json"

export interface BoardConverterContext {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
  boardProps: string[]
  boardChildren: string[]
  emittedNetNames: Set<string>
  netNamesBySourceName: Map<string, string>
  usedNetNames: Set<string>
}

export type BoardConverterStage = (context: BoardConverterContext) => void
