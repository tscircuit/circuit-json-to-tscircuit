import type { SchematicPort, SourcePort } from "circuit-json"
import type { SchSymbol } from "schematic-symbols"

export interface SchematicSymbolPortMatch {
  schematicPort: SchematicPort
  symbolPort: SchSymbol["ports"][number]
}

const getLogicUnitPortAlias = (portName?: string): string | undefined =>
  portName?.match(/^\d*([aby])$/iu)?.[1]?.toLowerCase()

export const matchSymbolPortsByPinIdentity = ({
  schematicPorts,
  sourcePorts,
  symbol,
  includeSchematicPinNumbers = true,
}: {
  schematicPorts: SchematicPort[]
  sourcePorts: SourcePort[]
  symbol: SchSymbol
  includeSchematicPinNumbers?: boolean
}): SchematicSymbolPortMatch[] =>
  symbol.ports.flatMap((symbolPort) => {
    const candidates = schematicPorts.filter((schematicPort) => {
      const sourcePort = sourcePorts.find(
        (port) => port.source_port_id === schematicPort.source_port_id,
      )
      const pinNumber = includeSchematicPinNumbers
        ? (schematicPort.pin_number ?? sourcePort?.pin_number)
        : sourcePort?.pin_number
      const portIdentities = [
        sourcePort?.name,
        getLogicUnitPortAlias(sourcePort?.name),
        ...(sourcePort?.port_hints ?? []),
        ...(pinNumber === undefined
          ? []
          : [String(pinNumber), `pin${pinNumber}`]),
      ]
      return portIdentities.some(
        (portIdentity) =>
          portIdentity !== undefined &&
          symbolPort.labels.includes(portIdentity),
      )
    })
    return candidates.length === 1
      ? [{ symbolPort, schematicPort: candidates[0]! }]
      : []
  })
