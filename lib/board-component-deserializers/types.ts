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

export type CircuitJsonElementRef = {
  [id in `${string}_id`]?: string
}
