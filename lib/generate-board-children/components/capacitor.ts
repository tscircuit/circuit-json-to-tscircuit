import type { SourceSimpleCapacitor } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Capacitor extends CircuitJsonDeserializer<SourceSimpleCapacitor> {
  static readonly ftype = "simple_capacitor"

  static getPropsFromElement(element: SourceSimpleCapacitor): TsxProps {
    return {
      capacitance: element.display_capacitance ?? element.capacitance,
      maxVoltageRating: element.max_voltage_rating,
    }
  }
}

CircuitJsonDeserializer.register(Capacitor)
