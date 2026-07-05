import type {
  AnyCircuitElement,
  CadComponent,
  PcbComponent,
  SchematicComponent,
} from "circuit-json"
import "./generate-board-children/components/register-all"
import { CircuitJsonDeserializer } from "./generate-board-children/circuit-json-deserializer"
import { formatTsxElement } from "./generate-board-children/format-tsx-element"

const isCadComponent = (element: AnyCircuitElement): element is CadComponent =>
  element.type === "cad_component"

const isPcbComponent = (element: AnyCircuitElement): element is PcbComponent =>
  element.type === "pcb_component"

const isSchematicComponent = (
  element: AnyCircuitElement,
): element is SchematicComponent => element.type === "schematic_component"

export const generateBoardChildren = (
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
  const schematicComponentsBySourceId = new Map(
    circuitJson
      .filter(isSchematicComponent)
      .filter((component) => component.source_component_id)
      .map((component) => [component.source_component_id, component]),
  )

  return circuitJson.flatMap((component) => {
    if (component.type !== "source_component") return []

    const deserializedComponent = CircuitJsonDeserializer.deserialize(component)
    if (!deserializedComponent) return []

    const cadComponent = cadComponentsBySourceId.get(
      component.source_component_id,
    )
    const pcbComponent = pcbComponentsBySourceId.get(
      component.source_component_id,
    )
    const schematicComponent = schematicComponentsBySourceId.get(
      component.source_component_id,
    )

    return [
      formatTsxElement(deserializedComponent.elementName, {
        ...deserializedComponent.props,
        footprint: cadComponent?.footprinter_string,
        name: component.name,
        displayName: component.display_name,
        manufacturerPartNumber: component.manufacturer_part_number,
        supplierPartNumbers: component.supplier_part_numbers,
        pcbX: pcbComponent?.center.x,
        pcbY: pcbComponent?.center.y,
        pcbRotation: pcbComponent?.rotation,
        layer: pcbComponent?.layer,
        doNotPlace: pcbComponent?.do_not_place || undefined,
        allowOffBoard: pcbComponent?.is_allowed_to_be_off_board || undefined,
        obstructsWithinBounds:
          pcbComponent?.obstructs_within_bounds === false ? false : undefined,
        kicadFootprintMetadata: pcbComponent?.metadata?.kicad_footprint,
        schX: schematicComponent?.center.x,
        schY: schematicComponent?.center.y,
        symbolName: schematicComponent?.symbol_name,
      }),
    ]
  })
}
