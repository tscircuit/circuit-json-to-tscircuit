import type { AnyCircuitElement, PcbPort, SourcePort } from "circuit-json"
import { getSourcePortConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"

type SourcePortId = SourcePort["source_port_id"]
type PcbPortId = PcbPort["pcb_port_id"]
type BoardPinName = `pin${number}`

export const getCopperPourPadConnections = (
  circuitJson: AnyCircuitElement[],
) => {
  const copperPourNetIds = new Set(
    circuitJson
      .filter((element) => element.type === "pcb_copper_pour")
      .flatMap((pour) => (pour.source_net_id ? [pour.source_net_id] : [])),
  )
  if (copperPourNetIds.size === 0) {
    return { footprintCircuitJson: circuitJson, connections: {}, pinLabels: {} }
  }
  const connectivityMap =
    getSourcePortConnectivityMapFromCircuitJson(circuitJson)
  // Core's literal net selectors support identifier names. Other imported
  // names still use attribute selectors for pours, without invalid traces.
  const sourceNets = circuitJson
    .filter((element) => element.type === "source_net")
    .filter(
      (net) =>
        copperPourNetIds.has(net.source_net_id) &&
        /^[A-Za-z_][A-Za-z0-9_]*$/.test(net.name),
    )
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
