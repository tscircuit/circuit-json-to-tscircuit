import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import {
  createBoardConversionContext,
  type BoardConversionContext,
} from "../board-conversion-context"
import type {
  PcbPortSelector,
  RuntimeNetName,
  SourcePortId,
} from "../board-conversion-types"

type PcbComponentId = PcbComponent["pcb_component_id"]
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = SourceComponent["source_component_id"]
type SourceComponentName = SourceComponent["name"]

export function createComponentPreservingBoardConversionContext(
  circuitJson: AnyCircuitElement[],
): BoardConversionContext {
  const context = createBoardConversionContext(circuitJson)
  const sourceComponentsById = new Map<SourceComponentId, SourceComponent>()
  const pcbComponentsById = new Map<PcbComponentId, PcbComponent>()
  const pcbComponentCountByName = new Map<SourceComponentName, number>()

  for (const element of circuitJson) {
    if (element.type === "source_component") {
      sourceComponentsById.set(element.source_component_id, element)
    } else if (element.type === "pcb_component") {
      pcbComponentsById.set(element.pcb_component_id, element)
    }
  }
  for (const pcbComponent of pcbComponentsById.values()) {
    const sourceComponent = pcbComponent.source_component_id
      ? sourceComponentsById.get(pcbComponent.source_component_id)
      : undefined
    if (!sourceComponent?.name) continue
    pcbComponentCountByName.set(
      sourceComponent.name,
      (pcbComponentCountByName.get(sourceComponent.name) ?? 0) + 1,
    )
  }

  const pcbPortSelectorsBySourcePortId = new Map<
    SourcePortId,
    PcbPortSelector[]
  >()
  const pcbPortIdsWithUnambiguousComponentSelectors = new Set(
    circuitJson.flatMap((element) => {
      if (element.type !== "pcb_port") return []
      const pcbComponent = element.pcb_component_id
        ? pcbComponentsById.get(element.pcb_component_id)
        : undefined
      const sourceComponent = pcbComponent?.source_component_id
        ? sourceComponentsById.get(pcbComponent.source_component_id)
        : undefined

      return sourceComponent?.name &&
        pcbComponentCountByName.get(sourceComponent.name) === 1
        ? [element.pcb_port_id]
        : []
    }),
  )
  for (const element of circuitJson) {
    if (element.type !== "pcb_port") continue
    const pcbComponent = element.pcb_component_id
      ? pcbComponentsById.get(element.pcb_component_id)
      : undefined
    const sourceComponent = pcbComponent?.source_component_id
      ? sourceComponentsById.get(pcbComponent.source_component_id)
      : undefined
    const portHint = context.portHintByPcbPortId.get(element.pcb_port_id)
    if (!portHint) continue

    const componentName = sourceComponent?.name ?? context.pcbChipName
    const selectors =
      pcbPortSelectorsBySourcePortId.get(element.source_port_id) ?? []
    selectors.push(`.${componentName} > .${portHint}`)
    pcbPortSelectorsBySourcePortId.set(element.source_port_id, selectors)
  }

  const pcbPortSelectorsByRuntimeNetName = new Map<
    RuntimeNetName,
    PcbPortSelector[]
  >()
  for (const element of circuitJson) {
    if (element.type !== "source_trace") continue
    for (const sourceNetId of element.connected_source_net_ids) {
      const runtimeNetName =
        context.runtimeNetNameBySourceNetId.get(sourceNetId)
      if (!runtimeNetName) continue

      const selectors =
        pcbPortSelectorsByRuntimeNetName.get(runtimeNetName) ?? []
      for (const sourcePortId of element.connected_source_port_ids) {
        for (const selector of pcbPortSelectorsBySourcePortId.get(
          sourcePortId,
        ) ?? []) {
          if (!selectors.includes(selector)) selectors.push(selector)
        }
      }
      pcbPortSelectorsByRuntimeNetName.set(runtimeNetName, selectors)
    }
  }

  return {
    ...context,
    pcbPortIdsWithUnambiguousComponentSelectors,
    pcbPortSelectorsBySourcePortId,
    pcbPortSelectorsByRuntimeNetName,
  }
}
