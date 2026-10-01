import { su } from "@tscircuit/soup-util"
import type { SchematicElementConverter } from "./converter-types"
import { formatElement } from "./format-attributes"

export const convertTraces: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_trace.list()
    .flatMap((schematicTrace) => [
      ...schematicTrace.edges.map((edge) =>
        formatElement("schematicpath", { points: [edge.from, edge.to] }),
      ),
      ...schematicTrace.junctions.map((center) =>
        formatElement("schematiccircle", {
          center,
          radius: 0.03,
          strokeWidth: 0,
          color: "#009600",
          fillColor: "#009600",
          isFilled: true,
        }),
      ),
    ])
