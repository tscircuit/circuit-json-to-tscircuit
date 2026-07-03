import type { SourceSimplePushButton } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class PushButton extends CircuitJsonDeserializer<SourceSimplePushButton> {
  static readonly ftype = "simple_push_button"

  static getPropsFromElement(_element: SourceSimplePushButton): TsxProps {
    return {}
  }
}

CircuitJsonDeserializer.register(PushButton)
