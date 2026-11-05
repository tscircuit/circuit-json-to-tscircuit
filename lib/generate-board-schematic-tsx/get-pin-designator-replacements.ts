import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SchematicText,
  SourcePort,
} from "circuit-json"
import { getSourcePinDesignator } from "./get-source-pin-designator"
import { isPinDesignatorForPort } from "./is-pin-designator-for-port"

export const getPinDesignatorReplacements = ({
  circuitJson,
  schematicComponent,
  schematicPorts,
}: {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
  schematicPorts: SchematicPort[]
}): {
  pinDesignatorTexts: SchematicText[]
  replacedPinPortIds: Set<SchematicPort["schematic_port_id"]>
} => {
  const sourcePorts = circuitJson.filter(
    (candidate): candidate is SourcePort =>
      candidate.type === "source_port" &&
      candidate.source_component_id === schematicComponent.source_component_id,
  )
  const componentPinTexts = circuitJson.filter(
    (candidate): candidate is SchematicText =>
      candidate.type === "schematic_text" &&
      (candidate.schematic_component_id === undefined ||
        candidate.schematic_component_id ===
          schematicComponent.schematic_component_id),
  )
  const replacedPinPortIds = new Set<SchematicPort["schematic_port_id"]>()
  const pinDesignatorTexts = schematicPorts.flatMap((schematicPort) => {
    const sourcePort = sourcePorts.find(
      (candidate) => candidate.source_port_id === schematicPort.source_port_id,
    )
    if (!sourcePort) return []
    const pinDesignator = getSourcePinDesignator({
      sourcePort,
      schematicPort,
    })
    if (!pinDesignator) return []
    const matchingPinTexts = componentPinTexts.filter((schematicText) =>
      isPinDesignatorForPort({
        schematicText,
        schematicPort,
        schematicComponent,
        pinDesignator,
      }),
    )
    if (matchingPinTexts.length > 0) {
      replacedPinPortIds.add(schematicPort.schematic_port_id)
    }
    return matchingPinTexts
  })

  return { pinDesignatorTexts, replacedPinPortIds }
}
