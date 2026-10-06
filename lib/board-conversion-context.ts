import type { AnyCircuitElement } from "circuit-json"
import type { LayerRef } from "circuit-json"
import type {
  BoardConversionContext,
  ImportedPortHint,
  PcbPortId,
  PcbPortSelector,
  RuntimeNetName,
  SourceNetId,
  SourcePortId,
} from "./board-conversion-types"
import { getRuntimeNetNames } from "./get-runtime-net-names"

export type { BoardConversionContext } from "./board-conversion-types"

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
  const portHintByPcbPortId = new Map<PcbPortId, ImportedPortHint>()
  const sourcePortIdByPcbPortId = new Map<PcbPortId, SourcePortId>()
  const pcbPortSelectorsBySourcePortId = new Map<
    SourcePortId,
    PcbPortSelector[]
  >()
  const pcbPathAnchorSelectorByLayer = new Map<LayerRef, PcbPortSelector>()

  for (const element of circuitJson) {
    if (element.type !== "pcb_port") continue
    const portHint = `imported_pcb_port_${portHintByPcbPortId.size + 1}`
    const pcbPortSelector = `.${PCB_CHIP_NAME} > .${portHint}`
    portHintByPcbPortId.set(element.pcb_port_id, portHint)
    sourcePortIdByPcbPortId.set(element.pcb_port_id, element.source_port_id)
    const sourcePortSelectors =
      pcbPortSelectorsBySourcePortId.get(element.source_port_id) ?? []
    sourcePortSelectors.push(pcbPortSelector)
    pcbPortSelectorsBySourcePortId.set(
      element.source_port_id,
      sourcePortSelectors,
    )
    const firstAvailableLayer = element.layers[0]
    // pcbPaths starts on the anchor port's first layer. Indexing every layer of
    // a through-hole port would silently move bottom paths onto its top layer.
    if (
      firstAvailableLayer &&
      !pcbPathAnchorSelectorByLayer.has(firstAvailableLayer)
    ) {
      pcbPathAnchorSelectorByLayer.set(firstAvailableLayer, pcbPortSelector)
    }
  }

  const runtimeNetNamesBySourcePortId = getRuntimeNetNamesBySourcePortId({
    circuitJson,
    runtimeNetNameBySourceNetId,
  })
  const pcbPortSelectorsByRuntimeNetName = new Map<
    RuntimeNetName,
    PcbPortSelector[]
  >()
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
    pcbPortSelectorsBySourcePortId,
    pcbPathAnchorSelectorByLayer,
    runtimeNetNameBySourceNetId,
    pcbPortSelectorsByRuntimeNetName,
  }
}

const getSourceNetIdsRequiringSelector = (
  circuitJson: AnyCircuitElement[],
): Set<SourceNetId> => {
  const sourcePortIdsWithPcbPorts = new Set<SourcePortId>()
  const result = new Set<SourceNetId>()
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

const getRuntimeNetNamesBySourcePortId = ({
  circuitJson,
  runtimeNetNameBySourceNetId,
}: {
  circuitJson: AnyCircuitElement[]
  runtimeNetNameBySourceNetId: Map<SourceNetId, RuntimeNetName>
}): Map<SourcePortId, Set<RuntimeNetName>> => {
  const result = new Map<SourcePortId, Set<RuntimeNetName>>()
  for (const element of circuitJson) {
    if (element.type !== "source_trace") continue
    const runtimeNames = element.connected_source_net_ids.flatMap(
      (sourceNetId) => {
        const name = runtimeNetNameBySourceNetId.get(sourceNetId)
        return name ? [name] : []
      },
    )
    for (const sourcePortId of element.connected_source_port_ids) {
      const names = result.get(sourcePortId) ?? new Set<RuntimeNetName>()
      for (const runtimeName of runtimeNames) names.add(runtimeName)
      result.set(sourcePortId, names)
    }
  }
  return result
}
