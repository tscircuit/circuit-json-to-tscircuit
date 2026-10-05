import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertPcbTraces: FootprintElementConverter = (
  circuitJson,
  context,
) =>
  su(circuitJson)
    .pcb_trace.list()
    .map((trace) => {
      const runtimeNetName = trace.source_trace_id
        ? context?.runtimeNetNameBySourceTraceId.get(trace.source_trace_id)
        : undefined
      const connectsTo = runtimeNetName
        ? ` connectsTo={${JSON.stringify(`net.${runtimeNetName}`)}}`
        : ""
      return `<pcbtrace${connectsTo} route={${JSON.stringify(trace.route)}} />`
    })
