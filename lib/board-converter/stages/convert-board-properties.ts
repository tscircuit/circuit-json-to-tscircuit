import { mmStr } from "@tscircuit/mm"
import type { PcbBoard } from "circuit-json"
import type { BoardConverterStage } from "../BoardConverterContext"

type BoardMinimum = {
  pcbBoardField: keyof PcbBoard
  boardPropName: string
  /** What core records on pcb_board when the <board /> prop is absent. */
  coreDefault?: number
}

// Circuit JSON does not say whether a pcb_board minimum was requested or
// computed: core records its default (jlcMinTolerances from
// @tscircuit/jlcpcb-manufacturing-specs) for every minimum prop the board
// does not have. A minimum equal to that default is left out of the TSX, so
// core computes it again instead of reading it as a request. That matters
// for minTraceWidth, which core also routes at when it is requested.
const boardMinimums: BoardMinimum[] = [
  {
    pcbBoardField: "min_trace_width",
    boardPropName: "minTraceWidth",
    coreDefault: 0.1,
  },
  {
    pcbBoardField: "min_via_hole_diameter",
    boardPropName: "minViaHoleDiameter",
    coreDefault: 0.2,
  },
  {
    pcbBoardField: "min_via_pad_diameter",
    boardPropName: "minViaPadDiameter",
    coreDefault: 0.3,
  },
  {
    pcbBoardField: "min_via_hole_edge_to_via_hole_edge_clearance",
    boardPropName: "minViaHoleEdgeToViaHoleEdgeClearance",
    coreDefault: 0.1,
  },
  {
    pcbBoardField: "min_via_edge_to_pad_edge_clearance",
    boardPropName: "minViaEdgeToPadEdgeClearance",
  },
  {
    pcbBoardField: "min_trace_to_hole_edge_clearance",
    boardPropName: "minTraceToHoleEdgeClearance",
    coreDefault: 0.2,
  },
  {
    pcbBoardField: "min_trace_to_pad_edge_clearance",
    boardPropName: "minTraceToPadEdgeClearance",
    coreDefault: 0.1,
  },
  {
    pcbBoardField: "min_pad_edge_to_pad_edge_clearance",
    boardPropName: "minPadEdgeToPadEdgeClearance",
    coreDefault: 0.1,
  },
  {
    pcbBoardField: "min_plated_hole_drill_edge_to_drill_edge_clearance",
    boardPropName: "minPlatedHoleDrillEdgeToDrillEdgeClearance",
    coreDefault: 0.15,
  },
  {
    pcbBoardField: "min_board_edge_clearance",
    boardPropName: "minBoardEdgeClearance",
    coreDefault: 0.2,
  },
]

// Core derives the via pad minimum from the via hole minimum when only the
// hole is given, so the two are core defaults together or not at all.
const viaMinimumFields: (keyof PcbBoard)[] = [
  "min_via_hole_diameter",
  "min_via_pad_diameter",
]

const isCoreDefault = (pcbBoard: PcbBoard, boardMinimum: BoardMinimum) => {
  const minimum = pcbBoard[boardMinimum.pcbBoardField]
  return minimum === undefined || minimum === boardMinimum.coreDefault
}

const getRequestedBoardMinimums = (pcbBoard: PcbBoard): BoardMinimum[] => {
  const viaMinimumsAreCoreDefaults = boardMinimums
    .filter(({ pcbBoardField }) => viaMinimumFields.includes(pcbBoardField))
    .every((boardMinimum) => isCoreDefault(pcbBoard, boardMinimum))
  return boardMinimums.filter((boardMinimum) => {
    if (typeof pcbBoard[boardMinimum.pcbBoardField] !== "number") return false
    if (viaMinimumFields.includes(boardMinimum.pcbBoardField))
      return !viaMinimumsAreCoreDefaults
    return !isCoreDefault(pcbBoard, boardMinimum)
  })
}

export const convertBoardProperties: BoardConverterStage = ({
  pcbBoard,
  boardProps,
}) => {
  if (pcbBoard.center.x !== 0) {
    boardProps.push(`pcbX={${pcbBoard.center.x}}`)
  }
  if (pcbBoard.center.y !== 0) {
    boardProps.push(`pcbY={${pcbBoard.center.y}}`)
  }
  if (pcbBoard.width !== undefined) {
    boardProps.push(`width="${mmStr(pcbBoard.width)}"`)
  }
  if (pcbBoard.height !== undefined) {
    boardProps.push(`height="${mmStr(pcbBoard.height)}"`)
  }
  if (pcbBoard.outline && pcbBoard.outline.length > 0) {
    const points = pcbBoard.outline
      .map((point) => `{ x: ${point.x}, y: ${point.y} }`)
      .join(", ")
    boardProps.push(`outline={[${points}]}`)
  }
  if (pcbBoard.thickness !== undefined) {
    boardProps.push(`thickness="${mmStr(pcbBoard.thickness)}"`)
  }
  if (pcbBoard.num_layers !== undefined) {
    boardProps.push(`layers={${pcbBoard.num_layers}}`)
  }
  if (pcbBoard.material !== undefined) {
    boardProps.push(`material="${pcbBoard.material}"`)
  }
  if (pcbBoard.solder_mask_color !== undefined) {
    boardProps.push(`solderMaskColor="${pcbBoard.solder_mask_color}"`)
  }
  if (pcbBoard.silkscreen_color !== undefined) {
    boardProps.push(`silkscreenColor="${pcbBoard.silkscreen_color}"`)
  }
  if (pcbBoard.anchor_position !== undefined) {
    boardProps.push(
      `boardAnchorPosition={{ x: ${pcbBoard.anchor_position.x}, y: ${pcbBoard.anchor_position.y} }}`,
    )
  }
  if (pcbBoard.anchor_alignment !== undefined) {
    boardProps.push(`boardAnchorAlignment="${pcbBoard.anchor_alignment}"`)
  }
  for (const boardMinimum of getRequestedBoardMinimums(pcbBoard)) {
    const minimum = pcbBoard[boardMinimum.pcbBoardField] as number
    boardProps.push(`${boardMinimum.boardPropName}="${mmStr(minimum)}"`)
  }
}
