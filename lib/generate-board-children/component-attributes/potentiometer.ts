import type { SourceSimplePotentiometer } from "circuit-json"

export const getPotentiometerAttributes = (
  component: SourceSimplePotentiometer,
) => ({
  maxResistance: component.display_max_resistance ?? component.max_resistance,
})
