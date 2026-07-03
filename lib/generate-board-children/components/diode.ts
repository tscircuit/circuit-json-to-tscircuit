import type { SourceSimpleDiode } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Diode extends CircuitJsonDeserializer<SourceSimpleDiode> {
  static readonly ftype = "simple_diode"

  static getPropsFromElement(_element: SourceSimpleDiode): TsxProps {
    return {}
  }
}

CircuitJsonDeserializer.register(Diode)
