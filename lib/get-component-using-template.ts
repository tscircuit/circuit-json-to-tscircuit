import type { AnyCircuitElement } from "circuit-json"
import { generateFootprintTsx } from "./generate-footprint-tsx"

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
  const footprintTsx = generateFootprintTsx(circuitJson)
  return `
import { type ChipProps } from "tscircuit"
${pinLabels ? `const pinLabels = ${JSON.stringify(pinLabels, null, "  ")} as const\n` : ""}export const ${componentName} = (props: ChipProps${pinLabels ? `<typeof pinLabels>` : ""}) => (
  <chip
    footprint={${footprintTsx}}
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
