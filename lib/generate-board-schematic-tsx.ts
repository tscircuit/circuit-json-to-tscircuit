import type { AnyCircuitElement } from "circuit-json"
import { convertPrimitives } from "./generate-board-schematic-tsx/convert-primitives"
import { convertComponents } from "./generate-board-schematic-tsx/convert-components"
import { convertSchematicGraphics } from "./generate-board-schematic-tsx/convert-schematic-graphics"
import { convertNetLabels } from "./generate-board-schematic-tsx/convert-net-labels"
import { convertTraces } from "./generate-board-schematic-tsx/convert-traces"

export const generateBoardSchematicTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const elementStrings = generateBoardSchematicElements(circuitJson)
  return elementStrings.length
    ? `<symbol>\n${elementStrings.join("\n")}\n</symbol>`
    : null
}

export const generateBoardSchematicElements = (
  circuitJson: AnyCircuitElement[],
): string[] => {
  return [
    ...convertTraces(circuitJson),
    ...convertComponents(circuitJson),
    ...convertNetLabels(circuitJson),
    ...convertPrimitives(circuitJson),
    ...convertSchematicGraphics(circuitJson),
  ]
}
