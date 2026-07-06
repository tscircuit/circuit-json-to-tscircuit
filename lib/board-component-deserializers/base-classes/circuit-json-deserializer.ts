import {
  getSourceComponentProps,
  type PropsSchema,
} from "../get-props-from-element"
import { formatTsxElement, type TsxProps } from "../format-tsx"
import type {
  CircuitJsonElementRef,
  DeserializerContext,
  SourceComponent,
} from "../types"

interface CircuitJsonDeserializerClass {
  ftype: SourceComponent["ftype"]
  tsxElementName?: string
  propsSchema: PropsSchema
  getPropsFromElement(
    ref: CircuitJsonElementRef,
    context: DeserializerContext,
  ): TsxProps | undefined
}

export class CircuitJsonDeserializer {
  private static registry = new Map<string, CircuitJsonDeserializerClass>()

  static propsSchema: PropsSchema = { shape: {} }

  static register(Deserializer: CircuitJsonDeserializerClass): void {
    CircuitJsonDeserializer.registry.set(Deserializer.ftype, Deserializer)
  }

  static deserializeToTsx(
    ref: CircuitJsonElementRef,
    context: DeserializerContext,
  ): string | undefined {
    const { source_component_id } = ref
    if (!source_component_id) return undefined

    const sourceComponent = context.db.source_component.get(source_component_id)
    if (!sourceComponent) return undefined

    const Deserializer = CircuitJsonDeserializer.registry.get(
      sourceComponent.ftype,
    )
    if (!Deserializer) return undefined

    const props = Deserializer.getPropsFromElement(ref, context)
    if (!props) return undefined

    const tsxElementName =
      Deserializer.tsxElementName ??
      Deserializer.ftype.replace(/^simple_/, "").replaceAll("_", "")

    return formatTsxElement(tsxElementName, props)
  }

  static getPropsFromElement(
    ref: CircuitJsonElementRef,
    context: DeserializerContext,
  ): TsxProps | undefined {
    const { source_component_id } = ref
    if (!source_component_id) return undefined

    const sourceComponent = context.db.source_component.get(source_component_id)
    if (!sourceComponent) return undefined

    return getSourceComponentProps(
      sourceComponent,
      context.db,
      this.propsSchema,
    )
  }
}
