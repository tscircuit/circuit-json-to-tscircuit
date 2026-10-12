import type { CadComponent } from "circuit-json"

interface Point3 {
  x: number
  y: number
  z: number
}

type JscadOperation = Record<string, unknown>

function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180
}

function isZero(value: number): boolean {
  return Math.abs(value) < Number.EPSILON
}

function getCadComponentRotation(cadComponent: CadComponent): Point3 {
  return cadComponent.rotation ?? { x: 0, y: 0, z: 0 }
}

function getModelOriginPosition(cadComponent: CadComponent): Point3 {
  return cadComponent.model_origin_position ?? { x: 0, y: 0, z: 0 }
}

function getBoardNormalRotation(cadComponent: CadComponent): Point3 {
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

function rotateJscadOperation({
  operation,
  rotation,
}: {
  operation: JscadOperation
  rotation: Point3
}): JscadOperation {
  let rotatedOperation = operation
  if (!isZero(rotation.x)) {
    rotatedOperation = {
      type: "rotateX",
      angle: degreesToRadians(rotation.x),
      shape: rotatedOperation,
    }
  }
  if (!isZero(rotation.y)) {
    rotatedOperation = {
      type: "rotateY",
      angle: degreesToRadians(rotation.y),
      shape: rotatedOperation,
    }
  }
  if (!isZero(rotation.z)) {
    rotatedOperation = {
      type: "rotateZ",
      angle: degreesToRadians(rotation.z),
      shape: rotatedOperation,
    }
  }
  return rotatedOperation
}

function rotateJscadOperationByInverse({
  operation,
  rotation,
}: {
  operation: JscadOperation
  rotation: Point3
}): JscadOperation {
  let rotatedOperation = operation
  if (!isZero(rotation.z)) {
    rotatedOperation = {
      type: "rotateZ",
      angle: degreesToRadians(-rotation.z),
      shape: rotatedOperation,
    }
  }
  if (!isZero(rotation.y)) {
    rotatedOperation = {
      type: "rotateY",
      angle: degreesToRadians(-rotation.y),
      shape: rotatedOperation,
    }
  }
  if (!isZero(rotation.x)) {
    rotatedOperation = {
      type: "rotateX",
      angle: degreesToRadians(-rotation.x),
      shape: rotatedOperation,
    }
  }
  return rotatedOperation
}

function translateJscadOperation({
  operation,
  translation,
}: {
  operation: JscadOperation
  translation: Point3
}): JscadOperation {
  if (isZero(translation.x) && isZero(translation.y) && isZero(translation.z)) {
    return operation
  }

  return {
    type: "translate",
    vector: [translation.x, translation.y, translation.z],
    shape: operation,
  }
}

function scaleJscadOperation({
  operation,
  scale,
}: {
  operation: JscadOperation
  scale: number
}): JscadOperation {
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
  const modelScale = cadComponent.model_unit_to_mm_scale_factor ?? 1
  const modelRotation = getBoardNormalRotation(cadComponent)
  const cadRotation = getCadComponentRotation(cadComponent)
  const baseCadRotation = getCadComponentRotation(baseCadComponent)
  const relativePosition = {
    x: positionOffset.x - basePositionOffset.x,
    y: positionOffset.y - basePositionOffset.y,
    z: positionOffset.z - basePositionOffset.z,
  }

  let operation = cadComponent.model_jscad as JscadOperation
  operation = scaleJscadOperation({ operation, scale: modelScale })
  operation = translateJscadOperation({
    operation,
    translation: {
      x: -modelOriginPosition.x,
      y: -modelOriginPosition.y,
      z: -modelOriginPosition.z,
    },
  })
  operation = rotateJscadOperation({ operation, rotation: modelRotation })
  operation = rotateJscadOperation({ operation, rotation: cadRotation })
  operation = translateJscadOperation({
    operation,
    translation: relativePosition,
  })
  return rotateJscadOperationByInverse({
    operation,
    rotation: baseCadRotation,
  })
}
