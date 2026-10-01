export const getSafeNetName = ({
  sourceNetName,
  usedNetNames,
}: {
  sourceNetName: string
  usedNetNames: Set<string>
}): string => {
  const normalizedNetName = sourceNetName.replace(/[^A-Za-z0-9_]/g, "_")
  const prefixedNetName = /^[0-9]/.test(normalizedNetName)
    ? `NET_${normalizedNetName}`
    : normalizedNetName || "NET"
  let safeNetName = prefixedNetName
  let suffix = 2

  while (usedNetNames.has(safeNetName)) {
    safeNetName = `${prefixedNetName}_${suffix}`
    suffix += 1
  }

  usedNetNames.add(safeNetName)
  return safeNetName
}
