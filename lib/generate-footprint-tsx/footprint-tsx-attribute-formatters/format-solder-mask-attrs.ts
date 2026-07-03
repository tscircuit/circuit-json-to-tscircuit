import { formatOptionalMmAttr } from "./format-optional-mm-attr"

export const formatSolderMaskAttrs = (platedHole: {
  is_covered_with_solder_mask?: boolean
  soldermask_margin?: number
}): string =>
  `${
    platedHole.is_covered_with_solder_mask === undefined
      ? ""
      : ` coveredWithSolderMask={${platedHole.is_covered_with_solder_mask}}`
  }${formatOptionalMmAttr("solderMaskMargin", platedHole.soldermask_margin)}`
