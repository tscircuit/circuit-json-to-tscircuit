import type { AnyCircuitElement } from "circuit-json"

export type SchematicElementConverter = (
  circuitJson: AnyCircuitElement[],
) => string[]
