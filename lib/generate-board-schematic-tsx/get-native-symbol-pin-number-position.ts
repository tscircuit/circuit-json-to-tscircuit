const PIN_NUMBER_BASELINE_OFFSET = 0.02

interface Point {
  x: number
  y: number
}

export const getNativeSymbolPinNumberPosition = ({
  symbolCenter,
  portCenter,
  leadInnerCenter,
  useOutwardBaseline = false,
}: {
  symbolCenter: Point
  portCenter: Point
  leadInnerCenter: Point
  useOutwardBaseline?: boolean
}): { center: Point; isVerticalLead: boolean } => {
  const isVerticalLead =
    Math.abs(leadInnerCenter.y - portCenter.y) >
    Math.abs(leadInnerCenter.x - portCenter.x)
  const pinNumberCenter = {
    x: (portCenter.x + leadInnerCenter.x) / 2,
    y: (portCenter.y + leadInnerCenter.y) / 2,
  }

  if (isVerticalLead) {
    const horizontalDirection = useOutwardBaseline
      ? Math.sign(portCenter.x - symbolCenter.x) || -1
      : -1
    pinNumberCenter.x += horizontalDirection * PIN_NUMBER_BASELINE_OFFSET
  } else {
    const verticalDirection = useOutwardBaseline
      ? Math.sign(portCenter.y - symbolCenter.y) || 1
      : 1
    pinNumberCenter.y += verticalDirection * PIN_NUMBER_BASELINE_OFFSET
  }

  return { center: pinNumberCenter, isVerticalLead }
}
