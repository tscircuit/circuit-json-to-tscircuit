import type { SourceSimpleCurrentSource } from "circuit-json"

export const getCurrentSourceAttributes = (
  component: SourceSimpleCurrentSource,
) => ({
  current: component.current,
  frequency: component.frequency,
  peakToPeakCurrent: component.peak_to_peak_current,
  waveShape: component.wave_shape,
  phase: component.phase,
  dutyCycle: component.duty_cycle,
})
