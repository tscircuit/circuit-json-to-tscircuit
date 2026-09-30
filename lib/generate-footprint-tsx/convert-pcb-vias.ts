import { su } from "@tscircuit/soup-util"
import type { PcbVia } from "circuit-json"
import type { FootprintElementConverter } from "./converter-types"

const getTentedProp = (
  pcbVia: PcbVia,
): boolean | "top_tented" | "bottom_tented" | "exposed" | undefined => {
  const legacyIsTented =
    "is_tented" in pcbVia && typeof pcbVia.is_tented === "boolean"
      ? pcbVia.is_tented
      : undefined
  const tentedOnTop = pcbVia.tented_on_top ?? legacyIsTented
  const tentedOnBottom = pcbVia.tented_on_bottom ?? legacyIsTented

  if (tentedOnTop === undefined && tentedOnBottom === undefined) {
    return undefined
  }
  if (tentedOnTop === tentedOnBottom) return tentedOnTop
  if (tentedOnTop) return "top_tented"
  if (tentedOnBottom) return "bottom_tented"
  return "exposed"
}

export const convertPcbVias: FootprintElementConverter = (circuitJson) => {
  const pcbVias = su(circuitJson).pcb_via.list()

  return pcbVias.map((pcbVia) => {
    const tentedProp = getTentedProp(pcbVia)
    const attributes = [
      `pcbX={${pcbVia.x}}`,
      `pcbY={${pcbVia.y}}`,
      `outerDiameter={${pcbVia.outer_diameter}}`,
      `holeDiameter={${pcbVia.hole_diameter}}`,
      `layers={${JSON.stringify(pcbVia.layers)}}`,
    ]

    if (pcbVia.from_layer !== undefined) {
      attributes.push(`fromLayer=${JSON.stringify(pcbVia.from_layer)}`)
    }
    if (pcbVia.to_layer !== undefined) {
      attributes.push(`toLayer=${JSON.stringify(pcbVia.to_layer)}`)
    }
    if (pcbVia.net_is_assignable !== undefined) {
      attributes.push(`netIsAssignable={${pcbVia.net_is_assignable}}`)
    }
    if (tentedProp !== undefined) {
      attributes.push(
        typeof tentedProp === "boolean"
          ? `tented={${tentedProp}}`
          : `tented=${JSON.stringify(tentedProp)}`,
      )
    }

    return `<via ${attributes.join(" ")} />`
  })
}
