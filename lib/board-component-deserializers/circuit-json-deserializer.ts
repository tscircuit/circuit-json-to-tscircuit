import { formatTsxElement, type TsxProps } from "./format-tsx"
import type { PropsSchema } from "./get-props-from-element"
import { getSourceComponentProps } from "./get-source-component-props"
import type {
  DeserializerContext,
  SourceComponent,
  SourceComponentRef,
} from "./types"

interface CircuitJsonDeserializerClass {
  ftype: SourceComponent["ftype"]
  tsxElementName: string
  propsSchema: PropsSchema
  getPropsFromElement(
    ref: SourceComponentRef,
    context: DeserializerContext,
  ): TsxProps | undefined
}

const getSourceComponent = (
  ref: SourceComponentRef,
  { db }: DeserializerContext,
): SourceComponent | undefined => {
  const { source_component_id } = ref
  return db.source_component.get(source_component_id) ?? undefined
}

export class CircuitJsonDeserializer {
  private static registry = new Map<
    SourceComponent["ftype"],
    CircuitJsonDeserializerClass
  >()

  static propsSchema?: PropsSchema

  static register(Deserializer: CircuitJsonDeserializerClass): void {
    CircuitJsonDeserializer.registry.set(Deserializer.ftype, Deserializer)
  }

  static deserializeToTsx(
    ref: SourceComponentRef,
    context: DeserializerContext,
  ): string | undefined {
    const source_component = getSourceComponent(ref, context)
    if (!source_component) return undefined

    const Deserializer = CircuitJsonDeserializer.registry.get(
      source_component.ftype,
    )
    if (!Deserializer) return undefined

    const props = Deserializer.getPropsFromElement(ref, context)
    if (!props) return undefined

    return formatTsxElement({ name: Deserializer.tsxElementName, props })
  }

  static getPropsFromElement(
    ref: SourceComponentRef,
    context: DeserializerContext,
  ): TsxProps | undefined {
    const source_component = getSourceComponent(ref, context)
    if (!source_component || !this.propsSchema) return undefined

    return getSourceComponentProps(
      {
        source_component,
        propsSchema: this.propsSchema,
      },
      context,
    )
  }
}
