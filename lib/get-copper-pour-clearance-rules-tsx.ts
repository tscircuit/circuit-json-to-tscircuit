import type { AnyCircuitElement, PcbCopperPour } from "circuit-json"
import type { BoardConversionContext } from "./board-conversion-context"

export function getCopperPourClearanceRulesTsx({
  pour,
  circuitJson,
  context,
}: {
  pour: PcbCopperPour
  circuitJson: AnyCircuitElement[]
  context?: BoardConversionContext
}): string {
  const rules =
    pour.clearance_rules?.map((rule) => ({
      clearance: rule.clearance,
      ...(rule.object_types ? { objectTypes: rule.object_types } : {}),
      ...(rule.source_net_ids
        ? {
            netSelectors: rule.source_net_ids.map((sourceNetId) => {
              const sourceNet = circuitJson.find(
                (element) =>
                  element.type === "source_net" &&
                  element.source_net_id === sourceNetId,
              )
              const netName =
                context?.runtimeNetNameBySourceNetId.get(sourceNetId) ??
                (sourceNet?.type === "source_net" ? sourceNet.name : undefined)
              if (!netName)
                throw new Error(
                  "Copper pour clearance refers to an unknown source net",
                )
              return `net[name=${JSON.stringify(netName)}]`
            }),
          }
        : {}),
    })) ?? []
  return `clearanceRules={${JSON.stringify(rules)}}`
}
