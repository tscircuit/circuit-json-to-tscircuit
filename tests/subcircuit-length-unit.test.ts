import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"
import { LEGACY_SCHEMATIC_LENGTH_UNIT } from "circuit-json"

test("exporting millimeter geometry pins the generated sheet to the units of its drawing primitives", () => {
  const source = convertCircuitJsonToTscircuit(
    [
      {
        type: "source_group",
        source_group_id: "g",
        subcircuit_id: "s",
        is_subcircuit: true,
        default_schematic_length_unit: "mm",
      },
      {
        type: "schematic_sheet",
        schematic_sheet_id: "sheet",
        subcircuit_id: "s",
        name: "Page",
      },
      {
        type: "schematic_text",
        schematic_text_id: "label",
        schematic_sheet_id: "sheet",
        subcircuit_id: "s",
        text: "Reference",
        position: { x: 25.4, y: 0 },
        rotation: 0,
        font_size: 2.54,
        anchor: "center",
        color: "#840000",
      },
    ],
    { componentName: "Drawing" },
  )
  expect(source).toContain(
    `defaultSchematicLengthUnit="${LEGACY_SCHEMATIC_LENGTH_UNIT}"`,
  )
  expect(source).toContain("2.75")
})
