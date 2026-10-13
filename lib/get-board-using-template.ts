import type { AnyCircuitElement } from "circuit-json"
import { convertBoardCircuitJson } from "./board-converter/convert-board-circuit-json"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
  componentName?: string
}

export const getBoardUsingTemplate = ({
  circuitJson,
  componentName,
}: BoardTemplateParams) =>
  convertBoardCircuitJson({ circuitJson, componentName })
