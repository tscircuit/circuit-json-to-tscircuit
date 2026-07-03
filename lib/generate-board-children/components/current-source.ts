import type { SourceSimpleCurrentSource } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"
import type { TsxProps } from "../format-tsx-element"

export class CurrentSource extends CircuitJsonDeserializer<SourceSimpleCurrentSource> {
  static readonly ftype = "simple_current_source"

  static getPropsFromElement(element: SourceSimpleCurrentSource): TsxProps {
    return {
      current: element.current,
      frequency: element.frequency,
      peakToPeakCurrent: element.peak_to_peak_current,
      waveShape: element.wave_shape,
      phase: element.phase,
      dutyCycle: element.duty_cycle,
    }
  }
}

CircuitJsonDeserializer.register(CurrentSource)
