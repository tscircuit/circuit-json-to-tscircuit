import type { PcbPort, SourceNet, SourcePort, SourceTrace } from "circuit-json"

export type PcbPortId = PcbPort["pcb_port_id"]
export type SourcePortId = SourcePort["source_port_id"]
export type SourceNetId = SourceNet["source_net_id"]
export type SourceTraceId = SourceTrace["source_trace_id"]
export type SourceNetName = SourceNet["name"]
export type RuntimeNetName = string
export type ImportedPortHint = string
export type PcbPortSelector = string

export interface BoardConversionContext {
  pcbChipName: string
  portHintByPcbPortId: Map<PcbPortId, ImportedPortHint>
  runtimeNetNameBySourceNetId: Map<SourceNetId, RuntimeNetName>
  runtimeNetNamesToEmit: Set<RuntimeNetName>
  pcbPortSelectorsByRuntimeNetName: Map<RuntimeNetName, PcbPortSelector[]>
}
