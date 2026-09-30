import type { AnyCircuitElement } from "circuit-json"
import { generateFootprintTsx } from "../generate-footprint-tsx"
import type { CircuitJsonDeserializerContext } from "./circuit-json-deserializer"
import { deserializeSourceComponentToTsx } from "./circuit-json-deserializer-registry"

const getDeserializedComponentTsx = (
  ctx: CircuitJsonDeserializerContext,
): Map<string, string> => {
  const componentTsxBySourceComponentId = new Map<string, string>()

  for (const { source_component_id } of ctx.db.source_component.list()) {
    const componentTsx = deserializeSourceComponentToTsx(
      { source_component_id },
      ctx,
    )
    if (componentTsx) {
      componentTsxBySourceComponentId.set(source_component_id, componentTsx)
    }
  }

  return componentTsxBySourceComponentId
}

const getFallbackChipTsx = (
  deserializedComponentTsx: ReadonlyMap<string, string>,
  { db }: CircuitJsonDeserializerContext,
): string | undefined => {
  const deserializedPcbComponentIds = new Set(
    db.pcb_component
      .list()
      .filter(({ source_component_id }) =>
        deserializedComponentTsx.has(source_component_id),
      )
      .map(({ pcb_component_id }) => pcb_component_id),
  )

  const fallbackCircuitJson = db.toArray().filter((element) => {
    const pcbComponentId = getPcbComponentId(element)
    return (
      pcbComponentId === undefined ||
      !deserializedPcbComponentIds.has(pcbComponentId)
    )
  })

  const footprintTsx = generateFootprintTsx(fallbackCircuitJson)
  return footprintTsx ? `<chip footprint={${footprintTsx}} />` : undefined
}

const getPcbComponentId = (element: AnyCircuitElement): string | undefined => {
  if (!("pcb_component_id" in element)) return undefined
  return typeof element.pcb_component_id === "string"
    ? element.pcb_component_id
    : undefined
}

export const getBoardChildrenTsx = (
  ctx: CircuitJsonDeserializerContext,
): string => {
  const deserializedComponentTsx = getDeserializedComponentTsx(ctx)
  const boardChildrenTsx = [...deserializedComponentTsx.values()]
  const fallbackChipTsx = getFallbackChipTsx(deserializedComponentTsx, ctx)
  if (fallbackChipTsx) boardChildrenTsx.push(fallbackChipTsx)

  return boardChildrenTsx.join("\n")
}
