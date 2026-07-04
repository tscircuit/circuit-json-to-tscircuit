import { formatOptionalMmAttr } from "./format-optional-mm-attr"

export const formatSolderMaskAttrs = (platedHole: {
  is_covered_with_solder_mask?: boolean
  soldermask_margin?: number
}): string => {
  let coveredWithSolderMaskAttr = ""

  if (platedHole.is_covered_with_solder_mask !== undefined) {
    coveredWithSolderMaskAttr = ` coveredWithSolderMask={${platedHole.is_covered_with_solder_mask}}`
  }

  return `${coveredWithSolderMaskAttr}${formatOptionalMmAttr("solderMaskMargin", platedHole.soldermask_margin)}`
}
