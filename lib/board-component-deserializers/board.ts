import { boardProps } from "@tscircuit/props"
import type { CircuitJsonDeserializerContext } from "./circuit-json-deserializer"
import {
  formatDefaultExport,
  formatTsxElement,
  type TsxProps,
} from "./format-tsx"
import { getBoardChildrenTsx } from "./get-board-children-tsx"
import { getPropsFromElement } from "./get-props-from-element"

interface PcbBoardRef {
  pcb_board_id: string
}

const BOARD_PROP_NAME_ALIASES = {
  numLayers: "layers",
  anchorPosition: "boardAnchorPosition",
  anchorAlignment: "boardAnchorAlignment",
}

export class Board {
  static propsSchema = boardProps

  static getPropsFromElement(
    ref: PcbBoardRef,
    { db }: CircuitJsonDeserializerContext,
  ): TsxProps | undefined {
    const { pcb_board_id } = ref
    const pcb_board = db.pcb_board.get(pcb_board_id)
    if (!pcb_board) return undefined

    return getPropsFromElement({
      element: pcb_board,
      propsSchema: this.propsSchema,
      propNameAliases: BOARD_PROP_NAME_ALIASES,
    })
  }

  static deserializeToTsx(
    ref: PcbBoardRef,
    { db }: CircuitJsonDeserializerContext,
  ): string | undefined {
    const props = this.getPropsFromElement(ref, { db })
    if (!props) return undefined

    const boardChildrenTsx = getBoardChildrenTsx({ db })
    const boardTsx = formatTsxElement({
      tsxElementName: "board",
      props,
      children: boardChildrenTsx,
    })

    return formatDefaultExport(boardTsx)
  }
}
