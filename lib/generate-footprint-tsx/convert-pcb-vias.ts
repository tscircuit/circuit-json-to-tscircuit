import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertPcbVias: FootprintElementConverter = (circuitJson) => {
  const pcbVias = su(circuitJson).pcb_via.list()

  return pcbVias.map((pcbVia) => {
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
    if (pcbVia.is_tented !== undefined) {
      attributes.push(`tented={${pcbVia.is_tented}}`)
    }

    return `<via ${attributes.join(" ")} />`
  })
}
