import type { SoupUtilObjects } from "@tscircuit/soup-util"
import type { AnySourceElement } from "circuit-json"

export type SourceComponent = Extract<
  AnySourceElement,
  { type: "source_component"; ftype: string }
>

export type CircuitJsonUtil = SoupUtilObjects

export interface DeserializerContext {
  db: CircuitJsonUtil
}

export interface PcbBoardRef {
  pcb_board_id: string
}

export interface SourceComponentRef {
  source_component_id: string
}
