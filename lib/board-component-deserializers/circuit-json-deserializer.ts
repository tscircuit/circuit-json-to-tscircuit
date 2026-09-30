import type { SoupUtilObjects } from "@tscircuit/soup-util"
import type { AnySourceElement } from "circuit-json"

export type SourceComponent = Extract<
  AnySourceElement,
  { type: "source_component"; ftype: string }
>

export type SourceComponentFtype = SourceComponent["ftype"]

export type SourceComponentForFtype<Ftype extends SourceComponentFtype> =
  Extract<SourceComponent, { ftype: Ftype }>

export interface SourceComponentRef {
  source_component_id: string
}

export interface CircuitJsonDeserializerContext {
  db: SoupUtilObjects
}

/**
 * The static contract implemented by each component-specific deserializer.
 *
 * Keeping this as an interface, instead of a base class with generic behavior,
 * makes a missing component implementation a type error at registration time.
 */
export interface CircuitJsonDeserializer<
  Ftype extends SourceComponentFtype,
  Props extends object,
> {
  readonly ftype: Ftype
  getPropsFromElement(
    ref: SourceComponentRef,
    ctx: CircuitJsonDeserializerContext,
  ): Props | undefined
  deserializeToTsx(
    ref: SourceComponentRef,
    ctx: CircuitJsonDeserializerContext,
  ): string | undefined
}
