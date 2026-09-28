import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test.failing("test21 silkscreen path props tsx", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test21Component",
  })

  expect(tscircuit).toContain('layer="bottom"')
  expect(tscircuit).toContain("strokeWidth={0.2}")
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
    width: 2,
    height: 1,
  },
  {
    type: "pcb_silkscreen_path",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    route: [
      { x: -1, y: 1.8 },
      { x: 1, y: 1.8 },
    ],
    stroke_width: 0.2,
  },
]
