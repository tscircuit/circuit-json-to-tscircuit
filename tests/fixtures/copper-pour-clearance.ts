import type { CircuitJson, Point } from "circuit-json"
import { runTscircuitCode } from "tscircuit"

export async function createCopperPourClearanceCircuit(): Promise<CircuitJson> {
  const rendered = await runTscircuitCode(`
    const footprint = <footprint>
      <smtpad shape="rect" width={0.6} height={0.6} pcbX={0} pcbY={0} portHints={["1"]} />
    </footprint>
    export default () => <board width={12} height={8}>
      <net name="GND" />
      <net name="SIGNAL" />
      <chip name="A" footprint={footprint} pcbX={-3} pcbY={0} connections={{pin1: "net.SIGNAL"}} />
      <chip name="B" footprint={footprint} pcbX={3} pcbY={0} connections={{pin1: "net.SIGNAL"}} />
      <chip name="G" footprint={footprint} pcbX={-3} pcbY={-2} connections={{pin1: "net.GND"}} />
    </board>
  `)
  const ground = rendered.find(
    (element) => element.type === "source_net" && element.name === "GND",
  )
  if (ground?.type !== "source_net")
    throw new Error("Expected the fixture GND net")

  const circuitJson = rendered
    .filter(
      (element) => element.type !== "pcb_trace" && element.type !== "pcb_via",
    )
    .map((element) =>
      element.type === "pcb_board"
        ? {
            ...element,
            min_trace_to_pad_edge_clearance: 0.3,
            min_different_net_trace_edge_to_trace_edge_clearance: 0.3,
            min_pad_edge_to_pad_edge_clearance: 0.3,
            min_board_edge_clearance: 0.4,
          }
        : element,
    )
  return [
    ...circuitJson,
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "pcb_copper_pour_definition",
      source_net_id: ground.source_net_id,
      layer: "top",
      covered_with_solder_mask: false,
      shape: "polygon",
      points: [
        { x: -5, y: -3 },
        { x: 5, y: -3 },
        { x: 5, y: 3 },
        { x: -5, y: 3 },
      ],
    },
  ]
}

export function hasCopperPourAt(
  circuitJson: CircuitJson,
  point: Point,
): boolean {
  return circuitJson.some(
    (element) =>
      element.type === "pcb_copper_pour" &&
      element.shape === "brep" &&
      isPointInsideRing(element.brep_shape.outer_ring.vertices, point) &&
      !element.brep_shape.inner_rings.some((ring) =>
        isPointInsideRing(ring.vertices, point),
      ),
  )
}

function isPointInsideRing(vertices: Point[], point: Point): boolean {
  let inside = false
  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const a = vertices[i]!
    const b = vertices[j]!
    if (
      a.y > point.y !== b.y > point.y &&
      point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x
    ) {
      inside = !inside
    }
  }
  return inside
}
