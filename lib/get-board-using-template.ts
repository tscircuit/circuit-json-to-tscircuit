import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { Board } from "./board-component-deserializers/classes/board"
import "./board-component-deserializers/classes/register-all"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
}

export const getBoardUsingTemplate = ({ circuitJson }: BoardTemplateParams) => {
  const db = su(circuitJson)
  const pcbBoard = db.pcb_board.list()[0]
  if (!pcbBoard) {
    throw new Error("Cannot deserialize a board without a pcb_board element")
  }

  const tsx = Board.deserializeToTsx(
    { pcb_board_id: pcbBoard.pcb_board_id },
    { db },
  )
  if (!tsx) {
    throw new Error(`PCB board not found: ${pcbBoard.pcb_board_id}`)
  }

  return tsx
}
