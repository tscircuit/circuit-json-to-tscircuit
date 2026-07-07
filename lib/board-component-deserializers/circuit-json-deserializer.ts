import type { SoupUtilObjects } from "@tscircuit/soup-util"

export interface SourceComponentRef {
  source_component_id: string
}

export interface CircuitJsonDeserializerContext {
  db: SoupUtilObjects
}

export class CircuitJsonDeserializer {
  static deserializeToTsx(
    _ref: SourceComponentRef,
    _ctx: CircuitJsonDeserializerContext,
  ): string | undefined {
    throw new Error(
      "CircuitJsonDeserializer.deserializeToTsx is not implemented",
    )
  }

  static getPropsFromElement(
    _ref: SourceComponentRef,
    _ctx: CircuitJsonDeserializerContext,
  ): object | undefined {
    throw new Error(
      "CircuitJsonDeserializer.getPropsFromElement is not implemented",
    )
  }
}
