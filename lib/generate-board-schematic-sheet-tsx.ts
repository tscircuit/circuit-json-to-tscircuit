import { mmStr } from "@tscircuit/mm"
import type { AnyCircuitElement } from "circuit-json"

export const generateBoardSchematicSheetTsx = ({
  circuitJson,
  schematicElements,
}: {
  circuitJson: AnyCircuitElement[]
  schematicElements: string[]
}): string => {
  const sheet = circuitJson.find(
    (element) => element.type === "schematic_sheet",
  )
  if (!sheet) return schematicElements.join("\n")

  const attrs: string[] = []
  if (sheet.name) attrs.push(`name={${JSON.stringify(sheet.name)}}`)
  if (sheet.sheet_index !== undefined) {
    attrs.push(`sheetIndex={${sheet.sheet_index}}`)
  }
  const sheetCenter = sheet.center ?? { x: 0, y: 0 }
  attrs.push(`schX={${sheetCenter.x}}`)
  attrs.push(`schY={${sheetCenter.y}}`)
  if (sheet.sheet_size) {
    attrs.push(`sheetSize="${sheet.sheet_size === "a4" ? "A4" : "ANSI_B"}"`)
  }
  if (sheet.sheet_width !== undefined) {
    attrs.push(`sheetWidth="${mmStr(sheet.sheet_width)}"`)
  }
  if (sheet.sheet_height !== undefined) {
    attrs.push(`sheetHeight="${mmStr(sheet.sheet_height)}"`)
  }
  return `<schematicsheet ${attrs.join(" ")}>\n${schematicElements.join("\n")}\n</schematicsheet>`
}
