import type {
  AnyCircuitElement,
  CadComponent,
  PcbComponent,
  SchematicComponent,
  SourcePort,
  SourceTrace,
} from "circuit-json"
import { getCadModelGroups } from "../generate-board-cad-models-tsx/get-cad-model-groups"
import { generateFootprintTsx } from "../generate-footprint-tsx"
import {
  areSourcePortsCompatibleWithSpec,
  getTypedComponentTemplateSpec,
  type TypedComponentTemplateSpec,
} from "../get-typed-component-template-spec"
import { getInternallyConnectedSourcePortIds } from "./get-internally-connected-source-port-ids"
import { getSchematicComponentsForPcbComponent } from "./get-schematic-components-for-pcb-component"
import { localizePcbComponentElements } from "./localize-pcb-component-elements"

type PcbComponentId = PcbComponent["pcb_component_id"]
type SchematicComponentId = SchematicComponent["schematic_component_id"]
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceTraceId = SourceTrace["source_trace_id"]

export interface NativeBoardComponent {
  pcbComponentId: PcbComponentId
  schematicComponentId: SchematicComponentId
  spec: TypedComponentTemplateSpec
  usesIntrinsicFootprint: boolean
  schX: number
  schY: number
  schRotation: number
}

export interface NativeBoardComponentsResult {
  nativeBoardComponentByPcbComponentId: Map<
    PcbComponentId,
    NativeBoardComponent
  >
  reconstructedSchematicComponentIds: Set<SchematicComponentId>
  reconstructedSchematicSourceTraceIds: Set<SourceTraceId>
  canAutorouteAllPcbTraces: boolean
}

const getSchematicRotationFromComponent = (
  schematicComponent: SchematicComponent,
): number => {
  const symbolName = schematicComponent.symbol_name ?? ""
  let symbolRotation = 0
  if (symbolName.endsWith("_up") || symbolName.endsWith("_vert")) {
    symbolRotation = 90
  } else if (symbolName.endsWith("_left")) {
    symbolRotation = 180
  } else if (symbolName.endsWith("_down")) {
    symbolRotation = 270
  }
  const extraRotation =
    "rotation" in schematicComponent &&
    typeof schematicComponent.rotation === "number"
      ? schematicComponent.rotation
      : 0
  const rawRotation = symbolRotation + extraRotation
  return ((rawRotation % 360) + 360) % 360
}

const hasOwnedSchematicPrimitives = ({
  circuitJson,
  schematicComponentId,
}: {
  circuitJson: AnyCircuitElement[]
  schematicComponentId: SchematicComponentId
}): boolean =>
  circuitJson.some(
    (element) =>
      (element.type === "schematic_arc" ||
        element.type === "schematic_box" ||
        element.type === "schematic_circle" ||
        element.type === "schematic_line" ||
        element.type === "schematic_path" ||
        element.type === "schematic_rect" ||
        element.type === "schematic_table" ||
        element.type === "schematic_text") &&
      "schematic_component_id" in element &&
      element.schematic_component_id === schematicComponentId,
  )

const isSymbolDisplayValueCompatible = ({
  schematicComponent,
  spec,
}: {
  schematicComponent: SchematicComponent
  spec: TypedComponentTemplateSpec
}): boolean => {
  const symbolDisplayValue = schematicComponent.symbol_display_value?.trim()
  if (!symbolDisplayValue) return true
  if (spec.expectedDisplayValues.length > 0) {
    return spec.expectedDisplayValues.some((expected) => {
      const trimmedExpected = expected.trim()
      return (
        symbolDisplayValue === trimmedExpected ||
        symbolDisplayValue.startsWith(`${trimmedExpected} /`)
      )
    })
  }
  return /\d/u.test(symbolDisplayValue)
}

