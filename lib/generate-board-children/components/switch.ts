import type { SourceSimpleSwitch } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Switch extends CircuitJsonDeserializer<SourceSimpleSwitch> {
  static readonly ftype = "simple_switch"

  static getPropsFromElement(_element: SourceSimpleSwitch): TsxProps {
    return {}
  }
}

CircuitJsonDeserializer.register(Switch)
