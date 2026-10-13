import type { AnyCircuitElement } from "circuit-json"
import type { BoardConversionContext } from "./board-conversion-context"
import type { RuntimeNetName } from "./board-conversion-types"

export const generateBoardNetsTsx = (
  circuitJson: AnyCircuitElement[],
  context: BoardConversionContext,
): string[] => {
  const runtimeNetNames = getRuntimeNetNamesInTraceOrder(circuitJson, context)
  return runtimeNetNames.map((runtimeNetName) => {
    const selectors =
      context.pcbPortSelectorsByRuntimeNetName.get(runtimeNetName) ?? []
    const connectsTo = selectors.length
      ? ` connectsTo={${JSON.stringify(selectors)}}`
      : ""
    return `<net name={${JSON.stringify(runtimeNetName)}}${connectsTo} />`
  })
}

const getRuntimeNetNamesInTraceOrder = (
  circuitJson: AnyCircuitElement[],
  context: BoardConversionContext,
): RuntimeNetName[] => {
  const orderedNames: RuntimeNetName[] = []
  const addedNames = new Set<RuntimeNetName>()

  for (const element of circuitJson) {
    if (element.type !== "source_trace") continue
    for (const sourceNetId of element.connected_source_net_ids) {
      const runtimeNetName =
        context.runtimeNetNameBySourceNetId.get(sourceNetId)
      if (!runtimeNetName || addedNames.has(runtimeNetName)) continue
      orderedNames.push(runtimeNetName)
      addedNames.add(runtimeNetName)
    }
  }

  for (const runtimeNetName of context.runtimeNetNameBySourceNetId.values()) {
    if (addedNames.has(runtimeNetName)) continue
    orderedNames.push(runtimeNetName)
    addedNames.add(runtimeNetName)
  }

  return orderedNames
}
