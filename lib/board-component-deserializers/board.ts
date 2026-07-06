import { boardProps } from "@tscircuit/props"
import {
  formatDefaultExport,
  formatTsxElement,
  type TsxProps,
} from "./format-tsx"
import { getBoardChildrenTsx } from "./get-board-children-tsx"
import { extractPropsFromElement } from "./get-props-from-element"
import type { DeserializerContext, PcbBoardRef } from "./types"

const BOARD_PROP_NAME_ALIASES = {
  numLayers: "layers",
  anchorPosition: "boardAnchorPosition",
  anchorAlignment: "boardAnchorAlignment",
}

export class Board {
  static propsSchema = boardProps

  static getPropsFromElement(
    ref: PcbBoardRef,
    { db }: DeserializerContext,
  ): TsxProps | undefined {
    const { pcb_board_id } = ref
    const pcb_board = db.pcb_board.get(pcb_board_id)
    if (!pcb_board) return undefined

    return extractPropsFromElement({
      element: pcb_board,
      propsSchema: this.propsSchema,
      propNameAliases: BOARD_PROP_NAME_ALIASES,
    })
  }

  static deserializeToTsx(
    ref: PcbBoardRef,
    context: DeserializerContext,
  ): string | undefined {
    const props = this.getPropsFromElement(ref, context)
    if (!props) return undefined

    const boardChildrenTsx = getBoardChildrenTsx(context)
    const boardTsx = formatTsxElement({
      name: "board",
      props,
      children: boardChildrenTsx,
    })

    return formatDefaultExport(boardTsx)
  }
}
