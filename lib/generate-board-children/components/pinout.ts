import type { SourceSimplePinout } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Pinout extends CircuitJsonDeserializer<SourceSimplePinout> {
  static readonly ftype = "simple_pinout"

  static getPropsFromElement(_element: SourceSimplePinout) {
    return {}
  }
}

CircuitJsonDeserializer.register(Pinout)
