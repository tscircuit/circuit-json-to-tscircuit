import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

type SourceComponent = Extract<
  CircuitJson[number],
  { type: "source_component" }
>

test("serializes quoted component string props as valid TSX", async () => {
  const displayValue = 'Size: 1.25" x 0.25"'
  const manufacturerPartNumber = 'LABEL-1"-BLACK'
  const sourceCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="10mm" height="10mm">
        <chip
          name="LBL1"
          manufacturerPartNumber={${JSON.stringify(manufacturerPartNumber)}}
          schDisplayValue={${JSON.stringify(displayValue)}}
          footprint={<footprint />}
          symbol={<symbol>
            <schematicrect width={1} height={0.5} />
          </symbol>}
        />
      </board>
    )
  `)) as CircuitJson

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "QuotedComponentProps",
  })

  expect(generatedTscircuit).toContain(
    `schDisplayValue={${JSON.stringify(displayValue)}}`,
  )
  expect(generatedTscircuit).toContain(
    `manufacturerPartNumber={${JSON.stringify(manufacturerPartNumber)}}`,
  )

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedSourceComponent = renderedCircuitJson.find(
    (element): element is SourceComponent =>
      element.type === "source_component" && element.name === "LBL1",
  )
  const renderedSchematicComponent = renderedCircuitJson.find(
    (element) => element.type === "schematic_component",
  )

  expect(renderedSourceComponent?.manufacturer_part_number).toBe(
    manufacturerPartNumber,
  )
  expect(renderedSchematicComponent?.symbol_display_value).toBe(displayValue)
})
