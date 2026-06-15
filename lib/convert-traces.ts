import type {
  AnyCircuitElement,
  SourceComponentBase,
  SourcePort,
} from "circuit-json"
import { su } from "@tscircuit/soup-util"

const resolveSelector = (
  sourcePortId: string,
  ports: SourcePort[],
  components: SourceComponentBase[],
): string | null => {
  const port = ports.find((p) => p.source_port_id === sourcePortId)
  if (!port) return null
  const component = components.find(
    (c) => c.source_component_id === port.source_component_id,
  )
  if (!component?.name || !port.name) return null
  return `.${component.name} > .${port.name}`
}

export const convertTraces = (circuitJson: AnyCircuitElement[]): string[] => {
  const sourceTraces = su(circuitJson).source_trace.list()
  const sourcePorts = su(circuitJson).source_port.list()
  const sourceComponents = su(circuitJson).source_component.list()
  const out: string[] = []

  for (const trace of sourceTraces) {
    const ids = trace.connected_source_port_ids ?? []
    if (ids.length !== 2) continue
    const fromSel = resolveSelector(ids[0], sourcePorts, sourceComponents)
    const toSel = resolveSelector(ids[1], sourcePorts, sourceComponents)
    if (!fromSel || !toSel) continue
    out.push(`<trace from="${fromSel}" to="${toSel}" />`)
  }

  return out
}
