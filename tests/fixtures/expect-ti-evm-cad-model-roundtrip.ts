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
import { expectTiEvm3dSnapshot } from "./expect-ti-evm-3d-snapshot"

type PcbComponentId = PcbComponent["pcb_component_id"]

const DEFAULT_ROTATION: Point3 = { x: 0, y: 0, z: 0 }
const NATIVE_MODEL_ORIGIN: Point3 = { x: 0, y: 0, z: 0 }
const ORIGIN_TOLERANCE = 1e-6
const POSITION_TOLERANCE = 0.1
const ROTATION_TOLERANCE_DEGREES = 1e-6

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

const getEffectiveModelOrigin = (
  cadComponent: CadComponent,
): Point3 | undefined =>
  cadComponent.model_origin_position ??
  (cadComponent.model_origin_alignment === "unknown"
    ? NATIVE_MODEL_ORIGIN
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

const getPositionError = ({
  renderedPosition,
  sourcePosition,
}: {
  renderedPosition: Point3
  sourcePosition: Point3
}): number =>
  Math.max(
    ...(["x", "y", "z"] as const).map((axis) =>
      Math.abs(renderedPosition[axis] - sourcePosition[axis]),
    ),
  )

const findClosestRenderedCadModelIndex = ({
  renderedCadModels,
  renderedPcbComponentById,
  sourceCadModel,
  sourcePcbComponentById,
}: {
  renderedCadModels: CadComponent[]
  renderedPcbComponentById: Map<PcbComponentId, PcbComponent>
  sourceCadModel: CadComponent
  sourcePcbComponentById: Map<PcbComponentId, PcbComponent>
}): number => {
  const sourceLayer = getEffectiveLayer({
    cadComponent: sourceCadModel,
    pcbComponentById: sourcePcbComponentById,
  })
  let closestModelIndex = -1
  let closestPositionError = Number.POSITIVE_INFINITY

  for (const [modelIndex, renderedCadModel] of renderedCadModels.entries()) {
    const renderedLayer = getEffectiveLayer({
      cadComponent: renderedCadModel,
      pcbComponentById: renderedPcbComponentById,
    })
    if (
      getModelUrl(renderedCadModel) !== getModelUrl(sourceCadModel) ||
      renderedLayer !== sourceLayer
    ) {
      continue
    }
    const positionError = getPositionError({
      renderedPosition: renderedCadModel.position,
      sourcePosition: sourceCadModel.position,
    })
    if (positionError < closestPositionError) {
      closestModelIndex = modelIndex
      closestPositionError = positionError
    }
  }

  return closestModelIndex
}

const expectCadModelPlacementToMatch = ({
  renderedCadModel,
  sourceCadModel,
}: {
  renderedCadModel: CadComponent
  sourceCadModel: CadComponent
}): void => {
  expect(
    getPositionError({
      renderedPosition: renderedCadModel.position,
      sourcePosition: sourceCadModel.position,
    }),
  ).toBeLessThanOrEqual(POSITION_TOLERANCE)

  const renderedRotation = renderedCadModel.rotation ?? DEFAULT_ROTATION
  const sourceRotation = sourceCadModel.rotation ?? DEFAULT_ROTATION
  for (const axis of ["x", "y", "z"] as const) {
    expect(
      getAbsoluteRotationErrorDegrees({
        firstCcwRotationDegrees: renderedRotation[axis],
        secondCcwRotationDegrees: sourceRotation[axis],
      }),
    ).toBeLessThanOrEqual(ROTATION_TOLERANCE_DEGREES)
  }

  const sourceModelOrigin = getEffectiveModelOrigin(sourceCadModel)
  if (!sourceModelOrigin) return
  const renderedModelOrigin = getEffectiveModelOrigin(renderedCadModel)
  expect(renderedModelOrigin).toBeDefined()
  for (const axis of ["x", "y", "z"] as const) {
    expect(
      Math.abs(
        (renderedModelOrigin ?? NATIVE_MODEL_ORIGIN)[axis] -
          sourceModelOrigin[axis],
      ),
    ).toBeLessThanOrEqual(ORIGIN_TOLERANCE)
  }
}

const expectCadModelPlacementsToMatch = ({
  renderedCadModels,
  renderedPcbComponentById,
  sourceCadModels,
  sourcePcbComponentById,
}: {
  renderedCadModels: CadComponent[]
  renderedPcbComponentById: Map<PcbComponentId, PcbComponent>
  sourceCadModels: CadComponent[]
  sourcePcbComponentById: Map<PcbComponentId, PcbComponent>
}): void => {
  const unmatchedRenderedCadModels = [...renderedCadModels]
  for (const sourceCadModel of sourceCadModels) {
    const closestModelIndex = findClosestRenderedCadModelIndex({
      renderedCadModels: unmatchedRenderedCadModels,
      renderedPcbComponentById,
      sourceCadModel,
      sourcePcbComponentById,
    })
    expect(closestModelIndex).toBeGreaterThanOrEqual(0)
    const [renderedCadModel] = unmatchedRenderedCadModels.splice(
      closestModelIndex,
      1,
    )
    if (!renderedCadModel) continue
    expectCadModelPlacementToMatch({ renderedCadModel, sourceCadModel })
  }
  expect(unmatchedRenderedCadModels).toHaveLength(0)
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
  expect(renderedCadModels).toHaveLength(sourceCadModels.length)

  expectCadModelPlacementsToMatch({
    renderedCadModels,
    renderedPcbComponentById,
    sourceCadModels,
    sourcePcbComponentById,
  })

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

  return { linkedCadModelCount: sourceCadModels.length }
}
