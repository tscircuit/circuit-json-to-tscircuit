import type { SourceSimpleOpAmp } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class OpAmp extends CircuitJsonDeserializer<SourceSimpleOpAmp> {
  static readonly ftype = "simple_op_amp"

  static getPropsFromElement(_element: SourceSimpleOpAmp): TsxProps {
    return {}
  }
}

CircuitJsonDeserializer.register(OpAmp)
