import {
  type ResistorProps as ResistorTsxProps,
  resistorProps as resistorPropsSchema,
} from "@tscircuit/props"
import {
  CircuitJsonDeserializer,
  type CircuitJsonDeserializerContext,
  type SourceComponentRef,
} from "../circuit-json-deserializer"
import { registerCircuitJsonDeserializer } from "../circuit-json-deserializer-registry"
import { formatTsxElement } from "../format-tsx"

export class Resistor extends CircuitJsonDeserializer {
  static ftype = "simple_resistor" as const

  static deserializeToTsx(
    ref: SourceComponentRef,
    { db }: CircuitJsonDeserializerContext,
  ): string | undefined {
    const resistorTsxProps = this.getPropsFromElement(ref, { db })
    if (!resistorTsxProps) return undefined

    return formatTsxElement({
      tsxElementName: "resistor",
      props: resistorTsxProps,
    })
  }

  static getPropsFromElement(
    ref: SourceComponentRef,
    { db }: CircuitJsonDeserializerContext,
  ): ResistorTsxProps | undefined {
    const { source_component_id } = ref
    const sourceResistor = db.source_component.get(source_component_id)
    if (sourceResistor?.ftype !== "simple_resistor") return undefined

    const sourceComponentSelector = { source_component_id }
    const pcbComponent = db.pcb_component.getWhere(sourceComponentSelector)
    const schematicComponent = db.schematic_component.getWhere(
      sourceComponentSelector,
    )
    const cadComponent = db.cad_component.getWhere(sourceComponentSelector)

    const candidateResistorProps = {
      name: sourceResistor.name,
      displayName: sourceResistor.display_name,
      resistance: sourceResistor.resistance,
      manufacturerPartNumber: sourceResistor.manufacturer_part_number,
      supplierPartNumbers: sourceResistor.supplier_part_numbers,
      footprint: cadComponent?.footprinter_string,
      layer: pcbComponent?.layer ?? cadComponent?.layer,
      pcbX: pcbComponent?.center.x,
      pcbY: pcbComponent?.center.y,
      pcbRotation: pcbComponent?.rotation,
      doNotPlace: pcbComponent?.do_not_place,
      allowOffBoard: pcbComponent?.is_allowed_to_be_off_board,
      obstructsWithinBounds: pcbComponent?.obstructs_within_bounds,
      kicadFootprintMetadata: pcbComponent?.metadata?.kicad_footprint,
      schX: schematicComponent?.center.x,
      schY: schematicComponent?.center.y,
      symbolName: schematicComponent?.symbol_name,
      showAsTranslucentModel: cadComponent?.show_as_translucent_model,
    }

    const parseResult = resistorPropsSchema.safeParse(candidateResistorProps)
    if (!parseResult.success) {
      console.warn(
        `Failed to parse resistor props for ${source_component_id}`,
        parseResult.error,
      )
      return undefined
    }

    return parseResult.data
  }
}

registerCircuitJsonDeserializer(Resistor)
