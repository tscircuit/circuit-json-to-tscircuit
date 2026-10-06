import type { CircuitJson } from "circuit-json"

export const getComparablePcbTraceRoutes = (
  circuitJson: CircuitJson,
): string[] =>
  circuitJson
    .filter((element) => element.type === "pcb_trace")
    .map((trace) => JSON.stringify(normalizeComparableValue(trace.route)))
    .sort()

const normalizeComparableValue = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(normalizeComparableValue)
  if (!value || typeof value !== "object") return value

  return Object.fromEntries(
    Object.entries(value)
      .filter(
        ([key]) => key !== "copper_pour_id" && key !== "is_inside_copper_pour",
      )
      .sort(([firstKey], [secondKey]) => firstKey.localeCompare(secondKey))
      .map(([key, entryValue]) => [key, normalizeComparableValue(entryValue)]),
  )
}
