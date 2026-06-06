import { test, expect } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
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
      x: -2.4,
      y: 1.6,
      hole_diameter: 0.8,
      rect_pad_width: 1.7,
      rect_pad_height: 1.5,
      rect_border_radius: 0.18,
      hole_offset_x: 0,
      hole_offset_y: 0,
      layers: ["top", "bottom"],
      port_hints: ["1"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_rect_pill",
      shape: "pill_hole_with_rect_pad",
      hole_shape: "pill",
      pad_shape: "rect",
      x: 0.5,
      y: -1.4,
      hole_width: 1.2,
      hole_height: 0.65,
      rect_pad_width: 2.1,
      rect_pad_height: 1.35,
      rect_border_radius: 0.2,
      hole_offset_x: 0,
      hole_offset_y: 0,
      layers: ["top", "bottom"],
      port_hints: ["2"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_polygon",
      shape: "hole_with_polygon_pad",
      hole_shape: "pill",
      x: 2.8,
      y: 2.4,
      hole_width: 1.15,
      hole_height: 0.6,
      pad_outline: [
        { x: -1.35, y: -0.75 },
        { x: 1.35, y: -0.75 },
        { x: 1.55, y: 0 },
        { x: 1.35, y: 0.75 },
        { x: -1.35, y: 0.75 },
        { x: -1.55, y: 0 },
      ],
      hole_offset_x: 0,
      hole_offset_y: 0,
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
            <platedhole  portHints={["1"]} pcbX="-2.4mm" pcbY="1.6mm" holeDiameter="0.8mm" rectPadWidth="1.7mm" rectPadHeight="1.5mm" shape="circular_hole_with_rect_pad" rectBorderRadius="0.18mm" holeOffsetX="0mm" holeOffsetY="0mm" />
    <platedhole  portHints={["2"]} pcbX="0.5mm" pcbY="-1.4mm" holeWidth="1.2mm" holeHeight="0.65mm" rectPadWidth="2.1mm" rectPadHeight="1.35mm" shape="pill_hole_with_rect_pad" holeOffsetX="0mm" holeOffsetY="0mm" rectBorderRadius="0.2mm" />
    <platedhole  portHints={["3"]} pcbX="2.8mm" pcbY="2.4mm" holeShape="pill" padOutline={[{"x":-1.35,"y":-0.75},{"x":1.35,"y":-0.75},{"x":1.55,"y":0},{"x":1.35,"y":0.75},{"x":-1.35,"y":0.75},{"x":-1.55,"y":0}]} holeOffsetX="0mm" holeOffsetY="0mm" shape="hole_with_polygon_pad" holeWidth="1.15mm" holeHeight="0.6mm" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <ComponentWithExtraPlatedHoleShapes />
  </board>,
)
  `)) as any[]

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
}, 10000)
