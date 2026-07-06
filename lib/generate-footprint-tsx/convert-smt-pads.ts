import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import { formatOptionalMmAttr } from "./footprint-tsx-attribute-formatters/format-optional-mm-attr"
import { formatPcbRotationAttr } from "./footprint-tsx-attribute-formatters/format-pcb-rotation-attr"
import { formatSolderMaskAttrs } from "./footprint-tsx-attribute-formatters/format-solder-mask-attrs"

export const convertSmtPads: FootprintElementConverter = (circuitJson) => {
  const smtPads = su(circuitJson).pcb_smtpad.list()
  const elementStrings: string[] = []

  for (const smtPad of smtPads) {
    const commonAttrs: string[] = []
    const solderMaskAttrs = formatSolderMaskAttrs(smtPad)

    if (smtPad.port_hints !== undefined) {
      commonAttrs.push(`portHints={${JSON.stringify(smtPad.port_hints)}}`)
    }
    if ("x" in smtPad && smtPad.x !== undefined) {
      commonAttrs.push(`pcbX="${mmStr(smtPad.x)}"`)
    }
    if ("y" in smtPad && smtPad.y !== undefined) {
      commonAttrs.push(`pcbY="${mmStr(smtPad.y)}"`)
    }
    if (smtPad.layer !== undefined) {
      commonAttrs.push(`layer="${smtPad.layer}"`)
    }

    if (smtPad.shape === "circle") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")}${solderMaskAttrs} radius="${mmStr(smtPad.radius ?? 0)}" shape="circle" />`,
      )
    } else if (smtPad.shape === "rect") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")}${solderMaskAttrs}${formatOptionalMmAttr("rectBorderRadius", smtPad.rect_border_radius)}${formatOptionalMmAttr("cornerRadius", smtPad.corner_radius)}${formatOptionalMmAttr("solderMaskMarginLeft", smtPad.soldermask_margin_left)}${formatOptionalMmAttr("solderMaskMarginTop", smtPad.soldermask_margin_top)}${formatOptionalMmAttr("solderMaskMarginRight", smtPad.soldermask_margin_right)}${formatOptionalMmAttr("solderMaskMarginBottom", smtPad.soldermask_margin_bottom)} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}" shape="rect" />`,
      )
    } else if (smtPad.shape === "pill") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")}${solderMaskAttrs} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}" radius="${mmStr(smtPad.radius ?? 0)}" shape="pill" />`,
      )
    } else if (smtPad.shape === "rotated_pill") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")}${solderMaskAttrs} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}" radius="${mmStr(smtPad.radius ?? 0)}"${formatPcbRotationAttr(smtPad.ccw_rotation)} shape="pill" />`,
      )
    } else if (smtPad.shape === "polygon") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")}${solderMaskAttrs} shape="polygon" points={${JSON.stringify(smtPad.points)}} />`,
      )
    } else if (smtPad.shape === "rotated_rect") {
      const cornerRadius =
        smtPad.corner_radius ?? smtPad.rect_border_radius ?? undefined

      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")}${solderMaskAttrs}${formatOptionalMmAttr("cornerRadius", cornerRadius)}${formatOptionalMmAttr("solderMaskMarginLeft", smtPad.soldermask_margin_left)}${formatOptionalMmAttr("solderMaskMarginTop", smtPad.soldermask_margin_top)}${formatOptionalMmAttr("solderMaskMarginRight", smtPad.soldermask_margin_right)}${formatOptionalMmAttr("solderMaskMarginBottom", smtPad.soldermask_margin_bottom)} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}"${formatPcbRotationAttr(smtPad.ccw_rotation)} shape="rotated_rect" />`,
      )
    }
  }

  return elementStrings
}
