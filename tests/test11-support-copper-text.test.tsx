import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test11 support pcb copper text", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "Test11Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test11Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <coppertext pcbX={-1.5} pcbY={-2.25} anchorAlignment="top_left" text="copper text" font="tscircuit2024" fontSize={1.8} />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test11Component />
  </board>,
)
  `)) as AnyCircuitElement[]

  const copperTextElements = renderedCircuitJson.filter(
    (elm) => elm.type === "pcb_copper_text",
  )

  expect(copperTextElements).toHaveLength(2)
  expect(copperTextElements[0]).toMatchObject({
    layer: "top",
    text: "copper text",
    font: "tscircuit2024",
    font_size: 1.8,
    anchor_alignment: "top_left",
  })
  expect(copperTextElements[1]).toMatchObject({
    layer: "top",
    text: "copper text",
    font: "tscircuit2024",
    font_size: 1.8,
    anchor_alignment: "top_left",
  })

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
}, 15000)

const circuitJson = [
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
    size: { width: 0, height: 0 },
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 1,
    height: 1,
  },
  {
    type: "pcb_copper_text",
    pcb_copper_text_id: "pcb_copper_text_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    anchor_position: { x: -1.5, y: -2.25 },
    anchor_alignment: "top_left",
    font: "tscircuit2024",
    font_size: 1.8,
    text: "copper text",
  },
]
