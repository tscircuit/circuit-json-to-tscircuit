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
  const sourceNetNamesRequiringSelector = new Set<SourceNetName>()
  for (const sourceNet of sourceNets) {
    if (sourceNetIdsRequiringSelector.has(sourceNet.source_net_id)) {
      sourceNetNamesRequiringSelector.add(sourceNet.name)
    }
  }

  const sourceNetNames = [...new Set(sourceNets.map(({ name }) => name))]
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
    runtimeNetNameBySourceNetId.set(
      sourceNet.source_net_id,
      runtimeNameByOriginalName.get(sourceNet.name)!,
    )
  }
  return runtimeNetNameBySourceNetId
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
