import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

test("infer paste margins only from a single compatible linked aperture", () => {
  const pad = {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pad1",
    shape: "rect",
    x: 0,
    y: 0,
    layer: "top",
    width: 2,
    height: 1.6,
    port_hints: ["1"],
  } as const
  const paste = {
    type: "pcb_solder_paste",
    pcb_solder_paste_id: "paste1",
    pcb_smtpad_id: "pad1",
    shape: "rect",
    x: 0,
    y: 0,
    layer: "top",
    width: 1.6,
    height: 1.2,
  } as const
  const convert = (elements: unknown[]) =>
    convertCircuitJsonToTscircuit(elements as CircuitJson, {
      componentName: "PasteComponent",
    })
  expect(convert([pad, { ...paste, width: 2, height: 1.6 }])).toContain(
    "solderPasteMargin={0}",
  )
  for (const pastes of [
    [],
    [{ ...paste, pcb_smtpad_id: "another-pad" }],
    [{ ...paste, pcb_smtpad_id: undefined }],
    [paste, { ...paste, pcb_solder_paste_id: "paste2" }],
    [{ ...paste, x: 0.1 }],
    [{ ...paste, y: 0.1 }],
    [{ ...paste, layer: "bottom" }],
    [{ ...paste, width: 1.8 }],
    [{ ...paste, shape: "circle", radius: 0.5 }],
    [{ ...paste, width: 1.4, height: 1.12 }],
  ]) {
    expect(convert([pad, ...pastes])).not.toContain("solderPasteMargin")
  }
  const rotatedPad = { ...pad, shape: "rotated_rect", ccw_rotation: 45 }
  const rotatedPaste = { ...paste, shape: "rotated_rect", ccw_rotation: 90 }
  expect(convert([rotatedPad, rotatedPaste])).not.toContain("solderPasteMargin")
  expect(
    convert([rotatedPad, { ...rotatedPaste, ccw_rotation: 405 }]),
  ).toContain("solderPasteMargin")
  expect(
    convert([
      { ...pad, shape: "circle", radius: 1 },
      { ...paste, shape: "circle", radius: 0.7 },
    ]),
  ).not.toContain("solderPasteMargin")
})
