import {
  type ResistorProps,
  resistorProps as resistorPropsSchema,
} from "@tscircuit/props"
import type {
  CircuitJsonDeserializerContext,
  SourceComponentRef,
} from "../circuit-json-deserializer"
import { formatTsxElement } from "../format-tsx"
import { getLinkedComponentElements } from "../get-linked-component-elements"

// biome-ignore lint/complexity/noStaticOnlyClass: Deserializers use a class-per-element registry.
export class Resistor {
  static readonly ftype = "simple_resistor" as const
  static readonly elementName = "resistor" as const

  static getPropsFromElement(
    ref: SourceComponentRef,
    ctx: CircuitJsonDeserializerContext,
  ): ResistorProps | undefined {
    const linkedElements = getLinkedComponentElements(ref, ctx, Resistor.ftype)
    if (!linkedElements) return undefined

    const {
      sourceComponent: sourceResistor,
      pcbComponent,
      schematicComponent,
      cadComponent,
    } = linkedElements

    const resistorTsxProps = {
      name: sourceResistor.name,
      displayName: sourceResistor.display_name,
      resistance:
        sourceResistor.display_resistance ?? sourceResistor.resistance,
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
    } satisfies ResistorProps

    const parseResult = resistorPropsSchema.safeParse(resistorTsxProps)
    if (!parseResult.success) {
      console.warn(
        `Unable to deserialize resistor ${ref.source_component_id}; preserving its PCB geometry instead`,
        parseResult.error,
      )
      return undefined
    }
    return resistorTsxProps
  }

  static deserializeToTsx(
    ref: SourceComponentRef,
    ctx: CircuitJsonDeserializerContext,
  ): string | undefined {
    const resistorTsxProps = Resistor.getPropsFromElement(ref, ctx)
    if (!resistorTsxProps) return undefined

    return formatTsxElement({
      tsxElementName: Resistor.elementName,
      props: resistorTsxProps,
    })
  }
}
