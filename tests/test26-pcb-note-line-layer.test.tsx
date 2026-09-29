import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test.failing(
  "test26 pcb note line layer",
  async () => {
    const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Test26Component",
    })

    expect(tscircuit).toContain('layer="bottom"')

    const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test26Component />
  </board>,
)
  `)) as AnyCircuitElement[]

    const noteLine = renderedCircuitJson.find(
      (el) => el.type === "pcb_note_line",
    ) as any

    expect(noteLine).toBeDefined()
    expect(noteLine.layer).toBe("bottom")
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
    type: "pcb_note_line",
    pcb_note_line_id: "pcb_note_line_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    x1: -0.5,
    y1: -0.5,
    x2: 0.5,
    y2: 0.5,
    stroke_width: 0.1,
    color: "#123456",
    is_dashed: true,
  },
]
