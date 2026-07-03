import type { SourceSimplePotentiometer } from "circuit-json"

export const getPotentiometerProps = (
  component: SourceSimplePotentiometer,
) => ({
  maxResistance: component.display_max_resistance ?? component.max_resistance,
})
