import type { TsxProps } from "./format-tsx"
import {
  camelCaseProps,
  extractPropsFromElement,
  type PropsSchema,
} from "./get-props-from-element"
import type { DeserializerContext, SourceComponent } from "./types"

interface GetSourceComponentPropsParams {
  source_component: SourceComponent
  propsSchema: PropsSchema
}

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
  { source_component, propsSchema }: GetSourceComponentPropsParams,
  { db }: DeserializerContext,
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
    ...camelCaseProps(source_component),
    ...camelCaseProps(cad_component),
    ...camelCaseProps(pcb_component),
    ...camelCaseProps(schematic_component),
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
