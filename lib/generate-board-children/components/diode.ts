import type { SourceSimpleDiode } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Diode extends CircuitJsonDeserializer<SourceSimpleDiode> {
  static readonly ftype = "simple_diode"

  static getPropsFromElement(_element: SourceSimpleDiode) {
    return {}
  }
}

CircuitJsonDeserializer.register(Diode)
