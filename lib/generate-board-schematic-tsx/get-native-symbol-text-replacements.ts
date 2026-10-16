import type {
  AnyCircuitElement,
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SchematicText,
} from "circuit-json"
import { resolveNativeSchematicSymbolName } from "./resolve-native-schematic-symbol-name"
import { isPinDesignatorForPort } from "./is-pin-designator-for-port"

export type SchematicComponentId = SchematicComponent["schematic_component_id"]
export type SchematicPortId = SchematicPort["schematic_port_id"]
export type SchematicTextId = SchematicText["schematic_text_id"]
type CircuitSourceComponent = Extract<
  AnyCircuitElement,
  { type: "source_component" }
>

export interface NativeSymbolTextReplacement {
  schematicComponentId: SchematicComponentId
  importedTextIds: Set<SchematicTextId>
  replacedPinPortIds: Set<SchematicPortId>
  replacesReference: boolean
  replacesDisplayText: boolean
}

const distanceBetween = (
  firstPoint: { x: number; y: number },
  secondPoint: { x: number; y: number },
): number =>
  Math.hypot(firstPoint.x - secondPoint.x, firstPoint.y - secondPoint.y)

const hasMultipleNativeSymbolUnits = ({
  circuitJson,
  schematicComponent,
  symbolName,
}: {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
  symbolName: string
}): boolean =>
  circuitJson.filter(
    (candidate): candidate is SchematicComponent =>
      candidate.type === "schematic_component" &&
      candidate.source_component_id ===
        schematicComponent.source_component_id &&
      !candidate.symbol_name &&
      resolveNativeSchematicSymbolName({
        circuitJson,
        schematicComponent: candidate,
      }) === symbolName,
  ).length > 1

export const getNativeSymbolTextReplacements = (
  circuitJson: CircuitJson,
): NativeSymbolTextReplacement[] => {
  const schematicTexts = circuitJson.filter(
    (element): element is SchematicText =>
      element.type === "schematic_text" &&
      element.schematic_component_id === undefined,
  )
  return circuitJson.flatMap((element) => {
    if (element.type !== "schematic_component" || element.symbol_name) return []
    const symbolName = resolveNativeSchematicSymbolName({
      circuitJson,
      schematicComponent: element,
    })
    if (!symbolName) return []

    const sourceComponent = circuitJson.find(
      (candidate): candidate is CircuitSourceComponent =>
        candidate.type === "source_component" &&
        candidate.source_component_id === element.source_component_id,
    )
    const reference = sourceComponent?.display_name ?? sourceComponent?.name
    const displayTexts = new Set(
      [sourceComponent?.display_value, element.symbol_display_value].filter(
        (displayText): displayText is string => Boolean(displayText),
      ),
    )
    const labelSearchDistance =
      Math.max(element.size.width, element.size.height) / 2 + 0.3
    const referenceTexts = schematicTexts.filter(
      (schematicText) =>
        schematicText.text === reference &&
        distanceBetween(schematicText.position, element.center) <=
          labelSearchDistance,
    )
    const displayValueTexts = hasMultipleNativeSymbolUnits({
      circuitJson,
      schematicComponent: element,
      symbolName,
    })
      ? []
      : schematicTexts.filter(
          (schematicText) =>
            displayTexts.has(schematicText.text) &&
            distanceBetween(schematicText.position, element.center) <=
              labelSearchDistance,
        )
    const schematicPorts = circuitJson.filter(
      (candidate): candidate is SchematicPort =>
        candidate.type === "schematic_port" &&
        candidate.schematic_component_id === element.schematic_component_id,
    )
    const replacedPinPortIds = new Set<SchematicPortId>()
    const pinDesignatorTexts = schematicPorts.flatMap((schematicPort) => {
      const matches = schematicTexts.filter((schematicText) =>
        isPinDesignatorForPort({
          schematicText,
          schematicPort,
          schematicComponent: element,
        }),
      )
      if (matches.length > 0)
        replacedPinPortIds.add(schematicPort.schematic_port_id)
      return matches
    })
    return [
      {
        schematicComponentId: element.schematic_component_id,
        importedTextIds: new Set(
          [...referenceTexts, ...displayValueTexts, ...pinDesignatorTexts].map(
            (schematicText) => schematicText.schematic_text_id,
          ),
        ),
        replacedPinPortIds,
        replacesReference: referenceTexts.length > 0,
        replacesDisplayText: displayValueTexts.length > 0,
      },
    ]
  })
}
