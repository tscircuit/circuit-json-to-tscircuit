import type { SourceSimpleResistor } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Resistor extends CircuitJsonDeserializer<SourceSimpleResistor> {
  static readonly ftype = "simple_resistor"

  static getPropsFromElement(element: SourceSimpleResistor): TsxProps {
    return {
      resistance:
        element.display_resistance?.replace(/Ω$/, "") ?? element.resistance,
    }
  }
}

CircuitJsonDeserializer.register(Resistor)
