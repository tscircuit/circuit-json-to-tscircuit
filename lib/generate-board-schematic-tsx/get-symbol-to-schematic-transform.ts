import type {
  SchematicComponent,
  SchematicPort,
  SourcePort,
} from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import {
  compose,
  fromTriangles,
  scale,
  translate,
  type Matrix,
} from "transformation-matrix"
import { getRendererCompatibleSymbolTransform } from "./get-renderer-compatible-symbol-transform"
import { getRigidPinIdentityTransform } from "./get-rigid-pin-identity-transform"
import { matchSymbolPortsByPinIdentity } from "./match-symbol-ports-by-pin-identity"

const TRANSFORM_DECIMAL_PLACES = 12

const normalizeTransformValue = (transformValue: number): number =>
  Number(transformValue.toFixed(TRANSFORM_DECIMAL_PLACES))

const normalizeSymbolToSchematicTransform = (
  symbolToSchematicTransform: Matrix,
): Matrix => ({
  a: normalizeTransformValue(symbolToSchematicTransform.a),
  b: normalizeTransformValue(symbolToSchematicTransform.b),
  c: normalizeTransformValue(symbolToSchematicTransform.c),
  d: normalizeTransformValue(symbolToSchematicTransform.d),
  e: normalizeTransformValue(symbolToSchematicTransform.e),
  f: normalizeTransformValue(symbolToSchematicTransform.f),
})

export const getSymbolToSchematicTransform = ({
  symbol,
  schematicComponent,
  schematicPorts,
  sourcePorts,
  includeSchematicPinNumbers,
  preferCenteredBoundsTransform,
}: {
  symbol: SchSymbol
  schematicComponent: SchematicComponent
  schematicPorts: SchematicPort[]
  sourcePorts: SourcePort[]
  includeSchematicPinNumbers?: boolean
  preferCenteredBoundsTransform?: boolean
}) => {
  const componentSourcePorts = sourcePorts.filter(
    (sourcePort) =>
      sourcePort.source_component_id === schematicComponent.source_component_id,
  )
  const pinIdentityMatches = matchSymbolPortsByPinIdentity({
    schematicPorts,
    sourcePorts: componentSourcePorts,
    symbol,
    includeSchematicPinNumbers,
  })
  const rigidPinIdentityTransform =
    getRigidPinIdentityTransform(pinIdentityMatches)
  if (rigidPinIdentityTransform) {
    return normalizeSymbolToSchematicTransform(rigidPinIdentityTransform)
  }

  if (preferCenteredBoundsTransform) {
    const uniformScale = Math.min(
      schematicComponent.size.width / symbol.size.width,
      schematicComponent.size.height / symbol.size.height,
    )
    return normalizeSymbolToSchematicTransform(
      compose(
        translate(schematicComponent.center.x, schematicComponent.center.y),
        scale(uniformScale),
        translate(-symbol.center.x, -symbol.center.y),
      ),
    )
  }

  if (pinIdentityMatches.length >= 3) {
    // Inconsistent pin identities must not shear standard symbol artwork.
    // Match circuit-to-svg's established transform for the visual fallback.
    const rendererCompatibleTransform = getRendererCompatibleSymbolTransform({
      schematicComponent,
      schematicPorts,
      symbol,
    })
    if (rendererCompatibleTransform) {
      return normalizeSymbolToSchematicTransform(rendererCompatibleTransform)
    }
  }

  // Without matching ports, use the explicitly imported component bounds.
  return normalizeSymbolToSchematicTransform(
    fromTriangles(
      [
        symbol.center,
        { x: symbol.center.x + symbol.size.width, y: symbol.center.y },
        { x: symbol.center.x, y: symbol.center.y + symbol.size.height },
      ],
      [
        schematicComponent.center,
        {
          x: schematicComponent.center.x + schematicComponent.size.width,
          y: schematicComponent.center.y,
        },
        {
          x: schematicComponent.center.x,
          y: schematicComponent.center.y + schematicComponent.size.height,
        },
      ],
    ),
  )
}
