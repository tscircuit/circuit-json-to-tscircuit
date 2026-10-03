import { mmStr } from "@tscircuit/mm"
import { su } from "@tscircuit/soup-util"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
import { getConnectableCopperPourNets } from "../get-connectable-copper-pour-nets"
import type { FootprintElementConverter } from "./converter-types"

export const convertVias: FootprintElementConverter = (circuitJson) => {
  const vias = su(circuitJson).pcb_via.list()
  const sourceNets = getConnectableCopperPourNets(circuitJson)
  const copperPourNetNameById = new Map(
    sourceNets.map((net) => [net.source_net_id, net.name]),
  )
  const connectivityMap =
    sourceNets.length > 0 && vias.some((via) => !via.source_net_id)
      ? getFullConnectivityMapFromCircuitJson(circuitJson)
      : undefined
  return vias.map((via) => {
    const fromLayer = via.from_layer ?? via.layers[0]
    const toLayer = via.to_layer ?? via.layers[via.layers.length - 1]
    if (!fromLayer || !toLayer) {
      throw new Error(`Via ${via.pcb_via_id} has no copper layer endpoints`)
    }
    const legacyTented =
      "is_tented" in via && typeof via.is_tented === "boolean"
        ? via.is_tented
        : undefined
    const tentedOnTop = via.tented_on_top ?? legacyTented
    const tentedOnBottom = via.tented_on_bottom ?? legacyTented
    const tented =
      tentedOnTop && tentedOnBottom
        ? "both_sides"
        : tentedOnTop
          ? "top_tented"
          : tentedOnBottom
            ? "bottom_tented"
            : "exposed"
    const tentedAttr =
      tentedOnTop !== undefined || tentedOnBottom !== undefined
        ? ` tented="${tented}"`
        : ""
    const netName = via.source_net_id
      ? copperPourNetNameById.get(via.source_net_id)
      : sourceNets.find((net) =>
          connectivityMap?.areIdsConnected(via.pcb_via_id, net.source_net_id),
        )?.name
    const connectsToAttr = netName
      ? ` connectsTo={${JSON.stringify(`net.${netName}`)}}`
      : ""
    return `<via pcbX="${mmStr(via.x)}" pcbY="${mmStr(via.y)}" holeDiameter="${mmStr(via.hole_diameter)}" outerDiameter="${mmStr(via.outer_diameter)}" fromLayer="${fromLayer}" toLayer="${toLayer}"${tentedAttr}${connectsToAttr} />`
  })
}
