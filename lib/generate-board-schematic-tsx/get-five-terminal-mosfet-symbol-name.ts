import type { SchematicPort, SourcePort } from "circuit-json"

export type FiveTerminalMosfetSymbolName =
  | "n_channel_power_mosfet_5_pin_gate_bottom_drain_left"
  | "n_channel_power_mosfet_5_pin_gate_bottom_drain_right"
  | "n_channel_power_mosfet_5_pin_gate_left_drain_bottom"
  | "n_channel_power_mosfet_5_pin_gate_left_drain_top"
  | "n_channel_power_mosfet_5_pin_gate_right_drain_bottom"
  | "n_channel_power_mosfet_5_pin_gate_right_drain_top"
  | "n_channel_power_mosfet_5_pin_gate_top_drain_left"
  | "n_channel_power_mosfet_5_pin_gate_top_drain_right"

type MosfetPortSidePair =
  `${SchematicPort["side_of_component"]}:${SchematicPort["side_of_component"]}`

const symbolNameByGateAndDrainSides: Partial<
  Record<MosfetPortSidePair, FiveTerminalMosfetSymbolName>
> = {
  "bottom:left": "n_channel_power_mosfet_5_pin_gate_bottom_drain_left",
  "bottom:right": "n_channel_power_mosfet_5_pin_gate_bottom_drain_right",
  "left:bottom": "n_channel_power_mosfet_5_pin_gate_left_drain_bottom",
  "left:top": "n_channel_power_mosfet_5_pin_gate_left_drain_top",
  "right:bottom": "n_channel_power_mosfet_5_pin_gate_right_drain_bottom",
  "right:top": "n_channel_power_mosfet_5_pin_gate_right_drain_top",
  "top:left": "n_channel_power_mosfet_5_pin_gate_top_drain_left",
  "top:right": "n_channel_power_mosfet_5_pin_gate_top_drain_right",
}

const getSchematicPortForSourceName = ({
  sourcePortName,
  sourcePorts,
  schematicPorts,
}: {
  sourcePortName: string
  sourcePorts: SourcePort[]
  schematicPorts: SchematicPort[]
}): SchematicPort | undefined => {
  const sourcePort = sourcePorts.find(
    (candidate) => candidate.name.toLowerCase() === sourcePortName,
  )
  return schematicPorts.find(
    (schematicPort) =>
      schematicPort.source_port_id === sourcePort?.source_port_id,
  )
}

export const getFiveTerminalMosfetSymbolName = ({
  sourcePorts,
  schematicPorts,
}: {
  sourcePorts: SourcePort[]
  schematicPorts: SchematicPort[]
}): FiveTerminalMosfetSymbolName | undefined => {
  const gatePort = getSchematicPortForSourceName({
    sourcePortName: "gate",
    sourcePorts,
    schematicPorts,
  })
  const drainPort = getSchematicPortForSourceName({
    sourcePortName: "drain",
    sourcePorts,
    schematicPorts,
  })
  if (!gatePort || !drainPort) return undefined

  return symbolNameByGateAndDrainSides[
    `${gatePort.side_of_component}:${drainPort.side_of_component}`
  ]
}
