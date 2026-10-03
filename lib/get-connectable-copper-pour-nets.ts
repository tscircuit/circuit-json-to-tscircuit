import type { AnyCircuitElement } from "circuit-json"

export const getConnectableCopperPourNets = (
  circuitJson: AnyCircuitElement[],
) => {
  const copperPourNetIds = new Set(
    circuitJson
      .filter((element) => element.type === "pcb_copper_pour")
      .flatMap((pour) => (pour.source_net_id ? [pour.source_net_id] : [])),
  )
  // Core's literal net selectors support identifier names. Other imported
  // names still use attribute selectors for pours, without invalid traces.
  return circuitJson
    .filter((element) => element.type === "source_net")
    .filter(
      (net) =>
        copperPourNetIds.has(net.source_net_id) &&
        /^[A-Za-z_][A-Za-z0-9_]*$/.test(net.name),
    )
}
