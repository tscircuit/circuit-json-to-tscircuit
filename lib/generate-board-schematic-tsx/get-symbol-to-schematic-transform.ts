import type {
  SchematicComponent,
  SchematicPort,
  SourcePort,
} from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import { fromTriangles } from "transformation-matrix"

import { getPortPairTriangle } from "./get-port-pair-triangle"

export const getSymbolToSchematicTransform = ({
  symbol,
  schematic_component,
  schematicPorts,
  sourcePorts,
}: {
  symbol: SchSymbol
  schematic_component: SchematicComponent
  schematicPorts: SchematicPort[]
  sourcePorts: SourcePort[]
}) => {
  // Match declared pin identities, never inferred angles or array order.
  const matches = symbol.ports.flatMap((symbolPort) => {
    const candidates = schematicPorts.filter((schematic_port) => {
      const source_port = sourcePorts.find(
        (port) => port.source_port_id === schematic_port.source_port_id,
      )
      const pin_number = schematic_port.pin_number ?? source_port?.pin_number
      const labels = [
        source_port?.name,
        ...(source_port?.port_hints ?? []),
        ...(pin_number === undefined
          ? []
          : [String(pin_number), `pin${pin_number}`]),
      ]
      return labels.some(
        (label) => label !== undefined && symbolPort.labels.includes(label),
      )
    })
    return candidates.length === 1
      ? [{ symbolPort, schematic_port: candidates[0]! }]
      : []
  })
  const first = matches[0]
  const second = matches.find(
    (match) =>
      match !== first && match.schematic_port !== first?.schematic_port,
  )
  if (first && second) {
    return fromTriangles(
      getPortPairTriangle(first.symbolPort, second.symbolPort),
      getPortPairTriangle(
        first.schematic_port.center,
        second.schematic_port.center,
      ),
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
      schematic_component.center,
      {
        x: schematic_component.center.x + schematic_component.size.width,
        y: schematic_component.center.y,
      },
      {
        x: schematic_component.center.x,
        y: schematic_component.center.y + schematic_component.size.height,
      },
    ],
  )
}
