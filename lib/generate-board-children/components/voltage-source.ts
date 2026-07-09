import type { SourceSimpleVoltageSource } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class VoltageSource extends CircuitJsonDeserializer<SourceSimpleVoltageSource> {
  static readonly ftype = "simple_voltage_source"

  static getPropsFromElement(element: SourceSimpleVoltageSource): TsxProps {
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
