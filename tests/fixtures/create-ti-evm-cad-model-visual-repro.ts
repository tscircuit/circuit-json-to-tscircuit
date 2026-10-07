import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import {
  expectTiEvm3dSnapshot,
  expectTiEvm3dViewsToMatch,
} from "./expect-ti-evm-3d-snapshot"

export async function expectTiEvmCadModelVisualRepro({
  componentName,
  fixtureName,
  testPath,
}: {
  componentName: string
  fixtureName: string
  testPath: string
}): Promise<void> {
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

  const sourceViews = await expectTiEvm3dSnapshot({
    cameraReferenceCircuitJson: sourceCircuitJson,
    circuitJson: sourceCircuitJson,
    fixtureName,
    snapshotName: "source",
    testPath,
  })
  const generatedViews = await expectTiEvm3dSnapshot({
    cameraReferenceCircuitJson: sourceCircuitJson,
    circuitJson: renderedCircuitJson,
    fixtureName,
    snapshotName: "generated",
    testPath,
  })
  await expectTiEvm3dViewsToMatch({ generatedViews, sourceViews })
}
