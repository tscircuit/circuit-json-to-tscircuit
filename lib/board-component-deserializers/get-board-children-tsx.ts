import { generateFootprintTsx } from "../generate-footprint-tsx"
import type { CircuitJsonDeserializerContext } from "./circuit-json-deserializer"
import { deserializeSourceComponentToTsx } from "./circuit-json-deserializer-registry"

const getComponentTsxBySourceComponentId = ({
  db,
}: CircuitJsonDeserializerContext): Map<string, string> => {
  const componentTsxBySourceComponentId = new Map<string, string>()

  for (const { source_component_id } of db.source_component.list()) {
    const tsx = deserializeSourceComponentToTsx({ source_component_id }, { db })
    if (tsx) componentTsxBySourceComponentId.set(source_component_id, tsx)
  }

  return componentTsxBySourceComponentId
}

const getFallbackChipTsx = (
  componentTsxBySourceComponentId: ReadonlyMap<string, string>,
  { db }: CircuitJsonDeserializerContext,
): string => {
  const deserializedPcbComponentIds = new Set(
    db.pcb_component
      .list()
      .filter(({ source_component_id }) =>
        componentTsxBySourceComponentId.has(source_component_id),
      )
      .map(({ pcb_component_id }) => pcb_component_id),
  )
  const fallbackCircuitJson = db.toArray().filter((element) => {
    if (!("pcb_component_id" in element) || !element.pcb_component_id) {
      return true
    }

    return !deserializedPcbComponentIds.has(element.pcb_component_id)
  })
  const footprintTsx = generateFootprintTsx(fallbackCircuitJson)
  return footprintTsx ? `<chip footprint={${footprintTsx}} />` : ""
}

export const getBoardChildrenTsx = ({
  db,
}: CircuitJsonDeserializerContext): string => {
  const componentTsxBySourceComponentId = getComponentTsxBySourceComponentId({
    db,
  })
  const componentTsxElements = [...componentTsxBySourceComponentId.values()]
  const fallbackChipTsx = getFallbackChipTsx(componentTsxBySourceComponentId, {
    db,
  })
  if (fallbackChipTsx) componentTsxElements.push(fallbackChipTsx)

  return componentTsxElements.join("\n")
}
