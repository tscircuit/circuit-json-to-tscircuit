import type { SchematicComponent, SchematicText } from "circuit-json"
import { getNearestSchematicText } from "./get-nearest-schematic-text"

interface DisplayValueTextLayout {
  nearestText?: SchematicText
  replacementTexts: SchematicText[]
  preserveImportedText: boolean
}

export const getDisplayValueTextLayout = ({
  schematicTexts,
  schematicComponent,
}: {
  schematicTexts: SchematicText[]
  schematicComponent: SchematicComponent
}): DisplayValueTextLayout => {
  const nearestText = getNearestSchematicText({
    schematicTexts,
    schematicComponent,
  })
  const preserveImportedText = schematicTexts.length > 1

  return {
    nearestText,
    preserveImportedText,
    replacementTexts: preserveImportedText
      ? schematicTexts
      : nearestText
        ? [nearestText]
        : [],
  }
}
