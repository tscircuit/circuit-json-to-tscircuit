import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"

export const convertBoard = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const board = su(circuitJson).pcb_board.list()[0]
  if (!board) return null
  if (su(circuitJson).source_board.list().length === 0) return null

  const attrs: string[] = []
  if (board.width !== undefined) {
    attrs.push(`width="${mmStr(board.width)}"`)
  }
  if (board.height !== undefined) {
    attrs.push(`height="${mmStr(board.height)}"`)
  }
  if (board.thickness !== undefined) {
    attrs.push(`thickness="${mmStr(board.thickness)}"`)
  }
  if (board.num_layers !== undefined) {
    attrs.push(`layers={${board.num_layers}}`)
  }
  if (board.material !== undefined) {
    attrs.push(`material="${board.material}"`)
  }

  return attrs.join(" ")
}
