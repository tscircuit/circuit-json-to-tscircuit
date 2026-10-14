import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import {
  type BoardConversionContext,
  createBoardConversionContext,
} from "../board-conversion-context"
import type {
  PcbPortSelector,
  RuntimeNetName,
  SourcePortId,
} from "../board-conversion-types"
import type { PcbComponentRuntimeNameByPcbComponentId } from "./get-pcb-component-runtime-name-by-pcb-component-id"

type PcbComponentId = PcbComponent["pcb_component_id"]
export function createComponentPreservingBoardConversionContext({
  circuitJson,
  pcbComponentRuntimeNameByPcbComponentId,
}: {
  circuitJson: AnyCircuitElement[]
  pcbComponentRuntimeNameByPcbComponentId: PcbComponentRuntimeNameByPcbComponentId
}): BoardConversionContext {
  const context = createBoardConversionContext(circuitJson)
  const pcbComponentsById = new Map<PcbComponentId, PcbComponent>()

  for (const element of circuitJson) {
    if (element.type === "pcb_component") {
      pcbComponentsById.set(element.pcb_component_id, element)
    }
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
      return pcbComponent &&
        pcbComponentRuntimeNameByPcbComponentId.has(
          pcbComponent.pcb_component_id,
        )
        ? [element.pcb_port_id]
        : []
    }),
  )
  for (const element of circuitJson) {
    if (element.type !== "pcb_port") continue
    const pcbComponent = element.pcb_component_id
      ? pcbComponentsById.get(element.pcb_component_id)
      : undefined
    const portHint = context.portHintByPcbPortId.get(element.pcb_port_id)
    if (!portHint) continue

    const componentName = pcbComponent
      ? pcbComponentRuntimeNameByPcbComponentId.get(
          pcbComponent.pcb_component_id,
        )
      : undefined
    const selectors =
      pcbPortSelectorsBySourcePortId.get(element.source_port_id) ?? []
    selectors.push(`.${componentName ?? context.pcbChipName} > .${portHint}`)
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
