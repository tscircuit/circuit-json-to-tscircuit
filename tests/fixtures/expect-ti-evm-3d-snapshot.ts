import { readFile } from "node:fs/promises"
import { basename, dirname, join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CadComponent, CircuitJson, PcbBoard } from "circuit-json"
import {
  convertCircuitJsonToGltf,
  getBestCameraPosition,
} from "circuit-json-to-gltf"
import { renderGLTFToPNGFromGLB } from "poppygl"
import { expectPngSnapshot } from "./expect-png-snapshot"

type CadModelFileName = string
type EmbeddedStepModelUrl = string
type BoardViewName = "bottom" | "top"
type SnapshotName = "generated" | "source"

const TOP_BOARD_CAMERA_DIRECTION = [-0.7, 1.2, -0.8] as const
const BOTTOM_BOARD_CAMERA_DIRECTION = [-0.7, -1.2, -0.8] as const

function getCadModelFileName(
  cadComponent: CadComponent,
): CadModelFileName | undefined {
  const modelUrl =
    cadComponent.model_glb_url ??
    cadComponent.model_step_url ??
    cadComponent.model_stl_url
  const match = modelUrl?.match(/\/(?<modelIndex>\d+)\.(?:glb|step|stl)$/u)
  const modelIndex = match?.groups?.modelIndex
  return modelIndex ? `${modelIndex}.step.gz` : undefined
}

async function readEmbeddedStepModelUrl({
  cadModelFileName,
  embeddedStepModelUrlByFileName,
  fixtureName,
}: {
  cadModelFileName: CadModelFileName
  embeddedStepModelUrlByFileName: Map<CadModelFileName, EmbeddedStepModelUrl>
  fixtureName: string
}): Promise<EmbeddedStepModelUrl> {
  const cachedEmbeddedStepModelUrl =
    embeddedStepModelUrlByFileName.get(cadModelFileName)
  if (cachedEmbeddedStepModelUrl) return cachedEmbeddedStepModelUrl

  const compressedCadModel = await readFile(
    join(
      import.meta.dir,
      "ti-evms",
      "cad-models",
      fixtureName,
      cadModelFileName,
    ),
  )
  const embeddedStepModelUrl = `data:application/step;base64,${gunzipSync(compressedCadModel).toString("base64")}`
  embeddedStepModelUrlByFileName.set(cadModelFileName, embeddedStepModelUrl)
  return embeddedStepModelUrl
}

async function createVisualCircuitJson({
  circuitJson,
  fixtureName,
}: {
  circuitJson: CircuitJson
  fixtureName: string
}): Promise<CircuitJson> {
  const embeddedStepModelUrlByFileName = new Map<
    CadModelFileName,
    EmbeddedStepModelUrl
  >()
  const visualCircuitJson: CircuitJson = []
  for (const element of circuitJson) {
    if (element.type !== "cad_component") {
      visualCircuitJson.push(element)
      continue
    }

    const cadModelFileName = getCadModelFileName(element)
    if (!cadModelFileName) continue
    const modelStepUrl = await readEmbeddedStepModelUrl({
      cadModelFileName,
      embeddedStepModelUrlByFileName,
      fixtureName,
    })
    visualCircuitJson.push({
      ...element,
      model_glb_url: undefined,
      model_step_url: modelStepUrl,
      model_stl_url: undefined,
    })
  }
  return visualCircuitJson
}

async function renderBoardView({
  boardViewName,
  cameraReferenceBoard,
  glb,
}: {
  boardViewName: BoardViewName
  cameraReferenceBoard: PcbBoard
  glb: ArrayBuffer
}): Promise<Uint8Array> {
  const direction =
    boardViewName === "top"
      ? TOP_BOARD_CAMERA_DIRECTION
      : BOTTOM_BOARD_CAMERA_DIRECTION
  return renderGLTFToPNGFromGLB(glb, {
    ...getBestCameraPosition([cameraReferenceBoard], {
      aspectRatio: 4 / 3,
      direction,
    }),
    backgroundColor: "#07100c",
    height: 750,
    width: 1000,
  })
}

export async function expectTiEvm3dSnapshot({
  cameraReferenceCircuitJson,
  circuitJson,
  fixtureName,
  snapshotName,
  testPath,
}: {
  cameraReferenceCircuitJson: CircuitJson
  circuitJson: CircuitJson
  fixtureName: string
  snapshotName: SnapshotName
  testPath: string
}): Promise<void> {
  const cameraReferenceBoard = cameraReferenceCircuitJson.find(
    (element): element is PcbBoard => element.type === "pcb_board",
  )
  if (!cameraReferenceBoard) {
    throw new Error("Could not find camera reference PCB board")
  }

  const visualCircuitJson = await createVisualCircuitJson({
    circuitJson,
    fixtureName,
  })
  const glb = await convertCircuitJsonToGltf(visualCircuitJson, {
    boardTextureResolution: 1024,
    format: "glb",
  })
  if (!(glb instanceof ArrayBuffer)) {
    throw new Error("3D conversion did not return a GLB")
  }

  const testName = basename(testPath).replace(/\.test\.tsx?$/u, "")
  for (const boardViewName of ["top", "bottom"] as const) {
    const renderedPng = await renderBoardView({
      boardViewName,
      cameraReferenceBoard,
      glb,
    })
    await expectPngSnapshot({
      renderedPng,
      snapshotPath: join(
        dirname(testPath),
        "__snapshots__",
        `${testName}-${snapshotName}-${boardViewName}-3d.snap.png`,
      ),
    })
  }
}
