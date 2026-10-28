import type { FiveTerminalMosfetSymbolName } from "./get-five-terminal-mosfet-symbol-name"

export type NativeSchematicSymbolName =
  | "and_gate_right"
  | "coupled_inductor_up"
  | "coupled_inductor_right"
  | "schottky_diode_3_pin_right"
  | "dual_series_schottky_diode_right"
  | "four_terminal_capacitor_up"
  | FiveTerminalMosfetSymbolName
  | "or_gate_with_power_right"
  | "phototransistor_optocoupler_right"
  | "schmitt_trigger_inverter_right"
  | "transformer_4_winding_right"
