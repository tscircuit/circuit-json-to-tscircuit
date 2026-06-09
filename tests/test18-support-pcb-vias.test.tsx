import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test18 support pcb vias", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test18Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test18Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <via pcbX="-1.2mm" pcbY="0.8mm" outerDiameter="0.8mm" holeDiameter="0.4mm" fromLayer="top" toLayer="bottom" layers={["top","bottom"]} netIsAssignable={true} isTented={false} />
    <via pcbX="1.5mm" pcbY="-0.6mm" outerDiameter="0.6mm" holeDiameter="0.3mm" fromLayer="inner1" toLayer="bottom" layers={["inner1","bottom"]} isTented={true} />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm" layers={4}>
    <Test18Component />
  </board>,
)
  `)) as any[]

  const vias = renderedCircuitJson.filter((elm) => elm.type === "pcb_via")

  expect(vias).toHaveLength(4)
  expect(vias).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        x: -1.2,
        y: 0.8,
        outer_diameter: 0.8,
        hole_diameter: 0.4,
        from_layer: "top",
        to_layer: "bottom",
        net_is_assignable: true,
      }),
      expect.objectContaining({
        x: 1.5,
        y: -0.6,
        outer_diameter: 0.6,
        hole_diameter: 0.3,
        from_layer: "inner1",
        to_layer: "bottom",
      }),
    ]),
  )

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
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
    type: "pcb_via",
    pcb_via_id: "via_0",
    x: -1.2,
    y: 0.8,
    outer_diameter: 0.8,
    hole_diameter: 0.4,
    from_layer: "top",
    to_layer: "bottom",
    layers: ["top", "bottom"],
    net_is_assignable: true,
    is_tented: false,
  },
  {
    type: "pcb_via",
    pcb_via_id: "via_1",
    x: 1.5,
    y: -0.6,
    outer_diameter: 0.6,
    hole_diameter: 0.3,
    from_layer: "inner1",
    to_layer: "bottom",
    layers: ["inner1", "bottom"],
    is_tented: true,
  },
]
