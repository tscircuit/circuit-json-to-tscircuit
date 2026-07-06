import type { CircuitJson } from "circuit-json"
import { getBoardUsingTemplate } from "./get-board-using-template"
import {
  getComponentUsingTemplate,
  type ComponentTemplateParams,
} from "./get-component-using-template"

export const convertCircuitJsonToTscircuit = (
  circuitJson: CircuitJson,
  opts: Omit<ComponentTemplateParams, "circuitJson">,
) => {
  // A pcb_board is only present when the circuit json was authored as a
  // board, so it routes to the board converter. A footprint/component import
  // (the chip use case) has no pcb_board and falls through to the chip path.
  const hasBoard = circuitJson.some((el) => el.type === "pcb_board")

  if (hasBoard) {
    return getBoardUsingTemplate({ circuitJson })
  }

  return getComponentUsingTemplate({
    circuitJson,
    ...opts,
  })
}
