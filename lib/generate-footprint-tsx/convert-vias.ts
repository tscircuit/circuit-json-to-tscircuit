import { mmStr } from "@tscircuit/mm"
import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertVias: FootprintElementConverter = (circuitJson) => {
  return su(circuitJson)
    .pcb_via.list()
    .map((via) => {
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
      return `<via pcbX="${mmStr(via.x)}" pcbY="${mmStr(via.y)}" holeDiameter="${mmStr(via.hole_diameter)}" outerDiameter="${mmStr(via.outer_diameter)}" fromLayer="${via.from_layer ?? via.layers[0]}" toLayer="${via.to_layer ?? via.layers[via.layers.length - 1]}"${tentedAttr} />`
    })
}
