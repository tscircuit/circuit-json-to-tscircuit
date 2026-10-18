import type { SourcePort } from "circuit-json"

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

export const getNativeSymbolPortMatchingInputs = ({
  symbolName,
  sourcePorts,
}: {
  symbolName: string
  sourcePorts: SourcePort[]
}): {
  sourcePorts: SourcePort[]
  includeSchematicPinNumbers: boolean
} => {
  if (symbolName !== "transformer_4_winding_right") {
    return { sourcePorts, includeSchematicPinNumbers: true }
  }

  const aliasedSourcePorts = sourcePorts.map((sourcePort) => {
    const sourcePinNumber = String(sourcePort.pin_number ?? sourcePort.name)
    const windingAlias = getFourWindingTransformerAlias(sourcePinNumber)
    if (!windingAlias) return sourcePort

    // Part-specific numbers overlap the generic symbol's sequential labels.
    // Match this inferred symbol through unambiguous winding identities instead.
    return {
      ...sourcePort,
      name: windingAlias,
      port_hints: [windingAlias],
      pin_number: undefined,
    }
  })
  return {
    sourcePorts: aliasedSourcePorts,
    includeSchematicPinNumbers: false,
  }
}
