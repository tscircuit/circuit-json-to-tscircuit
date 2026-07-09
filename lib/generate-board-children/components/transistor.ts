import type { SourceSimpleTransistor } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Transistor extends CircuitJsonDeserializer<SourceSimpleTransistor> {
  static readonly ftype = "simple_transistor"

  static getPropsFromElement(element: SourceSimpleTransistor): TsxProps {
    return { type: element.transistor_type }
  }
}

CircuitJsonDeserializer.register(Transistor)
