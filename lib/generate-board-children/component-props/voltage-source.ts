import type { SourceSimpleVoltageSource } from "circuit-json"

export const getVoltageSourceProps = (
  component: SourceSimpleVoltageSource,
) => ({
  voltage: component.voltage,
  frequency: component.frequency,
  peakToPeakVoltage: component.peak_to_peak_voltage,
  waveShape: component.wave_shape,
  phase: component.phase,
  dutyCycle: component.duty_cycle,
})
