import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test14 support silkscreen circle", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test14Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test14Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <silkscreencircle pcbX={0.2} pcbY={-0.1} radius={0.55} layer="top" strokeWidth={0.12} isFilled={true} />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test14Component />
  </board>,
)
  `)) as any[]

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
    width: 1.1,
    height: 0.4,
  },
  {
    type: "pcb_silkscreen_circle",
    pcb_silkscreen_circle_id: "pcb_silkscreen_circle_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: {
      x: 0.2,
      y: -0.1,
    },
    radius: 0.55,
    stroke_width: 0.12,
    is_filled: true,
  },
]
