import type { SourcePort } from "circuit-json"

const getFourWindingTransformerAlias = (
  sourcePinNumber?: string,
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
  }
}

const getDualSeriesSchottkyAlias = (
  sourcePinNumber?: string,
): string | undefined => {
  switch (sourcePinNumber) {
    case "1":
      return "anode"
    case "2":
      return "cathode"
    case "3":
      return "common"
  }
}

const getThreePinSchottkyAlias = (
  sourcePinNumber?: string,
): string | undefined => {
  switch (sourcePinNumber) {
    case "1":
      return "anode1"
    case "2":
      return "anode2"
    case "3":
      return "cathode"
  }
}

const getCoupledInductorAlias = (
  sourcePinNumber?: string,
): string | undefined => {
  switch (sourcePinNumber) {
    case "1":
      return "winding1_start"
    case "2":
      return "winding2_start"
    case "3":
      return "winding1_end"
    case "4":
      return "winding2_end"
  }
}

const getFourTerminalCapacitorAlias = (
  sourcePinNumber?: string,
): string | undefined => {
  switch (sourcePinNumber) {
    case "1":
      return "plate1_terminal1"
    case "2":
      return "plate2_terminal1"
    case "3":
      return "plate1_terminal2"
    case "4":
      return "plate2_terminal2"
  }
}

const getFiveTerminalMosfetAlias = ({
  sourcePort,
  sourcePinNumber,
}: {
  sourcePort: SourcePort
  sourcePinNumber?: string
}): string | undefined => {
  if (sourcePort.name.toLowerCase() === "drain") return "drain"
  if (sourcePort.name.toLowerCase() === "gate") return "gate"
  switch (sourcePinNumber) {
    case "1":
      return "source_left"
    case "2":
      return "source_center"
    case "3":
      return "source_right"
  }
}

export const getInferredNativeSymbolPortAlias = ({
  symbolName,
  sourcePort,
  sourcePinNumber,
}: {
  symbolName: string
  sourcePort: SourcePort
  sourcePinNumber?: string
}): string | undefined => {
  if (symbolName.startsWith("n_channel_power_mosfet_5_pin_gate_")) {
    return getFiveTerminalMosfetAlias({ sourcePort, sourcePinNumber })
  }

  switch (symbolName) {
    case "transformer_4_winding_right":
      return getFourWindingTransformerAlias(sourcePinNumber)
    case "dual_series_schottky_diode_right":
      return getDualSeriesSchottkyAlias(sourcePinNumber)
    case "schottky_diode_3_pin_right":
      return getThreePinSchottkyAlias(sourcePinNumber)
    case "coupled_inductor_up":
    case "coupled_inductor_right":
      return getCoupledInductorAlias(sourcePinNumber)
    case "four_terminal_capacitor_up":
      return getFourTerminalCapacitorAlias(sourcePinNumber)
    case "or_gate_with_power_right":
      return sourcePort.name.toLowerCase()
  }
}
