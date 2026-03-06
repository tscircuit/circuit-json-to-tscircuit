import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test8 support courtyard elements", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test8Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test8Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="-0.5mm" pcbY="0mm" width="0.6mm" height="0.9mm" shape="rect" />
    <fabricationnotepath route={[{"x":-1.8,"y":-1.4},{"x":1.8,"y":-1.4},{"x":1.8,"y":1.4},{"x":-1.8,"y":1.4},{"x":-1.8,"y":-1.4}]} strokeWidth={0.12} color="#ff00ff" />
    <fabricationnoterect pcbX={0} pcbY={0} width={4} height={3} strokeWidth={0.1} isFilled={false} hasStroke={true} isStrokeDashed={true} color="#00ffff" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

test("test8 pcb svg snapshot includes courtyard shapes", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test8Component",
  })

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width=\"20mm\" height=\"20mm\">
    <Test8Component />
  </board>,
)
  `)) as any[]

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)

  expect(pcbSvg).toContain("#ff00ff")
  expect(pcbSvg).toContain("#00ffff")
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "courtyard-pcb")
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
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    shape: "rect",
    x: -0.5,
    y: 0,
    width: 0.6,
    height: 0.9,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["1"],
  },
  {
    type: "pcb_courtyard_outline",
    pcb_courtyard_outline_id: "pcb_courtyard_outline_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    outline: [
      { x: -1.8, y: -1.4 },
      { x: 1.8, y: -1.4 },
      { x: 1.8, y: 1.4 },
      { x: -1.8, y: 1.4 },
    ],
    stroke_width: 0.12,
    is_closed: true,
    is_stroke_dashed: true,
    color: "#ff00ff",
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "pcb_courtyard_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    center: { x: 0, y: 0 },
    width: 4,
    height: 3,
    layer: "top",
    stroke_width: 0.1,
    is_filled: false,
    has_stroke: true,
    is_stroke_dashed: true,
    color: "#00ffff",
  },
]
