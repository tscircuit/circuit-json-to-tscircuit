import type { SourceSimpleVoltageSource } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class VoltageSource extends CircuitJsonDeserializer<SourceSimpleVoltageSource> {
  static readonly ftype = "simple_voltage_source"

  static getPropsFromElement(element: SourceSimpleVoltageSource) {
    return {
      voltage: element.voltage,
      frequency: element.frequency,
      peakToPeakVoltage: element.peak_to_peak_voltage,
      waveShape: element.wave_shape,
      phase: element.phase,
      dutyCycle: element.duty_cycle,
    }
  }
}

CircuitJsonDeserializer.register(VoltageSource)
