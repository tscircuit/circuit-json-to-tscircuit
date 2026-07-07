import type { SoupUtilObjects } from "@tscircuit/soup-util"
import { formatTsxElement, type TsxProps } from "./format-tsx"
import type { PropsSchema } from "./get-props-from-element"
import {
  getSourceComponentProps,
  type SourceComponent,
} from "./get-source-component-props"

interface CircuitJsonDeserializerClass {
  ftype: SourceComponent["ftype"]
  tsxElementName: string
  propsSchema: PropsSchema
  getPropsFromElement(
    ref: { source_component_id: string },
    db: SoupUtilObjects,
  ): TsxProps | undefined
}

const getSourceComponent = (
  ref: { source_component_id: string },
  db: SoupUtilObjects,
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
    ref: { source_component_id: string },
    db: SoupUtilObjects,
  ): string | undefined {
    const source_component = getSourceComponent(ref, db)
    if (!source_component) return undefined

    const Deserializer = CircuitJsonDeserializer.registry.get(
      source_component.ftype,
    )
    if (!Deserializer) return undefined

    const props = Deserializer.getPropsFromElement(ref, db)
    if (!props) return undefined

    return formatTsxElement({
      tsxElementName: Deserializer.tsxElementName,
      props,
    })
  }

  static getPropsFromElement(
    ref: { source_component_id: string },
    db: SoupUtilObjects,
  ): TsxProps | undefined {
    const source_component = getSourceComponent(ref, db)
    if (!source_component || !this.propsSchema) return undefined

    return getSourceComponentProps(
      {
        source_component,
        propsSchema: this.propsSchema,
      },
      db,
    )
  }
}
