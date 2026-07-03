import type { SourceSimpleConnector } from "circuit-json"

export const getConnectorAttributes = (component: SourceSimpleConnector) => ({
  standard: component.standard,
})
