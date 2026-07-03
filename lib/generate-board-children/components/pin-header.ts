import type { SourceSimplePinHeader } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class PinHeader extends CircuitJsonDeserializer<SourceSimplePinHeader> {
  static readonly ftype = "simple_pin_header"

  static getPropsFromElement(element: SourceSimplePinHeader) {
    return {
      pinCount: element.pin_count,
      gender: element.gender,
    }
  }
}

CircuitJsonDeserializer.register(PinHeader)
