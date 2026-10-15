import jscad from "@jscad/modeling"
import type { CadComponent } from "circuit-json"
import type { JscadOperation } from "jscad-planner"
import type { Point3 } from "./converter-types"
import { executeJscadOperation } from "./execute-jscad-operation"

const identityScaleFactors: Point3 = { x: 1, y: 1, z: 1 }

function getSafeScaleFactor({
  sourceLength,
  targetLength,
}: {
  sourceLength: number
  targetLength: number
}): number {
  return sourceLength > 0 ? targetLength / sourceLength : 1
}

export function getJscadOperationFitScaleFactors({
  cadComponent,
  operation,
}: {
  cadComponent: CadComponent
  operation: JscadOperation
}): Point3 {
  if (cadComponent.size === undefined) return identityScaleFactors

  const geometry = executeJscadOperation(operation)
  if (!jscad.geometries.geom3.isA(geometry)) return identityScaleFactors

  const [minimumPoint, maximumPoint] =
    jscad.measurements.measureBoundingBox(geometry)
  // CAD size is measured in model units, so the renderer scales both the
  // geometry and its target bounds before applying object fit.
  const modelUnitToMmScaleFactor =
    cadComponent.model_unit_to_mm_scale_factor ?? 1
  const axisScaleFactors: Point3 = {
    x: getSafeScaleFactor({
      sourceLength: maximumPoint[0] - minimumPoint[0],
      targetLength: cadComponent.size.x * modelUnitToMmScaleFactor,
    }),
    y: getSafeScaleFactor({
      sourceLength: maximumPoint[1] - minimumPoint[1],
      targetLength: cadComponent.size.y * modelUnitToMmScaleFactor,
    }),
    z: getSafeScaleFactor({
      sourceLength: maximumPoint[2] - minimumPoint[2],
      targetLength: cadComponent.size.z * modelUnitToMmScaleFactor,
    }),
  }

  if (cadComponent.model_object_fit === "fill_bounds") {
    return axisScaleFactors
  }

  const uniformScaleFactor = Math.min(
    axisScaleFactors.x,
    axisScaleFactors.y,
    axisScaleFactors.z,
  )
  return {
    x: uniformScaleFactor,
    y: uniformScaleFactor,
    z: uniformScaleFactor,
  }
}
