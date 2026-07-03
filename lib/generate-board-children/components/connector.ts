import type { SourceSimpleConnector } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Connector extends CircuitJsonDeserializer<SourceSimpleConnector> {
  static readonly ftype = "simple_connector"

  static getPropsFromElement(element: SourceSimpleConnector) {
    return { standard: element.standard }
  }
}

CircuitJsonDeserializer.register(Connector)
