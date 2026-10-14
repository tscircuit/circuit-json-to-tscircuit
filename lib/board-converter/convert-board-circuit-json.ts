import type { AnyCircuitElement } from "circuit-json"
import type {
  BoardConverterContext,
  BoardConverterStage,
} from "./BoardConverterContext"
import { createComponentPreservingBoardConversionContext } from "./create-component-preserving-board-conversion-context"
import { getPcbComponentRuntimeNameByPcbComponentId } from "./get-pcb-component-runtime-name-by-pcb-component-id"
import { convertBoardCadModels } from "./stages/convert-board-cad-models"
import { convertBoardNets } from "./stages/convert-board-nets"
import { convertBoardProperties } from "./stages/convert-board-properties"
import { convertBoardSchematic } from "./stages/convert-board-schematic"
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

  const pcbComponentRuntimeNameByPcbComponentId =
    getPcbComponentRuntimeNameByPcbComponentId(circuitJson)

  const context: BoardConverterContext = {
    circuitJson,
    footprintConversionContext: createComponentPreservingBoardConversionContext(
      {
        circuitJson,
        pcbComponentRuntimeNameByPcbComponentId,
      },
    ),
    pcbComponentRuntimeNameByPcbComponentId,
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
