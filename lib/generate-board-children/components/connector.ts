import type { SourceSimpleConnector } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Connector extends CircuitJsonDeserializer<SourceSimpleConnector> {
  static readonly ftype = "simple_connector"

  static getPropsFromElement(element: SourceSimpleConnector): TsxProps {
    return { standard: element.standard }
  }
}

CircuitJsonDeserializer.register(Connector)
