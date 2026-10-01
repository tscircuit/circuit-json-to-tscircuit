import { generateCopperPoursTsx } from "../../generate-copper-pours-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"
import { getSafeNetName } from "../get-safe-net-name"

export const convertCopperPours: BoardConverterStage = ({
  boardChildren,
  circuitJson,
  emittedNetNames,
  netNamesBySourceName,
  usedNetNames,
}) => {
  const { copperPours, netNames } = generateCopperPoursTsx({
    circuitJson,
    resolveNetName: (sourceNetName) => {
      const existingNetName = netNamesBySourceName.get(sourceNetName)
      if (existingNetName) return existingNetName

      const netName = usedNetNames.has(sourceNetName)
        ? getSafeNetName({ sourceNetName, usedNetNames })
        : sourceNetName
      usedNetNames.add(netName)
      netNamesBySourceName.set(sourceNetName, netName)
      return netName
    },
  })

  for (const netName of netNames) {
    if (emittedNetNames.has(netName)) continue
    boardChildren.push(`<net name={${JSON.stringify(netName)}} />`)
    emittedNetNames.add(netName)
  }
  boardChildren.push(...copperPours)
}
