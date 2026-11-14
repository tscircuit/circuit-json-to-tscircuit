import { mmStr } from "@tscircuit/mm"
import type { AnyCircuitElement } from "circuit-json"
import type { BoardConversionContext } from "./board-conversion-context"
import type { RuntimeNetName } from "./board-conversion-types"

export const generateBoardNetsTsx = (
  circuitJson: AnyCircuitElement[],
  context: BoardConversionContext,
): string[] => {
  const runtimeNetNames = getRuntimeNetNamesInTraceOrder(circuitJson, context)
  const traceWidthByRuntimeNetName = getTraceWidthByRuntimeNetName(
    circuitJson,
    context,
  )
  return runtimeNetNames.map((runtimeNetName) => {
    const selectors =
      context.pcbPortSelectorsByRuntimeNetName.get(runtimeNetName) ?? []
    const connectsTo = selectors.length
      ? ` connectsTo={${JSON.stringify(selectors)}}`
      : ""
    const traceWidth = traceWidthByRuntimeNetName.get(runtimeNetName)
    const nominalTraceWidth =
      traceWidth === undefined
        ? ""
        : ` nominalTraceWidth="${mmStr(traceWidth)}"`
    return `<net name={${JSON.stringify(runtimeNetName)}}${connectsTo}${nominalTraceWidth} />`
  })
}

// Source nets that share a runtime net keep the widest trace width, which is
// the width core routes their connection with.
const getTraceWidthByRuntimeNetName = (
  circuitJson: AnyCircuitElement[],
  context: BoardConversionContext,
): Map<RuntimeNetName, number> => {
  const traceWidthByRuntimeNetName = new Map<RuntimeNetName, number>()
  for (const element of circuitJson) {
    if (element.type !== "source_net") continue
    if (element.trace_width === undefined) continue
    const runtimeNetName = context.runtimeNetNameBySourceNetId.get(
      element.source_net_id,
    )
    if (!runtimeNetName) continue
    traceWidthByRuntimeNetName.set(
      runtimeNetName,
      Math.max(
        traceWidthByRuntimeNetName.get(runtimeNetName) ?? 0,
        element.trace_width,
      ),
    )
  }
  return traceWidthByRuntimeNetName
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
