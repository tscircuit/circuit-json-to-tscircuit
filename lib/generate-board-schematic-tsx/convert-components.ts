import { su } from "@tscircuit/soup-util"
import { symbols } from "schematic-symbols"
import type { SchematicElementConverter } from "./converter-types"
import { getSymbolToSchematicTransform } from "./get-symbol-to-schematic-transform"
import { convertSymbolPrimitives } from "./convert-symbol-primitives"
import { convertBoxComponent } from "./convert-box-components"

export const convertComponents: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_component.list()
    .flatMap((schematic_component) => {
      const symbol_name = schematic_component.symbol_name
      if (symbol_name) {
        if (!(symbol_name in symbols))
          throw new Error(`Unsupported schematic symbol: ${symbol_name}`)
        const symbol = symbols[symbol_name as keyof typeof symbols]
        if (!symbol)
          throw new Error(`Missing schematic symbol geometry: ${symbol_name}`)
        const source_component = su(circuitJson).source_component.get(
          schematic_component.source_component_id ?? "",
        )
        const symbolToSchematicTransform = getSymbolToSchematicTransform({
          symbol,
          schematic_component,
          schematicPorts: su(circuitJson).schematic_port.list({
            schematic_component_id: schematic_component.schematic_component_id,
          }),
          sourcePorts: su(circuitJson).source_port.list(),
        })
        return convertSymbolPrimitives({
          symbol,
          symbolToSchematicTransform,
          reference:
            source_component?.display_name ?? source_component?.name ?? "",
          displayText: schematic_component.symbol_display_value ?? "",
        })
      }
      // Imported custom components already carry their drawing primitives.
      return schematic_component.is_box_with_pins
        ? convertBoxComponent(schematic_component, circuitJson)
        : []
    })
