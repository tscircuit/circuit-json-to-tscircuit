import { mmStr } from "@tscircuit/mm"

export const escapeJsxText = (value: unknown): string =>
  String(value ?? "").replace(/"/g, '\\"')

export const formatMm = (value: number | undefined): string => mmStr(value ?? 0)

export const formatPcbRotationAttr = (
  rotation: string | number | undefined,
  attrName = "pcbRotation",
): string => {
  if (rotation === undefined) return ""
  const formatted = typeof rotation === "number" ? `${rotation}deg` : rotation
  return ` ${attrName}="${formatted}"`
}
