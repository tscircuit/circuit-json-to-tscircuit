import { test, expect } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { runTscircuitCode } from "tscircuit"

test("test plated hole conversion", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph1",
      shape: "pill",
      x: -3.81,
      y: 0,
      outer_width: 2.3,
      outer_height: 1.2,
      hole_width: 1.5,
      hole_height: 0.65,
      ccw_rotation: 90,
      layers: ["top", "bottom"],
      port_hints: ["1"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph2",
      shape: "oval",
      x: 0,
      y: 0,
      outer_width: 2.4,
      outer_height: 1.4,
      hole_width: 1.5,
      hole_height: 0.8,
      ccw_rotation: 90,
      layers: ["top", "bottom"],
      port_hints: ["2"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_rect_circle",
      shape: "circular_hole_with_rect_pad",
      x: 3.81,
      y: 0,
      hole_shape: "circle",
      pad_shape: "rect",
      hole_diameter: 1,
      rect_pad_width: 2.1,
      rect_pad_height: 1.6,
      rect_border_radius: 0.25,
      hole_offset_x: 0,
      hole_offset_y: 0,
      layers: ["top", "bottom"],
      port_hints: ["3"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_rect_pill",
      shape: "pill_hole_with_rect_pad",
      x: -1.9,
      y: 2.54,
      hole_shape: "pill",
      pad_shape: "rect",
      hole_width: 1.6,
      hole_height: 0.7,
      rect_pad_width: 2.4,
      rect_pad_height: 1.4,
      rect_border_radius: 0.25,
      hole_offset_x: 0.2,
      hole_offset_y: 0,
      layers: ["top", "bottom"],
      port_hints: ["4"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph_polygon",
      shape: "hole_with_polygon_pad",
      x: 1.9,
      y: 2.54,
      hole_shape: "oval",
      hole_width: 1.4,
      hole_height: 0.75,
      pad_outline: [
        { x: -1.2, y: 0 },
        { x: -0.35, y: 0.8 },
        { x: 0.7, y: 0.8 },
        { x: 1.2, y: 0 },
        { x: 0.7, y: -0.8 },
        { x: -0.35, y: -0.8 },
      ],
      hole_offset_x: 0,
      hole_offset_y: 0,
      layers: ["top", "bottom"],
      port_hints: ["5"],
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "PlatedHoleComponent",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const PlatedHoleComponent = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <platedhole  portHints={["1"]} pcbX="-3.81mm" pcbY="0mm" outerHeight="1.2mm" outerWidth="2.3mm" holeHeight="0.65mm" holeWidth="1.5mm" height="0.65mm" shape="pill" pcbRotation="90deg" />
    <platedhole  portHints={["2"]} pcbX="0mm" pcbY="0mm" outerHeight="1.4mm" outerWidth="2.4mm" holeHeight="0.8mm" holeWidth="1.5mm" height="0.8mm" shape="oval" pcbRotation="90deg" />
    <platedhole  portHints={["3"]} pcbX="3.81mm" pcbY="0mm" holeDiameter="1mm" rectPadWidth="2.1mm" rectPadHeight="1.6mm" rectBorderRadius="0.25mm" holeOffsetX="0mm" holeOffsetY="0mm" shape="circular_hole_with_rect_pad" />
    <platedhole  portHints={["4"]} pcbX="-1.9mm" pcbY="2.54mm" holeWidth="1.6mm" holeHeight="0.7mm" rectPadWidth="2.4mm" rectPadHeight="1.4mm" rectBorderRadius="0.25mm" holeOffsetX="0.2mm" holeOffsetY="0mm" shape="pill_hole_with_rect_pad" />
    <platedhole  portHints={["5"]} pcbX="1.9mm" pcbY="2.54mm" holeShape="oval" holeWidth="1.4mm" holeHeight="0.75mm" padOutline={[{"x":-1.2,"y":0},{"x":-0.35,"y":0.8},{"x":0.7,"y":0.8},{"x":1.2,"y":0},{"x":0.7,"y":-0.8},{"x":-0.35,"y":-0.8}]} holeOffsetX="0mm" holeOffsetY="0mm" shape="hole_with_polygon_pad" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <PlatedHoleComponent />
  </board>,
)
  `)) as any[]

  expect(Array.isArray(renderedCircuitJson)).toBe(true)
  expect(renderedCircuitJson).not.toHaveLength(0)

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
}, 10000)
