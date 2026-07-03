import type { SourceSimpleLed } from "circuit-json"

export const getLedAttributes = (component: SourceSimpleLed) => ({
  color: component.color,
  wavelength: component.wavelength,
})
