import type { AnyCircuitElement } from "circuit-json"
import type { SourcePortId } from "../board-conversion-types"
import { mergeOverlappingSourcePortGroups } from "./merge-overlapping-source-port-groups"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

export function getInternallyConnectedSourcePortIds({
  circuitJson,
  sourceComponent,
}: {
  circuitJson: AnyCircuitElement[]
  sourceComponent: SourceComponent
}): SourcePortId[][] {
  const internallyConnectedSourcePortIds: SourcePortId[][] = []
  if ("internally_connected_source_port_ids" in sourceComponent) {
    internallyConnectedSourcePortIds.push(
      ...(sourceComponent.internally_connected_source_port_ids ?? []),
    )
  }
  for (const element of circuitJson) {
    if (
      element.type === "source_component_internal_connection" &&
      element.source_component_id === sourceComponent.source_component_id
    ) {
      internallyConnectedSourcePortIds.push(element.source_port_ids)
    }
  }
  return mergeOverlappingSourcePortGroups(internallyConnectedSourcePortIds)
}
