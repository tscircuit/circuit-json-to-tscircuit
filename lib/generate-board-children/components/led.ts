import type { SourceSimpleLed } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Led extends CircuitJsonDeserializer<SourceSimpleLed> {
  static readonly ftype = "simple_led"

  static getPropsFromElement(element: SourceSimpleLed): TsxProps {
    return {
      color: element.color,
      wavelength: element.wavelength,
    }
  }
}

CircuitJsonDeserializer.register(Led)
