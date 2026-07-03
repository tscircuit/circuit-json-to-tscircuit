import type { SourceSimplePowerSource } from "circuit-json"

export const getPowerSourceProps = (component: SourceSimplePowerSource) => ({
  voltage: component.voltage,
})
