import type { SourceSimpleCrystal } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Crystal extends CircuitJsonDeserializer<SourceSimpleCrystal> {
  static readonly ftype = "simple_crystal"

  static getPropsFromElement(element: SourceSimpleCrystal): TsxProps {
    return {
      frequency: element.frequency,
      loadCapacitance: element.load_capacitance,
      pinVariant: element.pin_variant,
    }
  }
}

CircuitJsonDeserializer.register(Crystal)
