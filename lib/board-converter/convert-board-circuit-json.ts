import type { AnyCircuitElement } from "circuit-json"
import type {
  BoardConverterContext,
  BoardConverterStage,
} from "./BoardConverterContext"
import { convertBoardProperties } from "./stages/convert-board-properties"
import { convertPcbComponents } from "./stages/convert-pcb-components"
import { convertSchematicConnectivity } from "./stages/convert-schematic-connectivity"
import { convertStandalonePcbPrimitives } from "./stages/convert-standalone-pcb-primitives"

const conversionStages: BoardConverterStage[] = [
  convertBoardProperties,
  convertPcbComponents,
  convertSchematicConnectivity,
  convertStandalonePcbPrimitives,
]

export const convertBoardCircuitJson = (
  circuitJson: AnyCircuitElement[],
): string => {
  const pcbBoard = circuitJson.find((element) => element.type === "pcb_board")

  if (!pcbBoard) {
    throw new Error("Board conversion requires a pcb_board element")
  }

  const context: BoardConverterContext = {
    circuitJson,
    pcbBoard,
    boardProps: [],
    boardChildren: [],
  }

  for (const convertStage of conversionStages) {
    convertStage(context)
  }

  const boardProps = context.boardProps.join(" ")
  const boardChildren = context.boardChildren.join("\n")

  return `
export default () => (
  <board${boardProps ? ` ${boardProps}` : ""}>
    ${boardChildren.replace(/\n/g, "\n    ")}
  </board>
)
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}
