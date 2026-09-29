import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test.failing(
  "test27 pcb note dimension layer",
  async () => {
    const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Test27Component",
    })

    expect(tscircuit).toContain('layer="bottom"')

    const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test27Component />
  </board>,
)
  `)) as AnyCircuitElement[]

    const noteDimension = renderedCircuitJson.find(
      (el) => el.type === "pcb_note_dimension",
    ) as any

    expect(noteDimension).toBeDefined()
    expect(noteDimension.layer).toBe("bottom")
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
    type: "pcb_note_dimension",
    pcb_note_dimension_id: "pcb_note_dimension_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    from: { x: -2, y: 0 },
    to: { x: 2, y: 0 },
    text: "4mm",
    font: "tscircuit2024",
    font_size: 1.2,
    arrow_size: 0.25,
    color: "#654321",
  },
]
