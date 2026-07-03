import type { SourceSimpleVoltageProbe } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class VoltageProbe extends CircuitJsonDeserializer<SourceSimpleVoltageProbe> {
  static readonly ftype = "simple_voltage_probe"

  static getPropsFromElement(_element: SourceSimpleVoltageProbe): TsxProps {
    return {}
  }
}

CircuitJsonDeserializer.register(VoltageProbe)
