import type { CircuitJson, SchematicComponent } from "circuit-json"
import type { SchematicComponentId } from "./get-native-symbol-text-replacements"

export const hasPreservedPackageValueText = ({
  circuitJson,
  schematicComponent,
  schematicComponents,
  replacedSchematicComponentIds,
  displayTexts,
}: {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
  schematicComponents: SchematicComponent[]
  replacedSchematicComponentIds: Set<SchematicComponentId>
  displayTexts: Set<string>
}): boolean =>
  circuitJson.some((candidate) => {
    if (
      candidate.type !== "schematic_text" ||
      !candidate.schematic_component_id ||
      !displayTexts.has(candidate.text) ||
      replacedSchematicComponentIds.has(candidate.schematic_component_id)
    ) {
      return false
    }
    return schematicComponents.some(
      (component) =>
        component.schematic_component_id === candidate.schematic_component_id &&
        component.source_component_id ===
          schematicComponent.source_component_id,
    )
  })
