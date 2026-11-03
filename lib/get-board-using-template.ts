import type { AnyCircuitElement } from "circuit-json"
import { convertBoardCircuitJson } from "./board-converter/convert-board-circuit-json"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
  componentName?: string
  /** Preserve imported artwork by default; recompute uses explicit board clearances. */
  copperPourMode?: "preserve" | "recompute"
}

export const getBoardUsingTemplate = ({
  circuitJson,
  componentName,
  copperPourMode,
}: BoardTemplateParams) =>
  convertBoardCircuitJson({ circuitJson, componentName, copperPourMode })
