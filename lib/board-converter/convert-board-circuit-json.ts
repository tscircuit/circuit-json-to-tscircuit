import type { AnyCircuitElement } from "circuit-json"
import { createComponentPreservingBoardConversionContext } from "./create-component-preserving-board-conversion-context"
import type {
  BoardConverterContext,
  BoardConverterStage,
} from "./BoardConverterContext"
import { convertBoardCadModels } from "./stages/convert-board-cad-models"
import { convertBoardProperties } from "./stages/convert-board-properties"
import { convertBoardSchematic } from "./stages/convert-board-schematic"
import { convertBoardNets } from "./stages/convert-board-nets"
import { convertBoardTraces } from "./stages/convert-board-traces"
import { convertCopperPours } from "./stages/convert-copper-pours"
import { convertPcbComponents } from "./stages/convert-pcb-components"
import { convertStandalonePcbPrimitives } from "./stages/convert-standalone-pcb-primitives"

const conversionStages: BoardConverterStage[] = [
  convertBoardProperties,
  convertPcbComponents,
  convertBoardNets,
  convertBoardTraces,
  convertCopperPours,
  convertBoardSchematic,
  convertStandalonePcbPrimitives,
  convertBoardCadModels,
]

export const convertBoardCircuitJson = ({
  circuitJson,
  componentName,
}: {
  circuitJson: AnyCircuitElement[]
  componentName?: string
}): string => {
  const pcbBoard = circuitJson.find((element) => element.type === "pcb_board")

  if (!pcbBoard) {
    throw new Error("Board conversion requires a pcb_board element")
  }

  const context: BoardConverterContext = {
    circuitJson,
    footprintConversionContext:
      createComponentPreservingBoardConversionContext(circuitJson),
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
${componentName ? `export const ${componentName} =` : "export default"} () => (
  <board${boardProps ? ` ${boardProps}` : ""}>
    ${boardChildren.replace(/\n/g, "\n    ")}
  </board>
)
${componentName ? `export default ${componentName}` : ""}
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}
