import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const minimumPropPattern = / min[A-Z][A-Za-z]*=/

const getBoardMinimums = (circuitJson: CircuitJson) => {
  const boardMinimums: Record<string, number> = {}
  for (const element of circuitJson) {
    if (element.type !== "pcb_board") continue
    for (const [field, minimum] of Object.entries(element)) {
      if (!field.startsWith("min_")) continue
      if (typeof minimum === "number") boardMinimums[field] = minimum
    }
  }
  return boardMinimums
}

const getRoutedTraceWidths = (circuitJson: CircuitJson) => {
  const widths = new Set<number>()
  for (const element of circuitJson) {
    if (element.type !== "pcb_trace") continue
    for (const point of element.route) {
      if (point.route_type === "wire") widths.add(point.width)
    }
  }
  return [...widths].sort()
}

// Core records its default minimums on every pcb_board. They are computed,
// not requested, so the TSX must not state them: core routes a board that
// requests minTraceWidth at that width instead of its default trace width.
test("minimums core computed for a board are not turned into requests", async () => {
  const rendered = (await runTscircuitCode(`
    const footprint = <footprint>
      <smtpad shape="rect" width={0.6} height={0.6} pcbX={0} pcbY={0} portHints={["1"]} />
    </footprint>
    export default () => <board width={12} height={8}>
      <net name="SIGNAL" />
      <chip name="A" footprint={footprint} pcbX={-3} pcbY={0} connections={{pin1: "net.SIGNAL"}} />
      <chip name="B" footprint={footprint} pcbX={3} pcbY={0} connections={{pin1: "net.SIGNAL"}} />
    </board>
  `)) as CircuitJson
  const unrouted = rendered.filter(
    (element) => element.type !== "pcb_trace" && element.type !== "pcb_via",
  )

  const tsx = convertCircuitJsonToTscircuit(unrouted, {
    componentName: "DefaultMinimumsBoard",
  })
  expect(tsx).not.toMatch(minimumPropPattern)

  const roundTripped = (await runTscircuitCode(tsx)) as CircuitJson
  expect(getBoardMinimums(roundTripped)).toEqual(getBoardMinimums(rendered))
  expect(getRoutedTraceWidths(rendered).length).toBeGreaterThan(0)
  expect(getRoutedTraceWidths(roundTripped)).toEqual(
    getRoutedTraceWidths(rendered),
  )
}, 30000)

const getBoardWithMinimums = (minimums: Record<string, number>): CircuitJson =>
  [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
      ...minimums,
    },
  ] as CircuitJson

test("a via hole minimum keeps the via pad minimum it came with", () => {
  // Core would derive a 0.3 mm pad from a 0.15 mm hole on its own, but only
  // because 0.3 mm happens to be hole + 0.15 mm. With a 0.25 mm hole it
  // would derive 0.4 mm, so the pad is stated whenever the hole is.
  const tsx = convertCircuitJsonToTscircuit(
    getBoardWithMinimums({
      min_trace_width: 0.1,
      min_via_hole_diameter: 0.25,
      min_via_pad_diameter: 0.3,
      min_board_edge_clearance: 0.2,
    }),
    { componentName: "ViaMinimumsBoard" },
  )
  expect(tsx).toContain('minViaHoleDiameter="0.25mm"')
  expect(tsx).toContain('minViaPadDiameter="0.3mm"')
  expect(tsx).not.toContain("minTraceWidth")
  expect(tsx).not.toContain("minBoardEdgeClearance")
})

test("a minimum that differs from core's default is requested", () => {
  const tsx = convertCircuitJsonToTscircuit(
    getBoardWithMinimums({
      min_trace_width: 0.09,
      min_via_hole_diameter: 0.2,
      min_via_pad_diameter: 0.3,
      min_via_edge_to_pad_edge_clearance: 0.1,
    }),
    { componentName: "RequestedMinimumsBoard" },
  )
  expect(tsx).toContain('minTraceWidth="0.09mm"')
  expect(tsx).toContain('minViaEdgeToPadEdgeClearance="0.1mm"')
  expect(tsx).not.toContain("minViaHoleDiameter")
  expect(tsx).not.toContain("minViaPadDiameter")
})
