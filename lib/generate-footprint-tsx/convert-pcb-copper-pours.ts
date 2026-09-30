import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"

export const convertPcbCopperPours: FootprintElementConverter = (
  circuitJson,
) => {
  const pcbCopperPours = su(circuitJson).pcb_copper_pour.list()

  return pcbCopperPours.map((pcbCopperPour) => {
    const attributes = [
      `shape=${JSON.stringify(pcbCopperPour.shape)}`,
      `layer=${JSON.stringify(pcbCopperPour.layer)}`,
      `coveredWithSolderMask={${pcbCopperPour.covered_with_solder_mask}}`,
    ]

    if (pcbCopperPour.source_net_id !== undefined) {
      attributes.push(
        `sourceNetId=${JSON.stringify(pcbCopperPour.source_net_id)}`,
      )
    }

    if (pcbCopperPour.shape === "rect") {
      attributes.push(
        `pcbX={${pcbCopperPour.center.x}}`,
        `pcbY={${pcbCopperPour.center.y}}`,
        `width={${pcbCopperPour.width}}`,
        `height={${pcbCopperPour.height}}`,
        `pcbRotation={${pcbCopperPour.rotation}}`,
      )
    } else if (pcbCopperPour.shape === "polygon") {
      attributes.push(`points={${JSON.stringify(pcbCopperPour.points)}}`)
    } else {
      attributes.push(`brepShape={${JSON.stringify(pcbCopperPour.brep_shape)}}`)
    }

    return `<pcbcopperpour ${attributes.join(" ")} />`
  })
}
