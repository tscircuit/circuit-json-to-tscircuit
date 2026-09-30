import type { AnyCircuitElement } from "circuit-json"
import { convertBoardCircuitJson } from "./board-converter/convert-board-circuit-json"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
}

export const getBoardUsingTemplate = ({ circuitJson }: BoardTemplateParams) => {
  return convertBoardCircuitJson(circuitJson)
}
