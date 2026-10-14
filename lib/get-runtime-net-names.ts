import type { AnyCircuitElement, SourceNet } from "circuit-json"
import type {
  RuntimeNetName,
  SourceNetId,
  SourceNetName,
} from "./board-conversion-types"

export const getRuntimeNetNames = (
  circuitJson: AnyCircuitElement[],
  sourceNetIdsRequiringSelector: Set<SourceNetId>,
): Map<SourceNetId, RuntimeNetName> => {
  const sourceNets = circuitJson.filter(
    (element): element is SourceNet => element.type === "source_net",
  )
  const canonicalSourceNetIdBySourceNetId =
    getCanonicalSourceNetIdBySourceNetId(circuitJson)
  const sourceNetById = new Map(
    sourceNets.map((sourceNet) => [sourceNet.source_net_id, sourceNet]),
  )
  const canonicalSourceNets = sourceNets.filter(
    (sourceNet) =>
      canonicalSourceNetIdBySourceNetId.get(sourceNet.source_net_id) ===
      sourceNet.source_net_id,
  )
  const sourceNetNamesRequiringSelector = new Set<SourceNetName>()
  for (const sourceNetId of sourceNetIdsRequiringSelector) {
    const canonicalSourceNetId =
      canonicalSourceNetIdBySourceNetId.get(sourceNetId) ?? sourceNetId
    const canonicalSourceNet = sourceNetById.get(canonicalSourceNetId)
    if (canonicalSourceNet) {
      sourceNetNamesRequiringSelector.add(canonicalSourceNet.name)
    }
  }

  const sourceNetNames = [
    ...new Set(canonicalSourceNets.map(({ name }) => name)),
  ]
  const runtimeNameByOriginalName = new Map<SourceNetName, RuntimeNetName>()
  const usedRuntimeNetNames = new Set<RuntimeNetName>()
  const namesThatRemainUnchanged = sourceNetNames.filter(
    (sourceNetName) =>
      !sourceNetNamesRequiringSelector.has(sourceNetName) ||
      getRuntimeNetNameBase(sourceNetName) === sourceNetName,
  )

  for (const sourceNetName of namesThatRemainUnchanged) {
    runtimeNameByOriginalName.set(sourceNetName, sourceNetName)
    usedRuntimeNetNames.add(sourceNetName)
  }

  const namesRequiringSanitization = sourceNetNames.filter(
    (sourceNetName) => !runtimeNameByOriginalName.has(sourceNetName),
  )
  for (const sourceNetName of namesRequiringSanitization) {
    const runtimeNetName = getUniqueRuntimeNetName(
      sourceNetName,
      usedRuntimeNetNames,
    )
    runtimeNameByOriginalName.set(sourceNetName, runtimeNetName)
    usedRuntimeNetNames.add(runtimeNetName)
  }

  const runtimeNetNameBySourceNetId = new Map<SourceNetId, RuntimeNetName>()
  for (const sourceNet of sourceNets) {
    const canonicalSourceNetId =
      canonicalSourceNetIdBySourceNetId.get(sourceNet.source_net_id) ??
      sourceNet.source_net_id
    const canonicalSourceNet = sourceNetById.get(canonicalSourceNetId)
    if (!canonicalSourceNet) continue
    runtimeNetNameBySourceNetId.set(
      sourceNet.source_net_id,
      runtimeNameByOriginalName.get(canonicalSourceNet.name)!,
    )
  }
  return runtimeNetNameBySourceNetId
}

const getCanonicalSourceNetIdBySourceNetId = (
  circuitJson: AnyCircuitElement[],
): Map<SourceNetId, SourceNetId> => {
  const parentSourceNetIdBySourceNetId = new Map<SourceNetId, SourceNetId>()
  for (const element of circuitJson) {
    if (element.type !== "source_net") continue
    parentSourceNetIdBySourceNetId.set(
      element.source_net_id,
      element.source_net_id,
    )
  }

  for (const element of circuitJson) {
    if (element.type !== "source_trace") continue
    const sourceNetIds = element.connected_source_net_ids.filter(
      (sourceNetId) => parentSourceNetIdBySourceNetId.has(sourceNetId),
    )
    const firstSourceNetId = sourceNetIds[0]
    if (!firstSourceNetId) continue
    const canonicalSourceNetId = findCanonicalSourceNetId({
      parentSourceNetIdBySourceNetId,
      sourceNetId: firstSourceNetId,
    })
    for (const sourceNetId of sourceNetIds.slice(1)) {
      const aliasCanonicalSourceNetId = findCanonicalSourceNetId({
        parentSourceNetIdBySourceNetId,
        sourceNetId,
      })
      if (aliasCanonicalSourceNetId === canonicalSourceNetId) continue
      parentSourceNetIdBySourceNetId.set(
        aliasCanonicalSourceNetId,
        canonicalSourceNetId,
      )
    }
  }

  return new Map(
    [...parentSourceNetIdBySourceNetId.keys()].map((sourceNetId) => [
      sourceNetId,
      findCanonicalSourceNetId({
        parentSourceNetIdBySourceNetId,
        sourceNetId,
      }),
    ]),
  )
}

const findCanonicalSourceNetId = ({
  parentSourceNetIdBySourceNetId,
  sourceNetId,
}: {
  parentSourceNetIdBySourceNetId: ReadonlyMap<SourceNetId, SourceNetId>
  sourceNetId: SourceNetId
}): SourceNetId => {
  let currentSourceNetId = sourceNetId
  const visitedSourceNetIds = new Set<SourceNetId>()
  while (!visitedSourceNetIds.has(currentSourceNetId)) {
    visitedSourceNetIds.add(currentSourceNetId)
    const parentSourceNetId =
      parentSourceNetIdBySourceNetId.get(currentSourceNetId)
    if (!parentSourceNetId || parentSourceNetId === currentSourceNetId) {
      return currentSourceNetId
    }
    currentSourceNetId = parentSourceNetId
  }
  return currentSourceNetId
}

const getUniqueRuntimeNetName = (
  sourceNetName: SourceNetName,
  usedRuntimeNetNames: Set<RuntimeNetName>,
): RuntimeNetName => {
  const baseName = getRuntimeNetNameBase(sourceNetName)
  let candidate = baseName
  let suffix = 2
  while (usedRuntimeNetNames.has(candidate)) {
    candidate = `${baseName}_${suffix}`
    suffix += 1
  }
  return candidate
}

const getRuntimeNetNameBase = (
  sourceNetName: SourceNetName,
): RuntimeNetName => {
  const normalizedName = sourceNetName.replace(/[^A-Za-z0-9_]/gu, "_")
  return /^[A-Za-z_]/u.test(normalizedName)
    ? normalizedName
    : `NET_${normalizedName || "unnamed"}`
}
