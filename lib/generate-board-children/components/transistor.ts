import type { SourceSimpleTransistor } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Transistor extends CircuitJsonDeserializer<SourceSimpleTransistor> {
  static readonly ftype = "simple_transistor"

  static getPropsFromElement(element: SourceSimpleTransistor) {
    return { type: element.transistor_type }
  }
}

CircuitJsonDeserializer.register(Transistor)
