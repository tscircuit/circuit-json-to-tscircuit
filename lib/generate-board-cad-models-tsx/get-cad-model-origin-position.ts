import type { CadComponent } from "circuit-json"

export function getCadModelOriginPosition(
  cadComponent: CadComponent,
): { x: number; y: number; z: number } | undefined {
  if (cadComponent.model_origin_position !== undefined) {
    return cadComponent.model_origin_position
  }
  if (cadComponent.model_origin_alignment === "unknown") {
    return { x: 0, y: 0, z: 0 }
  }
  return undefined
}
