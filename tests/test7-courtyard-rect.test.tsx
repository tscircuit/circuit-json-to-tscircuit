import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test("test7 support pcb_courtyard_rect to courtyardrect element", () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "CourtyardRectComponent",
  })

  expect(tscircuit).toContain("<courtyardrect")
  expect(tscircuit).toContain('pcbX="1.5mm"')
  expect(tscircuit).toContain('pcbY="-2.5mm"')
  expect(tscircuit).toContain('width="3.2mm"')
  expect(tscircuit).toContain('height="1.2mm"')
})

const circuitJson = [
  {
    type: "source_component",
    source_component_id: "source_component_0",
    supplier_part_numbers: {},
  },
  {
    type: "schematic_component",
    schematic_component_id: "schematic_component_0",
    source_component_id: "source_component_0",
    center: { x: 0, y: 0 },
    rotation: 0,
    size: { width: 0, height: 0 },
  },
  {
    type: "pcb_component",
    pcb_component_id: "pcb_component_0",
    source_component_id: "source_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 5,
    height: 5,
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "pcb_courtyard_rect_0",
    pcb_component_id: "pcb_component_0",
    layer: "top",
    center: { x: 1.5, y: -2.5 },
    width: 3.2,
    height: 1.2,
  },
]
