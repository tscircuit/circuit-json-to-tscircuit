import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement } from "circuit-json"
import { getCopperPourOutline } from "./get-copper-pour-outline"

export function generateCopperPoursTsx(params: {
  circuitJson: AnyCircuitElement[]
  resolveNetName: (sourceNetName: string) => string
}): {
  copperPours: string[]
  netNames: string[]
} {
  const sourceNetNameById = new Map(
    su(params.circuitJson)
      .source_net.list()
      .map((sourceNet) => [sourceNet.source_net_id, sourceNet.name]),
  )
  const reservedNetNames = new Set(sourceNetNameById.values())
  const usedNetNames = new Set<string>()
  const copperPours = su(params.circuitJson)
    .pcb_copper_pour.list()
    .flatMap((pour) => {
      const resolvedSourceNetName = pour.source_net_id
        ? sourceNetNameById.get(pour.source_net_id)
        : undefined
      const sourceNetName =
        resolvedSourceNetName ??
        getUnassignedCopperPourNetName({
          pcbCopperPourId: pour.pcb_copper_pour_id,
          reservedNetNames,
        })

      const outline = getCopperPourOutline(pour)
      if (!outline || outline.length < 3) return []
      const netName = params.resolveNetName(sourceNetName)
      usedNetNames.add(netName)
      const netSelector = `net[name=${JSON.stringify(netName)}]`

      return [
        `<copperpour layer={${JSON.stringify(pour.layer)}} connectsTo={${JSON.stringify(netSelector)}} outline={${JSON.stringify(outline)}} padMargin={0} traceMargin={0} clearance={0} boardEdgeMargin={0} cutoutMargin={0} useThermalReliefs={false} coveredWithSolderMask={${pour.covered_with_solder_mask ?? true}} />`,
      ]
    })
  return { copperPours, netNames: [...usedNetNames] }
}

const getUnassignedCopperPourNetName = ({
  pcbCopperPourId,
  reservedNetNames,
}: {
  pcbCopperPourId: string
  reservedNetNames: Set<string>
}): string => {
  const baseName = `__circuit_json_unassigned_${pcbCopperPourId}`
  let name = baseName
  let suffix = 2

  while (reservedNetNames.has(name)) {
    name = `${baseName}_${suffix}`
    suffix += 1
  }

  reservedNetNames.add(name)
  return name
}
