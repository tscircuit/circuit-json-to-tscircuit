import { expect, test } from "bun:test"
import { any_circuit_element, type CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("explicit native symbols preserve display values and owned text", async () => {
  const circuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="10mm" height="10mm">
        <resistor name="R1" resistance="10k" schX={0} schY={0} />
      </board>
    )
  `)) as CircuitJson
  const sourceComponent = circuitJson.find(
    (element) => element.type === "source_component" && element.name === "R1",
  )
  const schematicComponent = circuitJson.find(
    (element) =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceComponent?.source_component_id,
  )
  if (
    sourceComponent?.type !== "source_component" ||
    schematicComponent?.type !== "schematic_component"
  ) {
    throw new Error("Missing resistor components in fixture")
  }

  sourceComponent.display_value = "10k"
  schematicComponent.symbol_name = "resistor_right"
  schematicComponent.symbol_display_value = "DNP"
  schematicComponent.is_box_with_pins = false
  circuitJson.push({
    type: "schematic_text",
    schematic_text_id: "owned_note",
    schematic_component_id: schematicComponent.schematic_component_id,
    text: "KEEP_ME",
    font_size: 0.15,
    position: { x: 0, y: -1 },
    rotation: 0,
    anchor: "center",
    color: "#000000",
  })
  for (const element of circuitJson) any_circuit_element.parse(element)

  const generatedTsx = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ExplicitNativeSymbolContent",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedTexts = renderedCircuitJson.flatMap((element) =>
    element.type === "schematic_text" ? [element.text] : [],
  )

  expect(renderedTexts).toContain("R1")
  expect(renderedTexts).toContain("DNP")
  expect(renderedTexts).toContain("KEEP_ME")
  expect(renderedTexts).not.toContain("10k")
})
