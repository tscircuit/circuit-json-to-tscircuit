import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test.failing(
  "test24 pcb note rect layer corner radius",
  async () => {
    const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Test24Component",
    })

    expect(tscircuit).toContain('layer="bottom"')
    expect(tscircuit).toContain("cornerRadius={0.3}")

    const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test24Component />
  </board>,
)
  `)) as AnyCircuitElement[]

    const noteRect = renderedCircuitJson.find(
      (el) => el.type === "pcb_note_rect",
    ) as any

    expect(noteRect).toBeDefined()
    expect(noteRect.layer).toBe("bottom")
    expect(noteRect.corner_radius).toBe(0.3)
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
    type: "pcb_note_rect",
    pcb_note_rect_id: "pcb_note_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    center: { x: 0, y: 0 },
    width: 3.2,
    height: 1.6,
    stroke_width: 0.2,
    corner_radius: 0.3,
    is_filled: false,
    has_stroke: true,
    is_stroke_dashed: true,
    color: "#00ff00",
  },
]
