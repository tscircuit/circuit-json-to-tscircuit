import type { AnyCircuitElement, SourcePort, SourceTrace } from "circuit-json"
import type { BoardConverterStage } from "../BoardConverterContext"
import { getSafeNetName } from "../get-safe-net-name"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>
type SourceNet = Extract<AnyCircuitElement, { type: "source_net" }>
type SourceNetId = NonNullable<SourceNet["source_net_id"]>
type SourceTraceId = NonNullable<SourceTrace["source_trace_id"]>

const getPortSelector = ({
  sourceComponent,
  sourcePort,
}: {
  sourceComponent: SourceComponent
  sourcePort: SourcePort
}): string | null => {
  if (!sourceComponent.name) return null

  const portName =
    sourcePort.pin_number !== undefined
      ? `pin${sourcePort.pin_number}`
      : sourcePort.name || sourcePort.port_hints?.[0]

  if (!portName) return null

  return `.${sourceComponent.name} > .${portName}`
}

export const convertSchematicConnectivity: BoardConverterStage = ({
  boardChildren,
  boardProps,
  circuitJson,
  emittedNetNames,
  netNamesBySourceName,
  usedNetNames,
}) => {
  const schematicSourceTraceIds = new Set<SourceTraceId>(
    circuitJson.flatMap((element) =>
      element.type === "schematic_trace" && element.source_trace_id
        ? [element.source_trace_id]
        : [],
    ),
  )
  const schematicConnectivityKeys = new Set<string>(
    circuitJson.flatMap((element) =>
      element.type === "schematic_trace" &&
      element.subcircuit_connectivity_map_key
        ? [element.subcircuit_connectivity_map_key]
        : [],
    ),
  )
  const sourceTraces = circuitJson.filter(
    (element): element is SourceTrace =>
      element.type === "source_trace" &&
      (schematicSourceTraceIds.has(element.source_trace_id) ||
        (element.subcircuit_connectivity_map_key !== undefined &&
          schematicConnectivityKeys.has(
            element.subcircuit_connectivity_map_key,
          ))),
  )

  if (sourceTraces.length === 0) return

  const sourceComponentsById = new Map<SourceComponentId, SourceComponent>(
    circuitJson.flatMap((element) =>
      element.type === "source_component" && element.source_component_id
        ? [[element.source_component_id, element]]
        : [],
    ),
  )
  const sourcePortsById = new Map<string, SourcePort>(
    circuitJson.flatMap((element) =>
      element.type === "source_port" ? [[element.source_port_id, element]] : [],
    ),
  )
  const sourceNetsById = new Map<SourceNetId, SourceNet>(
    circuitJson.flatMap((element) =>
      element.type === "source_net" ? [[element.source_net_id, element]] : [],
    ),
  )
  const convertedComponentNames = new Set<string>(
    circuitJson.flatMap((element) => {
      if (element.type !== "pcb_component") return []
      const sourceComponent = sourceComponentsById.get(
        element.source_component_id,
      )
      return sourceComponent?.name ? [sourceComponent.name] : []
    }),
  )
  const traceElements: string[] = []

  for (const sourceTrace of sourceTraces) {
    const portSelectors = [
      ...new Set(
        sourceTrace.connected_source_port_ids.flatMap((sourcePortId) => {
          const sourcePort = sourcePortsById.get(sourcePortId)
          if (!sourcePort?.source_component_id) return []

          const sourceComponent = sourceComponentsById.get(
            sourcePort.source_component_id,
          )
          if (
            !sourceComponent?.name ||
            !convertedComponentNames.has(sourceComponent.name)
          ) {
            return []
          }

          const portSelector = getPortSelector({
            sourceComponent,
            sourcePort,
          })
          return portSelector ? [portSelector] : []
        }),
      ),
    ]
    const sourceNet = sourceTrace.connected_source_net_ids
      .map((sourceNetId) => sourceNetsById.get(sourceNetId))
      .find((candidateSourceNet) => candidateSourceNet?.name)
    const tracePath = [...portSelectors]

    if (sourceNet?.name) {
      let netName = netNamesBySourceName.get(sourceNet.name)
      if (!netName) {
        netName = getSafeNetName({
          sourceNetName: sourceNet.name,
          usedNetNames,
        })
        netNamesBySourceName.set(sourceNet.name, netName)
      }
      tracePath.push(`net.${netName}`)
    }

    if (tracePath.length < 2) continue

    const netName = sourceNet?.name
      ? netNamesBySourceName.get(sourceNet.name)
      : undefined
    if (netName && !emittedNetNames.has(netName)) {
      boardChildren.push(`<net name=${JSON.stringify(netName)} />`)
      emittedNetNames.add(netName)
    }

    traceElements.push(`<trace path={${JSON.stringify(tracePath)}} />`)
  }

  if (traceElements.length === 0) return

  boardProps.push("routingDisabled")
  boardChildren.push(...traceElements)
}
