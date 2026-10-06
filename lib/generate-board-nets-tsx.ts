import type { BoardConversionContext } from "./board-conversion-context"

export const generateBoardNetsTsx = (
  context: BoardConversionContext,
): string[] => {
  const runtimeNetNames = new Set(context.runtimeNetNameBySourceNetId.values())
  return [...runtimeNetNames].map((runtimeNetName) => {
    const selectors =
      context.pcbPortSelectorsByRuntimeNetName.get(runtimeNetName) ?? []
    const connectsTo = selectors.length
      ? ` connectsTo={${JSON.stringify(selectors)}}`
      : ""
    return `<net name={${JSON.stringify(runtimeNetName)}}${connectsTo} />`
  })
}
