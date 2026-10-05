import type { SchSymbol } from "schematic-symbols"
import {
  fromOneMovingPoint,
  type Matrix,
  translate,
} from "transformation-matrix"

export const getNetLabelSymbolToSchematicTransform = ({
  symbol,
  schematicAnchorPosition,
}: {
  symbol: SchSymbol
  schematicAnchorPosition: { x: number; y: number }
}): Matrix => {
  const symbolPort = symbol.ports[0]
  if (!symbolPort) {
    return translate(schematicAnchorPosition.x, schematicAnchorPosition.y)
  }
  return fromOneMovingPoint(symbolPort, schematicAnchorPosition)
}
