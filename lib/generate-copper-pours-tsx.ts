import { su } from "@tscircuit/soup-util"
import type { AnyCircuitElement, PcbCopperPour } from "circuit-json"

export function generateCopperPoursTsx(
  circuitJson: AnyCircuitElement[],
): string[] {
  const sourceNetNameById = Object.fromEntries(
    su(circuitJson)
      .source_net.list()
      .map((sourceNet) => [sourceNet.source_net_id, sourceNet.name]),
  )
  const usedNetNames = new Set<string>()
  const copperPours = su(circuitJson)
    .pcb_copper_pour.list()
    .flatMap((pour) => {
      const sourceNetName = pour.source_net_id
        ? sourceNetNameById[pour.source_net_id]
        : undefined

      if (pour.source_net_id && !sourceNetName) {
        throw new Error(
          `Copper pour ${pour.pcb_copper_pour_id} references missing source net ${pour.source_net_id}`,
        )
      }
      if (sourceNetName) usedNetNames.add(sourceNetName)

      return [
        getPcbCopperPourTsx({
          connectsTo: sourceNetName
            ? `net[name=${JSON.stringify(sourceNetName)}]`
            : undefined,
          pcbCopperPour: pour,
        }),
      ]
    })
  const nets = [...usedNetNames].map(
    (sourceNetName) => `<net name={${JSON.stringify(sourceNetName)}} />`,
  )

  return [...nets, ...copperPours]
}

const getPcbCopperPourTsx = ({
  connectsTo,
  pcbCopperPour,
}: {
  connectsTo?: string
  pcbCopperPour: PcbCopperPour
}): string => {
  const commonAttributes = [
    `layer={${JSON.stringify(pcbCopperPour.layer)}}`,
    ...(connectsTo ? [`connectsTo={${JSON.stringify(connectsTo)}}`] : []),
    `coveredWithSolderMask={${pcbCopperPour.covered_with_solder_mask ?? true}}`,
  ].join(" ")

  if (pcbCopperPour.shape === "polygon") {
    return `<pcbcopperpour shape="polygon" ${commonAttributes} points={${JSON.stringify(pcbCopperPour.points)}} />`
  }

  if (pcbCopperPour.shape === "brep") {
    return `<pcbcopperpour shape="brep" ${commonAttributes} brepShape={${JSON.stringify(pcbCopperPour.brep_shape)}} />`
  }

  const pcbRotationAttribute =
    pcbCopperPour.rotation === undefined
      ? ""
      : ` pcbRotation={${pcbCopperPour.rotation}}`
  return `<pcbcopperpour shape="rect" ${commonAttributes} pcbX={${pcbCopperPour.center.x}} pcbY={${pcbCopperPour.center.y}} width={${pcbCopperPour.width}} height={${pcbCopperPour.height}}${pcbRotationAttribute} />`
}
