import type {
  AnyCircuitElement,
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SchematicText,
} from "circuit-json"
import { getDisplayValueTextLayout } from "./get-display-value-text-layout"
import type {
  NativeSymbolTextReplacement,
  SchematicComponentId,
  SchematicPortId,
  SchematicTextId,
} from "./get-native-symbol-text-replacements"
import {
  getNearestSchematicText,
  isSchematicTextWithinComponentLabelRange,
} from "./get-nearest-schematic-text"
import { hasMultipleNativeSymbolUnits } from "./has-multiple-native-symbol-units"
import { hasPreservedPackageValueText } from "./has-preserved-package-value-text"
import { isPinDesignatorForPort } from "./is-pin-designator-for-port"
import { resolveNativeSchematicSymbolName } from "./resolve-native-schematic-symbol-name"

type CircuitSourceComponent = Extract<
  AnyCircuitElement,
  { type: "source_component" }
>

export interface NativeSymbolTextReplacementCandidate
  extends NativeSymbolTextReplacement {
  sourceComponentId: SchematicComponent["source_component_id"]
  symbolName: string
  displayValueTextIds: Set<SchematicTextId>
  preserveImportedDisplayValue: boolean
  isMultiUnitSymbol: boolean
  hasPreservedPackageValueText: boolean
}

interface CandidateContext {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
  unownedSchematicTexts: SchematicText[]
  replacedSchematicComponentIds: Set<SchematicComponentId>
  schematicComponents: SchematicComponent[]
}

const distanceBetween = (
  firstPoint: { x: number; y: number },
  secondPoint: { x: number; y: number },
): number =>
  Math.hypot(firstPoint.x - secondPoint.x, firstPoint.y - secondPoint.y)

export const getNativeSymbolTextReplacementCandidate = (
  context: CandidateContext,
): NativeSymbolTextReplacementCandidate | undefined => {
  const { circuitJson, schematicComponent, unownedSchematicTexts } = context
  if (schematicComponent.symbol_name) return undefined
  const symbolName = resolveNativeSchematicSymbolName({
    circuitJson,
    schematicComponent,
  })
  if (!symbolName) return undefined

  const sourceComponent = circuitJson.find(
    (candidate): candidate is CircuitSourceComponent =>
      candidate.type === "source_component" &&
      candidate.source_component_id === schematicComponent.source_component_id,
  )
  const reference = sourceComponent?.display_name ?? sourceComponent?.name
  const displayTexts = new Set(
    [
      sourceComponent?.display_value,
      schematicComponent.symbol_display_value,
    ].filter((displayText): displayText is string => Boolean(displayText)),
  )
  const labelSearchDistance =
    Math.max(schematicComponent.size.width, schematicComponent.size.height) /
      2 +
    0.3
  const referenceTexts = unownedSchematicTexts.filter(
    (schematicText) =>
      schematicText.text === reference &&
      distanceBetween(schematicText.position, schematicComponent.center) <=
        labelSearchDistance,
  )
  const displayValueTextsInRange = unownedSchematicTexts.filter(
    (schematicText) =>
      displayTexts.has(schematicText.text) &&
      isSchematicTextWithinComponentLabelRange({
        schematicText,
        schematicComponent,
        maximumDistance: labelSearchDistance,
      }),
  )
  const displayValueTextLayout = getDisplayValueTextLayout({
    schematicTexts: displayValueTextsInRange,
    schematicComponent,
  })
  const schematicPorts = circuitJson.filter(
    (candidate): candidate is SchematicPort =>
      candidate.type === "schematic_port" &&
      candidate.schematic_component_id ===
        schematicComponent.schematic_component_id,
  )
  const replacedPinPortIds = new Set<SchematicPortId>()
  const pinDesignatorTexts = schematicPorts.flatMap((schematicPort) => {
    const matches = unownedSchematicTexts.filter((schematicText) =>
      isPinDesignatorForPort({
        schematicText,
        schematicPort,
        schematicComponent,
      }),
    )
    if (matches.length > 0)
      replacedPinPortIds.add(schematicPort.schematic_port_id)
    return matches
  })

  return {
    schematicComponentId: schematicComponent.schematic_component_id,
    importedTextIds: new Set(
      [
        ...referenceTexts,
        ...displayValueTextLayout.replacementTexts,
        ...pinDesignatorTexts,
      ].map((schematicText) => schematicText.schematic_text_id),
    ),
    replacedPinPortIds,
    replacesReference: referenceTexts.length > 0,
    includeNativeDisplayText: false,
    referenceFontSize: getNearestSchematicText({
      schematicTexts: referenceTexts,
      schematicComponent,
    })?.font_size,
    displayTextFontSize: displayValueTextLayout.nearestText?.font_size,
    sourceComponentId: schematicComponent.source_component_id,
    symbolName,
    displayValueTextIds: new Set(
      displayValueTextLayout.replacementTexts.map(
        (schematicText) => schematicText.schematic_text_id,
      ),
    ),
    preserveImportedDisplayValue: displayValueTextLayout.preserveImportedText,
    isMultiUnitSymbol: hasMultipleNativeSymbolUnits({
      circuitJson,
      schematicComponent,
      symbolName,
    }),
    hasPreservedPackageValueText: hasPreservedPackageValueText({
      circuitJson,
      schematicComponent,
      schematicComponents: context.schematicComponents,
      replacedSchematicComponentIds: context.replacedSchematicComponentIds,
      displayTexts,
    }),
  }
}
