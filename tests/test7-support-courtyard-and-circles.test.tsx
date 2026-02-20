import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test("test7 support courtyards + silkscreen circles", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test7Component",
  })

  expect(tscircuit).toContain("<silkscreencircle")
  expect(tscircuit).toContain('radius="2mm"')
  expect(tscircuit).toContain('strokeWidth="0.15mm"')

  expect(tscircuit).toContain("<courtyardcircle")
  expect(tscircuit).toContain('radius="3mm"')

  expect(tscircuit).toContain("<courtyardrect")
  expect(tscircuit).toContain('width="4mm"')
  expect(tscircuit).toContain('height="5mm"')
  expect(tscircuit).toContain('color="#ff0000"')

  expect(tscircuit).toContain("<courtyardoutline")
})

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
    width: 1,
    height: 1,
  },
  {
    type: "pcb_silkscreen_circle",
    pcb_silkscreen_circle_id: "pcb_silkscreen_circle_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 1, y: 2 },
    radius: 2,
    stroke_width: 0.15,
  },
  {
    type: "pcb_courtyard_circle",
    pcb_courtyard_circle_id: "pcb_courtyard_circle_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    radius: 3,
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "pcb_courtyard_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    width: 4,
    height: 5,
    color: "#ff0000",
  },
  {
    type: "pcb_courtyard_outline",
    pcb_courtyard_outline_id: "pcb_courtyard_outline_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    outline: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
      { x: -1, y: 1 },
    ],
  },
]
