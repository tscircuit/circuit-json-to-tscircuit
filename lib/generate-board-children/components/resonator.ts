import type { SourceSimpleResonator } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Resonator extends CircuitJsonDeserializer<SourceSimpleResonator> {
  static readonly ftype = "simple_resonator"

  static getPropsFromElement(element: SourceSimpleResonator): TsxProps {
    return {
      frequency: element.frequency,
      loadCapacitance: element.load_capacitance,
    }
  }
}

CircuitJsonDeserializer.register(Resonator)
