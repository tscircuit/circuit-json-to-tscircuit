import type { SourceSimpleMosfet } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class Mosfet extends CircuitJsonDeserializer<SourceSimpleMosfet> {
  static readonly ftype = "simple_mosfet"

  static getPropsFromElement(element: SourceSimpleMosfet): TsxProps {
    return {
      channelType: element.channel_type,
      mosfetMode: element.mosfet_mode,
    }
  }
}

CircuitJsonDeserializer.register(Mosfet)
