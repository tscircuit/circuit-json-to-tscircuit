import type { AnyCircuitElement, PcbPort, SourcePort } from "circuit-json"
import { getSourcePortConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
import { getConnectableCopperPourNets } from "./get-connectable-copper-pour-nets"

type SourcePortId = SourcePort["source_port_id"]
type PcbPortId = PcbPort["pcb_port_id"]
type BoardPinName = `pin${number}`

export const getCopperPourPadConnections = (
  circuitJson: AnyCircuitElement[],
) => {
  const sourceNets = getConnectableCopperPourNets(circuitJson)
  if (sourceNets.length === 0) {
    return { footprintCircuitJson: circuitJson, connections: {}, pinLabels: {} }
  }
  const connectivityMap =
    getSourcePortConnectivityMapFromCircuitJson(circuitJson)
  const pcbPortById = new Map<PcbPortId, PcbPort>(
    circuitJson
      .filter((element) => element.type === "pcb_port")
      .map((port) => [port.pcb_port_id, port]),
  )
  const pinNameBySourcePortId = new Map<SourcePortId, BoardPinName>()
  const pinNameByPcbPortId = new Map<PcbPortId, BoardPinName>()
  const pinLabels: Partial<Record<BoardPinName, string>> = {}
  let nextPinNumber = 1

  // Pin numbers are local to each source component, but the board template
  // combines their pads into one footprint. Retain identities, not aliases.
  const footprintCircuitJson = circuitJson.map((element) => {
    if (element.type !== "pcb_smtpad" && element.type !== "pcb_plated_hole") {
      return element
    }
    const pcbPortId = element.pcb_port_id
    const sourcePortId = pcbPortId
      ? pcbPortById.get(pcbPortId)?.source_port_id
      : undefined
    const pinName: BoardPinName =
      (sourcePortId && pinNameBySourcePortId.get(sourcePortId)) ||
      (pcbPortId && pinNameByPcbPortId.get(pcbPortId)) ||
      `pin${nextPinNumber++}`
    if (sourcePortId) pinNameBySourcePortId.set(sourcePortId, pinName)
    if (pcbPortId) pinNameByPcbPortId.set(pcbPortId, pinName)
    pinLabels[pinName] = pinName
    return { ...element, port_hints: [pinName] }
  })

  const connections: Partial<Record<BoardPinName, string[]>> = {}
  for (const [sourcePortId, pinName] of pinNameBySourcePortId) {
    const connectedNets = sourceNets.filter((net) =>
      connectivityMap.areIdsConnected(sourcePortId, net.source_net_id),
    )
    if (connectedNets.length === 0) continue
    connections[pinName] = [
      ...new Set(connectedNets.map((net) => `net.${net.name}`)),
    ]
  }

  return {
    footprintCircuitJson:
      Object.keys(connections).length > 0 ? footprintCircuitJson : circuitJson,
    connections,
    pinLabels,
  }
}
