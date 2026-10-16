import type { SchSymbol } from "schematic-symbols"
import { applyToPoint, type Matrix } from "transformation-matrix"
import type { SchematicPortId } from "./get-native-symbol-text-replacements"
import type { SchematicSymbolPortMatch } from "./match-symbol-ports-by-pin-identity"
import { formatElement } from "./format-attributes"

const PIN_TEXT_FONT_SIZE = 0.15
const PIN_TEXT_COLOR = "#a90000"
const PIN_NUMBER_BASELINE_OFFSET = 0.02
const SYMBOL_POINT_TOLERANCE = 0.000001

const pointsMatch = (
  firstPoint: { x: number; y: number },
  secondPoint: { x: number; y: number },
): boolean =>
  Math.hypot(firstPoint.x - secondPoint.x, firstPoint.y - secondPoint.y) <
  SYMBOL_POINT_TOLERANCE

const getPortLeadInnerPoint = ({
  symbol,
  symbolPort,
}: {
  symbol: SchSymbol
  symbolPort: SchSymbol["ports"][number]
}): { x: number; y: number } | undefined => {
  for (const primitive of symbol.primitives) {
    if (primitive.type !== "path" || primitive.points.length < 2) continue
    const firstPoint = primitive.points[0]!
    const lastPoint = primitive.points.at(-1)!
    if (pointsMatch(firstPoint, symbolPort)) return primitive.points[1]
    if (pointsMatch(lastPoint, symbolPort)) return primitive.points.at(-2)
  }
  return undefined
}

export const convertNativeSymbolPinNumbers = ({
  symbol,
  symbolToSchematicTransform,
  portMatches,
  replacedPinPortIds,
}: {
  symbol: SchSymbol
  symbolToSchematicTransform: Matrix
  portMatches: SchematicSymbolPortMatch[]
  replacedPinPortIds: Set<SchematicPortId>
}): string[] =>
  portMatches.flatMap(({ schematicPort, symbolPort }) => {
    if (
      schematicPort.pin_number === undefined ||
      !replacedPinPortIds.has(schematicPort.schematic_port_id)
    ) {
      return []
    }
    const leadInnerPoint = getPortLeadInnerPoint({ symbol, symbolPort })
    if (!leadInnerPoint) return []
    const portCenter = applyToPoint(symbolToSchematicTransform, symbolPort)
    const leadInnerCenter = applyToPoint(
      symbolToSchematicTransform,
      leadInnerPoint,
    )
    const pinNumberPosition = {
      x: (portCenter.x + leadInnerCenter.x) / 2,
      y: (portCenter.y + leadInnerCenter.y) / 2,
    }
    const isVerticalLead =
      Math.abs(leadInnerCenter.y - portCenter.y) >
      Math.abs(leadInnerCenter.x - portCenter.x)
    if (isVerticalLead) pinNumberPosition.x -= PIN_NUMBER_BASELINE_OFFSET
    else pinNumberPosition.y += PIN_NUMBER_BASELINE_OFFSET
    return [
      formatElement("schematictext", {
        text: String(schematicPort.pin_number),
        schX: pinNumberPosition.x,
        schY: pinNumberPosition.y,
        anchor: "bottom_center",
        fontSize: PIN_TEXT_FONT_SIZE,
        color: PIN_TEXT_COLOR,
        schRotation: isVerticalLead ? -90 : undefined,
      }),
    ]
  })
