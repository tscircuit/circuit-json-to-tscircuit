import { mmStr } from "@tscircuit/mm"
import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertVias: FootprintElementConverter = (
  circuitJson,
  context,
) => {
  return su(circuitJson)
    .pcb_via.list()
    .map((via) => {
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
      const runtimeNetName = via.source_net_id
        ? context?.runtimeNetNameBySourceNetId.get(via.source_net_id)
        : undefined
      const connectsToAttr = runtimeNetName
        ? ` connectsTo={${JSON.stringify(`net.${runtimeNetName}`)}}`
        : ""
      return `<via pcbX="${mmStr(via.x)}" pcbY="${mmStr(via.y)}" holeDiameter="${mmStr(via.hole_diameter)}" outerDiameter="${mmStr(via.outer_diameter)}" fromLayer="${fromLayer}" toLayer="${toLayer}"${tentedAttr}${connectsToAttr} />`
    })
}
