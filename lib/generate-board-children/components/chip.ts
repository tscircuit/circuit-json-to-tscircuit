import type { SourceSimpleChip } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Chip extends CircuitJsonDeserializer<SourceSimpleChip> {
  static readonly ftype = "simple_chip"

  static getPropsFromElement(_element: SourceSimpleChip) {
    return {}
  }
}

CircuitJsonDeserializer.register(Chip)
