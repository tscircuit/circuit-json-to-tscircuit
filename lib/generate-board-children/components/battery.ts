import type { SourceSimpleBattery } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Battery extends CircuitJsonDeserializer<SourceSimpleBattery> {
  static readonly ftype = "simple_battery"

  static getPropsFromElement(element: SourceSimpleBattery): TsxProps {
    return { capacity: element.capacity }
  }
}

CircuitJsonDeserializer.register(Battery)
