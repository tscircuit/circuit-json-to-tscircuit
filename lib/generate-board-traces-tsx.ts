import { mmStr } from "@tscircuit/mm"
import type { PcbPath } from "@tscircuit/props"
import type {
  AnyCircuitElement,
  LayerRef,
  PcbTrace,
  SourceTrace,
} from "circuit-json"
import type { BoardConversionContext } from "./board-conversion-context"
import type { RuntimeNetName, SourceTraceId } from "./board-conversion-types"
import { getPcbTracePath, type PcbTracePath } from "./get-pcb-trace-path"

interface PcbTracePathGroup extends PcbTracePath {
  sourceTrace: SourceTrace
  paths: PcbPath[]
}

interface GeneratedBoardTraces {
  elements: string[]
  connectedRuntimeNetNames: Set<RuntimeNetName>
}

export const generateBoardTracesTsx = (
  circuitJson: AnyCircuitElement[],
  context: BoardConversionContext,
): GeneratedBoardTraces => {
  const sourceTraceById = new Map<SourceTraceId, SourceTrace>()
  for (const element of circuitJson) {
    if (element.type === "source_trace") {
      sourceTraceById.set(element.source_trace_id, element)
    }
  }

  const pathGroups: PcbTracePathGroup[] = []
  const fallbackPcbTraces: PcbTrace[] = []
  for (const element of circuitJson) {
    if (element.type !== "pcb_trace") continue
    const sourceTrace = element.source_trace_id
      ? sourceTraceById.get(element.source_trace_id)
      : undefined
    const pcbTracePath = getPcbTracePath(element)
    if (!sourceTrace || !pcbTracePath) {
      fallbackPcbTraces.push(element)
      continue
    }
    const selectors = getSourceTraceSelectors(sourceTrace, context)
    const anchorSelector = context.pcbPathAnchorSelectorByLayer.get(
      pcbTracePath.startLayer,
    )
    if (selectors.length === 0 || !anchorSelector) {
      fallbackPcbTraces.push(element)
      continue
    }
    const matchingGroup = pathGroups.find(
      (group) =>
        group.sourceTrace.source_trace_id === sourceTrace.source_trace_id &&
        group.startLayer === pcbTracePath.startLayer &&
        group.width === pcbTracePath.width,
    )
    if (matchingGroup) {
      matchingGroup.paths.push(pcbTracePath.path)
    } else {
      pathGroups.push({
        ...pcbTracePath,
        sourceTrace,
        paths: [pcbTracePath.path],
      })
    }
  }

  const connectedRuntimeNetNames = new Set<RuntimeNetName>()
  const elements = pathGroups
    .map((group) => {
      for (const sourceNetId of group.sourceTrace.connected_source_net_ids) {
        const runtimeNetName =
          context.runtimeNetNameBySourceNetId.get(sourceNetId)
        if (runtimeNetName) connectedRuntimeNetNames.add(runtimeNetName)
      }
      const selectors = getSourceTraceSelectors(group.sourceTrace, context)
      const anchorSelector = context.pcbPathAnchorSelectorByLayer.get(
        group.startLayer,
      )
      if (!anchorSelector) return ""
      return `<trace path={${JSON.stringify(selectors)}} pcbPathRelativeTo={${JSON.stringify(anchorSelector)}} pcbPaths={${JSON.stringify(group.paths)}} thickness="${mmStr(group.width)}" />`
    })
    .filter(Boolean)

  const groupedSourceTraceIds = new Set(
    pathGroups.map((group) => group.sourceTrace.source_trace_id),
  )
  for (const sourceTrace of sourceTraceById.values()) {
    if (groupedSourceTraceIds.has(sourceTrace.source_trace_id)) continue
    const selectors = getSourceTraceSelectors(sourceTrace, context)
    const anchorSelector = getSemanticTraceAnchorSelector(sourceTrace, context)
    if (selectors.length === 0 || !anchorSelector) continue
    elements.push(
      `<trace path={${JSON.stringify(selectors)}} pcbPathRelativeTo={${JSON.stringify(anchorSelector)}} pcbPaths={[]} />`,
    )
    for (const sourceNetId of sourceTrace.connected_source_net_ids) {
      const runtimeNetName =
        context.runtimeNetNameBySourceNetId.get(sourceNetId)
      if (runtimeNetName) connectedRuntimeNetNames.add(runtimeNetName)
    }
  }

  elements.push(
    ...fallbackPcbTraces.map(
      (pcbTrace) => `<pcbtrace route={${JSON.stringify(pcbTrace.route)}} />`,
    ),
  )
  return { elements, connectedRuntimeNetNames }
}

const getSemanticTraceAnchorSelector = (
  sourceTrace: SourceTrace,
  context: BoardConversionContext,
): string | undefined => {
  for (const sourcePortId of sourceTrace.connected_source_port_ids) {
    const selector =
      context.pcbPortSelectorsBySourcePortId.get(sourcePortId)?.[0]
    if (selector) return selector
  }
  return context.pcbPathAnchorSelectorByLayer.values().next().value
}

const getSourceTraceSelectors = (
  sourceTrace: SourceTrace,
  context: BoardConversionContext,
): string[] => {
  const selectors = sourceTrace.connected_source_port_ids.flatMap(
    (sourcePortId) =>
      context.pcbPortSelectorsBySourcePortId.get(sourcePortId) ?? [],
  )
  for (const sourceNetId of sourceTrace.connected_source_net_ids) {
    const runtimeNetName = context.runtimeNetNameBySourceNetId.get(sourceNetId)
    if (runtimeNetName) selectors.push(`net.${runtimeNetName}`)
  }
  return [...new Set(selectors)]
}
