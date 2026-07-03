import type { SourceSimpleFuse } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Fuse extends CircuitJsonDeserializer<SourceSimpleFuse> {
  static readonly ftype = "simple_fuse"

  static getPropsFromElement(element: SourceSimpleFuse) {
    return {
      currentRating: element.current_rating_amps,
      voltageRating: element.voltage_rating_volts,
    }
  }
}

CircuitJsonDeserializer.register(Fuse)
