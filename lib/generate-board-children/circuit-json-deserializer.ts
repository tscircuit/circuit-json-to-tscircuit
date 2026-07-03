import type { AnySourceElement } from "circuit-json"
import type { JsxProps } from "./format-jsx-element"

export type SourceComponent = Extract<
  AnySourceElement,
  { type: "source_component"; ftype: string }
>

interface CircuitJsonDeserializerClass<Element extends SourceComponent> {
  readonly prototype: CircuitJsonDeserializer<Element>
  readonly ftype: Element["ftype"]
  readonly elementName?: string
  getPropsFromElement(element: Element): JsxProps
}

export abstract class CircuitJsonDeserializer<Element extends SourceComponent> {
  protected declare readonly element: Element

  private static registry = new Map<
    string,
    CircuitJsonDeserializerClass<SourceComponent>
  >()

  static register<Element extends SourceComponent>(
    Deserializer: CircuitJsonDeserializerClass<Element>,
  ): void {
    CircuitJsonDeserializer.registry.set(Deserializer.ftype, Deserializer)
  }

  static deserialize(element: SourceComponent) {
    const Deserializer = CircuitJsonDeserializer.registry.get(element.ftype)
    if (!Deserializer) return undefined

    return {
      elementName:
        Deserializer.elementName ??
        Deserializer.ftype.replace(/^simple_/, "").replaceAll("_", ""),
      props: Deserializer.getPropsFromElement(element),
    }
  }
}
