import type { SourceSimpleOpAmp } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class OpAmp extends CircuitJsonDeserializer<SourceSimpleOpAmp> {
  static readonly ftype = "simple_op_amp"

  static getPropsFromElement(_element: SourceSimpleOpAmp) {
    return {}
  }
}

CircuitJsonDeserializer.register(OpAmp)
