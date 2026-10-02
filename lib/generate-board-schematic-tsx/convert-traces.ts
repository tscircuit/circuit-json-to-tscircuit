import { su } from "@tscircuit/soup-util"
import type { SchematicElementConverter } from "./converter-types"
import { formatElement } from "./format-attributes"

const SCHEMATIC_WIRE_COLOR = "#009600"

export const convertTraces: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_trace.list()
    .flatMap((schematicTrace) => [
      ...schematicTrace.edges.map((edge) =>
        formatElement("schematicpath", {
          points: [edge.from, edge.to],
          strokeColor: SCHEMATIC_WIRE_COLOR,
        }),
      ),
      ...schematicTrace.junctions.map((center) =>
        formatElement("schematiccircle", {
          center,
          radius: 0.03,
          color: "#008800",
          fillColor: "#008800",
          isFilled: true,
        }),
      ),
    ])
