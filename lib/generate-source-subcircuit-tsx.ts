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
  supplier_part_numbers?: Record<string, string[]>
}

type SourcePortElement = {
  source_port_id: string
  name: string
  pin_number?: number
  source_component_id?: string | null
  subcircuit_connectivity_map_key?: string
}

type SourceNetElement = {
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

const getSupplierPartNumbersProps = (
  sourceComponent: SourceComponentElement,
): string[] => {
  const supplierPartNumbers = sourceComponent.supplier_part_numbers
  if (!supplierPartNumbers) return []

  const attrs = [
    `supplierPartNumbers={${JSON.stringify(supplierPartNumbers, null, "  ")}}`,
  ]

  const firstPartNumber = Object.values(supplierPartNumbers)
    .flat()
    .find((partNumber) => partNumber)
  if (firstPartNumber) {
    attrs.push(`manufacturerPartNumber=${JSON.stringify(firstPartNumber)}`)
  }

  return attrs
}

const getSourceComponentProps = (
  sourceComponent: SourceComponentElement,
  pcbComponent: PcbComponentElement | undefined,
  cadComponent: CadComponentElement | undefined,
  ports: SourcePortElement[],
): string => {
  const attrs: string[] = [`name=${JSON.stringify(sourceComponent.name ?? "")}`]
  attrs.push(...getSupplierPartNumbersProps(sourceComponent))

  const footprint = cadComponent?.footprinter_string
  if (footprint) attrs.push(`footprint=${JSON.stringify(footprint)}`)

  if (pcbComponent?.layer) attrs.push(`layer=${JSON.stringify(pcbComponent.layer)}`)
  if (pcbComponent?.center?.x !== undefined)
    attrs.push(`pcbX={${pcbComponent.center.x}}`)
  if (pcbComponent?.center?.y !== undefined)
    attrs.push(`pcbY={${pcbComponent.center.y}}`)
  if (pcbComponent?.rotation !== undefined)
    attrs.push(`pcbRotation={${pcbComponent.rotation}}`)
  if (pcbComponent?.do_not_place !== undefined)
    attrs.push(`doNotPlace={${pcbComponent.do_not_place}}`)
  if (pcbComponent?.obstructs_within_bounds !== undefined) {
    attrs.push(`obstructsWithinBounds={${pcbComponent.obstructs_within_bounds}}`)
  }

  const connections = ports
    .sort((a, b) => (a.pin_number ?? 0) - (b.pin_number ?? 0))
    .map((port) => {
      const key = port.name || `pin${port.pin_number ?? 1}`
      const net = port.subcircuit_connectivity_map_key
        ? sourceNetNameByConnectivityKey.get(port.subcircuit_connectivity_map_key)
        : undefined
      const fallbackNet =
        net ??
        (port.subcircuit_connectivity_map_key
          ? sanitizeIdentifier(port.subcircuit_connectivity_map_key)
          : undefined)
      if (!fallbackNet) return null
      return `${JSON.stringify(key)}: ${JSON.stringify(`net.${sanitizeIdentifier(fallbackNet)}`)}`
    })
    .filter((entry): entry is string => entry !== null)

  if (connections.length > 0) {
    attrs.push(`connections={{ ${connections.join(", ")} }}`)
  }

  switch (sourceComponent.ftype) {
    case "simple_resistor":
      if (sourceComponent.resistance !== undefined) {
        attrs.push(`resistance={${sourceComponent.resistance}}`)
      }
      return `<resistor ${attrs.join(" ")} />`
    case "simple_capacitor":
      if (sourceComponent.display_capacitance) {
        attrs.push(`capacitance=${JSON.stringify(sourceComponent.display_capacitance)}`)
      } else if (sourceComponent.capacitance !== undefined) {
        attrs.push(`capacitance={${sourceComponent.capacitance}}`)
      }
      return `<capacitor ${attrs.join(" ")} />`
    case "simple_diode":
      return `<diode ${attrs.join(" ")} />`
    case "simple_led":
      if (sourceComponent.color) attrs.push(`color=${JSON.stringify(sourceComponent.color)}`)
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
          const name = port.name || `pin${port.pin_number ?? 1}`
          if (/^pin\d+$/i.test(name)) return null
          return `${JSON.stringify(`pin${port.pin_number ?? 1}`)}: ${JSON.stringify(name)}`
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
          const name = port.name || `pin${port.pin_number ?? 1}`
          return `${JSON.stringify(`pin${port.pin_number ?? 1}`)}: ${JSON.stringify(name)}`
        })
      attrs.push(`pinLabels={{ ${pinLabelsEntries.join(", ")} }}`)
      return `<transistor ${attrs.join(" ")} />`
    }
    default:
      return `<chip ${attrs.join(" ")} />`
  }
}

let sourceNetNameByConnectivityKey = new Map<string, string>()

export const generateSourceSubcircuitTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const sourceComponents = su(circuitJson).source_component.list() as SourceComponentElement[]
  const sourcePorts = su(circuitJson).source_port.list() as SourcePortElement[]
  const sourceNets = su(circuitJson).source_net.list() as SourceNetElement[]
  const pcbComponents = su(circuitJson).pcb_component.list() as PcbComponentElement[]
  const cadComponents = su(circuitJson).cad_component.list() as CadComponentElement[]
  
  if (sourceComponents.length === 0) return null
  if (sourceComponents.length === 1 && sourceNets.length === 0) return null

  sourceNetNameByConnectivityKey = new Map(
    sourceNets
      .filter((net) => net.subcircuit_connectivity_map_key && net.name)
      .map((net) => [net.subcircuit_connectivity_map_key!, net.name!]),
  )

  const portsByComponentId = new Map<string, SourcePortElement[]>()
  for (const port of sourcePorts) {
    if (!port.source_component_id) continue
    const arr = portsByComponentId.get(port.source_component_id) ?? []
    arr.push(port)
    portsByComponentId.set(port.source_component_id, arr)
  }

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

  const board = su(circuitJson).pcb_board.list()[0]
  const boardWidth =
    board?.width !== undefined ? ` width={${board.width}}` : ""
  const boardHeight =
    board?.height !== undefined ? ` height={${board.height}}` : ""

  const childStrings = sourceComponents
    .map((component) => {
      const ports = portsByComponentId.get(component.source_component_id) ?? []
      const pcbComponent = pcbBySourceComponentId.get(component.source_component_id)
      const cadComponent = cadBySourceComponentId.get(component.source_component_id)
      return getSourceComponentProps(
        component,
        pcbComponent,
        cadComponent,
        ports,
      )
    })
    .join("\n    ")

  return `
<subcircuit${boardWidth}${boardHeight}>
  ${childStrings}
</subcircuit>
  `.trim()
}
