import { su } from "@tscircuit/soup-util"
import { schematic_text } from "circuit-json"
import { symbols } from "schematic-symbols"
import { translate } from "transformation-matrix"
import type { SchematicElementConverter } from "./converter-types"
import { convertSymbolPrimitives } from "./convert-symbol-primitives"
import { formatElement } from "./format-attributes"

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
            symbolToSchematicTransform: translate(
              anchorPosition.x,
              anchorPosition.y,
            ),
            reference: "",
            displayText: schematicNetLabel.text,
          })
      }
      // Native labels own their outline, typography and anchor-side layout.
      // Core resolves net names through selectors; retain the text fallback
      // for names that cannot safely be used by that runtime path.
      if (
        !symbolName &&
        schematicNetLabel.anchor_position &&
        /^[A-Za-z0-9_/-]+$/.test(schematicNetLabel.text)
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
