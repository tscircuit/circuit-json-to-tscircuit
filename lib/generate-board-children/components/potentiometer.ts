import type { SourceSimplePotentiometer } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Potentiometer extends CircuitJsonDeserializer<SourceSimplePotentiometer> {
  static readonly ftype = "simple_potentiometer"

  static getPropsFromElement(element: SourceSimplePotentiometer): TsxProps {
    return {
      maxResistance: element.display_max_resistance ?? element.max_resistance,
    }
  }
}

CircuitJsonDeserializer.register(Potentiometer)
