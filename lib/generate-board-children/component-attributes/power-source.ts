import type { SourceSimplePowerSource } from "circuit-json"

export const getPowerSourceAttributes = (
  component: SourceSimplePowerSource,
) => ({
  voltage: component.voltage,
})
