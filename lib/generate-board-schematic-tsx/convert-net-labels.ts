import { su } from "@tscircuit/soup-util"
import { symbols, type SchSymbol } from "schematic-symbols"
import { translate } from "transformation-matrix"
import type { SchematicElementConverter } from "./converter-types"
import { convertSymbolPrimitives } from "./convert-symbol-primitives"

const symbolLibrary: Partial<Record<string, SchSymbol>> = symbols

export const convertNetLabels: SchematicElementConverter = (circuitJson) => {
  const schematicElements: string[] = []
  for (const schematic_net_label of su(
    circuitJson,
  ).schematic_net_label.list()) {
    const anchor_position =
      schematic_net_label.anchor_position ?? schematic_net_label.center
    const symbol = schematic_net_label.symbol_name
      ? symbolLibrary[schematic_net_label.symbol_name]
      : undefined
    if (symbol) {
      schematicElements.push(
        ...convertSymbolPrimitives({
          symbol,
          symbolToSchematicTransform: translate(
            anchor_position.x,
            anchor_position.y,
          ),
          reference: "",
          displayText: schematic_net_label.text,
        }),
      )
    } else {
      schematicElements.push(
        `<schematictext text={${JSON.stringify(schematic_net_label.text)}} schX={${anchor_position.x}} schY={${anchor_position.y}} fontSize={0.18} color="#006464" />`,
      )
    }
  }
  return schematicElements
}
