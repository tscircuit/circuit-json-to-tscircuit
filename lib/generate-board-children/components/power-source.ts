import type { SourceSimplePowerSource } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class PowerSource extends CircuitJsonDeserializer<SourceSimplePowerSource> {
  static readonly ftype = "simple_power_source"
  static readonly elementName = "battery"

  static getPropsFromElement(element: SourceSimplePowerSource): TsxProps {
    return { voltage: element.voltage }
  }
}

CircuitJsonDeserializer.register(PowerSource)
