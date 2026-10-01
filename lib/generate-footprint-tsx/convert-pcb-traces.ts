import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertPcbTraces: FootprintElementConverter = (circuitJson) =>
  su(circuitJson)
    .pcb_trace.list()
    .map((trace) => `<pcbtrace route={${JSON.stringify(trace.route)}} />`)
