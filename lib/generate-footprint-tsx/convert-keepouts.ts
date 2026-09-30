import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatMm } from "./footprint-tsx-attribute-formatters/format-mm"

export const convertKeepouts: FootprintElementConverter = (circuitJson) => {
  const pcbKeepouts = su(circuitJson).pcb_keepout.list()
  return pcbKeepouts.map((keepout) => {
    const attributes = [
      `shape=${JSON.stringify(keepout.shape)}`,
      `layers={${JSON.stringify(keepout.layers)}}`,
    ]

    if (keepout.allow_traces !== undefined) {
      attributes.push(`allowTraces={${keepout.allow_traces}}`)
    }
    if (keepout.allow_placements !== undefined) {
      attributes.push(`allowPlacements={${keepout.allow_placements}}`)
    }
    if (keepout.warning_only !== undefined) {
      attributes.push(`warningOnly={${keepout.warning_only}}`)
    }
    if (keepout.description !== undefined) {
      attributes.push(`description=${JSON.stringify(keepout.description)}`)
    }

    if (keepout.shape === "rect") {
      attributes.push(
        `pcbX="${formatMm(keepout.center.x)}"`,
        `pcbY="${formatMm(keepout.center.y)}"`,
        `width="${formatMm(keepout.width)}"`,
        `height="${formatMm(keepout.height)}"`,
      )
    } else if (keepout.shape === "circle") {
      attributes.push(
        `pcbX="${formatMm(keepout.center.x)}"`,
        `pcbY="${formatMm(keepout.center.y)}"`,
        `radius="${formatMm(keepout.radius)}"`,
      )
    } else {
      attributes.push(
        `outline={${JSON.stringify(keepout.outline)}}`,
        `strokeWidth="${formatMm(keepout.stroke_width)}"`,
      )
    }

    return `<keepout ${attributes.join(" ")} />`
  })
}
