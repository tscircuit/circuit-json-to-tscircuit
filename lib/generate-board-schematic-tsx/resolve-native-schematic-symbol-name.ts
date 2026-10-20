import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  AnySourceComponent,
  SourcePort,
} from "circuit-json"
import { hasExactPortNameOccurrences } from "./has-exact-port-name-occurrences"
import { getFiveTerminalMosfetSymbolName } from "./get-five-terminal-mosfet-symbol-name"
import type { NativeSchematicSymbolName } from "./native-schematic-symbol-name"
export type { NativeSchematicSymbolName } from "./native-schematic-symbol-name"

const normalizePortName = (portName: string): string =>
  portName.toLowerCase().replace(/[^a-z0-9]/gu, "")

const hasExactPortNames = (
  sourcePortNames: Set<string>,
  expectedPortNames: string[],
): boolean =>
  sourcePortNames.size === expectedPortNames.length &&
  expectedPortNames.every((portName) => sourcePortNames.has(portName))

export const resolveNativeSchematicSymbolName = ({
  circuitJson,
  schematicComponent,
}: {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
}): string | NativeSchematicSymbolName | undefined => {
  if (schematicComponent.symbol_name) return schematicComponent.symbol_name

  const sourceComponent = circuitJson.find(
    (element): element is AnySourceComponent =>
      element.type === "source_component" &&
      element.source_component_id === schematicComponent.source_component_id,
  )
  if (sourceComponent?.type !== "source_component") return undefined

  const sourcePorts = circuitJson.filter(
    (element): element is SourcePort =>
      element.type === "source_port" &&
      element.source_component_id === sourceComponent.source_component_id,
  )
  const sourcePortNames = new Set(
    sourcePorts.map((sourcePort) => normalizePortName(sourcePort.name)),
  )
  const normalizedSourcePortNames = sourcePorts.map((sourcePort) =>
    normalizePortName(sourcePort.name),
  )
  const schematicPorts = circuitJson.filter(
    (element): element is SchematicPort =>
      element.type === "schematic_port" &&
      element.schematic_component_id ===
        schematicComponent.schematic_component_id,
  )
  const schematicSourcePortNames = new Set(
    schematicPorts.flatMap((schematicPort) => {
      const sourcePort = sourcePorts.find(
        (candidate) =>
          candidate.source_port_id === schematicPort.source_port_id,
      )
      return sourcePort ? [normalizePortName(sourcePort.name)] : []
    }),
  )
  const logicPortNames = new Set(
    [...schematicSourcePortNames].map((portName) =>
      portName.replace(/^\d+([aby])$/u, "$1"),
    ),
  )
  const designator = sourceComponent.display_name ?? ""
  const componentValue = sourceComponent.display_value?.toUpperCase() ?? ""

  if (
    componentValue.startsWith("SN74LVC2G08") &&
    hasExactPortNames(logicPortNames, ["a", "b", "y"])
  ) {
    return "and_gate_right"
  }
  if (
    componentValue.startsWith("SN74LVC1G32") &&
    hasExactPortNames(logicPortNames, ["a", "b", "gnd", "vcc", "y"])
  ) {
    return "or_gate_with_power_right"
  }
  if (
    /^SN74LVC[23]G14/u.test(componentValue) &&
    hasExactPortNames(logicPortNames, ["a", "y"])
  ) {
    return "schmitt_trigger_inverter_right"
  }

  if (
    designator.startsWith("U") &&
    hasExactPortNames(sourcePortNames, ["a", "k", "c", "e"])
  ) {
    return "phototransistor_optocoupler_right"
  }
  if (
    designator.startsWith("T") &&
    hasExactPortNames(sourcePortNames, [
      "1",
      "2",
      "3",
      "5",
      "6",
      "7",
      "9",
      "10",
    ])
  ) {
    return "transformer_4_winding_right"
  }
  if (
    designator.startsWith("D") &&
    hasExactPortNames(sourcePortNames, ["1anode", "2cathode", "1cathode2anode"])
  ) {
    return "dual_series_schottky_diode_right"
  }
  if (
    designator.startsWith("D") &&
    hasExactPortNameOccurrences(normalizedSourcePortNames, ["a", "a", "k"])
  ) {
    return "dual_anode_schottky_diode_right"
  }
  if (
    designator.startsWith("L") &&
    hasExactPortNames(sourcePortNames, ["1", "2", "3", "4"])
  ) {
    return "coupled_inductor_right"
  }
  if (
    designator.startsWith("C") &&
    hasExactPortNames(sourcePortNames, ["1", "2", "3", "4"])
  ) {
    return "four_terminal_capacitor_up"
  }
  if (
    designator.startsWith("Q") &&
    hasExactPortNameOccurrences(normalizedSourcePortNames, [
      "drain",
      "gate",
      "source",
      "source",
      "source",
    ])
  ) {
    return getFiveTerminalMosfetSymbolName({ sourcePorts, schematicPorts })
  }
  return undefined
}
