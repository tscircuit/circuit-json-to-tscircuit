import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import type {
  CadModelGroup,
  CadModelGroupKey,
  CadModelParentPlacement,
  PcbComponentId,
} from "./converter-types"
import { getCadModelUrl } from "./get-cad-model-url"

export function getCadModelGroups(
  circuitJson: AnyCircuitElement[],
): CadModelGroup[] {
  const pcbComponentById = new Map<PcbComponentId, PcbComponent>()
  for (const element of circuitJson) {
    if (element.type === "pcb_component") {
      pcbComponentById.set(element.pcb_component_id, element)
    }
  }

  const cadModelGroupByKey = new Map<CadModelGroupKey, CadModelGroup>()
  for (const element of circuitJson) {
    if (element.type !== "cad_component" || !getCadModelUrl(element)) continue

    const pcbComponent = element.pcb_component_id
      ? pcbComponentById.get(element.pcb_component_id)
      : undefined
    const layer =
      (element.layer ?? pcbComponent?.layer) === "bottom" ? "bottom" : "top"
    let parentPlacement: CadModelParentPlacement = {
      center: element.position,
      ccwRotationDegrees: 0,
      layer,
    }
    let cadModelGroupKey: CadModelGroupKey = element.cad_component_id

    if (pcbComponent !== undefined) {
      parentPlacement = {
        center: pcbComponent.center,
        ccwRotationDegrees: pcbComponent.rotation,
        layer,
      }
      cadModelGroupKey = `${pcbComponent.pcb_component_id}:${layer}`
    }

    const cadModelGroup = cadModelGroupByKey.get(cadModelGroupKey) ?? {
      cadComponents: [],
      parentPlacement,
    }
    cadModelGroup.cadComponents.push(element)
    cadModelGroupByKey.set(cadModelGroupKey, cadModelGroup)
  }

  return [...cadModelGroupByKey.values()]
}
