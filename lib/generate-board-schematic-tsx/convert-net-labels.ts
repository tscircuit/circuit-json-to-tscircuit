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
      // Plain labels grow away from the connection anchor. Centering the text
      // on that anchor puts half of the name on the wire (notably SDA/SCL).
      if (!symbolName && schematicNetLabel.anchor_position) {
        const side = schematicNetLabel.anchor_side
        const direction = {
          left: { x: 1, y: 0, rotation: 0, anchor: "center_left" },
          right: { x: -1, y: 0, rotation: 0, anchor: "center_right" },
          top: { x: 0, y: -1, rotation: -90, anchor: "center_left" },
          bottom: { x: 0, y: 1, rotation: 90, anchor: "center_left" },
        }[side]
        // Match circuit-to-svg's net-label font and half-font-size inset.
        const fontSize = 0.18
        return [
          formatElement("schematictext", {
            text: schematicNetLabel.text,
            schX: anchorPosition.x + direction.x * fontSize * 0.5,
            schY: anchorPosition.y + direction.y * fontSize * 0.5,
            anchor: direction.anchor,
            schRotation: direction.rotation,
            fontSize,
            color: "#840000",
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
