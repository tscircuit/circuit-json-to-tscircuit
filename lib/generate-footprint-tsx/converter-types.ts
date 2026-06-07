import type { AnyCircuitElement } from "circuit-json"

export type FootprintElementConverter = (
  circuitJson: AnyCircuitElement[],
) => string[]
