import type { PcbPlatedHole, PcbSmtPad } from "circuit-json"
import type { BoardConversionContext } from "../board-conversion-context"

export const getImportedPortHints = (
  primitive: PcbPlatedHole | PcbSmtPad,
  context?: BoardConversionContext,
): string[] | undefined => {
  if (!primitive.pcb_port_id || !context) return primitive.port_hints
  const importedHint = context.portHintByPcbPortId.get(primitive.pcb_port_id)
  return importedHint ? [importedHint] : primitive.port_hints
}
