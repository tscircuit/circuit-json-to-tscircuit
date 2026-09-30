import {
  type BoardProps,
  boardProps as boardPropsSchema,
} from "@tscircuit/props"
import type { CircuitJsonDeserializerContext } from "./circuit-json-deserializer"
import { formatDefaultExport, formatTsxElement } from "./format-tsx"
import { getBoardChildrenTsx } from "./get-board-children-tsx"

interface PcbBoardRef {
  pcb_board_id: string
}

const getSupportedLayerCount = (numLayers: number): BoardProps["layers"] => {
  switch (numLayers) {
    case 1:
    case 2:
    case 4:
    case 6:
    case 8:
      return numLayers
    default:
      return undefined
  }
}

// biome-ignore lint/complexity/noStaticOnlyClass: Deserializers use a class-per-element registry.
export class Board {
  static readonly elementName = "board" as const

  static getPropsFromElement(
    ref: PcbBoardRef,
    { db }: CircuitJsonDeserializerContext,
  ): BoardProps | undefined {
    const { pcb_board_id } = ref
    const pcbBoard = db.pcb_board.get(pcb_board_id)
    if (!pcbBoard) return undefined

    const boardTsxProps: BoardProps = {
      width: pcbBoard.width,
      height: pcbBoard.height,
      outline: pcbBoard.outline,
      thickness: pcbBoard.thickness,
      layers: getSupportedLayerCount(pcbBoard.num_layers),
      material: pcbBoard.material,
      solderMaskColor: pcbBoard.solder_mask_color,
      silkscreenColor: pcbBoard.silkscreen_color,
      boardAnchorPosition: pcbBoard.anchor_position,
      boardAnchorAlignment: pcbBoard.anchor_alignment,
      minTraceWidth: pcbBoard.min_trace_width,
      minViaHoleEdgeToViaHoleEdgeClearance:
        pcbBoard.min_via_hole_edge_to_via_hole_edge_clearance,
      minPlatedHoleDrillEdgeToDrillEdgeClearance:
        pcbBoard.min_plated_hole_drill_edge_to_drill_edge_clearance,
      minTraceToPadEdgeClearance: pcbBoard.min_trace_to_pad_edge_clearance,
      minPadEdgeToPadEdgeClearance: pcbBoard.min_pad_edge_to_pad_edge_clearance,
      minBoardEdgeClearance: pcbBoard.min_board_edge_clearance,
      minViaEdgeToPadEdgeClearance: pcbBoard.min_via_edge_to_pad_edge_clearance,
      minViaHoleDiameter: pcbBoard.min_via_hole_diameter,
      minViaPadDiameter: pcbBoard.min_via_pad_diameter,
    }

    const parseResult = boardPropsSchema.safeParse(boardTsxProps)
    if (!parseResult.success) {
      console.warn(
        `Unable to deserialize PCB board ${pcb_board_id}`,
        parseResult.error,
      )
      return undefined
    }

    return boardTsxProps
  }

  static deserializeToTsx(
    ref: PcbBoardRef,
    ctx: CircuitJsonDeserializerContext,
  ): string | undefined {
    const boardTsxProps = Board.getPropsFromElement(ref, ctx)
    if (!boardTsxProps) return undefined

    const boardChildrenTsx = getBoardChildrenTsx(ctx)
    const boardTsx = formatTsxElement({
      tsxElementName: Board.elementName,
      props: boardTsxProps,
      children: boardChildrenTsx,
    })

    return formatDefaultExport(boardTsx)
  }
}
