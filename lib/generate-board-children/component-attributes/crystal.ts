import type { SourceSimpleCrystal } from "circuit-json"

export const getCrystalAttributes = (component: SourceSimpleCrystal) => ({
  frequency: component.frequency,
  loadCapacitance: component.load_capacitance,
  pinVariant: component.pin_variant,
})
