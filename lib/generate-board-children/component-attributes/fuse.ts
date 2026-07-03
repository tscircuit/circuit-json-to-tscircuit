import type { SourceSimpleFuse } from "circuit-json"

export const getFuseAttributes = (component: SourceSimpleFuse) => ({
  currentRating: component.current_rating_amps,
  voltageRating: component.voltage_rating_volts,
})
