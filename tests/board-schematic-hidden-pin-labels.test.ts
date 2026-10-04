import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("does not display hidden source port names on the LM5155 U3 symbol", async () => {
  const fixturePath = join(
    import.meta.dir,
    "fixtures/ti-evms/lm5155evm-fly.circuit.json.gz",
  )
  const circuitJson = JSON.parse(
    gunzipSync(await readFile(fixturePath)).toString("utf8"),
  ) as CircuitJson
  const refSourcePort = circuitJson.find(
    (element) => element.type === "source_port" && element.name === "REF",
  )
  if (refSourcePort?.type !== "source_port") {
    throw new Error("LM5155 fixture is missing the U3 REF source port")
  }
  const refSchematicPort = circuitJson.find(
    (element) =>
      element.type === "schematic_port" &&
      element.source_port_id === refSourcePort.source_port_id,
  )
  if (refSchematicPort?.type !== "schematic_port") {
    throw new Error("LM5155 fixture is missing the U3 REF schematic port")
  }
  expect(refSchematicPort.display_pin_label).toBeUndefined()

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Lm5155EvmFly",
  })

  expect(generatedTscircuit).not.toContain('<schematictext text={"REF"}')
})

test("preserves component-level pin labels and explicit suppression", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      num_layers: 2,
      thickness: 1.6,
      material: "fr4",
    },
    {
      type: "schematic_component",
      schematic_component_id: "controller",
      center: { x: 0, y: 0 },
      size: { width: 2, height: 1 },
      is_box_with_pins: true,
      port_labels: { "1": "ENABLE", "2": "DISABLED" },
    },
    {
      type: "source_port",
      source_port_id: "enable_source",
      name: "ENABLE",
      pin_number: 1,
    },
    {
      type: "source_port",
      source_port_id: "disabled_source",
      name: "DISABLED",
      pin_number: 2,
    },
    {
      type: "schematic_port",
      schematic_port_id: "enable_pin",
      source_port_id: "enable_source",
      schematic_component_id: "controller",
      center: { x: -1.4, y: 0.2 },
      distance_from_component_edge: 0.4,
      side_of_component: "left",
      facing_direction: "left",
      pin_number: 1,
    },
    {
      type: "schematic_port",
      schematic_port_id: "disabled_pin",
      source_port_id: "disabled_source",
      schematic_component_id: "controller",
      center: { x: -1.4, y: -0.2 },
      distance_from_component_edge: 0.4,
      side_of_component: "left",
      facing_direction: "left",
      pin_number: 2,
      display_pin_label: "",
    },
  ]
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "ComponentPinLabelsBoard",
    }),
  )
  const renderedTexts = renderedCircuitJson
    .filter((element) => element.type === "schematic_text")
    .map((element) => element.text)

  expect(renderedTexts).toContain("ENABLE")
  expect(renderedTexts).not.toContain("DISABLED")
})
