import type { SourceSimpleSwitch } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Switch extends CircuitJsonDeserializer<SourceSimpleSwitch> {
  static readonly ftype = "simple_switch"

  static getPropsFromElement(_element: SourceSimpleSwitch) {
    return {}
  }
}

CircuitJsonDeserializer.register(Switch)
