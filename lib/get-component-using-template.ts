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
import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = ${JSON.stringify(pinLabels, null, "  ")} as const

interface Props extends CommonLayoutProps {
  name: string
}

export const ${componentName} = (props: Props) => {
  return (
    <chip
      {...props}
      ${
        objUrl
          ? `cadModel={{
        objUrl: "${objUrl}",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}`
          : ""
      }
      ${pinLabels ? `pinLabels={${JSON.stringify(pinLabels, null, "  ")}}` : ""}
      ${supplierPartNumbers ? `supplierPartNumbers={${JSON.stringify(supplierPartNumbers, null, "  ")}}` : ""}
      ${manufacturerPartNumber ? `manufacturerPartNumber="${manufacturerPartNumber}"` : ""}
      footprint={${footprintTsx}}
    />
  )
}

export const use${componentName} = createUseComponent(${componentName}, pinLabels)

`.trim()
}
