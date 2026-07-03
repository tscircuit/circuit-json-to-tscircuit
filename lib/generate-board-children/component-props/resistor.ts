import type { SourceSimpleResistor } from "circuit-json"

export const getResistorProps = (component: SourceSimpleResistor) => ({
  resistance:
    component.display_resistance?.replace(/Ω$/, "") ?? component.resistance,
})
