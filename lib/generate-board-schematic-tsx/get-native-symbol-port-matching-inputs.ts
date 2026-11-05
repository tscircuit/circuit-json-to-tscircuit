import type { SchematicPort, SourcePort } from "circuit-json"
import { getInferredNativeSymbolPortAlias } from "./get-inferred-native-symbol-port-alias"
import { getSourcePinNumber } from "./get-source-pin-number"

const usesInferredPortAliases = (symbolName: string): boolean => {
  if (symbolName.startsWith("n_channel_power_mosfet_5_pin_gate_")) return true

  switch (symbolName) {
    case "transformer_4_winding_right":
    case "dual_series_schottky_diode_right":
    case "schottky_diode_3_pin_right":
    case "coupled_inductor_up":
    case "coupled_inductor_right":
    case "four_terminal_capacitor_up":
    case "or_gate_with_power_right":
      return true
    default:
      return false
  }
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
  if (!isInferredSymbol || !usesInferredPortAliases(symbolName)) {
    return { sourcePorts, includeSchematicPinNumbers: true }
  }

  const aliasedSourcePorts = sourcePorts.map((sourcePort) => {
    const sourcePinNumber = getSourcePinNumber({ sourcePort, schematicPorts })
    const inferredPortAlias = getInferredNativeSymbolPortAlias({
      symbolName,
      sourcePort,
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
