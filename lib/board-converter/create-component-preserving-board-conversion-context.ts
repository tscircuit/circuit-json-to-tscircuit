import type { AnyCircuitElement, PcbComponent, SourcePort } from "circuit-json"
import {
  type BoardConversionContext,
  createBoardConversionContext,
} from "../board-conversion-context"
import type {
  PcbPortSelector,
  RuntimeNetName,
  SourcePortId,
} from "../board-conversion-types"
import type { PcbComponentRuntimeNameByPcbComponentId } from "./get-board-child-runtime-names"
import type { NativeBoardComponent } from "./get-native-board-components"
import { getPcbPortIdsWithSafeOriginalHints } from "./get-pcb-port-ids-with-safe-original-hints"

type PcbComponentId = PcbComponent["pcb_component_id"]
export function createComponentPreservingBoardConversionContext({
  circuitJson,
  pcbChipName,
  pcbComponentRuntimeNameByPcbComponentId,
  nativeBoardComponentByPcbComponentId,
}: {
  circuitJson: AnyCircuitElement[]
  pcbChipName: string
  pcbComponentRuntimeNameByPcbComponentId: PcbComponentRuntimeNameByPcbComponentId
  nativeBoardComponentByPcbComponentId?: Map<
    PcbComponentId,
    NativeBoardComponent
  >
}): BoardConversionContext {
  const context = createBoardConversionContext({ circuitJson, pcbChipName })
  const pcbComponentsById = new Map<PcbComponentId, PcbComponent>()
  const sourcePortById = new Map<SourcePortId, SourcePort>()

  for (const element of circuitJson) {
    if (element.type === "pcb_component") {
      pcbComponentsById.set(element.pcb_component_id, element)
    } else if (element.type === "source_port") {
      sourcePortById.set(element.source_port_id, element)
    }
  }
  const pcbPortSelectorsBySourcePortId = new Map<
    SourcePortId,
    PcbPortSelector[]
  >()
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
    const nativeComponent = pcbComponent
      ? nativeBoardComponentByPcbComponentId?.get(pcbComponent.pcb_component_id)
      : undefined
    const sourcePort = sourcePortById.get(element.source_port_id)
    const resolvedPortHint =
      nativeComponent?.usesIntrinsicFootprint && sourcePort
        ? /^[A-Za-z_][A-Za-z0-9_]*$/u.test(sourcePort.name)
          ? sourcePort.name
          : sourcePort.pin_number !== undefined
            ? `pin${sourcePort.pin_number}`
            : portHint
        : portHint
    const selector: PcbPortSelector = `.${componentName ?? context.pcbChipName} > .${resolvedPortHint}`
    const selectors =
      pcbPortSelectorsBySourcePortId.get(element.source_port_id) ?? []
    if (!selectors.includes(selector)) {
      selectors.push(selector)
    }
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
    pcbPortIdsWithSafeOriginalHints: getPcbPortIdsWithSafeOriginalHints({
      circuitJson,
      pcbComponentRuntimeNameByPcbComponentId,
    }),
    pcbPortSelectorsBySourcePortId,
    pcbPortSelectorsByRuntimeNetName,
  }
}
