import type { AnyCircuitElement } from "circuit-json"
import type { PcbPortId, SourcePortId } from "../board-conversion-types"
import type { PcbComponentRuntimeNameByPcbComponentId } from "./get-board-child-runtime-names"

type PortHint = string
type SourceComponentId = string
type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>

export function getPcbPortIdsWithSafeOriginalHints({
  circuitJson,
  pcbComponentRuntimeNameByPcbComponentId,
}: {
  circuitJson: AnyCircuitElement[]
  pcbComponentRuntimeNameByPcbComponentId: PcbComponentRuntimeNameByPcbComponentId
}): Set<PcbPortId> {
  const sourcePortById = new Map<SourcePortId, SourcePort>()
  const sourcePortsByComponentId = new Map<SourceComponentId, SourcePort[]>()
  const originalHintsByPcbPortId = new Map<PcbPortId, Set<PortHint>>()

  for (const element of circuitJson) {
    if (element.type !== "source_port") continue
    sourcePortById.set(element.source_port_id, element)
    if (!element.source_component_id) continue
    const componentPorts =
      sourcePortsByComponentId.get(element.source_component_id) ?? []
    componentPorts.push(element)
    sourcePortsByComponentId.set(element.source_component_id, componentPorts)
  }

  for (const element of circuitJson) {
    if (
      !["pcb_plated_hole", "pcb_smtpad"].includes(element.type) ||
      !element.pcb_port_id ||
      !element.port_hints
    ) {
      continue
    }
    originalHintsByPcbPortId.set(
      element.pcb_port_id,
      new Set(element.port_hints),
    )
  }

  const safePcbPortIds = new Set<PcbPortId>()
  for (const element of circuitJson) {
    if (
      element.type !== "pcb_port" ||
      !element.pcb_component_id ||
      !pcbComponentRuntimeNameByPcbComponentId.has(element.pcb_component_id)
    ) {
      continue
    }
    const sourcePort = sourcePortById.get(element.source_port_id)
    const originalHints = originalHintsByPcbPortId.get(element.pcb_port_id)
    if (!sourcePort?.source_component_id || !originalHints) continue
    if (
      [...originalHints].some((portHint) => /^(?:pin)?\d+$/u.test(portHint))
    ) {
      safePcbPortIds.add(element.pcb_port_id)
      continue
    }

    const aliasesOnOtherPorts = new Set<PortHint>()
    for (const siblingPort of sourcePortsByComponentId.get(
      sourcePort.source_component_id,
    ) ?? []) {
      if (siblingPort.source_port_id === sourcePort.source_port_id) continue
      aliasesOnOtherPorts.add(siblingPort.name)
      for (const portHint of siblingPort.port_hints ?? []) {
        aliasesOnOtherPorts.add(portHint)
      }
    }
    if (
      [...originalHints].every((portHint) => !aliasesOnOtherPorts.has(portHint))
    ) {
      safePcbPortIds.add(element.pcb_port_id)
    }
  }

  return safePcbPortIds
}
