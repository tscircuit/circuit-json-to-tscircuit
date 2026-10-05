import type { AnyCircuitElement } from "circuit-json"
import type { BoardConversionContext } from "../board-conversion-context"

export type FootprintElementConverter = (
  circuitJson: AnyCircuitElement[],
  context?: BoardConversionContext,
) => string[]
