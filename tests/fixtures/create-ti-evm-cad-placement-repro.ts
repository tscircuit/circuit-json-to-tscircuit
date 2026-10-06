import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CadComponent, CircuitJson, Point3 } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

interface AxisMismatchCounts {
  x: number
  y: number
  z: number
}

interface TiEvmCadPlacementSummary {
  firstModel: {
    renderedLayer: CadComponent["layer"]
    renderedPosition: Point3
    renderedRotation: Point3
    sourceLayer: CadComponent["layer"]
    sourcePosition: Point3
    sourceRotation: Point3
  }
  layerMismatchCount: number
  linkedModelCount: number
  maximumAbsolutePositionErrorByAxisMm: Point3
  maximumAbsoluteRotationErrorByAxisDegrees: Point3
  positionAxisMismatchCounts: AxisMismatchCounts
  rotationAxisMismatchCounts: AxisMismatchCounts
}

const DEFAULT_ROTATION: Point3 = { x: 0, y: 0, z: 0 }
const TOLERANCE = 1e-6

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

const roundForSnapshot = (number: number): number => Number(number.toFixed(6))

const getAbsoluteAxisError = (first: Point3, second: Point3): Point3 => ({
  x: Math.abs(first.x - second.x),
  y: Math.abs(first.y - second.y),
  z: Math.abs(first.z - second.z),
})

const getAbsoluteRotationAxisErrorDegrees = (
  firstCcwRotationDegrees: number,
  secondCcwRotationDegrees: number,
): number => {
  const normalizedDifferenceDegrees =
    ((firstCcwRotationDegrees - secondCcwRotationDegrees + 180) % 360) - 180
  return Math.abs(normalizedDifferenceDegrees)
}

const getAbsoluteRotationError = (first: Point3, second: Point3): Point3 => {
  return {
    x: getAbsoluteRotationAxisErrorDegrees(first.x, second.x),
    y: getAbsoluteRotationAxisErrorDegrees(first.y, second.y),
    z: getAbsoluteRotationAxisErrorDegrees(first.z, second.z),
  }
}

export async function createTiEvmCadPlacementRepro({
  componentName,
  fixtureName,
}: {
  componentName: string
  fixtureName: string
}): Promise<TiEvmCadPlacementSummary> {
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
  const sourceModels = getLinkedCadModels(sourceCircuitJson)
  const renderedModels = getLinkedCadModels(renderedCircuitJson)

  if (sourceModels.length !== renderedModels.length) {
    throw new Error(
      `${fixtureName} rendered ${renderedModels.length} of ${sourceModels.length} linked CAD models`,
    )
  }
  if (sourceModels.length === 0) {
    throw new Error(`${fixtureName} has no linked CAD models`)
  }

  const maximumPositionError: Point3 = { x: 0, y: 0, z: 0 }
  const maximumRotationError: Point3 = { x: 0, y: 0, z: 0 }
  const positionMismatchCounts: AxisMismatchCounts = { x: 0, y: 0, z: 0 }
  const rotationMismatchCounts: AxisMismatchCounts = { x: 0, y: 0, z: 0 }
  let layerMismatchCount = 0

  for (const [modelIndex, sourceModel] of sourceModels.entries()) {
    const renderedModel = renderedModels[modelIndex]
    if (!renderedModel) throw new Error(`Missing rendered model ${modelIndex}`)
    if (getModelUrl(sourceModel) !== getModelUrl(renderedModel)) {
      throw new Error(`${fixtureName} changed model order at ${modelIndex}`)
    }
    if (sourceModel.layer !== renderedModel.layer) layerMismatchCount += 1

    const positionError = getAbsoluteAxisError(
      sourceModel.position,
      renderedModel.position,
    )
    const rotationError = getAbsoluteRotationError(
      sourceModel.rotation ?? DEFAULT_ROTATION,
      renderedModel.rotation ?? DEFAULT_ROTATION,
    )

    for (const axis of ["x", "y", "z"] as const) {
      maximumPositionError[axis] = Math.max(
        maximumPositionError[axis],
        positionError[axis],
      )
      maximumRotationError[axis] = Math.max(
        maximumRotationError[axis],
        rotationError[axis],
      )
      if (positionError[axis] > TOLERANCE) positionMismatchCounts[axis] += 1
      if (rotationError[axis] > TOLERANCE) rotationMismatchCounts[axis] += 1
    }
  }

  const firstSourceModel = sourceModels[0]!
  const firstRenderedModel = renderedModels[0]!
  return {
    firstModel: {
      renderedLayer: firstRenderedModel.layer,
      renderedPosition: firstRenderedModel.position,
      renderedRotation: firstRenderedModel.rotation ?? DEFAULT_ROTATION,
      sourceLayer: firstSourceModel.layer,
      sourcePosition: firstSourceModel.position,
      sourceRotation: firstSourceModel.rotation ?? DEFAULT_ROTATION,
    },
    layerMismatchCount,
    linkedModelCount: sourceModels.length,
    maximumAbsolutePositionErrorByAxisMm: {
      x: roundForSnapshot(maximumPositionError.x),
      y: roundForSnapshot(maximumPositionError.y),
      z: roundForSnapshot(maximumPositionError.z),
    },
    maximumAbsoluteRotationErrorByAxisDegrees: {
      x: roundForSnapshot(maximumRotationError.x),
      y: roundForSnapshot(maximumRotationError.y),
      z: roundForSnapshot(maximumRotationError.z),
    },
    positionAxisMismatchCounts: positionMismatchCounts,
    rotationAxisMismatchCounts: rotationMismatchCounts,
  }
}
