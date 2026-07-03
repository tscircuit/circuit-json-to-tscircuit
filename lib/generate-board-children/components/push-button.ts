import type { SourceSimplePushButton } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class PushButton extends CircuitJsonDeserializer<SourceSimplePushButton> {
  static readonly ftype = "simple_push_button"

  static getPropsFromElement(_element: SourceSimplePushButton) {
    return {}
  }
}

CircuitJsonDeserializer.register(PushButton)
