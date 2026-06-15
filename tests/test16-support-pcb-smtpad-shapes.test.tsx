import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import type { AnyCircuitElement, PcbSmtPad } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test16 support pcb smtpad shapes", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test16Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test16Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="1mm" pcbY="2mm" layer="top" coveredWithSolderMask={true} solderMaskMargin="0.03mm" width="1.5mm" height="0.8mm" radius="0.4mm" shape="pill" />
    <smtpad portHints={["2"]} layer="top" coveredWithSolderMask={true} solderMaskMargin="0.06mm" shape="polygon" points={[{"x":0,"y":0},{"x":1,"y":0},{"x":0.5,"y":1}]} />
    <smtpad portHints={["3"]} pcbX="-1mm" pcbY="-2mm" layer="bottom" coveredWithSolderMask={true} solderMaskMargin="0.04mm" cornerRadius="0.15mm" solderMaskMarginLeft="0.01mm" solderMaskMarginTop="0.02mm" solderMaskMarginRight="0.03mm" solderMaskMarginBottom="0.05mm" width="2mm" height="0.6mm" ccwRotation={45} shape="rotated_rect" />
    <smtpad portHints={["4"]} pcbX="2.5mm" pcbY="-1.5mm" layer="bottom" coveredWithSolderMask={true} solderMaskMargin="0.05mm" rectBorderRadius="0.25mm" cornerRadius="0.2mm" solderMaskMarginLeft="0.11mm" solderMaskMarginTop="0.12mm" solderMaskMarginRight="0.13mm" solderMaskMarginBottom="0.14mm" width="1.8mm" height="0.9mm" shape="rect" />
            <smtpad portHints={["1"]} pcbX="1mm" pcbY="2mm" width="1.5mm" height="0.8mm" radius="0.4mm" shape="pill" />
    <smtpad portHints={["2"]} shape="polygon" points={[{"x":0,"y":0},{"x":1,"y":0},{"x":0.5,"y":1}]} />
    <smtpad portHints={["3"]} pcbX="-1mm" pcbY="-2mm" width="2mm" height="0.6mm" pcbRotation="45deg" cornerRadius={0.2} shape="rotated_rect" />
          </footprint>}
        {...props}
      />
    )"
  `)
  expect(tscircuit).toContain(`pcbRotation="45deg"`)
  expect(tscircuit).toContain(`shape="rotated_rect"`)

  // The generator emits pcbRotation for consistency, but the current smtpad
  // runtime still expects ccwRotation for rotated_rect pads.
  const executableTscircuit = tscircuit.replace(
    /pcbRotation="(-?\d+(?:\.\d+)?)deg"(?=[^>]*shape="rotated_rect")/g,
    (_, rotation: string) => `ccwRotation={${rotation}}`,
  )

  const renderedCircuitJson = (await runTscircuitCode(`
${executableTscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test16Component />
  </board>,
)
  `)) as AnyCircuitElement[]

  const renderedSmtPads = renderedCircuitJson.filter(
    (elm): elm is PcbSmtPad => elm.type === "pcb_smtpad",
  )

  expect(renderedSmtPads).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        port_hints: ["3"],
        layer: "bottom",
        shape: "rotated_rect",
        corner_radius: 0.15,
        is_covered_with_solder_mask: true,
        soldermask_margin: 0.04,
      }),
      expect.objectContaining({
        port_hints: ["4"],
        layer: "bottom",
        shape: "rect",
        corner_radius: 0.2,
        is_covered_with_solder_mask: true,
        soldermask_margin: 0.05,
      }),
    ]),
  )
  `)) as any[]
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_smtpad"),
  ).toHaveLength(6)

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
    type: "pcb_smtpad",
    pcb_smtpad_id: "pill_pad",
    pcb_component_id: "pcb_generic_component_0",
    shape: "pill",
    x: 1,
    y: 2,
    width: 1.5,
    height: 0.8,
    radius: 0.4,
    layer: "top",
    is_covered_with_solder_mask: true,
    soldermask_margin: 0.03,
    port_hints: ["1"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "polygon_pad",
    pcb_component_id: "pcb_generic_component_0",
    shape: "polygon",
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0.5, y: 1 },
    ],
    layer: "top",
    is_covered_with_solder_mask: true,
    soldermask_margin: 0.06,
    port_hints: ["2"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "rotated_rect_pad",
    pcb_component_id: "pcb_generic_component_0",
    shape: "rotated_rect",
    x: -1,
    y: -2,
    width: 2,
    height: 0.6,
    ccw_rotation: 45,
    corner_radius: 0.15,
    layer: "bottom",
    is_covered_with_solder_mask: true,
    soldermask_margin: 0.04,
    soldermask_margin_left: 0.01,
    soldermask_margin_top: 0.02,
    soldermask_margin_right: 0.03,
    soldermask_margin_bottom: 0.05,
    corner_radius: 0.2,
    layer: "top",
    port_hints: ["3"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "rect_pad",
    pcb_component_id: "pcb_generic_component_0",
    shape: "rect",
    x: 2.5,
    y: -1.5,
    width: 1.8,
    height: 0.9,
    rect_border_radius: 0.25,
    corner_radius: 0.2,
    layer: "bottom",
    is_covered_with_solder_mask: true,
    soldermask_margin: 0.05,
    soldermask_margin_left: 0.11,
    soldermask_margin_top: 0.12,
    soldermask_margin_right: 0.13,
    soldermask_margin_bottom: 0.14,
    port_hints: ["4"],
  },
]
