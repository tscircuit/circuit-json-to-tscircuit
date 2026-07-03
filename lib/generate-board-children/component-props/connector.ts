import type { SourceSimpleConnector } from "circuit-json"

export const getConnectorProps = (component: SourceSimpleConnector) => ({
  standard: component.standard,
})
