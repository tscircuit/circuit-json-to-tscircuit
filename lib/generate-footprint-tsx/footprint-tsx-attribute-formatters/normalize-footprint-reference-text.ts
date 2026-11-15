import type { AnyCircuitElement } from "circuit-json"
import type { BoardConversionContext } from "../../board-conversion-context"

const KICAD_TEMPLATE_REF_PATTERN = /^[A-Za-z_]+\*\*$/

export const normalizeFootprintReferenceText = (
  rawText: unknown,
  circuitJson: AnyCircuitElement[],
  context?: BoardConversionContext,
): string => {
  const text = String(rawText ?? "")
  if (context || !text) return text

  const normalized = text
    .replace(/\$\{REFERENCE\}/g, "{REF}")
    .replace(/%R(?![A-Za-z0-9_])/g, "{REF}")

  if (normalized === "REF**") {
    return "{REF}"
  }

  for (const element of circuitJson) {
    if (
      element.type === "source_component" &&
      typeof element.name === "string" &&
      KICAD_TEMPLATE_REF_PATTERN.test(element.name) &&
      element.name === normalized
    ) {
      return "{REF}"
    }
  }

  return normalized
}
