import type { CadComponent } from "circuit-json"
import { getCadModelUrl } from "./get-cad-model-url"

export function hasCadModelSource(cadComponent: CadComponent): boolean {
  return (
    cadComponent.model_jscad !== undefined ||
    getCadModelUrl(cadComponent) !== undefined
  )
}
