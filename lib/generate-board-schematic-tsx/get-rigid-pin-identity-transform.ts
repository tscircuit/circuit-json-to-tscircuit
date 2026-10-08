import { applyToPoint, fromTriangles, type Matrix } from "transformation-matrix"
import { getPortPairTriangle } from "./get-port-pair-triangle"
import type { SchematicSymbolPortMatch } from "./match-symbol-ports-by-pin-identity"

const TRANSFORM_TOLERANCE = 0.000001

export const getRigidPinIdentityTransform = (
  matches: SchematicSymbolPortMatch[],
): Matrix | undefined => {
  const first = matches[0]
  const second = matches.find(
    (match) => match !== first && match.schematicPort !== first?.schematicPort,
  )
  if (!first || !second) return undefined

  const third = matches.find(
    (match) =>
      match !== first &&
      match !== second &&
      pointsAreNonCollinear(
        first.symbolPort,
        second.symbolPort,
        match.symbolPort,
      ) &&
      pointsAreNonCollinear(
        first.schematicPort.center,
        second.schematicPort.center,
        match.schematicPort.center,
      ),
  )
  if (!third) {
    return fromTriangles(
      getPortPairTriangle({
        first: first.symbolPort,
        second: second.symbolPort,
      }),
      getPortPairTriangle({
        first: first.schematicPort.center,
        second: second.schematicPort.center,
      }),
    )
  }

  const transform = fromTriangles(
    [first.symbolPort, second.symbolPort, third.symbolPort],
    [
      first.schematicPort.center,
      second.schematicPort.center,
      third.schematicPort.center,
    ],
  )
  if (!isRigidUniformTransform(transform)) return undefined

  const fitsAllMatchedPorts = matches.every((match) => {
    const transformedPort = applyToPoint(transform, match.symbolPort)
    return (
      Math.hypot(
        transformedPort.x - match.schematicPort.center.x,
        transformedPort.y - match.schematicPort.center.y,
      ) < TRANSFORM_TOLERANCE
    )
  })
  return fitsAllMatchedPorts ? transform : undefined
}

const pointsAreNonCollinear = (
  first: { x: number; y: number },
  second: { x: number; y: number },
  third: { x: number; y: number },
) =>
  Math.abs(
    (second.x - first.x) * (third.y - first.y) -
      (second.y - first.y) * (third.x - first.x),
  ) > Number.EPSILON

const isRigidUniformTransform = (transform: Matrix) => {
  const firstAxisLength = Math.hypot(transform.a, transform.b)
  const secondAxisLength = Math.hypot(transform.c, transform.d)
  if (firstAxisLength === 0 || secondAxisLength === 0) return false

  const axisDotProduct = transform.a * transform.c + transform.b * transform.d
  const relativeScaleDifference =
    Math.abs(firstAxisLength - secondAxisLength) /
    Math.max(firstAxisLength, secondAxisLength)
  const normalizedAxisDotProduct =
    Math.abs(axisDotProduct) / (firstAxisLength * secondAxisLength)
  return (
    relativeScaleDifference < TRANSFORM_TOLERANCE &&
    normalizedAxisDotProduct < TRANSFORM_TOLERANCE
  )
}
