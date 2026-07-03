import type { SourceSimpleVoltageProbe } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class VoltageProbe extends CircuitJsonDeserializer<SourceSimpleVoltageProbe> {
  static readonly ftype = "simple_voltage_probe"

  static getPropsFromElement(_element: SourceSimpleVoltageProbe) {
    return {}
  }
}

CircuitJsonDeserializer.register(VoltageProbe)
