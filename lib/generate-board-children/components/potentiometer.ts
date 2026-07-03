import type { SourceSimplePotentiometer } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Potentiometer extends CircuitJsonDeserializer<SourceSimplePotentiometer> {
  static readonly ftype = "simple_potentiometer"

  static getPropsFromElement(element: SourceSimplePotentiometer) {
    return {
      maxResistance: element.display_max_resistance ?? element.max_resistance,
    }
  }
}

CircuitJsonDeserializer.register(Potentiometer)
