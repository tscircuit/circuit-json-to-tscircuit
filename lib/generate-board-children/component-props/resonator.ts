import type { SourceSimpleResonator } from "circuit-json"

export const getResonatorProps = (component: SourceSimpleResonator) => ({
  frequency: component.frequency,
  loadCapacitance: component.load_capacitance,
})
