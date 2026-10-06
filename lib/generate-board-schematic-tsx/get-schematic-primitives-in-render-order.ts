import type {
  AnyCircuitElement,
  SchematicComponent,
  SchematicRect,
} from "circuit-json"

export type SchematicPrimitive = Extract<
  AnyCircuitElement,
  {
    type:
      | "schematic_text"
      | "schematic_path"
      | "schematic_rect"
      | "schematic_line"
      | "schematic_circle"
      | "schematic_arc"
      | "schematic_box"
  }
>

type SchematicComponentId = SchematicComponent["schematic_component_id"]

const isSchematicPrimitive = (
  element: AnyCircuitElement,
): element is SchematicPrimitive =>
  element.type === "schematic_text" ||
  element.type === "schematic_path" ||
  element.type === "schematic_rect" ||
  element.type === "schematic_line" ||
  element.type === "schematic_circle" ||
  element.type === "schematic_arc" ||
  element.type === "schematic_box"

const isCustomComponentBody = ({
  component,
  rect,
}: {
  component: SchematicComponent
  rect: SchematicRect
}): boolean =>
  component.is_box_with_pins === false &&
  rect.is_filled &&
  rect.center.x === component.center.x &&
  rect.center.y === component.center.y &&
  rect.width === component.size.width &&
  rect.height === component.size.height

export const getSchematicPrimitivesInRenderOrder = (
  circuitJson: AnyCircuitElement[],
): SchematicPrimitive[] => {
  const customComponentById = new Map<
    SchematicComponentId,
    SchematicComponent
  >()
  for (const element of circuitJson) {
    if (
      element.type === "schematic_component" &&
      element.is_box_with_pins === false
    ) {
      customComponentById.set(element.schematic_component_id, element)
    }
  }

  const primitives = circuitJson.filter(isSchematicPrimitive)
  const componentBodyById = new Map<SchematicComponentId, SchematicRect>()
  for (const primitive of primitives) {
    if (
      primitive.type !== "schematic_rect" ||
      !primitive.schematic_component_id
    ) {
      continue
    }
    const component = customComponentById.get(primitive.schematic_component_id)
    if (component && isCustomComponentBody({ component, rect: primitive })) {
      componentBodyById.set(primitive.schematic_component_id, primitive)
    }
  }

  const emittedComponentBodies = new Set<SchematicComponentId>()
  const result: SchematicPrimitive[] = []
  for (const primitive of primitives) {
    const componentId = primitive.schematic_component_id
    const componentBody = componentId
      ? componentBodyById.get(componentId)
      : undefined
    if (!componentId || !componentBody) {
      result.push(primitive)
      continue
    }
    if (!emittedComponentBodies.has(componentId)) {
      result.push(componentBody)
      emittedComponentBodies.add(componentId)
    }
    if (primitive !== componentBody) result.push(primitive)
  }
  return result
}
