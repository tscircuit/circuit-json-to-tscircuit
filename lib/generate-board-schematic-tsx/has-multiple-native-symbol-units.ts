import type { CircuitJson, SchematicComponent } from "circuit-json"
import { resolveNativeSchematicSymbolName } from "./resolve-native-schematic-symbol-name"

export const hasMultipleNativeSymbolUnits = ({
  circuitJson,
  schematicComponent,
  symbolName,
}: {
  circuitJson: CircuitJson
  schematicComponent: SchematicComponent
  symbolName: string
}): boolean =>
  circuitJson.filter(
    (candidate): candidate is SchematicComponent =>
      candidate.type === "schematic_component" &&
      candidate.source_component_id ===
        schematicComponent.source_component_id &&
      !candidate.symbol_name &&
      resolveNativeSchematicSymbolName({
        circuitJson,
        schematicComponent: candidate,
      }) === symbolName,
  ).length > 1
