import type { AnyCircuitElement } from "circuit-json"
import { generateBoardSchematicSheetTsx } from "./generate-board-schematic-sheet-tsx"
import { generateBoardSchematicElements } from "./generate-board-schematic-tsx"

export interface SchematicTemplateParams {
  circuitJson: AnyCircuitElement[]
  componentName?: string
}

export const getSchematicUsingTemplate = ({
  circuitJson,
  componentName,
}: SchematicTemplateParams): string => {
  const schematicElements = generateBoardSchematicElements(circuitJson)
  const schematicSheetTsx = generateBoardSchematicSheetTsx({
    circuitJson,
    schematicElements,
  })

  return `
${componentName ? `export const ${componentName} =` : "export default"} () => (
  <board routingDisabled>
    ${schematicSheetTsx}
  </board>
)
${componentName ? `export default ${componentName}` : ""}
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}
