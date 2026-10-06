import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import { expectTiEvm3dSnapshot } from "./expect-ti-evm-3d-snapshot"

export const expectTiEvmCadModelVisualRepro = async ({
  componentName,
  fixtureName,
  testPath,
}: {
  componentName: string
  fixtureName: string
  testPath: string
}): Promise<void> => {
  const compressedFixture = await readFile(
    join(import.meta.dir, "ti-evms", `${fixtureName}-cad.circuit.json.gz`),
  )
  const sourceCircuitJson = JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson
  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName,
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson

  await expectTiEvm3dSnapshot({
    cameraReferenceCircuitJson: sourceCircuitJson,
    circuitJson: sourceCircuitJson,
    fixtureName,
    snapshotName: "source",
    testPath,
  })
  await expectTiEvm3dSnapshot({
    cameraReferenceCircuitJson: sourceCircuitJson,
    circuitJson: renderedCircuitJson,
    fixtureName,
    snapshotName: "generated",
    testPath,
  })
}
