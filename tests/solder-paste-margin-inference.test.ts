import { expect, test } from "bun:test"
import type { PcbSmtPad, PcbSolderPaste } from "circuit-json"
import { convertSmtPads } from "../lib/generate-footprint-tsx/convert-smt-pads"

const pad: PcbSmtPad = {
  type: "pcb_smtpad",
  pcb_smtpad_id: "pad",
  pcb_component_id: "component",
  shape: "rect",
  x: 0,
  y: 0,
  layer: "top",
  width: 2,
  height: 1.6,
}
const paste: PcbSolderPaste = {
  type: "pcb_solder_paste",
  pcb_solder_paste_id: "paste",
  pcb_smtpad_id: "pad",
  shape: "rect",
  x: 0,
  y: 0,
  layer: "top",
  width: 1.6,
  height: 1.2,
}

test("paste inference requires a single compatible linked aperture", () => {
  const incompatiblePastes: PcbSolderPaste[][] = [
    [],
    [{ ...paste, pcb_smtpad_id: "other" }],
    [{ ...paste, pcb_smtpad_id: undefined }],
    [paste, { ...paste, pcb_solder_paste_id: "second" }],
    [{ ...paste, x: 0.1 }],
    [{ ...paste, y: 0.1 }],
    [{ ...paste, layer: "bottom" }],
    [{ ...paste, width: 1.8 }],
    [{ ...paste, shape: "circle", radius: 0.5 }],
  ]
  for (const pastes of incompatiblePastes) {
    expect(convertSmtPads([pad, ...pastes]).join("\n")).not.toContain(
      "solderPasteMargin",
    )
  }
  expect(
    convertSmtPads([pad, { ...paste, width: 2, height: 1.6 }]).join("\n"),
  ).toContain("solderPasteMargin={0}")
})

test("rotated paste must align with its copper pad", () => {
  const rotatedPad: PcbSmtPad = {
    ...pad,
    shape: "rotated_rect",
    ccw_rotation: 45,
  }
  const rotatedPaste: PcbSolderPaste = {
    ...paste,
    shape: "rotated_rect",
    ccw_rotation: 90,
  }
  expect(convertSmtPads([rotatedPad, rotatedPaste]).join("\n")).not.toContain(
    "solderPasteMargin",
  )
  expect(
    convertSmtPads([rotatedPad, { ...rotatedPaste, ccw_rotation: 405 }]).join(
      "\n",
    ),
  ).toContain("solderPasteMargin")
})
