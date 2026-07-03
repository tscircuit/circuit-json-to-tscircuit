import type { SourceSimpleResonator } from "circuit-json"

export const getResonatorAttributes = (component: SourceSimpleResonator) => ({
  frequency: component.frequency,
  loadCapacitance: component.load_capacitance,
})
