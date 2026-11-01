import type { AnyCircuitElement } from "circuit-json"
import type { SourcePortId } from "../board-conversion-types"
import { getInternallyConnectedSourcePortIds } from "./get-internally-connected-source-port-ids"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

export function getInternallyConnectedPins({
  circuitJson,
  sourceComponents,
  pinNumberBySourcePortId,
}: {
  circuitJson: AnyCircuitElement[]
  sourceComponents: SourceComponent[]
  pinNumberBySourcePortId: ReadonlyMap<SourcePortId, number>
}): number[][] {
  return sourceComponents.flatMap((sourceComponent) =>
    getInternallyConnectedSourcePortIds({ circuitJson, sourceComponent })
      .map((group) =>
        [
          ...new Set(
            group.flatMap((sourcePortId) => {
              const pinNumber = pinNumberBySourcePortId.get(sourcePortId)
              return pinNumber === undefined ? [] : [pinNumber]
            }),
          ),
        ].sort((first, second) => first - second),
      )
      .filter((group) => group.length > 1),
  )
}
