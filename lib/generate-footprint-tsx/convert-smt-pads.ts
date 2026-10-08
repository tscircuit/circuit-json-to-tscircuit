import type { PcbSmtPad, PcbSolderPaste } from "circuit-json"
import { getSolderPasteMargin } from "./get-solder-paste-margin"
import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"
import { formatOptionalMmAttr } from "./footprint-tsx-attribute-formatters/format-optional-mm-attr"
import { formatPcbRotationAttr } from "./footprint-tsx-attribute-formatters/format-pcb-rotation-attr"
import { formatSolderMaskAttrs } from "./footprint-tsx-attribute-formatters/format-solder-mask-attrs"
import { getImportedPortHints } from "./get-imported-port-hints"

export const convertSmtPads: FootprintElementConverter = (
  circuitJson,
  context,
) => {
  const smtPads = su(circuitJson).pcb_smtpad.list()
  const elementStrings: string[] = []

  const pastesByPadId = new Map<PcbSmtPad["pcb_smtpad_id"], PcbSolderPaste[]>()
  for (const paste of su(circuitJson).pcb_solder_paste.list()) {
    if (!paste.pcb_smtpad_id) continue
    const pastes = pastesByPadId.get(paste.pcb_smtpad_id) ?? []
    pastes.push(paste)
    pastesByPadId.set(paste.pcb_smtpad_id, pastes)
  }

  for (const smtPad of smtPads) {
    const commonAttrs: string[] = []
    const solderMaskAttrs = formatSolderMaskAttrs(smtPad)

    const portHints = getImportedPortHints(smtPad, context)
    if (portHints !== undefined) {
      commonAttrs.push(`portHints={${JSON.stringify(portHints)}}`)
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

    const solderPasteMargin = getSolderPasteMargin(
      smtPad,
      pastesByPadId.get(smtPad.pcb_smtpad_id) ?? [],
    )
    if (solderPasteMargin !== undefined) {
      commonAttrs.push(`solderPasteMargin={${solderPasteMargin}}`)
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
        `<smtpad ${commonAttrs.join(" ")}${solderMaskAttrs}${formatOptionalMmAttr("cornerRadius", cornerRadius)}${formatOptionalMmAttr("solderMaskMarginLeft", smtPad.soldermask_margin_left)}${formatOptionalMmAttr("solderMaskMarginTop", smtPad.soldermask_margin_top)}${formatOptionalMmAttr("solderMaskMarginRight", smtPad.soldermask_margin_right)}${formatOptionalMmAttr("solderMaskMarginBottom", smtPad.soldermask_margin_bottom)} width="${mmStr(smtPad.width ?? 0)}" height="${mmStr(smtPad.height ?? 0)}" ccwRotation={${smtPad.ccw_rotation ?? 0}} shape="rotated_rect" />`,
      )
    }
  }

  return elementStrings
}
