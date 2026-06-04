import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

// Regression: when a pcb_silkscreen_text element has no font_size
// (common in kicad_mod files that omit `(effects (font (size N N)))`),
// the generator must NOT emit `fontSize={null}` / `fontSize={undefined}`
// — the resulting TSX fails downstream typecheck because the
// SilkscreenTextProps schema rejects null and undefined for fontSize.
//
// Expected behaviour: omit the fontSize attribute entirely so the
// element renderer's default applies.
test("test4b silkscreen text without font_size omits the prop", () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test4bComponent",
  })

  expect(tscircuit).toContain("<silkscreentext")
  expect(tscircuit).toContain('text="REF**"')
  expect(tscircuit).not.toContain("fontSize={null}")
  expect(tscircuit).not.toContain("fontSize={undefined}")
})

const circuitJson: any = [
  {
    type: "source_component",
    source_component_id: "generic_0",
    supplier_part_numbers: {},
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 1.1,
    height: 0.4,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    shape: "rect",
    x: 0,
    y: 0,
    width: 0.5,
    height: 0.5,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["1"],
  },
  // pcb_silkscreen_text WITHOUT font_size — mimics a kicad_mod that omits
  // the (effects (font (size ...))) clause.
  {
    type: "pcb_silkscreen_text",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: { x: 0, y: 1.05 },
    anchor_alignment: "center",
    text: "REF**",
  },
]
