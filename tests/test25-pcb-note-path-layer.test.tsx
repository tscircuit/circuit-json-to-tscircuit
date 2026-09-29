import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test.failing(
  "test25 pcb note path layer",
  async () => {
    const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Test25Component",
    })

    expect(tscircuit).toContain('layer="bottom"')

    const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test25Component />
  </board>,
)
  `)) as AnyCircuitElement[]

    const notePath = renderedCircuitJson.find(
      (el) => el.type === "pcb_note_path",
    ) as any

    expect(notePath).toBeDefined()
    expect(notePath.layer).toBe("bottom")
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
    type: "pcb_note_path",
    pcb_note_path_id: "pcb_note_path_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    route: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ],
    stroke_width: 0.15,
    color: "#0000ff",
  },
]
