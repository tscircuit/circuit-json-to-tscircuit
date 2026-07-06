import type { SoupUtilObjects } from "@tscircuit/soup-util"
import type { AnySourceElement } from "circuit-json"
import type { TsxProps } from "./format-tsx"
import {
  extractPropsFromElement,
  type PropsSchema,
} from "./get-props-from-element"

export type SourceComponent = Extract<
  AnySourceElement,
  { type: "source_component"; ftype: string }
>

const getLayoutProps = (
  element: {
    center: { x: number; y: number }
    rotation?: number
  } | null,
  prefix: "pcb" | "sch",
): TsxProps => ({
  [`${prefix}X`]: element?.center.x,
  [`${prefix}Y`]: element?.center.y,
  [`${prefix}Rotation`]: element?.rotation,
})

export const getSourceComponentProps = (
  {
    source_component,
    propsSchema,
  }: {
    source_component: SourceComponent
    propsSchema: PropsSchema
  },
  db: SoupUtilObjects,
): TsxProps => {
  const sourceComponentSelector = {
    source_component_id: source_component.source_component_id,
  }
  const cad_component = db.cad_component.getWhere(sourceComponentSelector)
  const pcb_component = db.pcb_component.getWhere(sourceComponentSelector)
  const schematic_component = db.schematic_component.getWhere(
    sourceComponentSelector,
  )

  const candidateProps: TsxProps = {
    ...source_component,
    ...cad_component,
    ...pcb_component,
    ...schematic_component,
    ...getLayoutProps(pcb_component, "pcb"),
    ...getLayoutProps(schematic_component, "sch"),
    footprint: cad_component?.footprinter_string,
    allowOffBoard: pcb_component?.is_allowed_to_be_off_board,
    kicadFootprintMetadata: pcb_component?.metadata?.kicad_footprint,
  }

  return extractPropsFromElement({
    element: candidateProps,
    propsSchema,
  })
}
