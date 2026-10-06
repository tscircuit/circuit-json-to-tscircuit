import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import { createComparisonSvg } from "./fixtures/create-ti-evm-roundtrip"

const loadStandaloneDrv8307Schematic = async (): Promise<CircuitJson> => {
  const compressedFixture = await readFile(
    join(import.meta.dir, "fixtures/ti-evms/drv8307evm.circuit.json.gz"),
  )
  const boardCircuitJson = JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson

  return boardCircuitJson.filter(
    (element) =>
      !element.type.startsWith("pcb_") && !element.type.startsWith("cad_"),
  ) as CircuitJson
}

test(
  "preserves a standalone TI schematic sheet instead of importing it as one chip",
  async () => {
    const sourceCircuitJson = await loadStandaloneDrv8307Schematic()
    const generatedTscircuit = convertCircuitJsonToTscircuit(
      sourceCircuitJson,
      { componentName: "Drv8307Schematic" },
    )
    const renderedCircuitJson = (await runTscircuitCode(
      generatedTscircuit,
    )) as CircuitJson

    expect(generatedTscircuit).toContain("<schematicsheet")
    expect(generatedTscircuit).not.toContain("<chip")
    expect(
      renderedCircuitJson.filter(
        (element) => element.type === "schematic_sheet",
      ),
    ).toHaveLength(1)
    expect(
      renderedCircuitJson.filter(
        (element) =>
          element.type === "schematic_path" ||
          element.type === "schematic_line",
      ).length,
    ).toBeGreaterThan(100)

    const comparisonSvg = createComparisonSvg({
      fixtureName: "DRV8307EVM standalone schematic",
      kind: "schematic",
      sourceSvg: convertCircuitJsonToSchematicSvg(sourceCircuitJson),
      renderedSvg: convertCircuitJsonToSchematicSvg(renderedCircuitJson),
    })
    await expect(comparisonSvg).toMatchSvgSnapshot(
      import.meta.path,
      "schematic-comparison",
    )
  },
  { timeout: 120_000 },
)
