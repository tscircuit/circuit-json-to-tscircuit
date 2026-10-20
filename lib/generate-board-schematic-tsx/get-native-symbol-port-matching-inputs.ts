import type { SchematicPort, SourcePort } from "circuit-json"

const getNumericPortHint = (sourcePort: SourcePort): string | undefined => {
  const numericPortHint = sourcePort.port_hints?.find((portHint) =>
    /^(?:pin)?\d+$/.test(portHint),
  )
  return numericPortHint?.replace(/^pin/, "")
}

const getNumericPortName = (sourcePort: SourcePort): string | undefined =>
  /^\d+$/.test(sourcePort.name) ? sourcePort.name : undefined

const getSourcePinNumber = ({
  sourcePort,
  schematicPorts,
}: {
  sourcePort: SourcePort
  schematicPorts: SchematicPort[]
}): string | undefined => {
  const linkedSchematicPort = schematicPorts.find(
    (schematicPort) =>
      schematicPort.source_port_id === sourcePort.source_port_id,
  )
  const sourcePinNumber =
    sourcePort.pin_number ??
    linkedSchematicPort?.pin_number ??
    getNumericPortHint(sourcePort) ??
    getNumericPortName(sourcePort)
  return sourcePinNumber === undefined ? undefined : String(sourcePinNumber)
}

const getFourWindingTransformerAlias = (
  sourcePinNumber: string,
): string | undefined => {
  switch (sourcePinNumber) {
    case "1":
      return "primary_end"
    case "2":
      return "primary_start"
    case "5":
      return "auxiliary_end"
    case "3":
      return "auxiliary_start"
    case "9":
      return "secondary1_end"
    case "10":
      return "secondary1_start"
    case "6":
      return "secondary2_end"
    case "7":
      return "secondary2_start"
    default:
      return undefined
  }
}

const getDualSeriesSchottkyAlias = (
  sourcePinNumber: string,
): string | undefined => {
  switch (sourcePinNumber) {
    case "1":
      return "anode"
    case "2":
      return "cathode"
    case "3":
      return "common"
    default:
      return undefined
  }
}

const getInferredPortAlias = ({
  symbolName,
  sourcePinNumber,
}: {
  symbolName: string
  sourcePinNumber: string
}): string | undefined => {
  if (symbolName === "transformer_4_winding_right") {
    return getFourWindingTransformerAlias(sourcePinNumber)
  }
  if (symbolName === "dual_series_schottky_diode_right") {
    return getDualSeriesSchottkyAlias(sourcePinNumber)
  }
  return undefined
}

export const getNativeSymbolPortMatchingInputs = ({
  symbolName,
  sourcePorts,
  schematicPorts,
  isInferredSymbol,
}: {
  symbolName: string
  sourcePorts: SourcePort[]
  schematicPorts: SchematicPort[]
  isInferredSymbol: boolean
}): {
  sourcePorts: SourcePort[]
  includeSchematicPinNumbers: boolean
} => {
  const usesInferredPortAliases =
    symbolName === "transformer_4_winding_right" ||
    symbolName === "dual_series_schottky_diode_right"
  if (!isInferredSymbol || !usesInferredPortAliases) {
    return { sourcePorts, includeSchematicPinNumbers: true }
  }

  const aliasedSourcePorts = sourcePorts.map((sourcePort) => {
    const sourcePinNumber = getSourcePinNumber({ sourcePort, schematicPorts })
    if (!sourcePinNumber) return sourcePort
    const inferredPortAlias = getInferredPortAlias({
      symbolName,
      sourcePinNumber,
    })
    if (!inferredPortAlias) return sourcePort

    // Part-specific numbers overlap the generic symbol's sequential labels.
    // Match inferred symbols through unambiguous terminal identities instead.
    return {
      ...sourcePort,
      name: inferredPortAlias,
      port_hints: [inferredPortAlias],
      pin_number: undefined,
    }
  })
  return {
    sourcePorts: aliasedSourcePorts,
    includeSchematicPinNumbers: false,
  }
}
