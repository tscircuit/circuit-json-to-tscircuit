import type { SchSymbol } from "schematic-symbols"
import type { SourcePort } from "circuit-json"
import { applyToPoint, type Matrix } from "transformation-matrix"
import type { SchematicPortId } from "./get-native-symbol-text-replacements"
import { getNativeSymbolPinNumberPosition } from "./get-native-symbol-pin-number-position"
import { hasNearbyParallelPort } from "./has-nearby-parallel-port"
import type { SchematicSymbolPortMatch } from "./match-symbol-ports-by-pin-identity"
import { formatElement } from "./format-attributes"
import { getSourcePinDesignator } from "./get-source-pin-designator"

const PIN_TEXT_FONT_SIZE = 0.15
const PIN_TEXT_COLOR = "#a90000"
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
  sourcePorts,
  replacedPinPortIds,
}: {
  symbol: SchSymbol
  symbolToSchematicTransform: Matrix
  portMatches: SchematicSymbolPortMatch[]
  sourcePorts: SourcePort[]
  replacedPinPortIds: Set<SchematicPortId>
}): string[] =>
  portMatches.flatMap(({ schematicPort, symbolPort }) => {
    const sourcePort = sourcePorts.find(
      (candidate) => candidate.source_port_id === schematicPort.source_port_id,
    )
    const pinDesignator = sourcePort
      ? getSourcePinDesignator({ sourcePort, schematicPort })
      : undefined
    if (
      pinDesignator === undefined ||
      !replacedPinPortIds.has(schematicPort.schematic_port_id)
    ) {
      return []
    }
    const leadInnerPoint = getPortLeadInnerPoint({ symbol, symbolPort })
    if (!leadInnerPoint) return []
    const leadInnerCenter = applyToPoint(
      symbolToSchematicTransform,
      leadInnerPoint,
    )
    const transformedPortCenter = applyToPoint(
      symbolToSchematicTransform,
      symbolPort,
    )
    const portExtensionLength = Math.hypot(
      transformedPortCenter.x - schematicPort.center.x,
      transformedPortCenter.y - schematicPort.center.y,
    )
    const portCenter =
      portExtensionLength >= SYMBOL_POINT_TOLERANCE
        ? schematicPort.center
        : transformedPortCenter
    const symbolCenter = applyToPoint(symbolToSchematicTransform, symbol.center)
    const preliminaryPosition = getNativeSymbolPinNumberPosition({
      symbolCenter,
      portCenter,
      leadInnerCenter,
    })
    const useOutwardBaseline =
      preliminaryPosition.isVerticalLead &&
      hasNearbyParallelPort({
        portMatches,
        schematicPortId: schematicPort.schematic_port_id,
        portCenter,
        symbolCenter,
        isVerticalLead: true,
      })
    const { center: pinNumberCenter, isVerticalLead } = useOutwardBaseline
      ? getNativeSymbolPinNumberPosition({
          symbolCenter,
          portCenter,
          leadInnerCenter,
          useOutwardBaseline,
        })
      : preliminaryPosition
    return [
      formatElement("schematictext", {
        text: pinDesignator,
        schX: pinNumberCenter.x,
        schY: pinNumberCenter.y,
        anchor: "bottom_center",
        fontSize: PIN_TEXT_FONT_SIZE,
        color: PIN_TEXT_COLOR,
        schRotation: isVerticalLead ? -90 : undefined,
      }),
    ]
  })
