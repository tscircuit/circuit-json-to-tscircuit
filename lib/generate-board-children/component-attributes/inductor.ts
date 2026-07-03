import type { SourceSimpleInductor } from "circuit-json"

export const getInductorAttributes = (component: SourceSimpleInductor) => ({
  inductance: component.display_inductance ?? component.inductance,
  maxCurrentRating: component.max_current_rating,
})
