import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves bottom layer on pcb note elements", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "BottomLayerNotesComponent",
  })

  expect(tscircuit).toContain(`<pcbnotetext pcbX={1} pcbY={1}`)
  expect(tscircuit).toContain(`layer="bottom"`)

  const notetext = tscircuit.match(/<pcbnotetext[^/]*\/>/)?.[0]
  const noterect = tscircuit.match(/<pcbnoterect[^/]*\/>/)?.[0]
  const notepath = tscircuit.match(/<pcbnotepath[^/]*\/>/)?.[0]
  const noteline = tscircuit.match(/<pcbnoteline[^/]*\/>/)?.[0]
  const notedimension = tscircuit.match(/<pcbnotedimension[^/]*\/>/)?.[0]

  expect(notetext).toContain(`layer="bottom"`)
  expect(noterect).toContain(`layer="bottom"`)
  expect(notepath).toContain(`layer="bottom"`)
  expect(noteline).toContain(`layer="bottom"`)
  expect(notedimension).toContain(`layer="bottom"`)

  const renderedCircuitJson = (await runTscircuitCode(tscircuit)) as CircuitJson
  const noteElements = renderedCircuitJson.filter((element) =>
    [
      "pcb_note_text",
      "pcb_note_rect",
      "pcb_note_path",
      "pcb_note_line",
      "pcb_note_dimension",
    ].includes(element.type),
  )

  expect(noteElements.length).toBeGreaterThanOrEqual(5)
  for (const element of noteElements) {
    expect(element).toMatchObject({ layer: "bottom" })
  }
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
    type: "pcb_note_text",
    pcb_note_text_id: "pcb_note_text_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    anchor_position: { x: 1, y: 1 },
    anchor_alignment: "center",
    font: "tscircuit2024",
    font_size: 1.5,
    text: "Bottom note",
  },
  {
    type: "pcb_note_rect",
    pcb_note_rect_id: "pcb_note_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    center: { x: 0, y: 0 },
    width: 3.2,
    height: 1.6,
    stroke_width: 0.2,
    is_filled: false,
    has_stroke: true,
    is_stroke_dashed: false,
    color: "#00ff00",
  },
  {
    type: "pcb_note_path",
    pcb_note_path_id: "pcb_note_path_0",
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
    type: "pcb_note_line",
    pcb_note_line_id: "pcb_note_line_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    x1: -0.5,
    y1: -0.5,
    x2: 0.5,
    y2: 0.5,
    stroke_width: 0.1,
    color: "#123456",
    is_dashed: false,
  },
  {
    type: "pcb_note_dimension",
    pcb_note_dimension_id: "pcb_note_dimension_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "bottom",
    from: { x: -2, y: 0 },
    to: { x: 2, y: 0 },
    text: "4mm",
    font: "tscircuit2024",
    font_size: 1.2,
    arrow_size: 0.25,
    color: "#654321",
  },
]
