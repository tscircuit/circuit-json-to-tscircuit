import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertPcbTraces: FootprintElementConverter = (circuitJson) => {
  const pcbTraces = su(circuitJson).pcb_trace.list()

  return pcbTraces.map((pcbTrace) => {
    const attributes = [`route={${JSON.stringify(pcbTrace.route)}}`]

    if (pcbTrace.source_trace_id !== undefined) {
      attributes.push(
        `source_trace_id=${JSON.stringify(pcbTrace.source_trace_id)}`,
      )
    }

    return `<pcbtrace ${attributes.join(" ")} />`
  })
}
