import { generateCopperPoursTsx } from "../../generate-copper-pours-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertCopperPours: BoardConverterStage = ({
  boardChildren,
  circuitJson,
  footprintConversionContext,
  copperPourMode,
}) => {
  boardChildren.push(
    ...generateCopperPoursTsx(circuitJson, {
      ...footprintConversionContext,
      copperPourMode,
    }),
  )
}
