import { expect, test } from "bun:test"
import type { CircuitJson, Point } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves curved copper pour boundaries and cutouts", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_curved",
      name: "CURVED",
      member_source_group_ids: [],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_curved",
      center: { x: 0, y: 0 },
      width: 12,
      height: 12,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "pcb_copper_pour_curved",
      source_net_id: "source_net_curved",
      layer: "top",
      covered_with_solder_mask: false,
      shape: "brep",
      brep_shape: {
        outer_ring: {
          vertices: [
            { x: -4, y: 0, bulge: 1 },
            { x: 4, y: 0, bulge: 1 },
          ],
        },
        inner_rings: [
          {
            vertices: [
              { x: -1.5, y: 0, bulge: 1 },
              { x: 1.5, y: 0, bulge: 1 },
            ],
          },
        ],
      },
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "CurvedCopperPourBoard",
  })
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const copperPour = renderedCircuitJson.find(
    (element) => element.type === "pcb_copper_pour",
  )

  if (!copperPour || copperPour.shape !== "brep") {
    throw new Error("Expected a rendered curved BRep copper pour")
  }

  expect(copperPour.brep_shape.outer_ring.vertices.length).toBeGreaterThan(12)
  expectBounds(copperPour.brep_shape.outer_ring.vertices, 4)
  expect(copperPour.brep_shape.inner_rings).toHaveLength(1)
  const holeVertices = copperPour.brep_shape.inner_rings[0]!.vertices
  expect(holeVertices.length).toBeGreaterThan(12)
  expectBounds(holeVertices, 1.5)
})

const expectBounds = (points: Point[], radius: number): void => {
  const xs = points.map((point) => point.x)
  const ys = points.map((point) => point.y)
  expect(Math.min(...xs)).toBeCloseTo(-radius, 3)
  expect(Math.max(...xs)).toBeCloseTo(radius, 3)
  expect(Math.min(...ys)).toBeCloseTo(-radius, 3)
  expect(Math.max(...ys)).toBeCloseTo(radius, 3)
}
