import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { getCopperPourOutline } from "./get-copper-pour-outline"

export function generateCopperPoursTsx(
  circuitJson: AnyCircuitElement[],
): string[] {
  const sourceNetNameById = new Map(
    su(circuitJson)
      .source_net.list()
      .map((sourceNet) => [sourceNet.source_net_id, sourceNet.name]),
  )
  const usedNetNames = new Set<string>()
  const copperPours = su(circuitJson)
    .pcb_copper_pour.list()
    .flatMap((pour) => {
      const sourceNetName = pour.source_net_id
        ? sourceNetNameById.get(pour.source_net_id)
        : undefined
      if (!sourceNetName) return []

      const outline = getCopperPourOutline(pour)
      if (!outline || outline.length < 3) return []
      usedNetNames.add(sourceNetName)

      return [
        `<copperpour layer=${JSON.stringify(pour.layer)} connectsTo=${JSON.stringify(`net.${sourceNetName}`)} outline={${JSON.stringify(outline)}} padMargin={0} traceMargin={0} clearance={0} boardEdgeMargin={0} cutoutMargin={0} useThermalReliefs={false} coveredWithSolderMask={${pour.covered_with_solder_mask ?? true}} />`,
      ]
    })
  const nets = [...usedNetNames].map(
    (sourceNetName) => `<net name=${JSON.stringify(sourceNetName)} />`,
  )

  return [...nets, ...copperPours]
}