export const getNativeBoardComponents = (
  circuitJson: AnyCircuitElement[],
): NativeBoardComponentsResult => {
  const pcbComponents = circuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  const cadModelPcbComponentIds = new Set<PcbComponentId>()
  for (const group of getCadModelGroups(circuitJson)) {
    const pcbComponentId = group.cadComponents[0]?.pcb_component_id
    if (pcbComponentId) cadModelPcbComponentIds.add(pcbComponentId)
  }

  const nativeBoardComponentByPcbComponentId = new Map<
    PcbComponentId,
    NativeBoardComponent
  >()
  const reconstructedSchematicComponentIds = new Set<SchematicComponentId>()
  const nativePcbComponentBySourcePortId = new Map<
    string,
    NativeBoardComponent
  >()

  for (const pcbComponent of pcbComponents) {
    const sourceComponent = circuitJson.find(
      (element): element is SourceComponent =>
        element.type === "source_component" &&
        element.source_component_id === pcbComponent.source_component_id,
    )
    if (!sourceComponent) continue

    const schematicComponents = getSchematicComponentsForPcbComponent({
      circuitJson,
      pcbComponent,
    })
    if (schematicComponents.length !== 1) continue
    const schematicComponent = schematicComponents[0]!
    if (
      schematicComponent.source_component_id !==
        sourceComponent.source_component_id ||
      schematicComponent.schematic_sheet_id !== undefined
    ) {
      continue
    }
    if (
      hasOwnedSchematicPrimitives({
        circuitJson,
        schematicComponentId: schematicComponent.schematic_component_id,
      })
    ) {
      continue
    }

    const cadComponent = circuitJson.find(
      (element): element is CadComponent =>
        element.type === "cad_component" &&
        element.pcb_component_id === pcbComponent.pcb_component_id,
    )
    const spec = getTypedComponentTemplateSpec({
      sourceComponent,
      cadComponent,
      schematicComponent,
    })
    if (!spec) continue

    if (!isSymbolDisplayValueCompatible({ schematicComponent, spec })) {
      continue
    }

    const sourcePorts = circuitJson.filter(
      (element): element is SourcePort =>
        element.type === "source_port" &&
        element.source_component_id === sourceComponent.source_component_id,
    )
    if (
      !areSourcePortsCompatibleWithSpec({
        sourcePorts,
        spec,
        requireExactPinCount: true,
      })
    ) {
      continue
    }
    if (
      getInternallyConnectedSourcePortIds({ circuitJson, sourceComponent })
        .length > 0
    ) {
      continue
    }

    const hasCustomCadModel = cadModelPcbComponentIds.has(
      pcbComponent.pcb_component_id,
    )
    const usesIntrinsicFootprint = Boolean(
      (spec.footprintString || spec.hasIntrinsicFootprintProps) &&
        !hasCustomCadModel,
    )
    if (!usesIntrinsicFootprint) {
      const localizedElements = localizePcbComponentElements({
        circuitJson,
        pcbComponent,
      })
      if (!generateFootprintTsx(localizedElements)) {
        continue
      }
    }

    const nativeComponent: NativeBoardComponent = {
      pcbComponentId: pcbComponent.pcb_component_id,
      schematicComponentId: schematicComponent.schematic_component_id,
      spec,
      usesIntrinsicFootprint,
      schX: schematicComponent.center.x,
      schY: schematicComponent.center.y,
      schRotation: getSchematicRotationFromComponent(schematicComponent),
    }

    nativeBoardComponentByPcbComponentId.set(
      pcbComponent.pcb_component_id,
      nativeComponent,
    )
    reconstructedSchematicComponentIds.add(
      schematicComponent.schematic_component_id,
    )
    for (const sourcePort of sourcePorts) {
      nativePcbComponentBySourcePortId.set(
        sourcePort.source_port_id,
        nativeComponent,
      )
    }
  }

  const sourceTracesById = new Map<SourceTraceId, SourceTrace>()
  const reconstructedSchematicSourceTraceIds = new Set<SourceTraceId>()
  const autoroutableNativeSourceTraceIds = new Set<SourceTraceId>()

  for (const element of circuitJson) {
    if (element.type !== "source_trace") continue
    sourceTracesById.set(element.source_trace_id, element)

    if (
      element.connected_source_port_ids.length >= 2 &&
      element.connected_source_net_ids.length === 0 &&
      element.connected_source_port_ids.every((portId) =>
        nativePcbComponentBySourcePortId.has(portId),
      )
    ) {
      reconstructedSchematicSourceTraceIds.add(element.source_trace_id)
      if (
        element.connected_source_port_ids.every(
          (portId) =>
            nativePcbComponentBySourcePortId.get(portId)
              ?.usesIntrinsicFootprint === true,
        )
      ) {
        autoroutableNativeSourceTraceIds.add(element.source_trace_id)
      }
    }
  }

  const pcbTraces = circuitJson.filter(
    (element) => element.type === "pcb_trace",
  )
  const hasViasOrPours = circuitJson.some(
    (element) =>
      element.type === "pcb_via" || element.type === "pcb_copper_pour",
  )
  const canAutorouteAllPcbTraces =
    pcbTraces.length > 0 &&
    !hasViasOrPours &&
    pcbTraces.every(
      (trace) =>
        trace.source_trace_id !== undefined &&
        autoroutableNativeSourceTraceIds.has(trace.source_trace_id),
    )

  return {
    nativeBoardComponentByPcbComponentId,
    reconstructedSchematicComponentIds,
    reconstructedSchematicSourceTraceIds,
    canAutorouteAllPcbTraces,
  }
}
