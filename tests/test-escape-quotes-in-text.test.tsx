import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

// A text value containing a double quote must be escaped so the generated TSX
// still parses. It used to be emitted as text="3.3\"" (backslash escaping),
// which is invalid inside a double-quoted JSX attribute and failed to compile.
test("escapes double quotes in generated text so the tsx still parses", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "QuoteComponent",
  })

  expect(tscircuit).toContain("&quot;")

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <QuoteComponent />
  </board>,
)
  `)) as AnyCircuitElement[]

  const copperText = renderedCircuitJson.find(
    (elm) => elm.type === "pcb_copper_text",
  )
  expect(copperText).toMatchObject({ text: '3.3"' })
}, 15000)

const circuitJson = [
  {
    type: "source_component",
    source_component_id: "generic_0",
    supplier_part_numbers: {},
  },
  {
    type: "schematic_component",
    schematic_component_id: "schematic_generic_component_0",
    source_component_id: "generic_0",
    center: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 1,
    height: 1,
  },
  {
    type: "pcb_copper_text",
    pcb_copper_text_id: "pcb_copper_text_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    anchor_position: { x: -1.5, y: -2.25 },
    anchor_alignment: "top_left",
    font: "tscircuit2024",
    font_size: 1.8,
    text: '3.3"',
  },
]
