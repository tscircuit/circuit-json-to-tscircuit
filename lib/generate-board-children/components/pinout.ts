import type { SourceSimplePinout } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Pinout extends CircuitJsonDeserializer<SourceSimplePinout> {
  static readonly ftype = "simple_pinout"

  static getPropsFromElement(_element: SourceSimplePinout): TsxProps {
    return {}
  }
}

CircuitJsonDeserializer.register(Pinout)
