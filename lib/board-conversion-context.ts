import type { AnyCircuitElement } from "circuit-json"
import {
  getRuntimeNetNamesBySourceTraceId,
  getSourceNetIdsUsedByPcbTraces,
} from "./get-pcb-trace-net-mappings"

export interface BoardConversionContext {
  pcbChipName: string
  portHintByPcbPortId: Map<string, string>
  runtimeNetNameBySourceNetId: Map<string, string>
  runtimeNetNameBySourceTraceId: Map<string, string>
  pcbPortSelectorsByRuntimeNetName: Map<string, string[]>
}

const PCB_CHIP_NAME = "ImportedBoard"

export const createBoardConversionContext = (
  circuitJson: AnyCircuitElement[],
): BoardConversionContext => {
  const sourceNetIdsRequiringSelector =
    getSourceNetIdsRequiringSelector(circuitJson)
  const runtimeNetNameBySourceNetId = getRuntimeNetNames(
    circuitJson,
    sourceNetIdsRequiringSelector,
  )
  const runtimeNetNameBySourceTraceId = getRuntimeNetNamesBySourceTraceId({
    circuitJson,
    runtimeNetNameBySourceNetId,
  })
  const portHintByPcbPortId = new Map<string, string>()
  const sourcePortIdByPcbPortId = new Map<string, string>()

  for (const element of circuitJson) {
    if (element.type !== "pcb_port") continue
    const portHint = `imported_pcb_port_${portHintByPcbPortId.size + 1}`
    portHintByPcbPortId.set(element.pcb_port_id, portHint)
    sourcePortIdByPcbPortId.set(element.pcb_port_id, element.source_port_id)
  }

  const runtimeNetNamesBySourcePortId = getRuntimeNetNamesBySourcePortId({
    circuitJson,
    runtimeNetNameBySourceNetId,
  })
  const pcbPortSelectorsByRuntimeNetName = new Map<string, string[]>()
  for (const [pcbPortId, sourcePortId] of sourcePortIdByPcbPortId) {
    const portHint = portHintByPcbPortId.get(pcbPortId)
    if (!portHint) continue
    for (const runtimeNetName of runtimeNetNamesBySourcePortId.get(
      sourcePortId,
    ) ?? []) {
      const selectors =
        pcbPortSelectorsByRuntimeNetName.get(runtimeNetName) ?? []
      selectors.push(`.${PCB_CHIP_NAME} > .${portHint}`)
      pcbPortSelectorsByRuntimeNetName.set(runtimeNetName, selectors)
    }
  }

  return {
    pcbChipName: PCB_CHIP_NAME,
    portHintByPcbPortId,
    runtimeNetNameBySourceNetId,
    runtimeNetNameBySourceTraceId,
    pcbPortSelectorsByRuntimeNetName,
  }
}

const getRuntimeNetNames = (
  circuitJson: AnyCircuitElement[],
  sourceNetIdsRequiringSelector: Set<string>,
) => {
  const result = new Map<string, string>()
  const runtimeNameByOriginalName = new Map<string, string>()
  const usedNames = new Set<string>()

  for (const element of circuitJson) {
    if (element.type !== "source_net") continue
    let runtimeName = runtimeNameByOriginalName.get(element.name)
    if (!runtimeName) {
      runtimeName = sourceNetIdsRequiringSelector.has(element.source_net_id)
        ? getUniqueRuntimeNetName(element.name, usedNames)
        : element.name
      runtimeNameByOriginalName.set(element.name, runtimeName)
      usedNames.add(runtimeName)
    }
    result.set(element.source_net_id, runtimeName)
  }
  return result
}

const getSourceNetIdsRequiringSelector = (
  circuitJson: AnyCircuitElement[],
): Set<string> => {
  const sourcePortIdsWithPcbPorts = new Set<string>()
  const result = getSourceNetIdsUsedByPcbTraces(circuitJson)
  for (const element of circuitJson) {
    if (element.type === "pcb_port") {
      sourcePortIdsWithPcbPorts.add(element.source_port_id)
    } else if (element.type === "pcb_via" && element.source_net_id) {
      result.add(element.source_net_id)
    }
  }
  for (const element of circuitJson) {
    if (
      element.type === "source_trace" &&
      element.connected_source_port_ids.some((sourcePortId) =>
        sourcePortIdsWithPcbPorts.has(sourcePortId),
      )
    ) {
      for (const sourceNetId of element.connected_source_net_ids) {
        result.add(sourceNetId)
      }
    }
  }
  return result
}

const getUniqueRuntimeNetName = (
  sourceName: string,
  usedNames: Set<string>,
): string => {
  const normalized = sourceName.replace(/[^A-Za-z0-9_]/gu, "_")
  const baseName = /^[A-Za-z_]/u.test(normalized)
    ? normalized
    : `NET_${normalized || "unnamed"}`
  let candidate = baseName
  let suffix = 2
  while (usedNames.has(candidate)) {
    candidate = `${baseName}_${suffix}`
    suffix += 1
  }
  return candidate
}

const getRuntimeNetNamesBySourcePortId = ({
  circuitJson,
  runtimeNetNameBySourceNetId,
}: {
  circuitJson: AnyCircuitElement[]
  runtimeNetNameBySourceNetId: Map<string, string>
}): Map<string, Set<string>> => {
  const result = new Map<string, Set<string>>()
  for (const element of circuitJson) {
    if (element.type !== "source_trace") continue
    const runtimeNames = element.connected_source_net_ids.flatMap(
      (sourceNetId) => {
        const name = runtimeNetNameBySourceNetId.get(sourceNetId)
        return name ? [name] : []
      },
    )
    for (const sourcePortId of element.connected_source_port_ids) {
      const names = result.get(sourcePortId) ?? new Set<string>()
      for (const runtimeName of runtimeNames) names.add(runtimeName)
      result.set(sourcePortId, names)
    }
  }
  return result
}
