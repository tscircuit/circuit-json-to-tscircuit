import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"

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
