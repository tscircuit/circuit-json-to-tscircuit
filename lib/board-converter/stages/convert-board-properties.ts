import { mmStr } from "@tscircuit/mm"
import type { BoardConverterStage } from "../BoardConverterContext"

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
}
