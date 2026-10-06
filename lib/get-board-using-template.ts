import { mmStr } from "@tscircuit/mm"
import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { createBoardConversionContext } from "./board-conversion-context"
import { generateBoardNetsTsx } from "./generate-board-nets-tsx"
import { generateBoardSchematicElements } from "./generate-board-schematic-tsx"
import { generateBoardSchematicSheetTsx } from "./generate-board-schematic-sheet-tsx"
import { generateBoardTracesTsx } from "./generate-board-traces-tsx"
import { generateCopperPoursTsx } from "./generate-copper-pours-tsx"
import { generateFootprintTsx } from "./generate-footprint-tsx"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
  componentName?: string
}

export const getBoardUsingTemplate = ({
  circuitJson,
  componentName,
}: BoardTemplateParams) => {
  const pcbBoard = su(circuitJson).pcb_board.list()[0]

  const boardProps: string[] = ["routingDisabled"]

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
    const resolvedAnchorPosition = pcbBoard.anchor_position ?? pcbBoard.center
    if (
      pcbBoard.anchor_position !== undefined ||
      resolvedAnchorPosition.x !== 0 ||
      resolvedAnchorPosition.y !== 0
    ) {
      boardProps.push(
        `boardAnchorPosition={{ x: ${resolvedAnchorPosition.x}, y: ${resolvedAnchorPosition.y} }}`,
      )
    }
    if (pcbBoard.anchor_alignment !== undefined) {
      boardProps.push(`boardAnchorAlignment="${pcbBoard.anchor_alignment}"`)
    }
  }

  const boardPropsStr = boardProps.join(" ")
  const context = createBoardConversionContext(circuitJson)
  const footprintTsx = generateFootprintTsx(circuitJson, context)
  const copperPoursTsx = generateCopperPoursTsx(circuitJson, context)
  const boardTraces = generateBoardTracesTsx(circuitJson, context)
  const boardNetsTsx = generateBoardNetsTsx(
    context,
    boardTraces.connectedRuntimeNetNames,
  )

  const schematicElements = generateBoardSchematicElements(circuitJson)
  const schematicSheetTsx = generateBoardSchematicSheetTsx({
    circuitJson,
    schematicElements,
  })
  const children = [
    ...boardNetsTsx,
    footprintTsx
      ? `<chip name="${context.pcbChipName}" noSchematicRepresentation footprint={${footprintTsx}} />`
      : "",
    ...copperPoursTsx,
    ...boardTraces.elements,
    schematicSheetTsx,
  ]
    .filter(Boolean)
    .join("\n")

  return `
${componentName ? `export const ${componentName} =` : "export default"} () => (
  <board${boardPropsStr ? ` ${boardPropsStr}` : ""}>
    ${children}
  </board>
)
${componentName ? `export default ${componentName}` : ""}
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}
