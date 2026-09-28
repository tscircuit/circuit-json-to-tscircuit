import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import { formatPcbRotationAttr } from "./footprint-tsx-attribute-formatters/format-pcb-rotation-attr"

export const convertHoles: FootprintElementConverter = (circuitJson) => {
  const holes = su(circuitJson).pcb_hole.list()
  const elementStrings: string[] = []

  for (const hole of holes) {
    const solderMaskAttrs: string[] = []
    if ((hole as any).is_covered_with_solder_mask !== undefined) {
      solderMaskAttrs.push(
        `coveredWithSolderMask={${(hole as any).is_covered_with_solder_mask}}`,
      )
    }
    if ((hole as any).soldermask_margin !== undefined) {
      solderMaskAttrs.push(
        `solderMaskMargin={${(hole as any).soldermask_margin}}`,
      )
    }
    const solderMaskSuffix =
      solderMaskAttrs.length > 0 ? ` ${solderMaskAttrs.join(" ")}` : ""

    if (hole.hole_shape === "circle") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" diameter="${mmStr(hole.hole_diameter)}"${solderMaskSuffix} />`,
      )
    } else if (hole.hole_shape === "rect") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="rect"${solderMaskSuffix} />`,
      )
    } else if (hole.hole_shape === "oval") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="oval"${solderMaskSuffix} />`,
      )
    } else if (
      hole.hole_shape === "pill" ||
      hole.hole_shape === "rotated_pill"
    ) {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}" width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="pill"${formatPcbRotationAttr("ccw_rotation" in hole ? hole.ccw_rotation : undefined)}${solderMaskSuffix} />`,
      )
    }
  }

  return elementStrings
}
