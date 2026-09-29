import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test.failing(
  "test23 pcb note text layer",
  async () => {
    const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Test23Component",
    })

    expect(tscircuit).toContain('layer="bottom"')

    const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test23Component />
  </board>,
)
  `)) as AnyCircuitElement[]

    const noteText = renderedCircuitJson.find(
      (el) => el.type === "pcb_note_text",
    ) as any

    expect(noteText).toBeDefined()
    expect(noteText.layer).toBe("bottom")
  },
  15000,
)

const circuitJson: any = [
  {
    type: "source_component",
    source_component_id: "generic_0",
    supplier_part_numbers: {},
  },
  {
    type: "schematic_component",
    schematic_component_id: "schematic_generic_component_0",
    source_component_id: "generic_0",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    size: {
      width: 0,
      height: 0,
    },
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    width: 2,
    height: 1,
  },
  {
    type: "pcb_note_text",
    pcb_note_text_id: "pcb_note_text_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    anchor_position: { x: 1, y: 2 },
    anchor_alignment: "top_left",
    font: "tscircuit2024",
    font_size: 1.5,
    text: "Assembly",
    color: "#ff0000",
  },
]
