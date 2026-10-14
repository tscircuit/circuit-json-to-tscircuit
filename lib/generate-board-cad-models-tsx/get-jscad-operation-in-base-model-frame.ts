import type { CadComponent } from "circuit-json"
import type { JscadOperation } from "jscad-planner"

interface Point3 {
  x: number
  y: number
  z: number
}

const degreesToRadians = (degrees: number): number => (degrees * Math.PI) / 180

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
  rotation,
}: {
  operation: JscadOperation
  rotation: Point3
}): JscadOperation => {
  let rotatedOperation = operation
  for (const [axis, degrees] of [
    ["Z", rotation.z],
    ["Y", rotation.y],
    ["X", rotation.x],
  ] as const) {
    if (degrees === 0) continue
    rotatedOperation = {
      type: `rotate${axis}`,
      angle: degreesToRadians(degrees),
      shape: rotatedOperation,
    }
  }
  return rotatedOperation
}

const rotateOperationByInverse = ({
  operation,
  rotation,
}: {
  operation: JscadOperation
  rotation: Point3
}): JscadOperation => {
  let rotatedOperation = operation
  for (const [axis, degrees] of [
    ["X", rotation.x],
    ["Y", rotation.y],
    ["Z", rotation.z],
  ] as const) {
    if (degrees === 0) continue
    rotatedOperation = {
      type: `rotate${axis}`,
      angle: degreesToRadians(-degrees),
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
  scale,
}: {
  operation: JscadOperation
  scale: number
}): JscadOperation => {
  if (scale === 1) return operation

  return {
    type: "scale",
    factors: [scale, scale, scale],
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
  const cadRotation = getCadComponentRotation(cadComponent)
  const baseCadRotation = getCadComponentRotation(baseCadComponent)
  let operation: JscadOperation = cadComponent.model_jscad

  operation = scaleOperation({
    operation,
    scale: cadComponent.model_unit_to_mm_scale_factor ?? 1,
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
    rotation: getBoardNormalRotation(cadComponent),
  })
  operation = rotateOperation({ operation, rotation: cadRotation })
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
    rotation: baseCadRotation,
  })
}
