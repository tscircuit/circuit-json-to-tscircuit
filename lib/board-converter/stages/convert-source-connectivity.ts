import type { AnyCircuitElement, SourcePort, SourceTrace } from "circuit-json"
import type { BoardConverterStage } from "../BoardConverterContext"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>
type SourceNet = Extract<AnyCircuitElement, { type: "source_net" }>
type SourceNetId = NonNullable<SourceNet["source_net_id"]>
type SourceTraceId = NonNullable<SourceTrace["source_trace_id"]>

const getSourceTraceConnectivityKeys = ({
  sourceComponentsById,
  sourceNetsById,
  sourcePortsById,
  sourceTrace,
}: {
  sourceComponentsById: Map<SourceComponentId, SourceComponent>
  sourceNetsById: Map<SourceNetId, SourceNet>
  sourcePortsById: Map<string, SourcePort>
  sourceTrace: SourceTrace
}): string[] => {
  const netNames = sourceTrace.connected_source_net_ids
    .flatMap((sourceNetId) => {
      const sourceNetName = sourceNetsById.get(sourceNetId)?.name?.trim()
      return sourceNetName ? [sourceNetName.toLowerCase()] : []
    })
    .sort()
  const portSelectors = sourceTrace.connected_source_port_ids
    .flatMap((sourcePortId) => {
      const sourcePort = sourcePortsById.get(sourcePortId)
      if (!sourcePort?.source_component_id) return []
      const sourceComponent = sourceComponentsById.get(
        sourcePort.source_component_id,
      )
      if (!sourceComponent) return []
      const selector = getPortSelector({ sourceComponent, sourcePort })
      return selector ? [selector] : []
    })
    .sort()

  return [
    ...(portSelectors.length > 0 ? [`ports:${portSelectors.join("|")}`] : []),
    ...(netNames.length > 0 ? [`nets:${netNames.join("|")}`] : []),
  ]
}

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

const getSafeNetName = ({
  sourceNetName,
  usedNetNames,
}: {
  sourceNetName: string
  usedNetNames: Set<string>
}): string => {
  const normalizedNetName = sourceNetName.replace(/[^A-Za-z0-9_]/g, "_")
  const prefixedNetName = /^[0-9]/.test(normalizedNetName)
    ? `NET_${normalizedNetName}`
    : normalizedNetName || "NET"
  let safeNetName = prefixedNetName
  let suffix = 2

  while (usedNetNames.has(safeNetName)) {
    safeNetName = `${prefixedNetName}_${suffix}`
    suffix += 1
  }

  usedNetNames.add(safeNetName)
  return safeNetName
}

