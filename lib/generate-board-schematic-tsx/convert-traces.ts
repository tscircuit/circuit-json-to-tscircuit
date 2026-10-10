import { su } from "@tscircuit/soup-util"
import type { SchematicElementConverter } from "./converter-types"
import { formatElement } from "./format-attributes"

const SCHEMATIC_WIRE_COLOR = "#009600"
const SCHEMATIC_WIRE_STROKE_WIDTH = 0.02

export const convertTraces: SchematicElementConverter = (circuitJson) =>
  su(circuitJson)
    .schematic_trace.list()
    .flatMap((schematicTrace) => [
      ...schematicTrace.edges.map((edge) =>
        formatElement("schematicline", {
          x1: edge.from.x,
          y1: edge.from.y,
          x2: edge.to.x,
          y2: edge.to.y,
          strokeWidth: SCHEMATIC_WIRE_STROKE_WIDTH,
          color: SCHEMATIC_WIRE_COLOR,
        }),
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
