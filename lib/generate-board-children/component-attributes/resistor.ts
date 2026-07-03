import type { SourceSimpleResistor } from "circuit-json"

export const getResistorAttributes = (component: SourceSimpleResistor) => ({
  resistance:
    component.display_resistance?.replace(/Ω$/, "") ?? component.resistance,
})
