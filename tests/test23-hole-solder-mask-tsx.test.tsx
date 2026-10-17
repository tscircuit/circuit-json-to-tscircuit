import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test.failing("test23 support hole solder mask - TSX props", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test23Component",
  })

  expect(tscircuit).toContain("coveredWithSolderMask={true}")
  expect(tscircuit).toContain('solderMaskMargin="0.1mm"')
  expect(tscircuit).toContain('solderMaskMargin="-0.05mm"')
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
    center: { x: 0, y: 0 },
    rotation: 0,
    size: { width: 0, height: 0 },
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 8,
    height: 8,
  },
  {
    type: "pcb_hole",
    pcb_hole_id: "pcb_hole_circle_0",
    pcb_component_id: "pcb_generic_component_0",
    hole_shape: "circle",
    x: 1,
    y: 2,
    hole_diameter: 1,
    is_covered_with_solder_mask: true,
    soldermask_margin: 0.1,
  },
  {
    type: "pcb_hole",
    pcb_hole_id: "pcb_hole_pill_0",
    pcb_component_id: "pcb_generic_component_0",
    hole_shape: "pill",
    x: -1,
    y: -2,
    hole_width: 1.5,
    hole_height: 0.8,
    is_covered_with_solder_mask: true,
    soldermask_margin: -0.05,
  },
]
