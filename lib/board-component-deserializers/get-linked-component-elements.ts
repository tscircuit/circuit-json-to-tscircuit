import type {
  CadComponent,
  PcbComponent,
  SchematicComponent,
} from "circuit-json"
import type {
  CircuitJsonDeserializerContext,
  SourceComponentForFtype,
  SourceComponentFtype,
  SourceComponentRef,
} from "./circuit-json-deserializer"

interface LinkedComponentElements<Ftype extends SourceComponentFtype> {
  sourceComponent: SourceComponentForFtype<Ftype>
  pcbComponent?: PcbComponent
  schematicComponent?: SchematicComponent
  cadComponent?: CadComponent
}

/**
 * Finds the circuit-json elements linked to a source component and narrows the
 * source component to the ftype expected by its deserializer.
 *
 * Component-specific conversion remains in each deserializer because linked
 * circuit-json fields are not a one-to-one representation of JSX props.
 */
export const getLinkedComponentElements = <Ftype extends SourceComponentFtype>(
  ref: SourceComponentRef,
  { db }: CircuitJsonDeserializerContext,
  expectedFtype: Ftype,
): LinkedComponentElements<Ftype> | undefined => {
  const { source_component_id } = ref
  const sourceComponent = db.source_component.get(source_component_id)
  if (sourceComponent?.ftype !== expectedFtype) return undefined

  const sourceComponentSelector = { source_component_id }

  return {
    // The runtime ftype check above is the generic type guard. Keeping the
    // assertion here prevents every component deserializer from repeating it.
    sourceComponent: sourceComponent as SourceComponentForFtype<Ftype>,
    pcbComponent:
      db.pcb_component.getWhere(sourceComponentSelector) ?? undefined,
    schematicComponent:
      db.schematic_component.getWhere(sourceComponentSelector) ?? undefined,
    cadComponent:
      db.cad_component.getWhere(sourceComponentSelector) ?? undefined,
  }
}
