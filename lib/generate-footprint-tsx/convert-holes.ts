import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import { formatPcbRotationAttr } from "./footprint-tsx-attribute-formatters/format-pcb-rotation-attr"
import { formatSolderMaskAttrs } from "./footprint-tsx-attribute-formatters/format-solder-mask-attrs"

export const convertHoles: FootprintElementConverter = (circuitJson) => {
  const holes = su(circuitJson).pcb_hole.list()
  const elementStrings: string[] = []

  for (const hole of holes) {
    if (hole.hole_shape === "circle") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}"${formatSolderMaskAttrs(hole)} diameter="${mmStr(hole.hole_diameter)}" />`,
      )
    } else if (hole.hole_shape === "rect") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}"${formatSolderMaskAttrs(hole)} width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="rect" />`,
      )
    } else if (hole.hole_shape === "oval") {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}"${formatSolderMaskAttrs(hole)} width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="oval" />`,
      )
    } else if (
      hole.hole_shape === "pill" ||
      hole.hole_shape === "rotated_pill"
    ) {
      elementStrings.push(
        `<hole pcbX="${mmStr(hole.x)}" pcbY="${mmStr(hole.y)}"${formatSolderMaskAttrs(hole)} width="${mmStr(hole.hole_width)}" height="${mmStr(hole.hole_height)}" shape="pill"${formatPcbRotationAttr("ccw_rotation" in hole ? hole.ccw_rotation : undefined)} />`,
      )
    }
  }

  return elementStrings
}
