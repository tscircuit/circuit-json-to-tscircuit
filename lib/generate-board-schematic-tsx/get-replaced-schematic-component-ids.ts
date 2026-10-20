import type { CircuitJson } from "circuit-json"
import { symbols } from "schematic-symbols"
import type { SchematicComponentId } from "./get-schematic-primitives-in-render-order"
import { resolveNativeSchematicSymbolName } from "./resolve-native-schematic-symbol-name"

export const getReplacedSchematicComponentIds = (
  circuitJson: CircuitJson,
): Set<SchematicComponentId> => {
  const replacedSchematicComponentIds = new Set<SchematicComponentId>()
  for (const element of circuitJson) {
    if (element.type !== "schematic_component" || element.symbol_name) continue
    const inferredSymbolName = resolveNativeSchematicSymbolName({
      circuitJson,
      schematicComponent: element,
    })
    if (inferredSymbolName && inferredSymbolName in symbols) {
      replacedSchematicComponentIds.add(element.schematic_component_id)
    }
  }
  return replacedSchematicComponentIds
}
