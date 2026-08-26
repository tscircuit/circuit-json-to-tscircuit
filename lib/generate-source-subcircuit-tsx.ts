import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"

type SourceComponentElement = {
  source_component_id: string
  ftype: string
  name?: string
  pin_count?: number
  resistance?: number
  capacitance?: number
  display_capacitance?: string
  color?: string
  transistor_type?: "npn" | "pnp"
}

type SourcePortElement = {
  source_port_id: string
  name?: string
  pin_number?: number
  source_component_id?: string | null
  subcircuit_connectivity_map_key?: string
  port_hints?: string[]
}

type SourceTraceElement = {
  source_trace_id: string
  connected_source_port_ids?: string[]
  connected_source_net_ids?: string[]
  subcircuit_connectivity_map_key?: string
}

type SourceNetElement = {
  source_net_id?: string
  name?: string
  subcircuit_connectivity_map_key?: string
}

type PcbComponentElement = {
  source_component_id?: string
  center?: { x?: number; y?: number }
  rotation?: number
  layer?: string
  do_not_place?: boolean
  obstructs_within_bounds?: boolean
}

type CadComponentElement = {
  source_component_id?: string
  footprinter_string?: string
}

const sanitizeIdentifier = (value: string) =>
  value.replace(/[^a-zA-Z0-9_]/g, "_")

const formatMm = (value: number | string | undefined) => {
  if (value === undefined) return null
  if (typeof value === "string") return value
  return `${value}mm`
}

const getBaseFootprint = (footprinterString: string | undefined) => {
  if (!footprinterString) return undefined
  return footprinterString.replace(/_color\([^)]+\)$/, "")
}

const getConnectionLabel = (
  sourceComponent: SourceComponentElement,
  port: SourcePortElement,
) => {
  if (
    sourceComponent.ftype === "simple_chip" ||
    sourceComponent.ftype === "simple_transistor"
  ) {
    return `pin${port.pin_number ?? 1}`
  }

  if (
    sourceComponent.ftype === "simple_resistor" ||
    sourceComponent.ftype === "simple_capacitor" ||
    sourceComponent.ftype === "simple_diode" ||
    sourceComponent.ftype === "simple_led"
  ) {
    if (
      port.port_hints?.includes("pos") ||
      port.port_hints?.includes("anode")
    ) {
      return "pos"
    }
    if (
      port.port_hints?.includes("neg") ||
      port.port_hints?.includes("cathode")
    ) {
      return "neg"
    }
    return `pin${port.pin_number ?? 1}`
  }

  return port.name || `pin${port.pin_number ?? 1}`
}

const getTraceSelector = (
  sourceComponent: SourceComponentElement,
  port: SourcePortElement,
) => `.${sourceComponent.name} > .${getConnectionLabel(sourceComponent, port)}`

const getComponentConnections = (
  sourceComponent: SourceComponentElement,
  ports: SourcePortElement[],
  netNameByPortId: Map<string, string>,
) => {
  const entries = ports
    .sort((a, b) => (a.pin_number ?? 0) - (b.pin_number ?? 0))
    .map((port) => {
      const netName = netNameByPortId.get(port.source_port_id)
      if (!netName) return null
      return [
        getConnectionLabel(sourceComponent, port),
        `net.${sanitizeIdentifier(netName)}`,
      ] as const
    })
    .filter(
      (entry): entry is readonly [string, `net.${string}`] => entry !== null,
    )

  if (entries.length === 0) return null

  return `connections={{ ${entries
    .map(
      ([label, netName]) =>
        `${JSON.stringify(label)}: ${JSON.stringify(netName)}`,
    )
    .join(", ")} }}`
}

