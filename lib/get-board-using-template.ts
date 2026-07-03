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

  const boardAttributes: string[] = []

  if (pcbBoard) {
    if (pcbBoard.width !== undefined) {
      boardAttributes.push(`width="${mmStr(pcbBoard.width)}"`)
    }
    if (pcbBoard.height !== undefined) {
      boardAttributes.push(`height="${mmStr(pcbBoard.height)}"`)
    }
    if (pcbBoard.outline && pcbBoard.outline.length > 0) {
      const points = pcbBoard.outline
        .map((p) => `{ x: ${p.x}, y: ${p.y} }`)
        .join(", ")
      boardAttributes.push(`outline={[${points}]}`)
    }
    if (pcbBoard.thickness !== undefined) {
      boardAttributes.push(`thickness="${mmStr(pcbBoard.thickness)}"`)
    }
    if (pcbBoard.num_layers !== undefined) {
      boardAttributes.push(`layers={${pcbBoard.num_layers}}`)
    }
    if (pcbBoard.material !== undefined) {
      boardAttributes.push(`material="${pcbBoard.material}"`)
    }
    if (pcbBoard.solder_mask_color !== undefined) {
      boardAttributes.push(`solderMaskColor="${pcbBoard.solder_mask_color}"`)
    }
    if (pcbBoard.silkscreen_color !== undefined) {
      boardAttributes.push(`silkscreenColor="${pcbBoard.silkscreen_color}"`)
    }
    if (pcbBoard.anchor_position !== undefined) {
      boardAttributes.push(
        `boardAnchorPosition={{ x: ${pcbBoard.anchor_position.x}, y: ${pcbBoard.anchor_position.y} }}`,
      )
    }
    if (pcbBoard.anchor_alignment !== undefined) {
      boardAttributes.push(
        `boardAnchorAlignment="${pcbBoard.anchor_alignment}"`,
      )
    }
  }

  const boardAttributesText = boardAttributes.join(" ")
  const componentChildrenTsx = generateBoardChildren(circuitJson)
  const footprintTsx = generateFootprintTsx(circuitJson)
  let boardChildrenTsx = componentChildrenTsx.join("\n")
  if (!boardChildrenTsx && footprintTsx) {
    boardChildrenTsx = `<chip footprint={${footprintTsx}} />`
  }

  return `
export default () => (
  <board${boardAttributesText ? ` ${boardAttributesText}` : ""}>
    ${boardChildrenTsx.replace(/\n/g, "\n    ")}
  </board>
)
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}
