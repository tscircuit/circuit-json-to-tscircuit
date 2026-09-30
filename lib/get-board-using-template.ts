import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { Board } from "./board-component-deserializers/board"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
}

export const getBoardUsingTemplate = ({ circuitJson }: BoardTemplateParams) => {
  const db = su(circuitJson)
  const pcbBoard = db.pcb_board.list()[0]
  if (!pcbBoard) {
    throw new Error("Cannot deserialize a board without a pcb_board element")
  }

  const boardTsx = Board.deserializeToTsx(
    { pcb_board_id: pcbBoard.pcb_board_id },
    { db },
  )
  if (!boardTsx) {
    throw new Error(`Unable to deserialize PCB board ${pcbBoard.pcb_board_id}`)
  }

  return boardTsx
}
