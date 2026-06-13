import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import {
  formatOptionalMmAttr,
  formatPcbRotationAttr,
  formatSolderMaskAttrs,
} from "./helpers"

export const convertPlatedHoles: FootprintElementConverter = (circuitJson) => {
  const platedHoles = su(circuitJson).pcb_plated_hole.list()
  const elementStrings: string[] = []

  for (const platedHole of platedHoles) {
    if (platedHole.shape === "oval" || platedHole.shape === "pill") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}"${formatSolderMaskAttrs(platedHole)} outerHeight="${mmStr(platedHole.outer_height)}" outerWidth="${mmStr(platedHole.outer_width)}" holeHeight="${mmStr(platedHole.hole_height)}" holeWidth="${mmStr(platedHole.hole_width)}" height="${mmStr(platedHole.hole_height)}" shape="${platedHole.shape}"${formatPcbRotationAttr("ccw_rotation" in platedHole ? platedHole.ccw_rotation : undefined)} />`,
      )
    } else if (platedHole.shape === "circle") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}"${formatSolderMaskAttrs(platedHole)} outerDiameter="${mmStr(platedHole.outer_diameter)}" holeDiameter="${mmStr(platedHole.hole_diameter)}" shape="circle" />`,
      )
    } else if (platedHole.shape === "circular_hole_with_rect_pad") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}"${
          platedHole.hole_shape === undefined
            ? ""
            : ` holeShape="${platedHole.hole_shape}"`
        }${
          platedHole.pad_shape === undefined
            ? ""
            : ` padShape="${platedHole.pad_shape}"`
        }${formatSolderMaskAttrs(platedHole)} holeDiameter="${mmStr(platedHole.hole_diameter)}" rectPadWidth="${mmStr(platedHole.rect_pad_width)}" rectPadHeight="${mmStr(platedHole.rect_pad_height)}"${formatOptionalMmAttr("rectBorderRadius", platedHole.rect_border_radius)}${formatOptionalMmAttr("holeOffsetX", platedHole.hole_offset_x)}${formatOptionalMmAttr("holeOffsetY", platedHole.hole_offset_y)}${formatPcbRotationAttr(platedHole.rect_ccw_rotation)} shape="circular_hole_with_rect_pad" />`,
      )
    } else if (
      platedHole.shape === "pill_hole_with_rect_pad" ||
      platedHole.shape === "rotated_pill_hole_with_rect_pad"
    ) {
      const holeShape =
        platedHole.shape === "rotated_pill_hole_with_rect_pad"
          ? "pill"
          : platedHole.hole_shape
      const rotation =
        platedHole.shape === "rotated_pill_hole_with_rect_pad"
          ? platedHole.hole_ccw_rotation
          : undefined

      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}"${
          holeShape === undefined ? "" : ` holeShape="${holeShape}"`
        }${
          platedHole.pad_shape === undefined
            ? ""
            : ` padShape="${platedHole.pad_shape}"`
        }${formatSolderMaskAttrs(platedHole)} holeWidth="${mmStr(platedHole.hole_width)}" holeHeight="${mmStr(platedHole.hole_height)}" rectPadWidth="${mmStr(platedHole.rect_pad_width)}" rectPadHeight="${mmStr(platedHole.rect_pad_height)}"${formatOptionalMmAttr("rectBorderRadius", platedHole.rect_border_radius)}${formatOptionalMmAttr("holeOffsetX", platedHole.hole_offset_x)}${formatOptionalMmAttr("holeOffsetY", platedHole.hole_offset_y)}${formatPcbRotationAttr(rotation)} shape="pill_hole_with_rect_pad" />`,
      )
    } else if (platedHole.shape === "hole_with_polygon_pad") {
      const holeSizeAttrs =
        platedHole.hole_shape === "circle"
          ? ` holeDiameter="${mmStr(platedHole.hole_diameter ?? 0)}"`
          : `${formatOptionalMmAttr("holeWidth", platedHole.hole_width)}${formatOptionalMmAttr("holeHeight", platedHole.hole_height)}`

      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}"${
          platedHole.hole_shape === undefined
            ? ""
            : ` holeShape="${platedHole.hole_shape}"`
        }${formatSolderMaskAttrs(platedHole)}${holeSizeAttrs} padOutline={${JSON.stringify(platedHole.pad_outline)}} holeOffsetX="${mmStr(platedHole.hole_offset_x ?? 0)}" holeOffsetY="${mmStr(platedHole.hole_offset_y ?? 0)}" shape="hole_with_polygon_pad" />`,
      )
    }
  }

  return elementStrings
}
