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
  const originalHintSetsByPcbPortId = new Map<PcbPortId, PortHint[][]>()

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
      (element.type !== "pcb_plated_hole" && element.type !== "pcb_smtpad") ||
      !element.pcb_port_id ||
      !element.port_hints
    ) {
      continue
    }
    const originalHintSets =
      originalHintSetsByPcbPortId.get(element.pcb_port_id) ?? []
    originalHintSets.push(element.port_hints)
    originalHintSetsByPcbPortId.set(element.pcb_port_id, originalHintSets)
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
    const originalHintSets = originalHintSetsByPcbPortId.get(
      element.pcb_port_id,
    )
    if (!sourcePort?.source_component_id || !originalHintSets) continue

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
    // A numbered hint only disambiguates the primitive carrying it.
    if (
      originalHintSets.every(
        (originalHints) =>
          originalHints.some((portHint) => /^(?:pin)?\d+$/u.test(portHint)) ||
          originalHints.every((portHint) => !aliasesOnOtherPorts.has(portHint)),
      )
    ) {
      safePcbPortIds.add(element.pcb_port_id)
    }
  }

  return safePcbPortIds
}
