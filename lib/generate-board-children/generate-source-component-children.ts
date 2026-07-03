import type {
  AnyCircuitElement,
  CadComponent,
  PcbComponent,
} from "circuit-json"
import { getComponentAttributes } from "./component-attributes"
import { formatJsxElement } from "./format-jsx-element"
import {
  getSourceComponentElementName,
  isSupportedSourceComponent,
} from "./source-component-types"

const isCadComponent = (element: AnyCircuitElement): element is CadComponent =>
  element.type === "cad_component"

const isPcbComponent = (element: AnyCircuitElement): element is PcbComponent =>
  element.type === "pcb_component"

export const generateSourceComponentChildren = (
  circuitJson: AnyCircuitElement[],
): string[] => {
  const cadComponentsBySourceId = new Map(
    circuitJson
      .filter(isCadComponent)
      .map((component) => [component.source_component_id, component]),
  )
  const pcbComponentsBySourceId = new Map(
    circuitJson
      .filter(isPcbComponent)
      .map((component) => [component.source_component_id, component]),
  )

  return circuitJson.filter(isSupportedSourceComponent).map((component) => {
    const cadComponent = cadComponentsBySourceId.get(
      component.source_component_id,
    )
    const pcbComponent = pcbComponentsBySourceId.get(
      component.source_component_id,
    )

    return formatJsxElement(getSourceComponentElementName(component), {
      ...getComponentAttributes(component),
      footprint: cadComponent?.footprinter_string,
      name: component.name,
      pcbX: pcbComponent?.center.x,
      pcbY: pcbComponent?.center.y,
      pcbRotation: pcbComponent?.rotation,
      layer: pcbComponent?.layer,
    })
  })
}
