import {
  applyToPoint,
  compose,
  rotateDEG,
  translate,
} from "transformation-matrix"

/** Add an orthogonal correspondence to construct a non-degenerate 2D basis. */
export const getPortPairTriangle = ({
  first,
  second,
}: {
  first: { x: number; y: number }
  second: { x: number; y: number }
}): [
  { x: number; y: number },
  { x: number; y: number },
  { x: number; y: number },
] => {
  const portToPerpendicularTransform = compose(
    translate(first.x, first.y),
    rotateDEG(90),
    translate(-first.x, -first.y),
  )
  return [first, second, applyToPoint(portToPerpendicularTransform, second)]
}
