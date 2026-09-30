import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves special characters in manufacturer part numbers", async () => {
  const manufacturerPartNumber = 'RC "precision" &amp; <1k> \\series\nrevision'
  const tsx = convertCircuitJsonToTscircuit([], {
    componentName: "ImportedComponent",
    manufacturerPartNumber,
  })
  const circuitJson = (await runTscircuitCode(`
${tsx}
circuit.add(<board width="10mm" height="10mm"><ImportedComponent name="U1" /></board>)
  `)) as CircuitJson
  const source_component = circuitJson
    .filter((element) => element.type === "source_component")
    .find((element) => element.name === "U1")

  expect(source_component?.manufacturer_part_number).toBe(
    manufacturerPartNumber,
  )
})
