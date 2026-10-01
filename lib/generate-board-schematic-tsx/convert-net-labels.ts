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
    .flatMap((schematic_net_label) => {
      const anchor_position =
        schematic_net_label.anchor_position ?? schematic_net_label.center
      const symbol_name = schematic_net_label.symbol_name
      if (symbol_name && symbol_name in symbols) {
        const symbol = symbols[symbol_name as keyof typeof symbols]
        if (symbol)
          return convertSymbolPrimitives({
            symbol,
            symbolToSchematicTransform: translate(
              anchor_position.x,
              anchor_position.y,
            ),
            reference: "",
            displayText: schematic_net_label.text,
          })
      }
      return [
        formatElement("schematictext", {
          text: schematic_net_label.text,
          schX: anchor_position.x,
          schY: anchor_position.y,
          fontSize: schematic_text.shape.font_size.parse(undefined),
        }),
      ]
    })
