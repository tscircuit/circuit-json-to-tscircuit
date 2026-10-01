import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { getViaTenting } from "./get-via-tenting"

export const convertVias: FootprintElementConverter = (circuitJson) =>
  su(circuitJson)
    .pcb_via.list()
    .map((via) => {
      const attributes = [
        `pcbX={${via.x}}`,
        `pcbY={${via.y}}`,
        `outerDiameter={${via.outer_diameter}}`,
        `holeDiameter={${via.hole_diameter}}`,
        `layers={${JSON.stringify(via.layers)}}`,
        `tented="${getViaTenting(via)}"`,
      ]

      if (via.from_layer) attributes.push(`fromLayer="${via.from_layer}"`)
      if (via.to_layer) attributes.push(`toLayer="${via.to_layer}"`)

      return `<via ${attributes.join(" ")} />`
    })
