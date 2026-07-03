import type { SourceSimpleBattery } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Battery extends CircuitJsonDeserializer<SourceSimpleBattery> {
  static readonly ftype = "simple_battery"

  static getPropsFromElement(element: SourceSimpleBattery) {
    return { capacity: element.capacity }
  }
}

CircuitJsonDeserializer.register(Battery)