const getComponentProps = (
  sourceComponent: SourceComponentElement,
  pcbComponent: PcbComponentElement | undefined,
  cadComponent: CadComponentElement | undefined,
  ports: SourcePortElement[],
  netNameByPortId: Map<string, string>,
) => {
  const attrs: string[] = [`name=${JSON.stringify(sourceComponent.name ?? "")}`]

  const footprint = getBaseFootprint(cadComponent?.footprinter_string)
  if (footprint) attrs.push(`footprint=${JSON.stringify(footprint)}`)

  if (pcbComponent?.layer)
    attrs.push(`layer=${JSON.stringify(pcbComponent.layer)}`)
  if (pcbComponent?.center?.x !== undefined) {
    attrs.push(`pcbX={${pcbComponent.center.x}}`)
  }
  if (pcbComponent?.center?.y !== undefined) {
    attrs.push(`pcbY={${pcbComponent.center.y}}`)
  }
  if (pcbComponent?.rotation !== undefined) {
    attrs.push(`pcbRotation={${pcbComponent.rotation}}`)
  }
  if (pcbComponent?.do_not_place !== undefined) {
    attrs.push(`doNotPlace={${pcbComponent.do_not_place}}`)
  }
  if (pcbComponent?.obstructs_within_bounds !== undefined) {
    attrs.push(
      `obstructsWithinBounds={${pcbComponent.obstructs_within_bounds}}`,
    )
  }

  const connections = getComponentConnections(
    sourceComponent,
    ports,
    netNameByPortId,
  )
  if (connections) attrs.push(connections)

  switch (sourceComponent.ftype) {
    case "simple_resistor":
      if (sourceComponent.resistance !== undefined) {
        attrs.push(`resistance={${sourceComponent.resistance}}`)
      }
      return `<resistor ${attrs.join(" ")} />`
    case "simple_capacitor":
      if (sourceComponent.display_capacitance) {
        attrs.push(
          `capacitance=${JSON.stringify(sourceComponent.display_capacitance)}`,
        )
      } else if (sourceComponent.capacitance !== undefined) {
        attrs.push(`capacitance={${sourceComponent.capacitance}}`)
      }
      return `<capacitor ${attrs.join(" ")} />`
    case "simple_diode":
      if (sourceComponent.color) {
        attrs.push(`color=${JSON.stringify(sourceComponent.color)}`)
      }
      return `<diode ${attrs.join(" ")} />`
    case "simple_led":
      if (sourceComponent.color) {
        attrs.push(`color=${JSON.stringify(sourceComponent.color)}`)
      }
      return `<led ${attrs.join(" ")} />`
    case "simple_pin_header":
      if (sourceComponent.pin_count !== undefined) {
        attrs.push(`pinCount={${sourceComponent.pin_count}}`)
      }
      return `<pinheader ${attrs.join(" ")} />`
    case "simple_chip": {
      const pinLabelsEntries = ports
        .sort((a, b) => (a.pin_number ?? 0) - (b.pin_number ?? 0))
        .map((port) => {
          const pinLabel = `pin${port.pin_number ?? 1}`
          const label = port.name || pinLabel
          if (label === pinLabel) return null
          return `${JSON.stringify(pinLabel)}: ${JSON.stringify(label)}`
        })
        .filter((entry): entry is string => entry !== null)

      if (pinLabelsEntries.length > 0) {
        attrs.push(`pinLabels={{ ${pinLabelsEntries.join(", ")} }}`)
      }
      return `<chip ${attrs.join(" ")} />`
    }
    case "simple_transistor": {
      if (sourceComponent.transistor_type) {
        attrs.push(`type=${JSON.stringify(sourceComponent.transistor_type)}`)
      }
      const pinLabelsEntries = ports
        .sort((a, b) => (a.pin_number ?? 0) - (b.pin_number ?? 0))
        .map((port) => {
          const pinLabel = `pin${port.pin_number ?? 1}`
          const label = port.name || pinLabel
          return `${JSON.stringify(pinLabel)}: ${JSON.stringify(label)}`
        })
      attrs.push(`pinLabels={{ ${pinLabelsEntries.join(", ")} }}`)
      return `<transistor ${attrs.join(" ")} />`
    }
    default:
      return `<chip ${attrs.join(" ")} />`
  }
}

const getTraceProps = (
  sourceComponentById: Map<string, SourceComponentElement>,
  sourcePortById: Map<string, SourcePortElement>,
  sourceTrace: SourceTraceElement,
) => {
  const portIds = sourceTrace.connected_source_port_ids ?? []
  if (portIds.length < 2) return null

  const sourcePorts = portIds
    .map((portId) => sourcePortById.get(portId))
    .filter((port): port is SourcePortElement => port !== undefined)

  if (sourcePorts.length < 2) return null

  const [firstPort, secondPort] = sourcePorts
  const firstComponent = firstPort.source_component_id
    ? sourceComponentById.get(firstPort.source_component_id)
    : undefined
  const secondComponent = secondPort.source_component_id
    ? sourceComponentById.get(secondPort.source_component_id)
    : undefined

  if (!firstComponent?.name || !secondComponent?.name) return null

  const from = getTraceSelector(firstComponent, firstPort)
  const to = getTraceSelector(secondComponent, secondPort)

  return `<trace from=${JSON.stringify(from)} to=${JSON.stringify(to)} />`
}

