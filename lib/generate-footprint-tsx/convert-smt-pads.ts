import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import { formatPcbRotationAttr } from "./footprint-tsx-attribute-formatters"

export const convertSmtPads: FootprintElementConverter = (circuitJson) => {
  const smtPads = su(circuitJson).pcb_smtpad.list()
  const elementStrings: string[] = []

  for (const smtPad of smtPads) {
    const commonAttrs: string[] = []

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
    if (smtPad.is_covered_with_solder_mask !== undefined) {
      commonAttrs.push(
        `coveredWithSolderMask={${smtPad.is_covered_with_solder_mask}}`,
      )
    }
    if (smtPad.soldermask_margin !== undefined) {
      commonAttrs.push(`solderMaskMargin="${mmStr(smtPad.soldermask_margin)}"`)
    }

    if (smtPad.shape === "circle") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} radius="${mmStr(smtPad.radius ?? 0)}" shape="circle" />`,
      )
    } else if (smtPad.shape === "rect") {
      if (smtPad.rect_border_radius !== undefined) {
        commonAttrs.push(
          `rectBorderRadius="${mmStr(smtPad.rect_border_radius)}"`,
        )
      }
      if (smtPad.corner_radius !== undefined) {
        commonAttrs.push(`cornerRadius="${mmStr(smtPad.corner_radius)}"`)
      }
      if (smtPad.soldermask_margin_left !== undefined) {
        commonAttrs.push(
          `solderMaskMarginLeft="${mmStr(smtPad.soldermask_margin_left)}"`,
        )
      }
      if (smtPad.soldermask_margin_top !== undefined) {
        commonAttrs.push(
          `solderMaskMarginTop="${mmStr(smtPad.soldermask_margin_top)}"`,
        )
      }
      if (smtPad.soldermask_margin_right !== undefined) {
        commonAttrs.push(
          `solderMaskMarginRight="${mmStr(smtPad.soldermask_margin_right)}"`,
        )
      }
      if (smtPad.soldermask_margin_bottom !== undefined) {
        commonAttrs.push(
          `solderMaskMarginBottom="${mmStr(smtPad.soldermask_margin_bottom)}"`,
        )
      }
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}" shape="rect" />`,
      )
    } else if (smtPad.shape === "pill") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}" radius="${mmStr(smtPad.radius ?? 0)}" shape="pill" />`,
      )
    } else if (smtPad.shape === "polygon") {
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} shape="polygon" points={${JSON.stringify(smtPad.points)}} />`,
      )
    } else if (smtPad.shape === "rotated_rect") {
      const cornerRadius =
        smtPad.corner_radius ?? smtPad.rect_border_radius ?? undefined

      if (cornerRadius !== undefined) {
        commonAttrs.push(`cornerRadius="${mmStr(cornerRadius)}"`)
      }
      if (smtPad.soldermask_margin_left !== undefined) {
        commonAttrs.push(
          `solderMaskMarginLeft="${mmStr(smtPad.soldermask_margin_left)}"`,
        )
      }
      if (smtPad.soldermask_margin_top !== undefined) {
        commonAttrs.push(
          `solderMaskMarginTop="${mmStr(smtPad.soldermask_margin_top)}"`,
        )
      }
      if (smtPad.soldermask_margin_right !== undefined) {
        commonAttrs.push(
          `solderMaskMarginRight="${mmStr(smtPad.soldermask_margin_right)}"`,
        )
      }
      if (smtPad.soldermask_margin_bottom !== undefined) {
        commonAttrs.push(
          `solderMaskMarginBottom="${mmStr(smtPad.soldermask_margin_bottom)}"`,
        )
      }
      elementStrings.push(
        `<smtpad ${commonAttrs.join(" ")} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}"${formatPcbRotationAttr(smtPad.ccw_rotation)} shape="rotated_rect" />`,
      )
    }
  }

  return elementStrings
}
