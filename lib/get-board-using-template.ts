import { mmStr } from "@tscircuit/mm"
import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { generateBoardSchematicTsx } from "./generate-board-schematic-tsx"
import { generateCopperPoursTsx } from "./generate-copper-pours-tsx"
import { generateFootprintTsx } from "./generate-footprint-tsx"
import { getBoardNetConnections } from "./get-board-net-connections"

export interface BoardTemplateParams {
  circuitJson: AnyCircuitElement[]
  componentName?: string
}

export const getBoardUsingTemplate = ({
  circuitJson,
  componentName,
}: BoardTemplateParams) => {
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

  const { footprintCircuitJson, connections, netNames } =
    getBoardNetConnections(circuitJson)
  // Imported PCB routes are already drawn by the footprint converter.
  if (netNames.length) boardProps.push("routingDisabled")
  const boardPropsStr = boardProps.join(" ")
  const footprintTsx = generateFootprintTsx(footprintCircuitJson)
  const copperPoursTsx = generateCopperPoursTsx(circuitJson, netNames)

  const symbolTsx = generateBoardSchematicTsx(circuitJson)
  const chipProps = [
    netNames.length ? 'name="ImportedBoard"' : "",
    netNames.length ? "noSchematicRepresentation" : "",
    footprintTsx ? `footprint={${footprintTsx}}` : "",
    symbolTsx && !netNames.length ? `symbol={${symbolTsx}}` : "",
    netNames.length ? `connections={${JSON.stringify(connections)}}` : "",
  ].filter(Boolean)
  const children = [
    footprintTsx ? `<chip ${chipProps.join(" ")} />` : (symbolTsx ?? ""),
    footprintTsx && netNames.length ? (symbolTsx ?? "") : "",
    ...copperPoursTsx,
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
