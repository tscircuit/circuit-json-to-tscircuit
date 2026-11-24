import type { AnyCircuitElement } from "circuit-json"
import type { BoardConversionContext } from "./board-conversion-context"
import { formatJsxStringAttribute } from "./format-jsx-string-attribute"

export function generateBoardTracesTsx(
  circuitJson: AnyCircuitElement[],
  context: BoardConversionContext,
): string[] {
  return circuitJson.flatMap((element) => {
    if (element.type !== "source_trace") return []

    const portSelectors = element.connected_source_port_ids.flatMap(
      (sourcePortId) =>
        context.pcbPortSelectorsBySourcePortId.get(sourcePortId) ?? [],
    )
    const netSelectors = [
      ...new Set(
        element.connected_source_net_ids.flatMap((sourceNetId) => {
          const runtimeNetName =
            context.runtimeNetNameBySourceNetId.get(sourceNetId)
          return runtimeNetName ? [`net.${runtimeNetName}`] : []
        }),
      ),
    ]
    const path = [...portSelectors, ...netSelectors]

    if (
      portSelectors.length === 2 &&
      netSelectors.length === 0 &&
      portSelectors.every(
        (selector) => !selector.includes("imported_pcb_port_"),
      )
    ) {
      const formatTraceEndpoint = (selector: string) =>
        !/["\\\r\n]/.test(selector)
          ? `"${selector}"`
          : formatJsxStringAttribute(selector)
      return [
        `<trace from=${formatTraceEndpoint(portSelectors[0]!)} to=${formatTraceEndpoint(portSelectors[1]!)} />`,
      ]
    }

    return path.length >= 2 ? [`<trace path={${JSON.stringify(path)}} />`] : []
  })
}
