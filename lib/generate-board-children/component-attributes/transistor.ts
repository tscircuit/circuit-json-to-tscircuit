import type { SourceSimpleTransistor } from "circuit-json"

export const getTransistorAttributes = (component: SourceSimpleTransistor) => ({
  type: component.transistor_type,
})
