import { su } from "@tscircuit/soup-util"
import type { SchematicElementConverter } from "./converter-types"
import { formatElement } from "./format-attributes"

// Circuit JSON carries wire geometry, but no drawing color or junction radius.
// Preserve the edges and let native schematic paths choose their styling.
export const convertTraces: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_trace.list()
    .flatMap((schematicTrace) =>
      schematicTrace.edges.map((edge) =>
        formatElement("schematicpath", { points: [edge.from, edge.to] }),
      ),
    )
