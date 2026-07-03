import type { SourceSimpleLed } from "circuit-json"

export const getLedProps = (component: SourceSimpleLed) => ({
  color: component.color,
  wavelength: component.wavelength,
})
