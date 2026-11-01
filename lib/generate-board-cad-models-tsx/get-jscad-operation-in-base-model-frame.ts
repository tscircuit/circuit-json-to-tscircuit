import type { CadComponent } from "circuit-json"
import type { JscadOperation } from "jscad-planner"
import type { Point3 } from "./converter-types"
import { getJscadOperationFitScaleFactors } from "./get-jscad-operation-fit-scale-factors"

const degreesToRadians = (angleDegrees: number): number =>
  (angleDegrees * Math.PI) / 180

const getCadComponentRotation = (cadComponent: CadComponent): Point3 =>
  cadComponent.rotation ?? { x: 0, y: 0, z: 0 }

const getModelOriginPosition = (cadComponent: CadComponent): Point3 =>
  cadComponent.model_origin_position ?? { x: 0, y: 0, z: 0 }

const getBoardNormalRotation = (cadComponent: CadComponent): Point3 => {
  switch (cadComponent.model_board_normal_direction ?? "z+") {
    case "x+":
      return { x: 0, y: -90, z: 0 }
    case "x-":
      return { x: 0, y: 90, z: 0 }
    case "y+":
      return { x: 90, y: 0, z: 0 }
    case "y-":
      return { x: -90, y: 0, z: 0 }
    case "z-":
      return { x: 180, y: 0, z: 0 }
    case "z+":
      return { x: 0, y: 0, z: 0 }
  }
}

const rotateOperation = ({
  operation,
  rotationDegrees,
}: {
  operation: JscadOperation
  rotationDegrees: Point3
}): JscadOperation => {
  let rotatedOperation = operation
  for (const [axis, angleDegrees] of [
    ["Z", rotationDegrees.z],
    ["Y", rotationDegrees.y],
    ["X", rotationDegrees.x],
  ] as const) {
    if (angleDegrees === 0) continue
    rotatedOperation = {
      type: `rotate${axis}`,
      angle: degreesToRadians(angleDegrees),
      shape: rotatedOperation,
    }
  }
  return rotatedOperation
}

const rotateOperationByInverse = ({
  operation,
  rotationDegrees,
}: {
  operation: JscadOperation
  rotationDegrees: Point3
}): JscadOperation => {
  let rotatedOperation = operation
  for (const [axis, angleDegrees] of [
    ["X", rotationDegrees.x],
    ["Y", rotationDegrees.y],
    ["Z", rotationDegrees.z],
  ] as const) {
    if (angleDegrees === 0) continue
    rotatedOperation = {
      type: `rotate${axis}`,
      angle: degreesToRadians(-angleDegrees),
      shape: rotatedOperation,
    }
  }
  return rotatedOperation
}

const translateOperation = ({
  operation,
  translation,
}: {
  operation: JscadOperation
  translation: Point3
}): JscadOperation => {
  if (translation.x === 0 && translation.y === 0 && translation.z === 0) {
    return operation
  }
  return {
    type: "translate",
    vector: [translation.x, translation.y, translation.z],
    shape: operation,
  }
}

const scaleOperation = ({
  operation,
  scaleFactors,
}: {
  operation: JscadOperation
  scaleFactors: Point3
}): JscadOperation => {
  if (scaleFactors.x === 1 && scaleFactors.y === 1 && scaleFactors.z === 1) {
    return operation
  }

  return {
    type: "scale",
    factors: [scaleFactors.x, scaleFactors.y, scaleFactors.z],
    shape: operation,
  }
}

export function getJscadOperationInBaseModelFrame({
  baseCadComponent,
  basePositionOffset,
  cadComponent,
  positionOffset,
}: {
  baseCadComponent: CadComponent
  basePositionOffset: Point3
  cadComponent: CadComponent
  positionOffset: Point3
}): JscadOperation | undefined {
  if (cadComponent.model_jscad === undefined) return undefined

  const modelOriginPosition = getModelOriginPosition(cadComponent)
  const cadRotationDegrees = getCadComponentRotation(cadComponent)
  const baseCadRotationDegrees = getCadComponentRotation(baseCadComponent)
  const modelUnitToMmScaleFactor =
    cadComponent.model_unit_to_mm_scale_factor ?? 1
  let operation: JscadOperation = cadComponent.model_jscad

  operation = scaleOperation({
    operation,
    scaleFactors: {
      x: modelUnitToMmScaleFactor,
      y: modelUnitToMmScaleFactor,
      z: modelUnitToMmScaleFactor,
    },
  })
  operation = translateOperation({
    operation,
    translation: {
      x: -modelOriginPosition.x,
      y: -modelOriginPosition.y,
      z: -modelOriginPosition.z,
    },
  })
  operation = rotateOperation({
    operation,
    rotationDegrees: getBoardNormalRotation(cadComponent),
  })
  // The viewer fits models after their source-coordinate transform and before
  // applying their component rotation and placement.
  operation = scaleOperation({
    operation,
    scaleFactors: getJscadOperationFitScaleFactors({
      cadComponent,
      operation,
    }),
  })
  operation = rotateOperation({
    operation,
    rotationDegrees: cadRotationDegrees,
  })
  operation = translateOperation({
    operation,
    translation: {
      x: positionOffset.x - basePositionOffset.x,
      y: positionOffset.y - basePositionOffset.y,
      z: positionOffset.z - basePositionOffset.z,
    },
  })

  return rotateOperationByInverse({
    operation,
    rotationDegrees: baseCadRotationDegrees,
  })
}
