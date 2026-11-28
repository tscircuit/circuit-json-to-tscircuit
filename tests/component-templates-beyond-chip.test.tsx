import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("generates standalone component templates for components other than <chip />", async () => {
  const resistorJson = (await runTscircuitCode(`
    export default () => (
      <resistor name="R1" resistance="2.2k" footprint="0402" />
    )
  `)) as CircuitJson

  const resistorTemplate = convertCircuitJsonToTscircuit(resistorJson, {
    componentName: "ImportedResistor",
  })

  expect(resistorTemplate).toContain(
    'import { type ResistorProps } from "@tscircuit/props"',
  )
  expect(resistorTemplate).toContain(
    "export const ImportedResistor = (props: Partial<ResistorProps>) => (",
  )
  expect(resistorTemplate).toContain("<resistor")
  expect(resistorTemplate).toContain('resistance="2.2kΩ"')
  expect(resistorTemplate).toContain('footprint="0402"')
  expect(resistorTemplate).not.toContain("<chip")

  const capacitorJson = (await runTscircuitCode(`
    export default () => (
      <capacitor name="C1" capacitance="100nF" maxVoltageRating="16V" footprint="0603" />
    )
  `)) as CircuitJson

  const capacitorTemplate = convertCircuitJsonToTscircuit(capacitorJson, {
    componentName: "ImportedCapacitor",
  })

  expect(capacitorTemplate).toContain(
    'import { type CapacitorProps } from "@tscircuit/props"',
  )
  expect(capacitorTemplate).toContain("<capacitor")
  expect(capacitorTemplate).toContain('capacitance="100nF"')
  expect(capacitorTemplate).toContain("maxVoltageRating={16}")
  expect(capacitorTemplate).toContain('footprint="0603"')

  const composedBoard = `
${resistorTemplate}
${capacitorTemplate}
export default () => (
  <board width="12mm" height="8mm">
    <ImportedResistor name="R10" pcbX={-3} schX={-3} />
    <ImportedCapacitor name="C10" pcbX={3} schX={3} />
    <trace from=".R10 > .pin1" to=".C10 > .pin1" />
  </board>
)
`
  const rendered = (await runTscircuitCode(composedBoard)) as CircuitJson
  expect(rendered.filter((element) => element.type.includes("error"))).toEqual(
    [],
  )
  expect(
    rendered
      .filter((element) => element.type === "source_component")
      .map((c) => ({ name: c.name, ftype: c.ftype })),
  ).toEqual([
    { name: "R10", ftype: "simple_resistor" },
    { name: "C10", ftype: "simple_capacitor" },
  ])
}, 20_000)
