import { su } from "@tscircuit/soup-util"
import { symbols } from "schematic-symbols"
import type { SchematicElementConverter } from "./converter-types"
import { getSymbolToSchematicTransform } from "./get-symbol-to-schematic-transform"
import { convertSymbolPrimitives } from "./convert-symbol-primitives"
import { convertBoxComponent } from "./convert-box-components"
import { resolveNativeSchematicSymbolName } from "./resolve-native-schematic-symbol-name"
import { getNativeSymbolTextReplacements } from "./get-native-symbol-text-replacements"
import { matchSymbolPortsByPinIdentity } from "./match-symbol-ports-by-pin-identity"
import { convertNativeSymbolPinNumbers } from "./convert-native-symbol-pin-numbers"
import { COMPONENT_OUTLINE_COLOR } from "./get-schematic-primitive-paint"

export const convertComponents: SchematicElementConverter = (circuitJson) => {
  const textReplacements = getNativeSymbolTextReplacements(circuitJson)
  return su(circuitJson)
    .schematic_component.list()
    .flatMap((schematicComponent) => {
      const symbolName = resolveNativeSchematicSymbolName({
        circuitJson,
        schematicComponent,
      })
      if (symbolName && symbolName in symbols) {
        const symbol = symbols[symbolName as keyof typeof symbols]
        if (!symbol) return []
        const isInferredSymbol = !schematicComponent.symbol_name
        const sourceComponent = su(circuitJson).source_component.get(
          schematicComponent.source_component_id ?? "",
        )
        const schematicPorts = su(circuitJson).schematic_port.list({
          schematic_component_id: schematicComponent.schematic_component_id,
        })
        const sourcePorts = su(circuitJson).source_port.list({
          source_component_id: schematicComponent.source_component_id,
        })
        const symbolToSchematicTransform = getSymbolToSchematicTransform({
          symbol,
          schematicComponent,
          schematicPorts,
          sourcePorts,
        })
        const textReplacement = textReplacements.find(
          (replacement) =>
            replacement.schematicComponentId ===
            schematicComponent.schematic_component_id,
        )
        const portMatches = matchSymbolPortsByPinIdentity({
          schematicPorts,
          sourcePorts,
          symbol,
        })
        return [
          ...convertSymbolPrimitives({
            symbol,
            symbolToSchematicTransform,
            reference:
              sourceComponent?.display_name ?? sourceComponent?.name ?? "",
            displayText:
              sourceComponent?.display_value ??
              schematicComponent.symbol_display_value ??
              "",
            includeReference:
              !isInferredSymbol || textReplacement?.replacesReference,
            includeDisplayText:
              !isInferredSymbol || textReplacement?.includeNativeDisplayText,
            referenceFontSize: textReplacement?.referenceFontSize,
            displayTextFontSize: textReplacement?.displayTextFontSize,
            filledPrimitiveColor: isInferredSymbol
              ? COMPONENT_OUTLINE_COLOR
              : undefined,
          }),
          ...(isInferredSymbol && textReplacement
            ? convertNativeSymbolPinNumbers({
                symbol,
                symbolToSchematicTransform,
                portMatches,
                replacedPinPortIds: textReplacement.replacedPinPortIds,
              })
            : []),
        ]
      }
      // Imported custom components already carry their drawing primitives.
      return schematicComponent.is_box_with_pins
        ? convertBoxComponent({ circuitJson, schematicComponent })
        : []
    })
}
