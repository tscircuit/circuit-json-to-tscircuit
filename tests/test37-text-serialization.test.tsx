import { expect, test } from "bun:test"
import type { AnyCircuitElement, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const specialText = 'Line 1\n"quoted" \\path & <tag>'

const circuitJson: AnyCircuitElement[] = [
  {
    type: "source_component",
    source_component_id: "source_component_1",
    name: "U1",
    ftype: "simple_chip",
    supplier_part_numbers: {},
  },
  {
    type: "schematic_component",
    schematic_component_id: "schematic_component_1",
    source_component_id: "source_component_1",
    center: { x: 0, y: 0 },
    size: { width: 4, height: 2 },
    is_box_with_pins: false,
  },
  {
    type: "schematic_text",
    schematic_text_id: "schematic_text_1",
    schematic_component_id: "schematic_component_1",
    text: specialText,
    position: { x: 0, y: 0 },
    anchor: "center",
    font_size: 0.2,
    color: "#334155",
    rotation: 0,
  },
  {
    type: "pcb_component",
    pcb_component_id: "pcb_component_1",
    source_component_id: "source_component_1",
    center: { x: 0, y: 0 },
    width: 4,
    height: 2,
    rotation: 0,
    layer: "top",
    obstructs_within_bounds: true,
  },
  {
    type: "pcb_note_text",
    pcb_note_text_id: "pcb_note_text_1",
    pcb_component_id: "pcb_component_1",
    anchor_position: { x: 0, y: 0 },
    anchor_alignment: "center",
    font: "tscircuit2024",
    font_size: 0.2,
    text: specialText,
    layer: "top",
  },
]

test("serializes arbitrary schematic and PCB text as valid TSX", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "TextFixture",
  })
  const expectedTextAttribute = `text={${JSON.stringify(specialText)}}`

  expect(generatedTscircuit).not.toContain('text="Line 1\n')
  expect(
    generatedTscircuit.split(expectedTextAttribute).length - 1,
  ).toBeGreaterThanOrEqual(2)

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson

  expect(
    renderedCircuitJson.some(
      (element) =>
        element.type === "schematic_text" && element.text === specialText,
    ),
  ).toBeTrue()
  expect(
    renderedCircuitJson.some(
      (element) =>
        element.type === "pcb_note_text" && element.text === specialText,
    ),
  ).toBeTrue()
})
