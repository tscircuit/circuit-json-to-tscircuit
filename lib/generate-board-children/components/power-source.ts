import type { SourceSimplePowerSource } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class PowerSource extends CircuitJsonDeserializer<SourceSimplePowerSource> {
  static readonly ftype = "simple_power_source"
  static readonly elementName = "battery"

  static getPropsFromElement(element: SourceSimplePowerSource) {
    return { voltage: element.voltage }
  }
}

CircuitJsonDeserializer.register(PowerSource)
