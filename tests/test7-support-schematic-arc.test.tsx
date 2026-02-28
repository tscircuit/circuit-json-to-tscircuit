import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import type { AnyCircuitElement } from "circuit-json"

test("test7 schematic arc and line inline snapshot", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "schematic_arc",
      center: { x: 0, y: 0 },
      radius: 1,
      start_angle_degrees: 0,
      end_angle_degrees: 180,
      stroke_width: 0.05,
      color: "black",
      is_dashed: false,
      schematic_component_id: "schematic_component_id_1",
      direction: "counterclockwise",
      schematic_arc_id: "schematic_arc_id_1",
    },
    {
      type: "schematic_line",
      x1: -1,
      y1: 0,
      x2: 1,
      y2: 0,
      stroke_width: 0.05,
      schematic_line_id: "schematic_line_id_1",
      schematic_component_id: "schematic_component_id_1",
      color: "black",
      is_dashed: false,
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "U1",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
      "import { type ChipProps } from "tscircuit"
      export const U1 = (props: ChipProps) => (
        <chip
          symbol={<symbol>
        <schematicarc
          center={{ x: 0, y: 0 }}
          radius={1}
          startAngleDegrees={0}
          endAngleDegrees={180}
          strokeWidth={0.05}
          color="black"
          isDashed={false}
          direction="counterclockwise"
        />
        <schematicline x1={-1} y1={0} x2={1} y2={0} strokeWidth={0.05} color="black" isDashed={false}/>
      </symbol>}
          {...props}
        />
      )"
    `)
})
