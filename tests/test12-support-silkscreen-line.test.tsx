import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test12 support silkscreen line", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test12Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test12Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <silkscreenline x1={-1} y1={1.8} x2={1} y2={1.8} strokeWidth={0.12} />
    <silkscreenline x1={-1} y1={-1.8} x2={1} y2={-1.8} strokeWidth={0.12} layer="bottom" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test12Component />
  </board>,
)
  `)) as AnyCircuitElement[]

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
    width: 2,
    height: 1,
  },
  {
    type: "pcb_silkscreen_line",
    pcb_silkscreen_line_id: "pcb_silkscreen_line_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    x1: -1,
    y1: 1.8,
    x2: 1,
    y2: 1.8,
    stroke_width: 0.12,
  },
  {
    type: "pcb_silkscreen_line",
    pcb_silkscreen_line_id: "pcb_silkscreen_line_1",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    x1: -1,
    y1: -1.8,
    x2: 1,
    y2: -1.8,
    stroke_width: 0.12,
  },
]
