import { generateFootprintTsx } from "../generate-footprint-tsx"
import { CircuitJsonDeserializer } from "./circuit-json-deserializer"
import type { DeserializerContext } from "./types"

interface GetFallbackChipTsxParams {
  componentTsxBySourceComponentId: ReadonlyMap<string, string>
}

const getComponentTsxBySourceComponentId = (
  context: DeserializerContext,
): Map<string, string> => {
  const componentTsxBySourceComponentId = new Map<string, string>()

  for (const { source_component_id } of context.db.source_component.list()) {
    const tsx = CircuitJsonDeserializer.deserializeToTsx(
      { source_component_id },
      context,
    )
    if (tsx) componentTsxBySourceComponentId.set(source_component_id, tsx)
  }

  return componentTsxBySourceComponentId
}

const getFallbackChipTsx = (
  { componentTsxBySourceComponentId }: GetFallbackChipTsxParams,
  { db }: DeserializerContext,
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

export const getBoardChildrenTsx = (context: DeserializerContext): string => {
  const componentTsxBySourceComponentId =
    getComponentTsxBySourceComponentId(context)
  const componentTsxElements = [...componentTsxBySourceComponentId.values()]
  const fallbackChipTsx = getFallbackChipTsx(
    { componentTsxBySourceComponentId },
    context,
  )
  if (fallbackChipTsx) componentTsxElements.push(fallbackChipTsx)

  return componentTsxElements.join("\n")
}
