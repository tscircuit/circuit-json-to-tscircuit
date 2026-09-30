import type { SchematicComponent } from "circuit-json"
import { generateSchematicPrimitiveTsx } from "../../generate-symbol-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

type SchematicComponentId = NonNullable<
  SchematicComponent["schematic_component_id"]
>

export const convertStandaloneSchematicPrimitives: BoardConverterStage = ({
  circuitJson,
  boardChildren,
}) => {
  const existingSchematicComponentIds = new Set<SchematicComponentId>(
    circuitJson.flatMap((element) =>
      element.type === "schematic_component" &&
      element.schematic_component_id !== undefined
        ? [element.schematic_component_id]
        : [],
    ),
  )
  const standaloneElements = circuitJson.filter(
    (element) =>
      !("schematic_component_id" in element) ||
      element.schematic_component_id === undefined ||
      !existingSchematicComponentIds.has(element.schematic_component_id),
  )
  const primitiveTsx = generateSchematicPrimitiveTsx({
    circuitJson: standaloneElements,
  })

  if (!primitiveTsx) return

  boardChildren.push(
    `{/* Standalone schematic primitives */}\n${primitiveTsx}\n{/* End standalone schematic primitives */}`,
  )
}
