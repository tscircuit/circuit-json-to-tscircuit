import type { AnySourceElement } from "circuit-json"
import type {
  CircuitJsonDeserializerContext,
  SourceComponentRef,
} from "./circuit-json-deserializer"

type SourceComponent = Extract<
  AnySourceElement,
  { type: "source_component"; ftype: string }
>

interface RegisteredCircuitJsonDeserializerClass {
  ftype: SourceComponent["ftype"]
  deserializeToTsx(
    ref: SourceComponentRef,
    ctx: CircuitJsonDeserializerContext,
  ): string | undefined
}

const deserializerClassByFtype = new Map<
  SourceComponent["ftype"],
  RegisteredCircuitJsonDeserializerClass
>()

export const registerCircuitJsonDeserializer = (
  deserializerClass: RegisteredCircuitJsonDeserializerClass,
): void => {
  deserializerClassByFtype.set(deserializerClass.ftype, deserializerClass)
}

export const deserializeSourceComponentToTsx = (
  ref: SourceComponentRef,
  { db }: CircuitJsonDeserializerContext,
): string | undefined => {
  const sourceComponent = db.source_component.get(ref.source_component_id)
  if (!sourceComponent) return undefined

  const deserializerClass = deserializerClassByFtype.get(sourceComponent.ftype)
  if (!deserializerClass) return undefined

  return deserializerClass.deserializeToTsx(ref, { db })
}
