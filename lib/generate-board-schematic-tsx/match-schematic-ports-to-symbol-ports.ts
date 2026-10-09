import type { SchematicComponent, SchematicPort } from "circuit-json"
import type { SchSymbol } from "schematic-symbols"

type SymbolPort = SchSymbol["ports"][number]

interface SchematicSymbolPortMatch {
  schematicPort: SchematicPort
  symbolPort: SymbolPort
}

const getAngle = ({
  center,
  point,
}: {
  center: { x: number; y: number }
  point: { x: number; y: number }
}) => Math.atan2(point.y - center.y, point.x - center.x)

const getAngularDifference = (first: number, second: number) => {
  const directDifference = Math.abs(first - second)
  return Math.min(directDifference, 2 * Math.PI - directDifference)
}

/** Match ports with the same angle-based rules used by circuit-to-svg. */
export const matchSchematicPortsToSymbolPorts = ({
  schematicComponent,
  schematicPorts,
  symbol,
}: {
  schematicComponent: SchematicComponent
  schematicPorts: SchematicPort[]
  symbol: SchSymbol
}): SchematicSymbolPortMatch[] => {
  const schematicPortsByAngle = schematicPorts
    .map((schematicPort) => ({
      angle: getAngle({
        center: schematicComponent.center,
        point: schematicPort.center,
      }),
      schematicPort,
    }))
    .sort((first, second) => first.angle - second.angle)
  const symbolPortsByAngle = symbol.ports
    .map((symbolPort) => ({
      angle: getAngle({ center: symbol.center, point: symbolPort }),
      symbolPort,
    }))
    .sort((first, second) => first.angle - second.angle)
  const usedSymbolPorts = new Set<SymbolPort>()
  const matches: SchematicSymbolPortMatch[] = []

  for (const schematicPortWithAngle of schematicPortsByAngle) {
    const closestSymbolPort = symbolPortsByAngle
      .filter(({ symbolPort }) => !usedSymbolPorts.has(symbolPort))
      .map(({ angle, symbolPort }) => ({
        angularDifference: getAngularDifference(
          schematicPortWithAngle.angle,
          angle,
        ),
        symbolPort,
      }))
      .sort(
        (first, second) => first.angularDifference - second.angularDifference,
      )[0]
    if (
      !closestSymbolPort ||
      closestSymbolPort.angularDifference >= Math.PI / 4
    )
      continue

    usedSymbolPorts.add(closestSymbolPort.symbolPort)
    matches.push({
      schematicPort: schematicPortWithAngle.schematicPort,
      symbolPort: closestSymbolPort.symbolPort,
    })
  }

  return matches
}
