import { test, expect } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { runTscircuitCode } from "tscircuit"

declare module "bun:test" {
  interface Matchers<T = unknown> {
    toMatchInlineSnapshot(snapshot?: string | null): Promise<MatcherResult>
  }
}

test("test17 support extra pcb plated hole shapes", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_rect_circle",
      shape: "circular_hole_with_rect_pad",
      hole_shape: "circle",
      pad_shape: "rect",
      x: -2.2,
      y: 1.4,
      hole_diameter: 0.7,
      rect_pad_width: 1.6,
      rect_pad_height: 1.2,
      rect_border_radius: 0.15,
      hole_offset_x: 0.1,
      hole_offset_y: -0.05,
      layers: ["top", "bottom"],
      port_hints: ["1"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_rect_pill",
      shape: "pill_hole_with_rect_pad",
      hole_shape: "pill",
      pad_shape: "rect",
      x: 0.8,
      y: -1.1,
      hole_width: 1.1,
      hole_height: 0.5,
      rect_pad_width: 1.9,
      rect_pad_height: 1.1,
      rect_border_radius: 0.2,
      hole_offset_x: -0.1,
      hole_offset_y: 0.2,
      layers: ["top", "bottom"],
      port_hints: ["2"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_polygon",
      shape: "hole_with_polygon_pad",
      hole_shape: "pill",
      x: 2.5,
      y: 2.2,
      hole_width: 1.0,
      hole_height: 0.45,
      pad_outline: [
        { x: -1.1, y: -0.6 },
        { x: 1.1, y: -0.4 },
        { x: 1.3, y: 0.5 },
        { x: -0.8, y: 0.9 },
      ],
      hole_offset_x: 0,
      hole_offset_y: 0.1,
      layers: ["top", "bottom"],
      port_hints: ["3"],
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ComponentWithExtraPlatedHoleShapes",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const ComponentWithExtraPlatedHoleShapes = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <platedhole  portHints={["1"]} pcbX="-2.2mm" pcbY="1.4mm" holeDiameter="0.7mm" rectPadWidth="1.6mm" rectPadHeight="1.2mm" shape="circular_hole_with_rect_pad" rectBorderRadius="0.15mm" holeOffsetX="0.1mm" holeOffsetY="-0.05mm" />
    <platedhole  portHints={["2"]} pcbX="0.8mm" pcbY="-1.1mm" holeWidth="1.1mm" holeHeight="0.5mm" rectPadWidth="1.9mm" rectPadHeight="1.1mm" shape="pill_hole_with_rect_pad" holeOffsetX="-0.1mm" holeOffsetY="0.2mm" rectBorderRadius="0.2mm" />
    <platedhole  portHints={["3"]} pcbX="2.5mm" pcbY="2.2mm" holeShape="pill" padOutline={[{"x":-1.1,"y":-0.6},{"x":1.1,"y":-0.4},{"x":1.3,"y":0.5},{"x":-0.8,"y":0.9}]} holeOffsetX="0mm" holeOffsetY="0.1mm" shape="hole_with_polygon_pad" holeWidth="1mm" holeHeight="0.45mm" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const result = await runTscircuitCode(tscircuit)
  expect(Array.isArray(result)).toBe(true)
  expect(result).not.toHaveLength(0)
}, 10000)
