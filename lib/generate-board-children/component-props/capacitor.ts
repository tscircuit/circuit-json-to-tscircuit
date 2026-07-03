import type { SourceSimpleCapacitor } from "circuit-json"

export const getCapacitorProps = (component: SourceSimpleCapacitor) => ({
  capacitance: component.display_capacitance ?? component.capacitance,
  maxVoltageRating: component.max_voltage_rating,
})
