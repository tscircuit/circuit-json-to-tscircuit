import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"

export const convertVias: FootprintElementConverter = (circuitJson) => {
  const vias = su(circuitJson).pcb_via.list()
  const elementStrings: string[] = []

  for (const via of vias) {
    const layers = via.layers
    const fromLayer = via.from_layer ?? layers?.[0]
    const toLayer = via.to_layer ?? layers?.[layers.length - 1]
    const attrs = [
      `pcbX="${mmStr(via.x)}"`,
      `pcbY="${mmStr(via.y)}"`,
      via.outer_diameter !== undefined
        ? `outerDiameter="${mmStr(via.outer_diameter)}"`
        : null,
      via.hole_diameter !== undefined
        ? `holeDiameter="${mmStr(via.hole_diameter)}"`
        : null,
      fromLayer ? `fromLayer="${fromLayer}"` : null,
      toLayer ? `toLayer="${toLayer}"` : null,
      layers ? `layers={${JSON.stringify(layers)}}` : null,
      via.net_is_assignable !== undefined
        ? `netIsAssignable={${via.net_is_assignable}}`
        : null,
      via.is_tented !== undefined ? `isTented={${via.is_tented}}` : null,
    ].filter(Boolean)

    elementStrings.push(`<via ${attrs.join(" ")} />`)
  }

  return elementStrings
}
