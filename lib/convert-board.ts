import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"

export const convertBoard = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const board = su(circuitJson).pcb_board.list()[0]
  if (!board) return null
  const sourceBoard = su(circuitJson).source_board.list()[0]
  if (!sourceBoard) return null

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
  if (sourceBoard.title !== undefined) {
    attrs.push(`title=${JSON.stringify(sourceBoard.title)}`)
  }
  if (board.outline !== undefined) {
    attrs.push(`outline={${JSON.stringify(board.outline)}}`)
  }
  if (board.anchor_position !== undefined) {
    attrs.push(
      `boardAnchorPosition={{ x: ${board.anchor_position.x}, y: ${board.anchor_position.y} }}`,
    )
  }
  if (board.anchor_alignment !== undefined) {
    attrs.push(`anchorAlignment="${board.anchor_alignment}"`)
  }
  if (board.solder_mask_color !== undefined) {
    attrs.push(`solderMaskColor=${JSON.stringify(board.solder_mask_color)}`)
  }
  if (board.silkscreen_color !== undefined) {
    attrs.push(`silkscreenColor=${JSON.stringify(board.silkscreen_color)}`)
  }

  return attrs.join(" ")
}
