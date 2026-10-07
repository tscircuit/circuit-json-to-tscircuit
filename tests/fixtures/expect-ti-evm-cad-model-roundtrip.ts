import { expect } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type {
  CadComponent,
  CircuitJson,
  LayerRef,
  PcbComponent,
  Point3,
} from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import {
  expectTiEvm3dSnapshot,
  expectTiEvm3dViewsToMatch,
} from "./expect-ti-evm-3d-snapshot"

type PcbComponentId = PcbComponent["pcb_component_id"]

const DEFAULT_ROTATION: Point3 = { x: 0, y: 0, z: 0 }
const TRANSFORM_TOLERANCE = 1e-6

const getModelUrl = (cadComponent: CadComponent): string | undefined =>
  cadComponent.model_glb_url ??
  cadComponent.model_gltf_url ??
  cadComponent.model_obj_url ??
  cadComponent.model_step_url ??
  cadComponent.model_stl_url ??
  cadComponent.model_wrl_url

const getLinkedCadModels = (circuitJson: CircuitJson): CadComponent[] =>
  circuitJson.filter(
    (element): element is CadComponent =>
      element.type === "cad_component" && getModelUrl(element) !== undefined,
  )

const getPcbComponentById = (
  circuitJson: CircuitJson,
): Map<PcbComponentId, PcbComponent> => {
  const pcbComponentById = new Map<PcbComponentId, PcbComponent>()
  for (const element of circuitJson) {
    if (element.type === "pcb_component") {
      pcbComponentById.set(element.pcb_component_id, element)
    }
  }
  return pcbComponentById
}

const getEffectiveLayer = ({
  cadComponent,
  pcbComponentById,
}: {
  cadComponent: CadComponent
  pcbComponentById: Map<PcbComponentId, PcbComponent>
}): LayerRef | undefined =>
  cadComponent.layer ??
  (cadComponent.pcb_component_id
    ? pcbComponentById.get(cadComponent.pcb_component_id)?.layer
    : undefined)

const getAbsoluteRotationErrorDegrees = ({
  firstCcwRotationDegrees,
  secondCcwRotationDegrees,
}: {
  firstCcwRotationDegrees: number
  secondCcwRotationDegrees: number
}): number => {
  const rotationDifferenceDegrees =
    firstCcwRotationDegrees - secondCcwRotationDegrees
  const normalizedDifferenceDegrees =
    ((((rotationDifferenceDegrees + 180) % 360) + 360) % 360) - 180
  return Math.abs(normalizedDifferenceDegrees)
}

export const expectTiEvmCadModelRoundtrip = async ({
  componentName,
  fixtureName,
  testPath,
}: {
  componentName: string
  fixtureName: string
  testPath: string
}): Promise<{ linkedCadModelCount: number }> => {
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
  const sourceCadModels = getLinkedCadModels(sourceCircuitJson)
  const renderedCadModels = getLinkedCadModels(renderedCircuitJson)
  const sourcePcbComponentById = getPcbComponentById(sourceCircuitJson)
  const renderedPcbComponentById = getPcbComponentById(renderedCircuitJson)

  expect(generatedTsx).toContain("<cadmodel")
  expect(sourceCadModels.length).toBeGreaterThan(0)
  expect(renderedCadModels.length).toBe(sourceCadModels.length)

  for (const [modelIndex, sourceCadModel] of sourceCadModels.entries()) {
    const renderedCadModel = renderedCadModels[modelIndex]
    if (!renderedCadModel) {
      throw new Error(`${fixtureName} is missing rendered model ${modelIndex}`)
    }

    expect(getModelUrl(renderedCadModel)).toBe(getModelUrl(sourceCadModel))
    expect(
      getEffectiveLayer({
        cadComponent: renderedCadModel,
        pcbComponentById: renderedPcbComponentById,
      }),
    ).toBe(
      getEffectiveLayer({
        cadComponent: sourceCadModel,
        pcbComponentById: sourcePcbComponentById,
      }),
    )

    const sourceRotation = sourceCadModel.rotation ?? DEFAULT_ROTATION
    const renderedRotation = renderedCadModel.rotation ?? DEFAULT_ROTATION
    for (const axis of ["x", "y", "z"] as const) {
      expect(
        Math.abs(
          sourceCadModel.position[axis] - renderedCadModel.position[axis],
        ),
      ).toBeLessThanOrEqual(TRANSFORM_TOLERANCE)
      expect(
        getAbsoluteRotationErrorDegrees({
          firstCcwRotationDegrees: sourceRotation[axis],
          secondCcwRotationDegrees: renderedRotation[axis],
        }),
      ).toBeLessThanOrEqual(TRANSFORM_TOLERANCE)
    }
  }

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
  expectTiEvm3dViewsToMatch({ generatedViews, sourceViews })

  return { linkedCadModelCount: sourceCadModels.length }
}
