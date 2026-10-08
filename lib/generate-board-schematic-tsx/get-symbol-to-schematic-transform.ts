import type {
  SchematicComponent,
  SchematicPort,
  SourcePort,
} from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import { fromTriangles } from "transformation-matrix"
import { getRendererCompatibleSymbolTransform } from "./get-renderer-compatible-symbol-transform"
import { getRigidPinIdentityTransform } from "./get-rigid-pin-identity-transform"
import { matchSymbolPortsByPinIdentity } from "./match-symbol-ports-by-pin-identity"

export const getSymbolToSchematicTransform = ({
  symbol,
  schematicComponent,
  schematicPorts,
  sourcePorts,
}: {
  symbol: SchSymbol
  schematicComponent: SchematicComponent
  schematicPorts: SchematicPort[]
  sourcePorts: SourcePort[]
}) => {
  const pinIdentityMatches = matchSymbolPortsByPinIdentity({
    schematicPorts,
    sourcePorts,
    symbol,
  })
  const rigidPinIdentityTransform =
    getRigidPinIdentityTransform(pinIdentityMatches)
  if (rigidPinIdentityTransform) return rigidPinIdentityTransform

  if (pinIdentityMatches.length >= 3) {
    // Inconsistent pin identities must not shear standard symbol artwork.
    // Match circuit-to-svg's established transform for the visual fallback.
    const rendererCompatibleTransform = getRendererCompatibleSymbolTransform({
      schematicComponent,
      schematicPorts,
      symbol,
    })
    if (rendererCompatibleTransform) return rendererCompatibleTransform
  }

  // Without matching ports, use the explicitly imported component bounds.
  return fromTriangles(
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
  )
}
