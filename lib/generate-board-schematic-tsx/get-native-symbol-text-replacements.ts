import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
  SchematicText,
} from "circuit-json"
import {
  type NativeSymbolTextReplacementCandidate,
  getNativeSymbolTextReplacementCandidate,
} from "./get-native-symbol-text-replacement-candidate"
import { getReplacedSchematicComponentIds } from "./get-replaced-schematic-component-ids"

export type SchematicComponentId = SchematicComponent["schematic_component_id"]
export type SchematicPortId = SchematicPort["schematic_port_id"]
export type SchematicTextId = SchematicText["schematic_text_id"]

export interface NativeSymbolTextReplacement {
  schematicComponentId: SchematicComponentId
  importedTextIds: Set<SchematicTextId>
  replacedPinPortIds: Set<SchematicPortId>
  replacesReference: boolean
  includeNativeDisplayText: boolean
  referenceFontSize?: number
  displayTextFontSize?: number
}

const isFirstUnitWithDisplayValue = ({
  candidate,
  allCandidates,
}: {
  candidate: NativeSymbolTextReplacementCandidate
  allCandidates: NativeSymbolTextReplacementCandidate[]
}): boolean =>
  allCandidates.find(
    (otherCandidate) =>
      otherCandidate.sourceComponentId === candidate.sourceComponentId &&
      otherCandidate.symbolName === candidate.symbolName &&
      otherCandidate.displayValueTextIds.size > 0,
  )?.schematicComponentId === candidate.schematicComponentId

const shouldPreserveImportedDisplayValue = (
  candidate: NativeSymbolTextReplacementCandidate,
): boolean =>
  candidate.preserveImportedDisplayValue ||
  candidate.symbolName.startsWith("n_channel_power_mosfet_5_pin_gate_")

export const getNativeSymbolTextReplacements = (
  circuitJson: CircuitJson,
): NativeSymbolTextReplacement[] => {
  const unownedSchematicTexts = circuitJson.filter(
    (element): element is SchematicText =>
      element.type === "schematic_text" &&
      element.schematic_component_id === undefined,
  )
  const replacedSchematicComponentIds =
    getReplacedSchematicComponentIds(circuitJson)
  const schematicComponents = circuitJson.filter(
    (element): element is SchematicComponent =>
      element.type === "schematic_component",
  )
  const candidates = schematicComponents.flatMap((schematicComponent) => {
    const candidate = getNativeSymbolTextReplacementCandidate({
      circuitJson,
      schematicComponent,
      unownedSchematicTexts,
      replacedSchematicComponentIds,
      schematicComponents,
    })
    return candidate ? [candidate] : []
  })

  return candidates.map((candidate) => {
    const preserveImportedDisplayValue =
      shouldPreserveImportedDisplayValue(candidate)
    return {
      schematicComponentId: candidate.schematicComponentId,
      importedTextIds: preserveImportedDisplayValue
        ? new Set(
            [...candidate.importedTextIds].filter(
              (schematicTextId) =>
                !candidate.displayValueTextIds.has(schematicTextId),
            ),
          )
        : candidate.importedTextIds,
      replacedPinPortIds: candidate.replacedPinPortIds,
      replacesReference: candidate.replacesReference,
      includeNativeDisplayText:
        !preserveImportedDisplayValue &&
        candidate.displayValueTextIds.size > 0 &&
        (!candidate.isMultiUnitSymbol ||
          (!candidate.hasPreservedPackageValueText &&
            isFirstUnitWithDisplayValue({
              candidate,
              allCandidates: candidates,
            }))),
      referenceFontSize: candidate.referenceFontSize,
      displayTextFontSize: candidate.displayTextFontSize,
    }
  })
}
