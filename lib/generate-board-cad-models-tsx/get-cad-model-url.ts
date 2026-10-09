import type { CadComponent } from "circuit-json"
import type { CadModelUrl } from "./converter-types"

export function getCadModelUrl(
  cadComponent: CadComponent,
): CadModelUrl | undefined {
  if (cadComponent.model_glb_url) {
    return { format: "glb", url: cadComponent.model_glb_url }
  }
  if (cadComponent.model_gltf_url) {
    return { format: "gltf", url: cadComponent.model_gltf_url }
  }
  if (cadComponent.model_obj_url) {
    return { format: "obj", url: cadComponent.model_obj_url }
  }
  if (cadComponent.model_step_url) {
    return { format: "step", url: cadComponent.model_step_url }
  }
  if (cadComponent.model_stl_url) {
    return { format: "stl", url: cadComponent.model_stl_url }
  }
  if (cadComponent.model_wrl_url) {
    return { format: "wrl", url: cadComponent.model_wrl_url }
  }
  return undefined
}
