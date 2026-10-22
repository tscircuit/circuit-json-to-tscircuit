import { applyToPoint, type Matrix } from "transformation-matrix"
import type { SchematicSymbolPortMatch } from "./match-symbol-ports-by-pin-identity"
import { formatElement } from "./format-attributes"
import {
  COMPONENT_OUTLINE_COLOR,
  SYMBOL_OUTLINE_STROKE_WIDTH,
} from "./get-schematic-primitive-paint"

const PORT_ALIGNMENT_TOLERANCE = 0.000001

export const convertNativeSymbolPortExtensions = ({
  symbolToSchematicTransform,
  portMatches,
}: {
  symbolToSchematicTransform: Matrix
  portMatches: SchematicSymbolPortMatch[]
}): string[] =>
  portMatches.flatMap(({ schematicPort, symbolPort }) => {
    const renderedSymbolPort = applyToPoint(
      symbolToSchematicTransform,
      symbolPort,
    )
    const importedPortCenter = schematicPort.center
    const portGap = Math.hypot(
      renderedSymbolPort.x - importedPortCenter.x,
      renderedSymbolPort.y - importedPortCenter.y,
    )
    if (portGap < PORT_ALIGNMENT_TOLERANCE) return []

    return [
      formatElement("schematicline", {
        x1: renderedSymbolPort.x,
        y1: renderedSymbolPort.y,
        x2: importedPortCenter.x,
        y2: importedPortCenter.y,
        strokeWidth: SYMBOL_OUTLINE_STROKE_WIDTH,
        color: COMPONENT_OUTLINE_COLOR,
      }),
    ]
  })
