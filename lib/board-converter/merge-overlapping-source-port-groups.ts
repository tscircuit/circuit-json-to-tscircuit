import type { SourcePortId } from "../board-conversion-types"

export function mergeOverlappingSourcePortGroups(
  sourcePortGroups: readonly (readonly SourcePortId[])[],
): SourcePortId[][] {
  const groupBySourcePortId = new Map<SourcePortId, Set<SourcePortId>>()
  for (const sourcePortIds of sourcePortGroups) {
    const mergedGroup = new Set<SourcePortId>(sourcePortIds)
    for (const sourcePortId of sourcePortIds) {
      for (const connectedSourcePortId of groupBySourcePortId.get(
        sourcePortId,
      ) ?? []) {
        mergedGroup.add(connectedSourcePortId)
      }
    }
    // Later declarations must see the whole group through any of its members.
    for (const sourcePortId of mergedGroup) {
      groupBySourcePortId.set(sourcePortId, mergedGroup)
    }
  }
  return [...new Set(groupBySourcePortId.values())].map((group) => [...group])
}
