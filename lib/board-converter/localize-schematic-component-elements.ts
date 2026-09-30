import type { AnyCircuitElement, SchematicComponent } from "circuit-json"
import { applyToPoint, inverse, translate } from "transformation-matrix"

type SchematicComponentId = NonNullable<
  SchematicComponent["schematic_component_id"]
>
type SourceComponentId = NonNullable<SchematicComponent["source_component_id"]>
type SchematicTable = Extract<AnyCircuitElement, { type: "schematic_table" }>
type SchematicTableId = SchematicTable["schematic_table_id"]

export const localizeSchematicComponentElements = ({
  circuitJson,
  schematicComponents,
}: {
  circuitJson: AnyCircuitElement[]
  schematicComponents: SchematicComponent[]
}): AnyCircuitElement[] => {
  const anchorComponent = schematicComponents[0]
  if (!anchorComponent) return []

  const schematicComponentIds = new Set<SchematicComponentId>(
    schematicComponents
      .map((schematicComponent) => schematicComponent.schematic_component_id)
      .filter(
        (schematicComponentId): schematicComponentId is SchematicComponentId =>
          schematicComponentId !== undefined,
      ),
  )
  const sourceComponentIds = new Set<SourceComponentId>(
    schematicComponents
      .map((schematicComponent) => schematicComponent.source_component_id)
      .filter(
        (sourceComponentId): sourceComponentId is SourceComponentId =>
          sourceComponentId !== undefined,
      ),
  )
  const schematicToLocal = inverse(
    translate(anchorComponent.center.x, anchorComponent.center.y),
  )
  const schematicTableIds = new Set<SchematicTableId>(
    circuitJson
      .filter(
        (element): element is SchematicTable =>
          element.type === "schematic_table" &&
          element.schematic_component_id !== undefined &&
          schematicComponentIds.has(element.schematic_component_id),
      )
      .map((schematicTable) => schematicTable.schematic_table_id),
  )
  const localizedElements: AnyCircuitElement[] = []

  for (const schematicComponent of schematicComponents) {
    localizedElements.push({
      ...schematicComponent,
      center: applyToPoint(schematicToLocal, schematicComponent.center),
    })
  }

  for (const element of circuitJson) {
    if (
      element.type === "source_port" &&
      element.source_component_id !== undefined &&
      sourceComponentIds.has(element.source_component_id)
    ) {
      localizedElements.push(element)
      continue
    }

    if (
      element.type === "schematic_table_cell" &&
      schematicTableIds.has(element.schematic_table_id)
    ) {
      localizedElements.push(element)
      continue
    }

    if (
      !("schematic_component_id" in element) ||
      element.schematic_component_id === undefined ||
      !schematicComponentIds.has(element.schematic_component_id)
    ) {
      continue
    }

    switch (element.type) {
      case "schematic_arc":
      case "schematic_circle":
      case "schematic_rect":
      case "schematic_port":
        localizedElements.push({
          ...element,
          center: applyToPoint(schematicToLocal, element.center),
        })
        break
      case "schematic_line": {
        const start = applyToPoint(schematicToLocal, {
          x: element.x1,
          y: element.y1,
        })
        const end = applyToPoint(schematicToLocal, {
          x: element.x2,
          y: element.y2,
        })
        localizedElements.push({
          ...element,
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y,
        })
        break
      }
      case "schematic_box": {
        const boxOrigin = applyToPoint(schematicToLocal, {
          x: element.x,
          y: element.y,
        })
        localizedElements.push({
          ...element,
          x: boxOrigin.x,
          y: boxOrigin.y,
        })
        break
      }
      case "schematic_path":
        localizedElements.push({
          ...element,
          points: element.points.map((point) =>
            applyToPoint(schematicToLocal, point),
          ),
        })
        break
      case "schematic_text":
        localizedElements.push({
          ...element,
          position: applyToPoint(schematicToLocal, element.position),
        })
        break
      case "schematic_table":
        localizedElements.push({
          ...element,
          anchor_position: applyToPoint(
            schematicToLocal,
            element.anchor_position,
          ),
        })
        break
    }
  }

  return localizedElements
}
