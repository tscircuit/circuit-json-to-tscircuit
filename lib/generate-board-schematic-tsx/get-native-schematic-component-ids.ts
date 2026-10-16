import type { CircuitJson } from "circuit-json"
import { symbols } from "schematic-symbols"
import type { SchematicComponentId } from "./get-schematic-primitives-in-render-order"
import { resolveNativeSchematicSymbolName } from "./resolve-native-schematic-symbol-name"

export const getNativeSchematicComponentIds = (
  circuitJson: CircuitJson,
): Set<SchematicComponentId> => {
  const nativeComponentIds = new Set<SchematicComponentId>()
  for (const element of circuitJson) {
    if (element.type !== "schematic_component") continue
    const symbolName = resolveNativeSchematicSymbolName({
      circuitJson,
      schematicComponent: element,
    })
    if (symbolName && symbolName in symbols) {
      nativeComponentIds.add(element.schematic_component_id)
    }
  }
  return nativeComponentIds
}
