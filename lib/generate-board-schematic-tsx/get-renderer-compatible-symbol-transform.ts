import type { SchematicComponent, SchematicPort } from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import { compose, scale, translate, type Matrix } from "transformation-matrix"
import { matchSchematicPortsToSymbolPorts } from "./match-schematic-ports-to-symbol-ports"

export const getRendererCompatibleSymbolTransform = ({
  schematicComponent,
  schematicPorts,
  symbol,
}: {
  schematicComponent: SchematicComponent
  schematicPorts: SchematicPort[]
  symbol: SchSymbol
}): Matrix | undefined => {
  const matches = matchSchematicPortsToSymbolPorts({
    schematicComponent,
    schematicPorts,
    symbol,
  })
  const first = matches[0]
  if (!first) return undefined

  const second = matches[1]
  const firstSymbolPoint = second?.symbolPort ?? symbol.center
  const firstSchematicPoint =
    second?.schematicPort.center ?? schematicComponent.center
  const originalDistance = Math.hypot(
    first.symbolPort.x - firstSymbolPoint.x,
    first.symbolPort.y - firstSymbolPoint.y,
  )
  if (originalDistance === 0) return undefined

  const renderedDistance = Math.hypot(
    first.schematicPort.center.x - firstSchematicPoint.x,
    first.schematicPort.center.y - firstSchematicPoint.y,
  )
  const uniformScale = renderedDistance / originalDistance
  return compose(
    translate(firstSchematicPoint.x, firstSchematicPoint.y),
    scale(uniformScale),
    translate(-firstSymbolPoint.x, -firstSymbolPoint.y),
  )
}
