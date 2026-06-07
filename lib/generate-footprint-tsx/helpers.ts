import { mmStr } from "@tscircuit/mm"

export const escapeJsxText = (value: unknown): string =>
  String(value ?? "").replace(/"/g, '\\"')

export const formatMm = (value: number | undefined): string => mmStr(value ?? 0)

export const formatOptionalStringAttr = (
  attrName: string,
  value: string | undefined,
): string => {
  if (value === undefined) return ""
  return ` ${attrName}="${escapeJsxText(value)}"`
}

export const formatOptionalNumberAttr = (
  attrName: string,
  value: number | undefined,
): string => {
  if (value === undefined) return ""
  return ` ${attrName}={${value}}`
}

export const formatOptionalBooleanAttr = (
  attrName: string,
  value: boolean | undefined,
): string => {
  if (value === undefined) return ""
  return ` ${attrName}={${value}}`
}

export const formatOptionalMmAttr = (
  attrName: string,
  value: number | undefined,
): string => {
  if (value === undefined) return ""
  return ` ${attrName}="${mmStr(value)}"`
}

export const formatPcbRotationAttr = (
  rotation: string | number | undefined,
  attrName = "pcbRotation",
): string => {
  if (rotation === undefined) return ""
  const formatted = typeof rotation === "number" ? `${rotation}deg` : rotation
  return ` ${attrName}="${formatted}"`
}

export const formatSolderMaskAttrs = (options: {
  is_covered_with_solder_mask?: boolean
  soldermask_margin?: number
}): string =>
  `${formatOptionalBooleanAttr(
    "coveredWithSolderMask",
    options.is_covered_with_solder_mask,
  )}${formatOptionalMmAttr("solderMaskMargin", options.soldermask_margin)}`
