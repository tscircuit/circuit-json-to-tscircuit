import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { Board } from "./board-component-deserializers/board"
import "./board-component-deserializers/classes/register-all"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
}

export const getBoardUsingTemplate = ({ circuitJson }: BoardTemplateParams) => {
  const db = su(circuitJson)
  const pcb_board = db.pcb_board.list()[0]
  if (!pcb_board) {
    throw new Error("Cannot deserialize a board without a pcb_board element")
  }

  const tsx = Board.deserializeToTsx(
    { pcb_board_id: pcb_board.pcb_board_id },
    db,
  )
  if (!tsx) {
    throw new Error(`PCB board not found: ${pcb_board.pcb_board_id}`)
  }

  return tsx
}
