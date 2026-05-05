import { expect, test } from "bun:test"
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
    <courtyardoutline outline={[{"x":-1.8,"y":-1.4},{"x":1.8,"y":-1.4},{"x":1.8,"y":1.4},{"x":-1.8,"y":1.4}]} layer="top" />
    <courtyardrect pcbX={0} pcbY={0} width={4} height={3} layer="top" />
    <courtyardrect pcbX={0.2} pcbY={0.2} width={4.6} height={3.6} layer="bottom" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

test("test8 renders courtyard as courtyard circuit json", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test8Component",
  })

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test8Component />
  </board>,
)
  `)) as any[]

  const courtyardElements = renderedCircuitJson.filter((elm) =>
    ["pcb_courtyard_outline", "pcb_courtyard_rect"].includes(elm.type),
  )

  expect(courtyardElements).toHaveLength(6)
  expect(
    courtyardElements.filter((elm) => elm.type === "pcb_courtyard_outline"),
  ).toHaveLength(2)
  expect(
    courtyardElements.filter((elm) => elm.type === "pcb_courtyard_rect"),
  ).toHaveLength(4)
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
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "pcb_courtyard_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    center: { x: 0, y: 0 },
    width: 4,
    height: 3,
    layer: "top",
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "pcb_courtyard_rect_1",
    pcb_component_id: "pcb_generic_component_0",
    center: { x: 0.2, y: 0.2 },
    width: 4.6,
    height: 3.6,
    layer: "bottom",
  },
]
