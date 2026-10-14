import type { CadModelGroup } from "./converter-types"
import { getCadModelUrl } from "./get-cad-model-url"

export function isJscadCadModelGroupTranslucent(
  cadModelGroup: CadModelGroup,
): boolean {
  const hasUrlCadModel = cadModelGroup.cadComponents.some(
    (cadComponent) => getCadModelUrl(cadComponent) !== undefined,
  )
  if (hasUrlCadModel) return false

  const jscadCadComponents = cadModelGroup.cadComponents.filter(
    (cadComponent) => cadComponent.model_jscad !== undefined,
  )
  return (
    jscadCadComponents.length > 0 &&
    jscadCadComponents.every(
      (cadComponent) => cadComponent.show_as_translucent_model === true,
    )
  )
}
