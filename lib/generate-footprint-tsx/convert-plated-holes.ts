import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import { formatPcbRotationAttr } from "./helpers"

const formatOptionalMmAttr = (
  attrName: string,
  value: number | undefined,
): string => {
  if (value === undefined) return ""
  return ` ${attrName}="${mmStr(value)}"`
}

export const convertPlatedHoles: FootprintElementConverter = (circuitJson) => {
  const platedHoles = su(circuitJson).pcb_plated_hole.list()
  const elementStrings: string[] = []

  for (const platedHole of platedHoles) {
    if (platedHole.shape === "oval" || platedHole.shape === "pill") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" outerHeight="${mmStr(platedHole.outer_height)}" outerWidth="${mmStr(platedHole.outer_width)}" holeHeight="${mmStr(platedHole.hole_height)}" holeWidth="${mmStr(platedHole.hole_width)}" height="${mmStr(platedHole.hole_height)}" shape="${platedHole.shape}"${formatPcbRotationAttr("ccw_rotation" in platedHole ? platedHole.ccw_rotation : undefined)} />`,
      )
    } else if (platedHole.shape === "circle") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" outerDiameter="${mmStr(platedHole.outer_diameter)}" holeDiameter="${mmStr(platedHole.hole_diameter)}" shape="circle" />`,
      )
    } else if (platedHole.shape === "circular_hole_with_rect_pad") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" holeDiameter="${mmStr(platedHole.hole_diameter)}" rectPadWidth="${mmStr(platedHole.rect_pad_width)}" rectPadHeight="${mmStr(platedHole.rect_pad_height)}"${formatOptionalMmAttr("rectBorderRadius", platedHole.rect_border_radius)}${formatOptionalMmAttr("holeOffsetX", platedHole.hole_offset_x)}${formatOptionalMmAttr("holeOffsetY", platedHole.hole_offset_y)} shape="circular_hole_with_rect_pad" />`,
      )
    } else if (platedHole.shape === "pill_hole_with_rect_pad") {
      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" holeWidth="${mmStr(platedHole.hole_width)}" holeHeight="${mmStr(platedHole.hole_height)}" rectPadWidth="${mmStr(platedHole.rect_pad_width)}" rectPadHeight="${mmStr(platedHole.rect_pad_height)}"${formatOptionalMmAttr("rectBorderRadius", platedHole.rect_border_radius)}${formatOptionalMmAttr("holeOffsetX", platedHole.hole_offset_x)}${formatOptionalMmAttr("holeOffsetY", platedHole.hole_offset_y)} shape="pill_hole_with_rect_pad" />`,
      )
    } else if (platedHole.shape === "hole_with_polygon_pad") {
      const holeSizeAttrs =
        platedHole.hole_shape === "circle"
          ? ` holeDiameter="${mmStr(platedHole.hole_diameter ?? 0)}"`
          : `${formatOptionalMmAttr("holeWidth", platedHole.hole_width)}${formatOptionalMmAttr("holeHeight", platedHole.hole_height)}`

      elementStrings.push(
        `<platedhole  portHints={${JSON.stringify(platedHole.port_hints)}} pcbX="${mmStr(platedHole.x)}" pcbY="${mmStr(platedHole.y)}" holeShape="${platedHole.hole_shape}"${holeSizeAttrs} padOutline={${JSON.stringify(platedHole.pad_outline)}} holeOffsetX="${mmStr(platedHole.hole_offset_x)}" holeOffsetY="${mmStr(platedHole.hole_offset_y)}" shape="hole_with_polygon_pad" />`,
      )
    }
  }

  return elementStrings
}
