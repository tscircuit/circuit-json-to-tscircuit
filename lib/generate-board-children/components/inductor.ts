import type { SourceSimpleInductor } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Inductor extends CircuitJsonDeserializer<SourceSimpleInductor> {
  static readonly ftype = "simple_inductor"

  static getPropsFromElement(element: SourceSimpleInductor) {
    return {
      inductance: element.display_inductance ?? element.inductance,
      maxCurrentRating: element.max_current_rating,
    }
  }
}

CircuitJsonDeserializer.register(Inductor)
