export const formatPcbRotationAttr = (
  rotation: string | number | undefined,
  attrName = "pcbRotation",
): string => {
  if (rotation === undefined) return ""
  const formatted = typeof rotation === "number" ? `${rotation}deg` : rotation
  return ` ${attrName}="${formatted}"`
}
