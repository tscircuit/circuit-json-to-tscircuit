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
            reference: schematicNetLabel.text,
            displayText: schematicNetLabel.text,
          })
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
