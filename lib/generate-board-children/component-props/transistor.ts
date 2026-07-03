import type { SourceSimpleTransistor } from "circuit-json"

export const getTransistorProps = (component: SourceSimpleTransistor) => ({
  type: component.transistor_type,
})
