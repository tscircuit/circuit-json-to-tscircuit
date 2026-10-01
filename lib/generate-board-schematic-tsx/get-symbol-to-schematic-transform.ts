import type {
  SchematicComponent,
  SchematicPort,
  SourcePort,
} from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import { applyToPoint, fromTriangles } from "transformation-matrix"

import { getPortPairTriangle } from "./get-port-pair-triangle"

export const getSymbolToSchematicTransform = ({
  symbol,
  schematicComponent,
  schematicPorts,
  sourcePorts,
}: {
  symbol: SchSymbol
  schematicComponent: SchematicComponent
  schematicPorts: SchematicPort[]
  sourcePorts: SourcePort[]
}) => {
  // Match declared pin identities, never inferred angles or array order.
  const matches = symbol.ports.flatMap((symbolPort) => {
    const candidates = schematicPorts.filter((schematicPort) => {
      const sourcePort = sourcePorts.find(
        (port) => port.source_port_id === schematicPort.source_port_id,
      )
      const pinNumber = schematicPort.pin_number ?? sourcePort?.pin_number
      const labels = [
        sourcePort?.name,
        ...(sourcePort?.port_hints ?? []),
        ...(pinNumber === undefined
          ? []
          : [String(pinNumber), `pin${pinNumber}`]),
      ]
      return labels.some(
        (label) => label !== undefined && symbolPort.labels.includes(label),
      )
    })
    return candidates.length === 1
      ? [{ symbolPort, schematicPort: candidates[0]! }]
      : []
  })
  const first = matches[0]
  const second = matches.find(
    (match) => match !== first && match.schematicPort !== first?.schematicPort,
  )
  if (first && second) {
    const third = matches.find(
      (match) =>
        match !== first &&
        match !== second &&
        isNonCollinear({
          first: first.symbolPort,
          second: second.symbolPort,
          third: match.symbolPort,
        }) &&
        isNonCollinear({
          first: first.schematicPort.center,
          second: second.schematicPort.center,
          third: match.schematicPort.center,
        }),
    )
    if (third) {
      const transform = fromTriangles(
        [first.symbolPort, second.symbolPort, third.symbolPort],
        [
          first.schematicPort.center,
          second.schematicPort.center,
          third.schematicPort.center,
        ],
      )
      const fitsAllMatchedPorts = matches.every((match) => {
        const transformedPort = applyToPoint(transform, match.symbolPort)
        return (
          Math.hypot(
            transformedPort.x - match.schematicPort.center.x,
            transformedPort.y - match.schematicPort.center.y,
          ) < 0.000001
        )
      })
      if (fitsAllMatchedPorts) return transform
    }
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
  // Without matching pin identities, use the explicitly imported component
  // bounds. The library constructs the transform from those correspondences.
  return fromTriangles(
    [
      symbol.center,
      { x: symbol.center.x + symbol.size.width, y: symbol.center.y },
      { x: symbol.center.x, y: symbol.center.y + symbol.size.height },
    ],
    [
      schematicComponent.center,
      {
        x: schematicComponent.center.x + schematicComponent.size.width,
        y: schematicComponent.center.y,
      },
      {
        x: schematicComponent.center.x,
        y: schematicComponent.center.y + schematicComponent.size.height,
      },
    ],
  )
}

const isNonCollinear = ({
  first,
  second,
  third,
}: {
  first: { x: number; y: number }
  second: { x: number; y: number }
  third: { x: number; y: number }
}) =>
  Math.abs(
    (second.x - first.x) * (third.y - first.y) -
      (second.y - first.y) * (third.x - first.x),
  ) > Number.EPSILON
