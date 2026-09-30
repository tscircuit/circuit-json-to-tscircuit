import type {
  AnyCircuitElement,
  PcbComponent,
  SchematicComponent,
} from "circuit-json"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>

export const getSchematicComponentsForPcbComponent = ({
  circuitJson,
  pcbComponent,
}: {
  circuitJson: AnyCircuitElement[]
  pcbComponent: PcbComponent
}): SchematicComponent[] => {
  const sourceComponents = circuitJson.filter(
    (element): element is SourceComponent =>
      element.type === "source_component",
  )
  const pcbSourceComponent = sourceComponents.find(
    (sourceComponent) =>
      sourceComponent.source_component_id === pcbComponent.source_component_id,
  )

  if (!pcbSourceComponent) return []

  const matchingSourceComponentIds = new Set<SourceComponentId>(
    sourceComponents
      .filter(
        (sourceComponent) =>
          sourceComponent.source_component_id ===
            pcbSourceComponent.source_component_id ||
          (pcbSourceComponent.name !== undefined &&
            sourceComponent.name === pcbSourceComponent.name),
      )
      .map((sourceComponent) => sourceComponent.source_component_id)
      .filter(
        (sourceComponentId): sourceComponentId is SourceComponentId =>
          sourceComponentId !== undefined,
      ),
  )

  return circuitJson.filter(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      element.source_component_id !== undefined &&
      matchingSourceComponentIds.has(element.source_component_id),
  )
}
