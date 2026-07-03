import type { AnyCircuitElement, AnySourceComponent } from "circuit-json"

const supportedFtypes = [
  "simple_battery",
  "simple_capacitor",
  "simple_chip",
  "simple_connector",
  "simple_crystal",
  "simple_current_source",
  "simple_diode",
  "simple_fuse",
  "simple_inductor",
  "simple_led",
  "simple_mosfet",
  "simple_op_amp",
  "simple_pin_header",
  "simple_pinout",
  "simple_potentiometer",
  "simple_power_source",
  "simple_push_button",
  "simple_resistor",
  "simple_resonator",
  "simple_switch",
  "simple_test_point",
  "simple_transistor",
  "simple_voltage_probe",
  "simple_voltage_source",
] as const

type SupportedFtype = (typeof supportedFtypes)[number]

export type SupportedSourceComponent = Extract<
  AnySourceComponent,
  { ftype: SupportedFtype }
>

const supportedFtypeSet: ReadonlySet<string> = new Set(supportedFtypes)

export const isSupportedSourceComponent = (
  element: AnyCircuitElement,
): element is SupportedSourceComponent =>
  element.type === "source_component" && supportedFtypeSet.has(element.ftype)

export const getSourceComponentElementName = (
  component: SupportedSourceComponent,
): string => {
  if (component.ftype === "simple_power_source") return "battery"

  return component.ftype.replace(/^simple_/, "").replaceAll("_", "")
}
