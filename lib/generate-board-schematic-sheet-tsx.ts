import { mmStr } from "@tscircuit/mm"
import type { AnyCircuitElement } from "circuit-json"

const DEFAULT_SHEET_DIMENSIONS_MM = {
  a4: { width: 297, height: 210 },
  ansi_b: { width: 431.8, height: 279.4 },
} as const

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
  if (sheet.sheet_size) {
    attrs.push(`sheetSize="${sheet.sheet_size === "a4" ? "A4" : "ANSI_B"}"`)
  }
  const defaultDimensions =
    DEFAULT_SHEET_DIMENSIONS_MM[sheet.sheet_size ?? "a4"]
  const sheetWidth = sheet.sheet_width ?? defaultDimensions.width
  const sheetHeight = sheet.sheet_height ?? defaultDimensions.height
  attrs.push(`sheetWidth="${mmStr(sheetWidth)}"`)
  attrs.push(`sheetHeight="${mmStr(sheetHeight)}"`)
  return `<schematicsheet ${attrs.join(" ")}>\n${schematicElements.join("\n")}\n</schematicsheet>`
}
