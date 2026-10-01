import { su } from "@tscircuit/soup-util"
import { symbols } from "schematic-symbols"
import type { SchematicElementConverter } from "./converter-types"
import { getSymbolToSchematicTransform } from "./get-symbol-to-schematic-transform"
import { convertSymbolPrimitives } from "./convert-symbol-primitives"
import { convertBoxComponent } from "./convert-box-components"

export const convertComponents: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_component.list()
    .flatMap((schematicComponent) => {
      const symbolName = schematicComponent.symbol_name
      if (symbolName && symbolName in symbols) {
        const symbol = symbols[symbolName as keyof typeof symbols]
        if (!symbol) return []
        const sourceComponent = su(circuitJson).source_component.get(
          schematicComponent.source_component_id ?? "",
        )
        const symbolToSchematicTransform = getSymbolToSchematicTransform({
          symbol,
          schematicComponent,
          schematicPorts: su(circuitJson).schematic_port.list({
            schematic_component_id: schematicComponent.schematic_component_id,
          }),
          sourcePorts: su(circuitJson).source_port.list(),
        })
        return convertSymbolPrimitives({
          symbol,
          symbolToSchematicTransform,
          reference:
            sourceComponent?.display_name ?? sourceComponent?.name ?? "",
          displayText: schematicComponent.symbol_display_value ?? "",
        })
      }
      // Imported custom components already carry their drawing primitives.
      return schematicComponent.is_box_with_pins
        ? convertBoxComponent({ circuitJson, schematicComponent })
        : []
    })
