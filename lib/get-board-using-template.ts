import { mmStr } from "@tscircuit/mm"
import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { generateBoardChildren } from "./generate-board-children"
import { generateFootprintTsx } from "./generate-footprint-tsx"

export interface BoardTemplateOptions {
  circuitJson: AnyCircuitElement[]
}

export const getBoardUsingTemplate = ({
  circuitJson,
}: BoardTemplateOptions) => {
  const pcbBoard = su(circuitJson).pcb_board.list()[0]

  const boardProps: string[] = []

  if (pcbBoard) {
    if (pcbBoard.width !== undefined) {
      boardProps.push(`width="${mmStr(pcbBoard.width)}"`)
    }
    if (pcbBoard.height !== undefined) {
      boardProps.push(`height="${mmStr(pcbBoard.height)}"`)
    }
    if (pcbBoard.outline && pcbBoard.outline.length > 0) {
      const points = pcbBoard.outline
        .map((p) => `{ x: ${p.x}, y: ${p.y} }`)
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

  const boardPropsStr = boardProps.join(" ")
  const componentChildrenTsx = generateBoardChildren(circuitJson)
  const footprintTsx = generateFootprintTsx(circuitJson)
  let boardChildrenTsx = componentChildrenTsx.join("\n")
  if (!boardChildrenTsx && footprintTsx) {
    boardChildrenTsx = `<chip footprint={${footprintTsx}} />`
  }

  return `
export default () => (
  <board${boardPropsStr ? ` ${boardPropsStr}` : ""}>
    ${boardChildrenTsx.replace(/\n/g, "\n    ")}
  </board>
)
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}
