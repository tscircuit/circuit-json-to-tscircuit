import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test10 support fabrication elements", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "Test10Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test10Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <fabricationnotepath route={[{"x":-1,"y":-1},{"x":1,"y":-1},{"x":1,"y":1}]} strokeWidth={0.15} color="#0000ff" layer="bottom" />
    <fabricationnotetext pcbX={1} pcbY={2} anchorAlignment="top_left" text="Assembly" font="tscircuit2024" fontSize={1.5} color="#ff0000" />
    <fabricationnoterect pcbX={0} pcbY={0} width={3.2} height={1.6} strokeWidth={0.2} isFilled={false} hasStroke={true} isStrokeDashed={true} color="#00ff00" cornerRadius={0.25} layer="bottom" />
    <fabricationnotedimension from={{ x: -2, y: 0 }} to={{ x: 2, y: 0 }} text="4mm" font="tscircuit2024" fontSize={1.2} color="#654321" arrowSize={0.25} offset={0.5} layer="bottom" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test10Component />
  </board>,
)
  `)) as any[]

  const fabricationElements = renderedCircuitJson.filter((elm) =>
    elm.type.startsWith("pcb_fabrication_note_"),
  )

  expect(fabricationElements).toHaveLength(8)

  const pathElements = fabricationElements.filter(
    (elm) => elm.type === "pcb_fabrication_note_path",
  )
  const textElements = fabricationElements.filter(
    (elm) => elm.type === "pcb_fabrication_note_text",
  )
  const rectElements = fabricationElements.filter(
    (elm) => elm.type === "pcb_fabrication_note_rect",
  )
  const dimensionElements = fabricationElements.filter(
    (elm) => elm.type === "pcb_fabrication_note_dimension",
  )

  expect(pathElements).toHaveLength(2)
  expect(textElements).toHaveLength(2)
  expect(rectElements).toHaveLength(2)
  expect(dimensionElements).toHaveLength(2)

  expect(pathElements[0]).toMatchObject({
    layer: "bottom",
    color: "#0000ff",
    stroke_width: 0.15,
  })
  expect(pathElements[1]).toMatchObject({
    layer: "bottom",
    color: "#0000ff",
    stroke_width: 0.15,
  })
  expect(textElements[0]).toMatchObject({
    layer: "top",
    text: "Assembly",
    color: "#ff0000",
  })
  expect(textElements[1]).toMatchObject({
    layer: "top",
    text: "Assembly",
    color: "#ff0000",
  })
  expect(rectElements[0]).toMatchObject({
    layer: "bottom",
    width: 3.2,
    height: 1.6,
    corner_radius: 0.25,
  })
  expect(rectElements[1]).toMatchObject({
    layer: "bottom",
    width: 3.2,
    height: 1.6,
    corner_radius: 0.25,
  })
  expect(dimensionElements[0]).toMatchObject({
    layer: "bottom",
    text: "4mm",
    arrow_size: 0.25,
    offset: 0.5,
  })
  expect(dimensionElements[1]).toMatchObject({
    layer: "bottom",
    text: "4mm",
    arrow_size: 0.25,
    offset: 0.5,
  })
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
    width: 1,
    height: 1,
  },
  {
    type: "pcb_fabrication_note_path",
    pcb_fabrication_note_path_id: "pcb_fabrication_note_path_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    route: [
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ],
    stroke_width: 0.15,
    color: "#0000ff",
  },
  {
    type: "pcb_fabrication_note_text",
    pcb_fabrication_note_text_id: "pcb_fabrication_note_text_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    anchor_position: { x: 1, y: 2 },
    anchor_alignment: "top_left",
    font: "tscircuit2024",
    font_size: 1.5,
    text: "Assembly",
    color: "#ff0000",
  },
  {
    type: "pcb_fabrication_note_rect",
    pcb_fabrication_note_rect_id: "pcb_fabrication_note_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    center: { x: 0, y: 0 },
    width: 3.2,
    height: 1.6,
    stroke_width: 0.2,
    corner_radius: 0.25,
    is_filled: false,
    has_stroke: true,
    is_stroke_dashed: true,
    color: "#00ff00",
  },
  {
    type: "pcb_fabrication_note_dimension",
    pcb_fabrication_note_dimension_id: "pcb_fabrication_note_dimension_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    from: { x: -2, y: 0 },
    to: { x: 2, y: 0 },
    text: "4mm",
    font: "tscircuit2024",
    font_size: 1.2,
    arrow_size: 0.25,
    offset: 0.5,
    color: "#654321",
  },
]
