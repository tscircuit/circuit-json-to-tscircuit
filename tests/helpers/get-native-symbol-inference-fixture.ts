import { readFileSync } from "node:fs"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SourcePort,
  SourceTrace,
} from "circuit-json"

export interface NativeSymbolInferenceFixture {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
  schematicPorts: SchematicPort[]
  sourcePorts: SourcePort[]
}

export const getNativeSymbolInferenceFixture = ({
  fixtureName,
  componentName,
}: {
  fixtureName: string
  componentName: string
}): NativeSymbolInferenceFixture => {
  const circuitJson = JSON.parse(
    gunzipSync(
      readFileSync(
        join(
          import.meta.dir,
          "..",
          "fixtures",
          "ti-evms",
          `${fixtureName}.circuit.json.gz`,
        ),
      ),
    ).toString("utf8"),
  ) as CircuitJson
  const sourceComponent = circuitJson.find(
    (element) =>
      element.type === "source_component" &&
      element.name === componentName &&
      circuitJson.some(
        (candidate) =>
          candidate.type === "schematic_component" &&
          candidate.source_component_id === element.source_component_id,
      ),
  )
  if (sourceComponent?.type !== "source_component") {
    throw new Error(`Missing source component ${componentName}`)
  }
  const schematicComponent = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceComponent.source_component_id,
  )
  if (!schematicComponent) {
    throw new Error(`Missing schematic component ${componentName}`)
  }
  return {
    circuitJson,
    schematicComponent,
    schematicPorts: circuitJson.filter(
      (element): element is SchematicPort =>
        element.type === "schematic_port" &&
        element.schematic_component_id ===
          schematicComponent.schematic_component_id,
    ),
    sourcePorts: circuitJson.filter(
      (element): element is SourcePort =>
        element.type === "source_port" &&
        element.source_component_id === sourceComponent.source_component_id,
    ),
  }
}

interface PortTraceAssignment {
  sourcePort: SourcePort
  sourceTraceId: string
}

export const replaceComponentPortTraces = ({
  circuitJson,
  sourcePorts,
  assignments,
}: {
  circuitJson: CircuitJson
  sourcePorts: SourcePort[]
  assignments: PortTraceAssignment[]
}): CircuitJson => {
  const sourcePortIds = new Set(
    sourcePorts.map((sourcePort) => sourcePort.source_port_id),
  )
  const circuitJsonWithoutComponentPorts: CircuitJson = []
  for (const element of circuitJson) {
    if (element.type !== "source_trace") {
      circuitJsonWithoutComponentPorts.push(element)
      continue
    }
    const connectedSourcePortIds = element.connected_source_port_ids.filter(
      (sourcePortId) => !sourcePortIds.has(sourcePortId),
    )
    if (connectedSourcePortIds.length > 0) {
      circuitJsonWithoutComponentPorts.push({
        ...element,
        connected_source_port_ids: connectedSourcePortIds,
      })
    }
  }
  const replacementTraces: SourceTrace[] = assignments.map(
    ({ sourcePort, sourceTraceId }) => ({
      type: "source_trace",
      source_trace_id: sourceTraceId,
      connected_source_port_ids: [sourcePort.source_port_id],
      connected_source_net_ids: [],
    }),
  )
  return [...circuitJsonWithoutComponentPorts, ...replacementTraces]
}
