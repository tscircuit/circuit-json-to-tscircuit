import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("converts KiCad reference placeholders to {REF} in reusable footprint TSX", async () => {
  const circuitJson = [
    {
      type: "source_component",
      source_component_id: "source_component_0",
      name: "REF**",
      ftype: "simple_chip",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_0",
      source_component_id: "source_component_0",
      layer: "top",
      center: { x: 0, y: 0 },
      rotation: 0,
      width: 2.5,
      height: 1,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_0",
      pcb_component_id: "pcb_component_0",
      shape: "rect",
      layer: "top",
      x: -0.8,
      y: 0,
      width: 0.9,
      height: 1,
      port_hints: ["1"],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_1",
      pcb_component_id: "pcb_component_0",
      shape: "rect",
      layer: "top",
      x: 0.8,
      y: 0,
      width: 0.9,
      height: 1,
      port_hints: ["2"],
    },
    {
      type: "pcb_silkscreen_text",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_0",
      pcb_component_id: "pcb_component_0",
      layer: "top",
      anchor_position: { x: 0, y: 2 },
      anchor_alignment: "center",
      font: "tscircuit2024",
      font_size: 1,
      text: "REF**",
    },
    {
      type: "pcb_silkscreen_text",
      pcb_silkscreen_text_id: "pcb_silkscreen_text_1",
      pcb_component_id: "pcb_component_0",
      layer: "top",
      anchor_position: { x: 0, y: -2 },
      anchor_alignment: "center",
      font: "tscircuit2024",
      font_size: 0.6,
      text: "100%RH",
    },
    {
      type: "pcb_fabrication_note_text",
      pcb_fabrication_note_text_id: "pcb_fabrication_note_text_0",
      pcb_component_id: "pcb_component_0",
      layer: "top",
      anchor_position: { x: 0, y: 0 },
      anchor_alignment: "center",
      font: "tscircuit2024",
      font_size: 0.5,
      text: "%R",
    },
    {
      type: "pcb_fabrication_note_text",
      pcb_fabrication_note_text_id: "pcb_fabrication_note_text_1",
      pcb_component_id: "pcb_component_0",
      layer: "top",
      anchor_position: { x: 0, y: 1 },
      anchor_alignment: "center",
      font: "tscircuit2024",
      font_size: 0.5,
      text: "${REFERENCE}",
    },
  ]

  const tsx = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "TwoPad",
  })

  expect(tsx).toContain(
    '<silkscreentext pcbX={0} pcbY={2} anchorAlignment="center" fontSize={1} font="tscircuit2024" layer="top" text="{REF}" />',
  )
  expect(tsx).toContain('text="100%RH"')
  expect(tsx).not.toContain('text="REF**"')
  expect(tsx).not.toContain('text="%R"')
  expect(tsx).not.toContain("${REFERENCE}")
  expect(tsx.match(/<fabricationnotetext [^>]*text="\{REF\}"/g)).toHaveLength(2)

  const rendered = (await runTscircuitCode(`
${tsx}

export default () => (
  <board width={12} height={8}>
    <TwoPad name="U1" pcbX={-3} schX={-2} />
    <TwoPad name="U2" pcbX={3} schX={2} />
  </board>
)
  `)) as any[]

  const silkscreenTexts = rendered
    .filter((el) => el.type === "pcb_silkscreen_text")
    .map((el) => el.text)

  expect(silkscreenTexts).toEqual(["U1", "100%RH", "U2", "100%RH"])
}, 15000)
