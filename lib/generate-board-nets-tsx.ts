import type { BoardConversionContext } from "./board-conversion-context"
import type { RuntimeNetName } from "./board-conversion-types"

export const generateBoardNetsTsx = (
  context: BoardConversionContext,
  connectedRuntimeNetNames: Set<RuntimeNetName>,
): string[] => {
  const runtimeNetNames = new Set(context.runtimeNetNameBySourceNetId.values())
  return [...runtimeNetNames].map((runtimeNetName) => {
    const selectors = connectedRuntimeNetNames.has(runtimeNetName)
      ? []
      : (context.pcbPortSelectorsByRuntimeNetName.get(runtimeNetName) ?? [])
    const connectsTo = selectors.length
      ? ` connectsTo={${JSON.stringify(selectors)}}`
      : ""
    return `<net name={${JSON.stringify(runtimeNetName)}}${connectsTo} />`
  })
}
