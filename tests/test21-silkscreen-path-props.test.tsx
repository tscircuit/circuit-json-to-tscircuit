import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import type { AnyCircuitElement, PcbSilkscreenPath } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test21 silkscreen path preserves layer and stroke width", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test21Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test21Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <silkscreenpath route={[{"x":-1,"y":1.8},{"x":1,"y":1.8},{"x":1,"y":0.8}]} strokeWidth={0.25} />
    <silkscreenpath route={[{"x":-1,"y":-1.8},{"x":1,"y":-1.8},{"x":1,"y":-0.8}]} strokeWidth={0.3} layer="bottom" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test21Component />
  </board>,
)
  `)) as AnyCircuitElement[]

  const renderedSilkscreenPaths = renderedCircuitJson.filter(
    (elm): elm is PcbSilkscreenPath => elm.type === "pcb_silkscreen_path",
  )

  expect(renderedSilkscreenPaths).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        layer: "top",
        stroke_width: 0.25,
      }),
      expect.objectContaining({
        layer: "bottom",
        stroke_width: 0.3,
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
    height: 2,
  },
  {
    type: "pcb_silkscreen_path",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: -1,
        y: 1.8,
      },
      {
        x: 1,
        y: 1.8,
      },
      {
        x: 1,
        y: 0.8,
      },
    ],
    stroke_width: 0.25,
  },
  {
    type: "pcb_silkscreen_path",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_1",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    route: [
      {
        x: -1,
        y: -1.8,
      },
      {
        x: 1,
        y: -1.8,
      },
      {
        x: 1,
        y: -0.8,
      },
    ],
    stroke_width: 0.3,
  },
]
