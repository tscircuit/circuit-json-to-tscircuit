import { su } from "@tscircuit/soup-util"
import type { SchematicElementConverter } from "./converter-types"

// Preserve the imported drawing; electrical source connections are not rebuilt.
export const convertTraces: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_trace.list()
    .flatMap((schematic_trace) => [
      ...schematic_trace.edges.map(
        (edge) =>
          `<schematicpath points={${JSON.stringify([edge.from, edge.to])}} strokeWidth={0.02} strokeColor="#008800" />`,
      ),
      ...schematic_trace.junctions.map(
        (center) =>
          `<schematiccircle center={${JSON.stringify(center)}} radius={0.04} strokeWidth={0} color="#008800" fillColor="#008800" isFilled />`,
      ),
    ])
