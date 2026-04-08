import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("imports source subcircuits without ambiguous port references", async () => {
  const circuitJson = JSON.parse(
    await readFile("/Users/mohan/Downloads/soil-moisture.json", "utf-8"),
  )

  const componentCode = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "SoilMoisture",
  })

  const code = `${componentCode}
export default () => (
  <board width="80mm" height="50mm">
    <SoilMoisture name="U1" />
  </board>
)`

  const res = await runTscircuitCode(code)
  const errorTypes = (res.errors ?? []).map((error: any) => error.type)

  expect(errorTypes).not.toContain("source_ambiguous_port_reference")
  expect(errorTypes).not.toContain("unknown_error_finding_part")
  expect(errorTypes).not.toContain("pcb_trace_error")
}, 30000)
