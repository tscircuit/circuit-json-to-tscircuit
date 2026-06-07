import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"

const formatJsxProp = (
  name: string,
  value: string | number | boolean,
): string =>
  typeof value === "string"
    ? `${name}=${JSON.stringify(value)}`
    : `${name}={${JSON.stringify(value)}}`

const formatDistanceProp = (name: string, value: number | undefined): string =>
  formatJsxProp(name, mmStr(value ?? 0))

export const convertSmtPads: FootprintElementConverter = (circuitJson) => {
  const smtPads = su(circuitJson).pcb_smtpad.list()
  const elementStrings: string[] = []

  for (const smtPad of smtPads) {
    const commonAttrs: string[] = []

    if (smtPad.port_hints !== undefined) {
      commonAttrs.push(`portHints={${JSON.stringify(smtPad.port_hints)}}`)
    }
    if ("x" in smtPad && smtPad.x !== undefined) {
      commonAttrs.push(formatDistanceProp("pcbX", smtPad.x))
    }
    if ("y" in smtPad && smtPad.y !== undefined) {
      commonAttrs.push(formatDistanceProp("pcbY", smtPad.y))
    }
    if (smtPad.layer !== undefined) {
      commonAttrs.push(formatJsxProp("layer", smtPad.layer))
    }
    if (smtPad.is_covered_with_solder_mask !== undefined) {
      commonAttrs.push(
        formatJsxProp(
          "coveredWithSolderMask",
          smtPad.is_covered_with_solder_mask,
        ),
      )
    }
    if (smtPad.soldermask_margin !== undefined) {
      commonAttrs.push(
        formatDistanceProp("solderMaskMargin", smtPad.soldermask_margin),
      )
    }

    if (smtPad.shape === "circle") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} ${formatDistanceProp("radius", smtPad.radius)} shape="circle" />`,
      )
    } else if (smtPad.shape === "rect") {
      if (smtPad.rect_border_radius !== undefined) {
        commonAttrs.push(
          formatDistanceProp("rectBorderRadius", smtPad.rect_border_radius),
        )
      }
      if (smtPad.corner_radius !== undefined) {
        commonAttrs.push(
          formatDistanceProp("cornerRadius", smtPad.corner_radius),
        )
      }
      if (smtPad.soldermask_margin_left !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginLeft",
            smtPad.soldermask_margin_left,
          ),
        )
      }
      if (smtPad.soldermask_margin_top !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginTop",
            smtPad.soldermask_margin_top,
          ),
        )
      }
      if (smtPad.soldermask_margin_right !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginRight",
            smtPad.soldermask_margin_right,
          ),
        )
      }
      if (smtPad.soldermask_margin_bottom !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginBottom",
            smtPad.soldermask_margin_bottom,
          ),
        )
      }
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} ${formatDistanceProp("width", smtPad.width)} ${formatDistanceProp("height", smtPad.height)} shape="rect" />`,
      )
    } else if (smtPad.shape === "pill") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} ${formatDistanceProp("width", smtPad.width)} ${formatDistanceProp("height", smtPad.height)} ${formatDistanceProp("radius", smtPad.radius)} shape="pill" />`,
      )
    } else if (smtPad.shape === "polygon") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} shape="polygon" points={${JSON.stringify(smtPad.points)}} />`,
      )
    } else if (smtPad.shape === "rotated_rect") {
      if (smtPad.corner_radius !== undefined) {
        commonAttrs.push(
          formatDistanceProp("cornerRadius", smtPad.corner_radius),
        )
      }
      if (smtPad.soldermask_margin_left !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginLeft",
            smtPad.soldermask_margin_left,
          ),
        )
      }
      if (smtPad.soldermask_margin_top !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginTop",
            smtPad.soldermask_margin_top,
          ),
        )
      }
      if (smtPad.soldermask_margin_right !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginRight",
            smtPad.soldermask_margin_right,
          ),
        )
      }
      if (smtPad.soldermask_margin_bottom !== undefined) {
        commonAttrs.push(
          formatDistanceProp(
            "solderMaskMarginBottom",
            smtPad.soldermask_margin_bottom,
          ),
        )
      }
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} ${formatDistanceProp("width", smtPad.width)} ${formatDistanceProp("height", smtPad.height)} ccwRotation={${smtPad.ccw_rotation}} shape="rotated_rect" />`,
      )
    }
  }

  return elementStrings
}