export const generateSourceSubcircuitTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const sourceComponents = su(
    circuitJson,
  ).source_component.list() as SourceComponentElement[]
  const sourcePorts = su(circuitJson).source_port.list() as SourcePortElement[]
  const sourceTraces = su(
    circuitJson,
  ).source_trace.list() as SourceTraceElement[]
  const sourceNets = su(circuitJson).source_net.list() as SourceNetElement[]
  const pcbComponents = su(
    circuitJson,
  ).pcb_component.list() as PcbComponentElement[]
  const cadComponents = su(
    circuitJson,
  ).cad_component.list() as CadComponentElement[]

  if (sourceComponents.length === 0) return null
  if (
    !sourceComponents.some((component) =>
      component.ftype?.startsWith("simple_"),
    )
  ) {
    return null
  }
  if (sourceTraces.length === 0) return null

  const sourceComponentById = new Map(
    sourceComponents.map((component) => [
      component.source_component_id,
      component,
    ]),
  )
  const sourcePortById = new Map(
    sourcePorts.map((port) => [port.source_port_id, port]),
  )
  const pcbBySourceComponentId = new Map<string, PcbComponentElement>()
  for (const pcbComponent of pcbComponents) {
    if (pcbComponent.source_component_id) {
      pcbBySourceComponentId.set(pcbComponent.source_component_id, pcbComponent)
    }
  }
  const cadBySourceComponentId = new Map<string, CadComponentElement>()
  for (const cadComponent of cadComponents) {
    if (cadComponent.source_component_id) {
      cadBySourceComponentId.set(cadComponent.source_component_id, cadComponent)
    }
  }

  const netNameByConnectivityKey = new Map(
    sourceNets
      .filter((net) => net.subcircuit_connectivity_map_key && net.name)
      .map((net) => [net.subcircuit_connectivity_map_key!, net.name!]),
  )

  const netNameByPortId = new Map<string, string>()
  for (const sourceTrace of sourceTraces) {
    const connectedPortIds = sourceTrace.connected_source_port_ids ?? []
    if (connectedPortIds.length !== 1) continue

    const portId = connectedPortIds[0]!
    const netName =
      sourceTrace.connected_source_net_ids
        ?.map(
          (netId) =>
            sourceNets.find((net) => net.source_net_id === netId)?.name,
        )
        .find((name): name is string => Boolean(name)) ??
      (sourceTrace.subcircuit_connectivity_map_key
        ? netNameByConnectivityKey.get(
            sourceTrace.subcircuit_connectivity_map_key,
          )
        : undefined) ??
      (sourceTrace.subcircuit_connectivity_map_key
        ? sanitizeIdentifier(sourceTrace.subcircuit_connectivity_map_key)
        : undefined)

    if (netName) {
      netNameByPortId.set(portId, netName)
    }
  }

  const board = su(circuitJson).pcb_board.list()[0]
  const boardWidth = formatMm(board?.width)
  const boardHeight = formatMm(board?.height)

  const componentStrings = sourceComponents
    .map((component) => {
      const ports = sourcePorts.filter(
        (port) => port.source_component_id === component.source_component_id,
      )
      const pcbComponent = pcbBySourceComponentId.get(
        component.source_component_id,
      )
      const cadComponent = cadBySourceComponentId.get(
        component.source_component_id,
      )
      return getComponentProps(
        component,
        pcbComponent,
        cadComponent,
        ports,
        netNameByPortId,
      )
    })
    .join("\n    ")

  const traceStrings = sourceTraces
    .map((sourceTrace) =>
      getTraceProps(sourceComponentById, sourcePortById, sourceTrace),
    )
    .filter((trace): trace is string => trace !== null)
    .join("\n    ")

  return `
<board${boardWidth ? ` width=${JSON.stringify(boardWidth)}` : ""}${boardHeight ? ` height=${JSON.stringify(boardHeight)}` : ""}>
  ${componentStrings}
  ${traceStrings ? `\n  ${traceStrings}` : ""}
</board>
  `.trim()
}
