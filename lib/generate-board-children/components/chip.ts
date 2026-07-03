import type { SourceSimpleChip } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Chip extends CircuitJsonDeserializer<SourceSimpleChip> {
  static readonly ftype = "simple_chip"

  static getPropsFromElement(_element: SourceSimpleChip): TsxProps {
    return {}
  }
}

CircuitJsonDeserializer.register(Chip)
