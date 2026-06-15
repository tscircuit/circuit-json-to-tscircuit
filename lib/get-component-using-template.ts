import type { AnyCircuitElement } from "circuit-json"
import { convertBoard } from "./convert-board"
import { convertSourceComponents } from "./convert-source-components"
import { convertTraces } from "./convert-traces"
import { generateFootprintTsx } from "./generate-footprint-tsx"
import { generateSymbolTsx } from "./generate-symbol-tsx"

export interface ComponentTemplateParams {
  pinLabels?: Record<string, string[]> | Record<string, string> // ChipProps["pinLabels"]
  componentName: string
  objUrl?: string
  circuitJson: AnyCircuitElement[]
  supplierPartNumbers?: Record<string, string[]>
  manufacturerPartNumber?: string
}

export const getComponentUsingTemplate = ({
  pinLabels,
  componentName,
  objUrl,
  circuitJson,
  supplierPartNumbers,
  manufacturerPartNumber,
}: ComponentTemplateParams) => {
  const boardAttrs = convertBoard(circuitJson)
  if (boardAttrs !== null) {
    const children = [
      ...convertSourceComponents(circuitJson),
      ...convertTraces(circuitJson),
    ]
    const inner =
      children.length === 0 ? "\n  " : `\n    ${children.join("\n    ")}\n  `
    return `
export const ${componentName} = () => (
  <board ${boardAttrs}>${inner}</board>
)
`.trim()
  }

  const footprintTsx = generateFootprintTsx(circuitJson)
  const symbolTsx = generateSymbolTsx(circuitJson)
  return `
import { type ChipProps } from "tscircuit"
${pinLabels ? `const pinLabels = ${JSON.stringify(pinLabels, null, "  ")} as const\n` : ""}export const ${componentName} = (props: ChipProps${pinLabels ? `<typeof pinLabels>` : ""}) => (
  <chip
    ${footprintTsx ? `footprint={${footprintTsx}}` : ""}
    ${symbolTsx ? `symbol={${symbolTsx}}` : ""}
    ${pinLabels ? "pinLabels={pinLabels}" : ""}
    ${objUrl ? `cadModel={{\n        objUrl: \"${objUrl}\",\n        rotationOffset: { x: 0, y: 0, z: 0 },\n        positionOffset: { x: 0, y: 0, z: 0 },\n      }}` : ""}
    ${supplierPartNumbers ? `supplierPartNumbers={${JSON.stringify(supplierPartNumbers, null, "  ")}}` : ""}
    ${manufacturerPartNumber ? `manufacturerPartNumber=\"${manufacturerPartNumber}\"` : ""}
    {...props}
  />
)
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}
