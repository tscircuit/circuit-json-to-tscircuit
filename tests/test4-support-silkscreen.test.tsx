import { test, expect } from "bun:test"
import type { AnyCircuitElement, PcbSilkscreenText } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test4 support silkscreen", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test4Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test4Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="-0.32mm" pcbY="0mm" width="0.46mm" height="0.4mm" shape="rect" />
    <smtpad portHints={["2"]} pcbX="0.32mm" pcbY="0mm" width="0.46mm" height="0.4mm" shape="rect" />
    <fabricationnotepath route={[{"x":-0.3,"y":0.15},{"x":0.3,"y":0.15}]} strokeWidth={0.1} />
    <fabricationnotepath route={[{"x":-0.3,"y":-0.15},{"x":-0.3,"y":0.15}]} strokeWidth={0.1} />
    <fabricationnotepath route={[{"x":0.3,"y":0.15},{"x":0.3,"y":-0.15}]} strokeWidth={0.1} />
    <fabricationnotepath route={[{"x":0.3,"y":-0.15},{"x":-0.3,"y":-0.15}]} strokeWidth={0.1} />
    <silkscreentext pcbX={0} pcbY={4} anchorAlignment="center" fontSize={0.25} font="tscircuit2024" pcbRotation="15deg" isKnockout={true} knockoutPadding="0.1mm" mirrored={true} layer="top" text="chip1" />
    <silkscreentext pcbX={0} pcbY={1.05} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="180deg" isKnockout={true} knockoutPaddingLeft="0.1mm" knockoutPaddingTop="0.2mm" knockoutPaddingRight="0.3mm" knockoutPaddingBottom="0.4mm" layer="bottom" text="REF**" />
    <silkscreentext pcbX={0} pcbY={-1.05} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" layer="top" text="R_0201_0603Metric" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test4Component />
  </board>,
)
  `)) as AnyCircuitElement[]

  const renderedSilkscreenTexts = renderedCircuitJson.filter(
    (elm): elm is PcbSilkscreenText => elm.type === "pcb_silkscreen_text",
  )

  expect(renderedSilkscreenTexts).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        text: "chip1",
        font: "tscircuit2024",
        layer: "top",
        ccw_rotation: 15,
        is_knockout: true,
        knockout_padding: {
          left: 0.1,
          top: 0.1,
          right: 0.1,
          bottom: 0.1,
        },
      }),
      expect.objectContaining({
        text: "REF**",
        font: "tscircuit2024",
        layer: "bottom",
        ccw_rotation: 180,
        is_knockout: true,
        knockout_padding: {
          left: 0.1,
          top: 0.2,
          right: 0.3,
          bottom: 0.4,
        },
      }),
      expect.objectContaining({
        text: "R_0201_0603Metric",
        font: "tscircuit2024",
        layer: "top",
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
    width: 1.1,
    height: 0.4,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    shape: "rect",
    x: -0.32,
    y: 0,
    width: 0.46,
    height: 0.4,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["1"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_1",
    shape: "rect",
    x: 0.32,
    y: 0,
    width: 0.46,
    height: 0.4,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["2"],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: -0.3,
        y: 0.15,
      },
      {
        x: 0.3,
        y: 0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_1",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: -0.3,
        y: -0.15,
      },
      {
        x: -0.3,
        y: 0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_2",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: 0.3,
        y: 0.15,
      },
      {
        x: 0.3,
        y: -0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_fabrication_note_path",
    fabrication_note_path_id: "fabrication_note_path_3",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    route: [
      {
        x: 0.3,
        y: -0.15,
      },
      {
        x: -0.3,
        y: -0.15,
      },
    ],
    stroke_width: 0.1,
    port_hints: [],
  },
  {
    type: "pcb_silkscreen_text",
    layer: "top",
    font: "tscircuit2024",
    font_size: 0.25,
    ccw_rotation: 15,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: 0,
      y: 4,
    },
    anchor_alignment: "center",
    is_knockout: true,
    knockout_padding: {
      left: 0.1,
      top: 0.1,
      right: 0.1,
      bottom: 0.1,
    },
    is_mirrored: true,
    text: "chip1",
  },
  {
    type: "pcb_silkscreen_text",
    layer: "bottom",
    font: "tscircuit2024",
    font_size: 1.27,
    ccw_rotation: 180,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: -3,
      y: 1.05,
    },
    anchor_alignment: "center",
    is_knockout: true,
    knockout_padding: {
      left: 0.1,
      top: 0.2,
      right: 0.3,
      bottom: 0.4,
    },
    text: "REF**",
  },
  {
    type: "pcb_silkscreen_text",
    layer: "top",
    font: "tscircuit2024",
    font_size: 1.27,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: 0,
      y: -3.05,
    },
    anchor_alignment: "center",
    text: "R_0201_0603Metric",
  },
]
