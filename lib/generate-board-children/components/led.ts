import type { SourceSimpleLed } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Led extends CircuitJsonDeserializer<SourceSimpleLed> {
  static readonly ftype = "simple_led"

  static getPropsFromElement(element: SourceSimpleLed) {
    return {
      color: element.color,
      wavelength: element.wavelength,
    }
  }
}

CircuitJsonDeserializer.register(Led)
