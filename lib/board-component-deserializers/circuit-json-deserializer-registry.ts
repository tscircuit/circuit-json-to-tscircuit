import type { ResistorProps } from "@tscircuit/props"
import type {
  CircuitJsonDeserializer,
  CircuitJsonDeserializerContext,
  SourceComponentFtype,
  SourceComponentRef,
} from "./circuit-json-deserializer"
import { Resistor } from "./classes/resistor"

interface CircuitJsonDeserializerPropsByFtype {
  simple_resistor: ResistorProps
}

type CircuitJsonDeserializerRegistry = {
  [Ftype in keyof CircuitJsonDeserializerPropsByFtype]: Ftype extends SourceComponentFtype
    ? CircuitJsonDeserializer<Ftype, CircuitJsonDeserializerPropsByFtype[Ftype]>
    : never
}

// Adding an entry to CircuitJsonDeserializerPropsByFtype requires a matching
// deserializer whose ftype and getPropsFromElement return type both agree.
const circuitJsonDeserializerRegistry = {
  simple_resistor: Resistor,
} satisfies CircuitJsonDeserializerRegistry

type RegisteredSourceComponentFtype =
  keyof typeof circuitJsonDeserializerRegistry

const isRegisteredSourceComponentFtype = (
  ftype: SourceComponentFtype,
): ftype is RegisteredSourceComponentFtype =>
  Object.hasOwn(circuitJsonDeserializerRegistry, ftype)

export const deserializeSourceComponentToTsx = (
  ref: SourceComponentRef,
  ctx: CircuitJsonDeserializerContext,
): string | undefined => {
  const sourceComponent = ctx.db.source_component.get(ref.source_component_id)
  if (!sourceComponent) return undefined

  if (!isRegisteredSourceComponentFtype(sourceComponent.ftype)) return undefined

  const circuitJsonDeserializer =
    circuitJsonDeserializerRegistry[sourceComponent.ftype]
  return circuitJsonDeserializer.deserializeToTsx(ref, ctx)
}
