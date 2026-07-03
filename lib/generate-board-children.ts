import type { AnyCircuitElement } from "circuit-json"
import { generateSourceComponentChildren } from "./generate-board-children/generate-source-component-children"

export const generateBoardChildren = (
  circuitJson: AnyCircuitElement[],
): string[] => generateSourceComponentChildren(circuitJson)