export const convertSourceConnectivity: BoardConverterStage = ({
  boardChildren,
  boardProps,
  circuitJson,
}) => {
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
  const schematicSourceTraceIds = new Set<SourceTraceId>(
    circuitJson.flatMap((element) =>
      element.type === "schematic_trace" && element.source_trace_id
        ? [element.source_trace_id]
        : [],
    ),
  )
  const pcbSourceTraceIds = new Set<SourceTraceId>(
    circuitJson.flatMap((element) =>
      element.type.startsWith("pcb_") &&
      "source_trace_id" in element &&
      typeof element.source_trace_id === "string"
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
  const allSourceTraces = circuitJson.filter(
    (element): element is SourceTrace => element.type === "source_trace",
  )
  const schematicSourceTraces = allSourceTraces.filter(
    (sourceTrace) =>
      schematicSourceTraceIds.has(sourceTrace.source_trace_id) ||
      (sourceTrace.subcircuit_connectivity_map_key !== undefined &&
        schematicConnectivityKeys.has(
          sourceTrace.subcircuit_connectivity_map_key,
        )),
  )
  const schematicSourceTracesByConnectivityKey = new Map<string, SourceTrace>()
  for (const sourceTrace of schematicSourceTraces) {
    for (const connectivityKey of getSourceTraceConnectivityKeys({
      sourceComponentsById,
      sourceNetsById,
      sourcePortsById,
      sourceTrace,
    })) {
      if (!schematicSourceTracesByConnectivityKey.has(connectivityKey)) {
        schematicSourceTracesByConnectivityKey.set(connectivityKey, sourceTrace)
      }
    }
  }
  const pcbSourceTraceIdBySchematicSourceTraceId = new Map<
    SourceTraceId,
    SourceTraceId
  >()
  const sourceTraces = [...schematicSourceTraces]

  for (const sourceTrace of allSourceTraces) {
    if (schematicSourceTraces.includes(sourceTrace)) continue
    if (!pcbSourceTraceIds.has(sourceTrace.source_trace_id)) continue

    const matchingSchematicSourceTrace = getSourceTraceConnectivityKeys({
      sourceComponentsById,
      sourceNetsById,
      sourcePortsById,
      sourceTrace,
    })
      .map((connectivityKey) =>
        schematicSourceTracesByConnectivityKey.get(connectivityKey),
      )
      .find((candidate) => candidate !== undefined)

    if (matchingSchematicSourceTrace) {
      const schematicSourceTraceId =
        matchingSchematicSourceTrace.source_trace_id
      if (
        !pcbSourceTraceIdBySchematicSourceTraceId.has(schematicSourceTraceId)
      ) {
        pcbSourceTraceIdBySchematicSourceTraceId.set(
          schematicSourceTraceId,
          sourceTrace.source_trace_id,
        )
      } else {
        sourceTraces.push(sourceTrace)
      }
      continue
    }

    sourceTraces.push(sourceTrace)
  }
  const schematicSourceTraceIdSet = new Set(
    schematicSourceTraces.map((sourceTrace) => sourceTrace.source_trace_id),
  )

  if (sourceTraces.length === 0) return
  const convertedComponentNames = new Set<string>(
    circuitJson.flatMap((element) => {
      if (element.type !== "pcb_component") return []
      const sourceComponent = sourceComponentsById.get(
        element.source_component_id,
      )
      return sourceComponent?.name ? [sourceComponent.name] : []
    }),
  )
  const safeNetNamesBySourceName = new Map<string, string>()
  const usedNetNames = new Set<string>()
  const emittedNetNames = new Set<string>()
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
      let safeNetName = safeNetNamesBySourceName.get(sourceNet.name)
      if (!safeNetName) {
        safeNetName = getSafeNetName({
          sourceNetName: sourceNet.name,
          usedNetNames,
        })
        safeNetNamesBySourceName.set(sourceNet.name, safeNetName)
      }
      tracePath.push(`net.${safeNetName}`)
    }

    if (tracePath.length < 2) continue

    const safeNetName = sourceNet?.name
      ? safeNetNamesBySourceName.get(sourceNet.name)
      : undefined
    if (safeNetName && !emittedNetNames.has(safeNetName)) {
      boardChildren.push(`<net name=${JSON.stringify(safeNetName)} />`)
      emittedNetNames.add(safeNetName)
    }

    const importedSourceTraceId =
      pcbSourceTraceIdBySchematicSourceTraceId.get(
        sourceTrace.source_trace_id,
      ) ??
      (pcbSourceTraceIds.has(sourceTrace.source_trace_id)
        ? sourceTrace.source_trace_id
        : undefined)
    const sourceTraceIdProp = importedSourceTraceId
      ? ` sourceTraceId=${JSON.stringify(importedSourceTraceId)}`
      : ""
    const noSchematicRepresentationProp = schematicSourceTraceIdSet.has(
      sourceTrace.source_trace_id,
    )
      ? ""
      : " noSchematicRepresentation"
    traceElements.push(
      `<trace path={${JSON.stringify(tracePath)}}${sourceTraceIdProp}${noSchematicRepresentationProp} />`,
    )
  }

  if (traceElements.length === 0) return

  boardProps.push("routingDisabled")
  boardChildren.push(...traceElements)
}
