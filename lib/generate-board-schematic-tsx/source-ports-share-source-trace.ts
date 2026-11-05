import type { CircuitJson, SourcePort } from "circuit-json"

export const sourcePortsShareSourceTrace = ({
  circuitJson,
  firstSourcePort,
  secondSourcePort,
}: {
  circuitJson: CircuitJson
  firstSourcePort: SourcePort
  secondSourcePort: SourcePort
}): boolean =>
  circuitJson.some(
    (element) =>
      element.type === "source_trace" &&
      element.connected_source_port_ids.includes(
        firstSourcePort.source_port_id,
      ) &&
      element.connected_source_port_ids.includes(
        secondSourcePort.source_port_id,
      ),
  )
