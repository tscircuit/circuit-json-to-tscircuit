import type { SchematicSymbolPortMatch } from "./match-symbol-ports-by-pin-identity"

const PIN_TEXT_FONT_SIZE = 0.15
const NEARBY_PIN_NUMBER_SPACING = PIN_TEXT_FONT_SIZE * 2
const POINT_TOLERANCE = 0.000001

export const hasNearbyParallelPort = ({
  portMatches,
  schematicPortId,
  portCenter,
  symbolCenter,
  isVerticalLead,
}: {
  portMatches: SchematicSymbolPortMatch[]
  schematicPortId: string
  portCenter: { x: number; y: number }
  symbolCenter: { x: number; y: number }
  isVerticalLead: boolean
}): boolean =>
  portMatches.some(({ schematicPort }) => {
    if (schematicPort.schematic_port_id === schematicPortId) return false
    const parallelDistance = isVerticalLead
      ? Math.abs(schematicPort.center.y - portCenter.y)
      : Math.abs(schematicPort.center.x - portCenter.x)
    const perpendicularDistance = isVerticalLead
      ? Math.abs(schematicPort.center.x - portCenter.x)
      : Math.abs(schematicPort.center.y - portCenter.y)
    const currentPortSide = isVerticalLead
      ? Math.sign(portCenter.x - symbolCenter.x)
      : Math.sign(portCenter.y - symbolCenter.y)
    const nearbyPortSide = isVerticalLead
      ? Math.sign(schematicPort.center.x - symbolCenter.x)
      : Math.sign(schematicPort.center.y - symbolCenter.y)
    return (
      parallelDistance < POINT_TOLERANCE &&
      perpendicularDistance <= NEARBY_PIN_NUMBER_SPACING &&
      currentPortSide * nearbyPortSide < 0
    )
  })
