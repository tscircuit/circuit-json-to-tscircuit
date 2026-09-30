import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const orphanedPcbComponentId = "pcb_component_altium_board_graphics"
const sourceCircuitJson: AnyCircuitElement[] = [
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_source",
    center: { x: 0, y: 0 },
    width: 20,
    height: 12,
    thickness: 1.6,
    material: "fr4",
    num_layers: 2,
  },
  {
    type: "pcb_copper_text",
    pcb_copper_text_id: "pcb_copper_text_source",
    pcb_component_id: orphanedPcbComponentId,
    anchor_position: { x: -4, y: 3 },
    anchor_alignment: "center",
    font: "tscircuit2024",
    font_size: 1,
    text: "BOARD",
    layer: "top",
  },
  {
    type: "pcb_fabrication_note_path",
    pcb_fabrication_note_path_id: "pcb_fabrication_note_path_source",
    pcb_component_id: orphanedPcbComponentId,
    layer: "top",
    route: [
      { x: -5, y: -4 },
      { x: 5, y: -4 },
    ],
    stroke_width: 0.2,
  },
  {
    type: "pcb_fabrication_note_dimension",
    pcb_fabrication_note_dimension_id: "pcb_fabrication_note_dimension_source",
    pcb_component_id: orphanedPcbComponentId,
    layer: "top",
    from: { x: -5, y: -3 },
    to: { x: 5, y: -3 },
    text: "10mm",
    font: "tscircuit2024",
    font_size: 1,
    arrow_size: 0.25,
    offset: 0.5,
  },
  {
    type: "pcb_silkscreen_line",
    pcb_silkscreen_line_id: "pcb_silkscreen_line_source",
    pcb_component_id: orphanedPcbComponentId,
    layer: "top",
    x1: -5,
    y1: 1,
    x2: 5,
    y2: 1,
    stroke_width: 0.2,
  },
  {
    type: "pcb_silkscreen_text",
    pcb_silkscreen_text_id: "pcb_silkscreen_text_source",
    pcb_component_id: orphanedPcbComponentId,
    anchor_position: { x: 0, y: 3 },
    anchor_alignment: "center",
    font: "tscircuit2024",
    font_size: 1,
    text: "REFERENCE",
    layer: "top",
  },
]

test("preserves PCB elements whose referenced component does not exist", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const preservedElementTypes = [
    "pcb_copper_text",
    "pcb_fabrication_note_path",
    "pcb_fabrication_note_dimension",
    "pcb_silkscreen_line",
    "pcb_silkscreen_text",
  ]

  expect(generatedTscircuit).toMatchInlineSnapshot(`
    "export default () => (
      <board width="20mm" height="12mm" thickness="1.6mm" layers={2} material="fr4">
        <chip noSchematicRepresentation footprint={<footprint>
                <silkscreenline x1={-5} y1={1} x2={5} y2={1} strokeWidth={0.2} />
        <fabricationnotepath route={[{"x":-5,"y":-4},{"x":5,"y":-4}]} strokeWidth={0.2} />
        <fabricationnotedimension from={{ x: -5, y: -3 }} to={{ x: 5, y: -3 }} text="10mm" font="tscircuit2024" fontSize={1} arrowSize={0.25} offset={0.5} />
        <silkscreentext pcbX={0} pcbY={3} anchorAlignment="center" fontSize={1} font="tscircuit2024" layer="top" text="REFERENCE" />
        <coppertext pcbX={-4} pcbY={3} anchorAlignment="center" text="BOARD" font="tscircuit2024" fontSize={1} />
              </footprint>} />
      </board>
    )"
  `)
  for (const elementType of preservedElementTypes) {
    expect(
      renderedCircuitJson.filter((element) => element.type === elementType),
    ).toHaveLength(1)
  }

  const pcbComparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    {
      gap: 24,
      normalizeSize: true,
      targetSize: 600,
      rootAttributes: {
        "aria-label":
          "Orphaned board graphics: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )
  await expect(pcbComparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})
