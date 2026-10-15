import type { CadModelGroup } from "./converter-types"

export function isJscadCadModelGroupTranslucent(
  cadModelGroup: CadModelGroup,
): boolean {
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
