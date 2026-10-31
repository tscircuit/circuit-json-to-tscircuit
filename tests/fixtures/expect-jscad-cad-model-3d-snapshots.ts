import { basename, dirname, join } from "node:path"
import type { CircuitJson, PcbBoard } from "circuit-json"
import {
  convertCircuitJsonToGltf,
  getBestCameraPosition,
} from "circuit-json-to-gltf"
import { renderGLTFToPNGFromGLB } from "poppygl"
import { expectPngSnapshot } from "./expect-png-snapshot"

export async function expectJscadCadModel3dSnapshots({
  sourceCircuitJson,
  generatedCircuitJson,
  testPath,
}: {
  sourceCircuitJson: CircuitJson
  generatedCircuitJson: CircuitJson
  testPath: string
}): Promise<void> {
  const cameraReferenceBoard = sourceCircuitJson.find(
    (element): element is PcbBoard => element.type === "pcb_board",
  )
  if (!cameraReferenceBoard) throw new Error("Missing camera reference board")
  const testName = basename(testPath).replace(/\.test\.tsx?$/u, "")
  const cameraPosition = getBestCameraPosition([cameraReferenceBoard], {
    aspectRatio: 4 / 3,
    direction: [-0.7, 1.2, -0.8],
  })

  for (const [snapshotName, circuitJson] of [
    ["source", sourceCircuitJson],
    ["generated", generatedCircuitJson],
  ] as const) {
    const glb = await convertCircuitJsonToGltf(circuitJson, {
      boardTextureResolution: 1024,
      format: "glb",
    })
    if (!(glb instanceof ArrayBuffer)) {
      throw new Error("3D conversion did not return a GLB")
    }
    const renderedPng = await renderGLTFToPNGFromGLB(glb, {
      ...cameraPosition,
      backgroundColor: "#07100c",
      height: 750,
      width: 1000,
    })
    await expectPngSnapshot({
      renderedPng,
      snapshotPath: join(
        dirname(testPath),
        "__snapshots__",
        `${testName}-${snapshotName}-3d.snap.png`,
      ),
    })
  }
}
