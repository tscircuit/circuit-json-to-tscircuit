import type { SourceSimpleCrystal } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Crystal extends CircuitJsonDeserializer<SourceSimpleCrystal> {
  static readonly ftype = "simple_crystal"

  static getPropsFromElement(element: SourceSimpleCrystal) {
    return {
      frequency: element.frequency,
      loadCapacitance: element.load_capacitance,
      pinVariant: element.pin_variant,
    }
  }
}

CircuitJsonDeserializer.register(Crystal)
