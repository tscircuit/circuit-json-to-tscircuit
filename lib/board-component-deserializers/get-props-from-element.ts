import type { TsxProps } from "./format-tsx"
import type { CircuitJsonUtil, SourceComponent } from "./types"

export interface PropsSchema {
  shape: Record<string, unknown>
}

type PropNameAliases = Record<string, string>

const toCamelCase = (value: string): string =>
  value.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase())

const camelCaseProps = (element: object | null): TsxProps =>
  Object.fromEntries(
    Object.entries(element ?? {}).map(([name, value]) => [
      toCamelCase(name),
      value,
    ]),
  )

export const getPropsFromElement = (
  element: object | null,
  propsSchema: PropsSchema,
  propNameAliases: PropNameAliases = {},
): TsxProps => {
  const candidateProps = camelCaseProps(element)

  for (const [sourceName, targetName] of Object.entries(propNameAliases)) {
    candidateProps[targetName] = candidateProps[sourceName]
    delete candidateProps[sourceName]
  }

  return Object.fromEntries(
    Object.entries(candidateProps).filter(
      ([name, value]) => name in propsSchema.shape && value !== undefined,
    ),
  )
}

const getPrefixedLayoutProps = (
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
  sourceComponent: SourceComponent,
  db: CircuitJsonUtil,
  propsSchema: PropsSchema,
): TsxProps => {
  const bySourceComponentId = {
    source_component_id: sourceComponent.source_component_id,
  }
  const cadComponent = db.cad_component.getWhere(bySourceComponentId)
  const pcbComponent = db.pcb_component.getWhere(bySourceComponentId)
  const schematicComponent =
    db.schematic_component.getWhere(bySourceComponentId)

  const candidateProps: TsxProps = {
    ...camelCaseProps(sourceComponent),
    ...camelCaseProps(cadComponent),
    ...camelCaseProps(pcbComponent),
    ...camelCaseProps(schematicComponent),
    ...getPrefixedLayoutProps(pcbComponent, "pcb"),
    ...getPrefixedLayoutProps(schematicComponent, "sch"),
    footprint: cadComponent?.footprinter_string,
    allowOffBoard: pcbComponent?.is_allowed_to_be_off_board,
    kicadFootprintMetadata: pcbComponent?.metadata?.kicad_footprint,
  }

  return getPropsFromElement(candidateProps, propsSchema)
}
