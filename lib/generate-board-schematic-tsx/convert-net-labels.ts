import { su } from "@tscircuit/soup-util"
import { schematic_text } from "circuit-json"
import { symbols } from "schematic-symbols"
import type { SchematicElementConverter } from "./converter-types"
import { convertSymbolPrimitives } from "./convert-symbol-primitives"
import { formatElement } from "./format-attributes"
import { getNetLabelSymbolToSchematicTransform } from "./get-net-label-symbol-to-schematic-transform"

// Match core's preprocessSelector checks for net names. The validator is not
// exported by @tscircuit/core; runtime regression tests keep these in sync.
// https://github.com/tscircuit/core/blob/main/lib/components/base-components/PrimitiveComponent/preprocessSelector.ts
function canRenderNativeNetLabel(name: string): boolean {
  const selector = `net.${name}`
  if (
    /net\.[^\s>]*\./.test(selector) ||
    /net\.[^\s>]*[+-]/.test(selector) ||
    /net\.[0-9]/.test(selector)
  ) {
    return false
  }
  // A label is one literal name, not a selector expression. Whitespace and CSS
  // punctuation can parse as a different selection even when core accepts it.
  return /^\/?[A-Za-z0-9_]+$/.test(name)
}

export const convertNetLabels: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_net_label.list()
    .flatMap((schematicNetLabel) => {
      const anchorPosition =
        schematicNetLabel.anchor_position ?? schematicNetLabel.center
      const symbolName = schematicNetLabel.symbol_name
      if (symbolName && symbolName in symbols) {
        const symbol = symbols[symbolName as keyof typeof symbols]
        if (symbol)
          return convertSymbolPrimitives({
            symbol,
            symbolToSchematicTransform: getNetLabelSymbolToSchematicTransform({
              symbol,
              schematicAnchorPosition: anchorPosition,
            }),
            reference: schematicNetLabel.text,
            displayText: schematicNetLabel.text,
          })
      }
      // Native labels own their outline, typography and anchor-side layout.
      // Core resolves net names through selectors; retain the text fallback
      // for names that cannot safely be used by that runtime path.
      if (
        !symbolName &&
        schematicNetLabel.anchor_position &&
        canRenderNativeNetLabel(schematicNetLabel.text)
      ) {
        return [
          formatElement("netlabel", {
            net: schematicNetLabel.text,
            schX: anchorPosition.x,
            schY: anchorPosition.y,
            anchorSide: schematicNetLabel.anchor_side,
          }),
        ]
      }
      return [
        formatElement("schematictext", {
          text: schematicNetLabel.text,
          schX: anchorPosition.x,
          schY: anchorPosition.y,
          fontSize: schematic_text.shape.font_size.parse(undefined),
        }),
      ]
    })
